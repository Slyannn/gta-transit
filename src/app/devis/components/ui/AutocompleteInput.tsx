import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, X } from "lucide-react";

interface AutocompleteInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  options?: string[];
  isFreeText?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export default function AutocompleteInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  options = [],
  isFreeText = false,
  disabled = false,
  error = false,
}: AutocompleteInputProps) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
      return;
    }
    if (options.length === 0 && !isFreeText) {
      setFilteredLocations([]);
      return;
    }

    // Filtrage dynamique
    if (query.length > 0) {
      const filtered = options.filter((loc) =>
        loc.toLowerCase().includes(query.toLowerCase())
      );
      // Limite le nombre de résultats pour éviter une liste trop longue
      setFilteredLocations(filtered.slice(0, 50));
    } else {
      // Si vide, on montre les premiers éléments
      setFilteredLocations(options.slice(0, 50));
    }
  }, [query, options, isFreeText, disabled]);

  // Update query when value changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

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

  const handleSelect = (loc: string) => {
    setQuery(loc);
    onChange(loc);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange(e.target.value);
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

        {/* Bouton Chevron pour simuler un Select */}
        <div
          className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          } ${error ? "text-red-400" : "text-gray-400 hover:text-gray-600"}`}
          onClick={toggleDropdown}
        >
          {query && !disabled && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setQuery("");
                onChange("");
              }}
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
        </div>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}

      <AnimatePresence>
        {isOpen && (filteredLocations.length > 0 || isFreeText) && (
          <motion.ul
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 w-full bg-white mt-1 rounded-lg shadow-xl border border-gray-100 max-h-60 overflow-y-auto"
          >
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(loc)}
                  className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-0 flex items-center gap-2"
                >
                  <MapPin size={14} className="text-gray-400 shrink-0" />
                  {loc}
                </li>
              ))
            ) : (
              isFreeText &&
              query.length > 0 && (
                <li className="px-4 py-3 text-sm text-gray-500 italic">
                  Appuyez sur Entrée ou continuez à taper pour "{query}"
                </li>
              )
            )}

            {filteredLocations.length === 0 && !isFreeText && (
              <li className="px-4 py-3 text-sm text-gray-400 italic">
                Aucun résultat trouvé
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

