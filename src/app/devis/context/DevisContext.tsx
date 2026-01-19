"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import { AIRPORTS_BY_COUNTRY, SEAPORTS_BY_COUNTRY } from "../locations";
import { DevisContextType, DevisFormData, FormErrors } from "../types";

const DevisContext = createContext<DevisContextType | null>(null);

// Champs requis par défaut (Maritime, Aérien)
const REQUIRED_FIELDS_DEFAULT: Record<number, string[]> = {
  2: ["paysDepart", "depart", "dateDepart", "paysArrivee", "arrivee", "dateArrivee"],
  3: ["natureMarchandise", "description", "typeContainer", "nbColis", "valeur"],
  4: ["objectif"],
  5: ["nom", "prenom", "email", "adresse", "pays", "telephone"]
};

// Champs requis pour Déménagement et Express (national)
const REQUIRED_FIELDS_NATIONAL: string[] = ["depart", "arrivee", "dateArrivee"];

// Champs requis pour Déménagement et Express (international)
const REQUIRED_FIELDS_INTERNATIONAL: string[] = ["paysDepart", "depart", "paysArrivee", "arrivee", "dateArrivee"];

// Logistique n'a pas de step 2

interface DevisProviderProps {
  children: ReactNode;
  initialMode?: string; // Mode pré-sélectionné depuis l'URL (ex: /devis?mode=express)
}

export function DevisProvider({ children, initialMode }: DevisProviderProps) {
  // Si un mode est fourni via l'URL, on démarre à l'étape 2 (ou 3 pour Logistique)
  const getInitialStep = () => {
    if (initialMode) {
      return initialMode === "Logistique" ? 3 : 2;
    }
    return 1;
  };

  const [step, setStep] = useState(getInitialStep);
  const [formData, setFormData] = useState<Partial<DevisFormData>>({ 
    modeTransport: initialMode || "Maritime" 
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // --- LOGIQUE METIER ---

  const handleChange = (name: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Reset error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateStep = (currentStep: number) => {
    let fields: string[] = [];
    const mode = formData.modeTransport;

    // Step 2 validation depends on mode
    if (currentStep === 2) {
      if (mode === "Logistique") {
        // Logistique skip step 2 entirely
        fields = [];
      } else if (mode === "Déménagement" || mode === "Express") {
        // Déménagement et Express: check typeTrajet
        if (formData.typeTrajet === "national") {
          fields = REQUIRED_FIELDS_NATIONAL;
        } else {
          fields = REQUIRED_FIELDS_INTERNATIONAL;
        }
      } else {
        // Maritime, Aérien: full fields
        fields = REQUIRED_FIELDS_DEFAULT[currentStep] || [];
      }
    } else if (currentStep === 3) {
      // Special handling for Déménagement in Step 3
      if (mode === "Déménagement") {
        fields = []; // No required fields for step 3 if Déménagement (fully optional)
      } else {
        fields = REQUIRED_FIELDS_DEFAULT[currentStep] || [];
      }
    } else {
      fields = REQUIRED_FIELDS_DEFAULT[currentStep] || [];
    }

    const newErrors: FormErrors = {};
    let isValid = true;

    fields.forEach((field) => {
      // @ts-ignore
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

  const nextStep = (overrideMode?: string) => {
    if (validateStep(step)) {
      setErrors({});
      
      // Use overrideMode if provided (for immediate mode selection), otherwise use formData
      const currentMode = overrideMode || formData.modeTransport;
      
      // Logistique: skip step 2 (Trajet) - go directly from step 1 to step 3
      if (step === 1 && currentMode === "Logistique") {
        setStep(3);
      } else {
        setStep((prev) => prev + 1);
      }
    }
  };

  const prevStep = () => {
    // Logistique: skip step 2 when going back from step 3
    if (step === 3 && formData.modeTransport === "Logistique") {
      setStep(1);
    } else {
      setStep((prev) => prev - 1);
    }
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
