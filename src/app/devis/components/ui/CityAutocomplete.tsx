"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, X, Loader2 } from "lucide-react";

interface City {
  nom: string;
  code: string;
  codesPostaux: string[];
  departement?: {
    code: string;
    nom: string;
  };
}

interface CityAutocompleteProps {
  label?: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
}

export default function CityAutocomplete({
  label,
  name,
  value,
  onChange,
  placeholder = "Ex: Paris, Lyon, Marseille...",
  disabled = false,
  error = false,
}: CityAutocompleteProps) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch cities from API
  const fetchCities = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setCities([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(searchQuery)}&fields=nom,code,codesPostaux,departement&boost=population&limit=15`
      );
      
      if (response.ok) {
        const data: City[] = await response.json();
        setCities(data);
      } else {
        setCities([]);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche de villes:", error);
      setCities([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

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
        fetchCities(query);
      }, 300);
    } else {
      setCities([]);
    }

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query, disabled, fetchCities]);

  // Update query when value changes externally
  useEffect(() => {
    setQuery(value);
  }, [value]);

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
  }, [wrapperRef]);

  const handleSelect = (city: City) => {
    const displayValue = `${city.nom} (${city.departement?.code || city.codesPostaux[0]})`;
    setQuery(displayValue);
    onChange(displayValue);
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
    } else {
      setIsOpen(false);
    }
  };

  const clearInput = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuery("");
    onChange("");
    setCities([]);
  };

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
          onFocus={() => !disabled && setIsOpen(true)}
          placeholder={placeholder}
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
        {isOpen && (cities.length > 0 || query.length >= 2) && (
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
            ) : cities.length > 0 ? (
              cities.map((city) => (
                <li
                  key={city.code}
                  onClick={() => handleSelect(city)}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-0 flex items-center gap-2"
                >
                  <MapPin size={14} className="text-accent shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-medium">{city.nom}</span>
                    <span className="text-xs text-gray-400">
                      {city.departement?.nom || ""} ({city.codesPostaux[0]})
                    </span>
                  </div>
                </li>
              ))
            ) : query.length >= 2 && !isLoading ? (
              <li className="px-4 py-3 text-sm text-gray-400 italic">
                Aucune ville trouvée pour "{query}"
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

