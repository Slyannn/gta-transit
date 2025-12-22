"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { AIRPORTS_BY_COUNTRY, SEAPORTS_BY_COUNTRY } from "../locations";
import { DevisContextType, DevisFormData, FormErrors } from "../types";

const DevisContext = createContext<DevisContextType | null>(null);

const REQUIRED_FIELDS: Record<number, string[]> = {
  2: ["paysDepart", "depart", "dateDepart", "paysArrivee", "arrivee", "dateArrivee"],
  3: ["natureMarchandise", "description", "typeContainer", "nbColis", "valeur"],
  4: ["objectif"],
  5: ["nom", "prenom", "email", "adresse", "pays", "telephone"]
};

export function DevisProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<DevisFormData>>({ modeTransport: "Maritime" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- LOGIQUE METIER ---

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Reset error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateStep = (currentStep: number) => {
    const fields = REQUIRED_FIELDS[currentStep] || [];
    const newErrors: FormErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      // @ts-ignore - Accès dynamique typé mais TS rale parfois sur les Partials
      if (!formData[field]) {
        newErrors[field] = true;
        isValid = false;
      }
    });

    if (!isValid) {
      setErrors(newErrors);
      let message = "Veuillez remplir tous les champs obligatoires.";
      if (currentStep === 2) message = "Veuillez remplir tous les champs obligatoires du trajet.";
      if (currentStep === 3) message = "Informations manquantes sur la marchandise.";
      if (currentStep === 4) message = "Veuillez sélectionner un objectif.";
      if (currentStep === 5) message = "Vos coordonnées sont requises.";

      toast.error(message, { description: "Les champs en rouge sont requis." });
    }

    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStep((prev) => prev - 1);
  };

  const submitForm = () => {
    if (!validateStep(5)) return;

    setErrors({});
    setIsSubmitting(true);
    
    // Simulation API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.success("Demande de devis envoyée avec succès !");
    }, 2000);
  };

  // --- HELPERS LOCATION ---

  const getAvailableCountries = (mode?: string) => {
    const targetMode = mode || formData.modeTransport;
    if (targetMode === "Maritime") return Object.keys(SEAPORTS_BY_COUNTRY);
    if (targetMode === "Aérien") return Object.keys(AIRPORTS_BY_COUNTRY);
    
    // Fallback : union de tous les pays
    const maritime = Object.keys(SEAPORTS_BY_COUNTRY);
    const aerien = Object.keys(AIRPORTS_BY_COUNTRY);
    return Array.from(new Set([...maritime, ...aerien])).sort();
  };

  const getLocationsByCountry = (country: string, mode: string) => {
    if (!country) return [];
    // Recherche insensible à la casse
    const db = mode === "Maritime" ? SEAPORTS_BY_COUNTRY : AIRPORTS_BY_COUNTRY;
    const key = Object.keys(db).find(k => k.toLowerCase() === country.toLowerCase());
    
    return key ? db[key] : [];
  };

  const getAvailableLocations = (type: 'depart' | 'arrivee') => {
    const countryField = type === 'depart' ? 'paysDepart' : 'paysArrivee';
    // @ts-ignore
    const country = formData[countryField];
    const mode = formData.modeTransport;

    if (country && (mode === "Maritime" || mode === "Aérien")) {
      const locations = getLocationsByCountry(country, mode);
      if (locations.length > 0) return locations;
    }

    // Fallback global si pas de pays (ou optionnel selon votre choix UX)
    if (mode === "Maritime") return Object.values(SEAPORTS_BY_COUNTRY).flat();
    if (mode === "Aérien") return Object.values(AIRPORTS_BY_COUNTRY).flat();

    return [];
  };

  return (
    <DevisContext.Provider
      value={{
        step,
        formData,
        errors,
        isSubmitting,
        isSuccess,
        handleChange,
        nextStep,
        prevStep,
        submitForm,
        getAvailableCountries,
        getAvailableLocations,
      }}
    >
      {children}
    </DevisContext.Provider>
  );
}

// Hook personnalisé pour consommer le contexte
export const useDevis = () => {
  const context = useContext(DevisContext);
  if (!context) {
    throw new Error("useDevis doit être utilisé à l'intérieur d'un DevisProvider");
  }
  return context;
};

