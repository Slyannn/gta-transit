"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, X, Loader2, Plane, Ship } from "lucide-react";

interface LocationResult {
  name: string;
  country: string;
}

interface LocationAutocompleteProps {
  label?: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type: "airports" | "seaports";
  country?: string; // Si fourni, filtre par pays
  disabled?: boolean;
  error?: boolean;
}

export default function LocationAutocomplete({
  label,
  name,
  value,
  onChange,
  placeholder,
  type,
  country,
  disabled = false,
  error = false,
}: LocationAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<LocationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch locations from API
  const fetchLocations = useCallback(async (searchQuery: string) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        q: searchQuery,
        type,
        limit: "15",
      });
      
      if (country) {
        params.set("country", country);
      }

      const response = await fetch(`/api/locations?${params.toString()}`);
      
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [type, country]);

  // Load initial results when country changes or on focus
  const loadInitialResults = useCallback(async () => {
    if (!country) return;
    
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        type,
        country,
        limit: "20",
      });

      const response = await fetch(`/api/locations?${params.toString()}`);
      
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsLoading(false);
    }
  }, [type, country]);

  // Debounced search
  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (query.length >= 2) {
      debounceRef.current = setTimeout(() => {
        fetchLocations(query);
      }, 300);
    } else if (query.length === 0 && country) {
      // Load all results for the country when query is empty
      loadInitialResults();
    }

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, disabled, fetchLocations, loadInitialResults, country]);

  // Update query when value changes externally
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Load initial results when country changes
  useEffect(() => {
    if (country && !disabled) {
      loadInitialResults();
    }
  }, [country, disabled, loadInitialResults]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (location: LocationResult) => {
    setQuery(location.name);
    onChange(location.name);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
    onChange(newValue);
    setIsOpen(true);
  };

  const toggleDropdown = () => {
    if (disabled) return;
    if (!isOpen) {
      setIsOpen(true);
      inputRef.current?.focus();
      if (results.length === 0 && country) {
        loadInitialResults();
      }
    } else {
      setIsOpen(false);
    }
  };

  const clearInput = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuery("");
    onChange("");
    setResults([]);
  };

  const Icon = type === "airports" ? Plane : Ship;

  return (
    <div
      className={`relative ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      ref={wrapperRef}
    >
      {label && (
        <label
          className={`text-xs font-medium mb-1 block ${
            error ? "text-red-500" : "text-gray-500"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          name={name}
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            if (!disabled) {
              setIsOpen(true);
              if (results.length === 0 && country) {
                loadInitialResults();
              }
            }
          }}
          placeholder={
            disabled ? "Veuillez sélectionner un pays d'abord" : placeholder
          }
          className={`w-full p-3 pr-10 border rounded-lg outline-none text-gray-900 bg-white transition-all
            ${
              disabled
                ? "bg-gray-100 cursor-not-allowed border-gray-200"
                : "cursor-text"
            }
            ${
              error
                ? "border-red-500 ring-1 ring-red-500 bg-red-50"
                : "border-gray-200 focus:ring-2 focus:ring-accent"
            }
          `}
          autoComplete="off"
          disabled={disabled}
        />

        {/* Bouton Chevron / Loading */}
        <div
          className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          } ${error ? "text-red-400" : "text-gray-400 hover:text-gray-600"}`}
          onClick={toggleDropdown}
        >
          {isLoading ? (
            <Loader2 size={18} className="animate-spin text-accent" />
          ) : (
            <>
              {query && !disabled && (
                <button
                  type="button"
                  onClick={clearInput}
                  className="mr-2 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              )}
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </>
          )}
        </div>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}

      <AnimatePresence>
        {isOpen && (results.length > 0 || query.length >= 2 || (country && !isLoading)) && (
          <motion.ul
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 w-full bg-white mt-1 rounded-lg shadow-xl border border-gray-100 max-h-60 overflow-y-auto"
          >
            {isLoading ? (
              <li className="px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
                <Loader2 size={14} className="animate-spin" />
                Recherche en cours...
              </li>
            ) : results.length > 0 ? (
              results.map((location, index) => (
                <li
                  key={`${location.country}-${location.name}-${index}`}
                  onClick={() => handleSelect(location)}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-0 flex items-center gap-2"
                >
                  <Icon size={14} className="text-accent shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium">{location.name}</span>
                    {!country && (
                      <span className="text-xs text-gray-400">{location.country}</span>
                    )}
                  </div>
                </li>
              ))
            ) : query.length >= 2 ? (
              <li className="px-4 py-3 text-sm text-gray-400 italic">
                Aucun {type === "airports" ? "aéroport" : "port"} trouvé pour "{query}"
              </li>
            ) : (
              <li className="px-4 py-3 text-sm text-gray-400 italic">
                Tapez au moins 2 caractères...
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

