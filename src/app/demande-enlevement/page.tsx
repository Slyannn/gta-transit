"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Ship, Plane, Truck, Box, Package, MapPin, User, Phone, Mail, 
  Calendar, Clock, Home, Building2, Store, Warehouse,
  Plus, Minus, Check, AlertCircle, FileText, Send, Loader2
} from "lucide-react";
import { toast } from "sonner";

// Types
interface FormData {
  // Section 1 - Type de prestation
  typePrestation: string;
  
  // Section 2 - Enlèvement
  expediteurNom: string;
  expediteurTelephone: string;
  expediteurEmail: string;
  dateEnlevement: string;
  heureEnlevement: string;
  typeLieuEnlevement: string;
  adresseEnlevement: string;
  villeEnlevement: string;
  codePostalEnlevement: string;
  communeEnlevement: string;
  paysEnlevement: string;
  
  // Section 3 - Livraison
  destinataireNom: string;
  destinataireTelephone: string;
  dateExpedition: string;
  villeDestination: string;
  codePostalDestination: string;
  paysDestination: string;
  aeroportDestination: string;
  portDestination: string;
  typeLieuLivraison: string;
  adresseLivraison: string;
  
  // Section 4 - Détail des colis
  typesColis: string[];
  autreTypeColis: string;
  natureEnvoi: string;
  nombreColis: string;
  poidsTotal: string;
  dimensions: string;
  
  // Section 5 - Observations
  observations: string[];
  autreObservation: string;
  
  // Section 6 - Validation
  certificationExacte: boolean;
}

const initialFormData: FormData = {
  typePrestation: "",
  expediteurNom: "",
  expediteurTelephone: "",
  expediteurEmail: "",
  dateEnlevement: "",
  heureEnlevement: "",
  typeLieuEnlevement: "",
  adresseEnlevement: "",
  villeEnlevement: "",
  codePostalEnlevement: "",
  communeEnlevement: "",
  paysEnlevement: "France",
  destinataireNom: "",
  destinataireTelephone: "",
  dateExpedition: "",
  villeDestination: "",
  codePostalDestination: "",
  paysDestination: "",
  aeroportDestination: "",
  portDestination: "",
  typeLieuLivraison: "",
  adresseLivraison: "",
  typesColis: [],
  autreTypeColis: "",
  natureEnvoi: "",
  nombreColis: "1",
  poidsTotal: "",
  dimensions: "",
  observations: [],
  autreObservation: "",
  certificationExacte: false,
};

const TYPES_PRESTATION = [
  { value: "groupage-maritime", label: "Groupage Maritime", icon: Ship },
  { value: "groupage-aerien", label: "Groupage Aérien", icon: Plane },
  { value: "demenagement", label: "Déménagement", icon: Truck },
  { value: "transport-express", label: "Transport Express", icon: Package },
  { value: "logistique", label: "Logistique & Entreposage", icon: Box },
];

const TYPES_LIEU = [
  { value: "domicile", label: "Domicile", icon: Home },
  { value: "entrepot", label: "Entrepôt", icon: Warehouse },
  { value: "magasin", label: "Magasin", icon: Store },
  { value: "commerce", label: "Commerce", icon: Store },
  { value: "boutique", label: "Boutique", icon: Building2 },
];

const TYPES_COLIS = [
  "Sac", "Valise", "Fût", "Cantine", "Carton", "Caisse", "Palette", "Vrac"
];

const OBSERVATIONS_OPTIONS = [
  "Aucun",
  "Accès difficile",
  "Étage avec ascenseur",
  "Étage sans ascenseur",
  "Niveau d'étage à préciser",
  "Marchandise fragile",
  "Marchandise volumineuse",
  "Marchandise lourde",
  "Manutention spéciale",
  "Horaires imposés",
];

// City Autocomplete Component (simplified)
function CityAutocompleteField({ 
  label, 
  value, 
  onChange, 
  onCitySelect,
  placeholder,
  error 
}: { 
  label: string; 
  value: string; 
  onChange: (val: string) => void;
  onCitySelect?: (city: any) => void;
  placeholder?: string;
  error?: boolean;
}) {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchCities = useCallback(async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://geo.api.gouv.fr/communes?nom=${encodeURIComponent(query)}&fields=nom,code,codesPostaux,departement&boost=population&limit=8`
      );
      if (res.ok) {
        const data = await res.json();
        setSuggestions(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    fetchCities(val);
    setShowSuggestions(true);
  };

  const handleSelect = (city: any) => {
    onChange(city.nom);
    if (onCitySelect) {
      onCitySelect(city);
    }
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-slate-800 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
          error ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
        }`}
      />
      {isLoading && (
        <div className="absolute right-3 top-10">
          <Loader2 size={16} className="animate-spin text-accent" />
        </div>
      )}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white mt-1 rounded-lg shadow-xl border border-gray-100 max-h-48 overflow-y-auto">
          {suggestions.map((city) => (
            <li
              key={city.code}
              onMouseDown={() => handleSelect(city)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm flex items-center gap-2"
            >
              <MapPin size={14} className="text-accent" />
              <span>{city.nom}</span>
              <span className="text-gray-400 text-xs">
                ({city.departement?.nom || city.codesPostaux?.[0]})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Address Autocomplete Component with API Adresse
function AddressAutocompleteField({
  label,
  value,
  onChange,
  onAddressSelect,
  placeholder,
  error,
  required = false
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  onAddressSelect?: (address: any) => void;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
}) {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchAddresses = useCallback(async (query: string) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=8`
      );
      if (res.ok) {
        const data = await res.json();
        setSuggestions(data.features || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);
    fetchAddresses(val);
    setShowSuggestions(true);
  };

  const handleSelect = (address: any) => {
    const properties = address.properties;
    onChange(properties.name || properties.label);
    if (onAddressSelect) {
      onAddressSelect({
        fullAddress: properties.label,
        street: properties.name,
        postcode: properties.postcode,
        city: properties.city,
        context: properties.context,
        citycode: properties.citycode,
      });
    }
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-semibold text-slate-800 mb-1">
        {label} {required && "*"}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder={placeholder}
        className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
          error ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
        }`}
      />
      {isLoading && (
        <div className="absolute right-3 top-10">
          <Loader2 size={16} className="animate-spin text-accent" />
        </div>
      )}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white mt-1 rounded-lg shadow-xl border border-gray-100 max-h-64 overflow-y-auto">
          {suggestions.map((address, idx) => (
            <li
              key={idx}
              onMouseDown={() => handleSelect(address)}
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm border-b last:border-b-0"
            >
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-accent mt-1 shrink-0" />
                <div>
                  <div className="font-medium text-slate-900">
                    {address.properties.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {address.properties.postcode} {address.properties.city}
                    <span className="text-gray-400 ml-1">• {address.properties.context}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function DemandeEnlevementPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (name: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const toggleArrayItem = (field: "typesColis" | "observations", item: string) => {
    setFormData((prev) => {
      const arr = prev[field] as string[];
      if (arr.includes(item)) {
        return { ...prev, [field]: arr.filter((i) => i !== item) };
      } else {
        return { ...prev, [field]: [...arr, item] };
      }
    });
    // Clear error for this field when user interacts with it
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleCitySelectEnlevement = (city: any) => {
    setFormData((prev) => ({
      ...prev,
      villeEnlevement: city.nom,
      codePostalEnlevement: city.codesPostaux?.[0] || "",
      communeEnlevement: city.departement?.nom || "",
    }));
  };

  const handleAddressSelectEnlevement = (address: any) => {
    // Extract department name from context (format: "77, Seine-et-Marne, Île-de-France")
    const departmentName = address.context?.split(', ')[1] || "";
    
    setFormData((prev) => ({
      ...prev,
      adresseEnlevement: address.street || address.fullAddress,
      villeEnlevement: address.city,
      codePostalEnlevement: address.postcode,
      communeEnlevement: departmentName,
    }));
  };

  const validateForm = () => {
    const required: (keyof FormData)[] = [
      "typePrestation",
      "expediteurNom",
      "expediteurTelephone",
      "expediteurEmail",
      "dateEnlevement",
      "typeLieuEnlevement",
      "adresseEnlevement",
      "villeEnlevement",
      "destinataireNom",
      "destinataireTelephone",
      "typeLieuLivraison",
      "adresseLivraison",
      "villeDestination",
      "paysDestination",
      "natureEnvoi",
      "nombreColis",
      "observations",
    ];

    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    required.forEach((field) => {
      const value = formData[field];
      // Check for empty strings, null, undefined, or empty arrays
      if (!value || (typeof value === 'string' && value.trim() === '') || (Array.isArray(value) && value.length === 0)) {
        newErrors[field] = true;
        isValid = false;
      }
    });

    if (!formData.certificationExacte) {
      newErrors.certificationExacte = true;
      isValid = false;
    }

    setErrors(newErrors);
    
    if (!isValid) {
      toast.error("Veuillez remplir tous les champs obligatoires marqués d'un *");
      // Scroll to first error
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';
      const response = await fetch(`/api/send-enlevement`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.success("Demande d'enlèvement envoyée avec succès ! Nous vous contacterons rapidement.");
      } else {
        throw new Error(result.error || "Échec de l'envoi de l'email");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la demande d'enlèvement:", error);
      setIsSubmitting(false);
      toast.error("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.", {
        description: "Email: gta_transitaire@yahoo.com | Tél: +33 6 07 81 13 08"
      });
    }
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Demande Envoyée !
          </h2>
          <p className="text-gray-600 mb-8">
            Merci <strong>{formData.expediteurNom}</strong>, votre demande d'enlèvement a bien été reçue. 
            Notre équipe logistique vous contactera rapidement pour confirmer le rendez-vous 
            à l'adresse <strong>{formData.expediteurEmail}</strong>.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            alt="Demande d'enlèvement"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Demande d'Enlèvement & Livraison
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Colis destinés à l'exportation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Introduction */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-primary shrink-0 mt-1" size={24} />
              <div>
                <h2 className="font-bold text-primary mb-2">
                  Merci de compléter ce formulaire de demande d'enlèvement et de livraison.
                </h2>
                <p className="text-gray-600 text-sm">
                  Les informations fournies permettront à notre équipe logistique de vous contacter 
                  pour confirmation de rendez-vous et vous proposer une prise en charge rapide 
                  et adaptée à votre envoi.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* SECTION 1 - Type de prestation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-3">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Type de Prestation
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {TYPES_PRESTATION.map((type) => (
                  <label key={type.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="typePrestation"
                      value={type.value}
                      checked={formData.typePrestation === type.value}
                      onChange={(e) => handleChange("typePrestation", e.target.value)}
                      className="peer sr-only"
                    />
                    <div className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all text-center
                      ${errors.typePrestation ? "border-red-300 bg-red-50" : "border-gray-200"}
                      hover:border-accent/50 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white`}
                    >
                      <type.icon size={28} className="mb-2" />
                      <span className="text-xs font-medium">{type.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* SECTION 2 - Enlèvement */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-3">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Enlèvement - Expéditeur / Fournisseur
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Nom & Prénom / Professionnel *
                  </label>
                  <input
                    type="text"
                    value={formData.expediteurNom}
                    onChange={(e) => handleChange("expediteurNom", e.target.value)}
                    placeholder="Ex: Jean Dupont ou Société XYZ"
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.expediteurNom ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={formData.expediteurTelephone}
                    onChange={(e) => handleChange("expediteurTelephone", e.target.value)}
                    placeholder="Ex: 06 12 34 56 78"
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.expediteurTelephone ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.expediteurEmail}
                    onChange={(e) => handleChange("expediteurEmail", e.target.value)}
                    placeholder="Ex: contact@exemple.com"
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.expediteurEmail ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Date d'enlèvement */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Date d'enlèvement approximative *
                  </label>
                  <input
                    type="date"
                    value={formData.dateEnlevement}
                    onChange={(e) => handleChange("dateEnlevement", e.target.value)}
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 ${
                      errors.dateEnlevement ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Heure d'enlèvement */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Heure d'enlèvement souhaitée
                  </label>
                  <input
                    type="time"
                    value={formData.heureEnlevement}
                    onChange={(e) => handleChange("heureEnlevement", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                {/* Type de lieu */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Type de lieu d'enlèvement *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {TYPES_LIEU.map((lieu) => (
                      <label key={lieu.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="typeLieuEnlevement"
                          value={lieu.value}
                          checked={formData.typeLieuEnlevement === lieu.value}
                          onChange={(e) => handleChange("typeLieuEnlevement", e.target.value)}
                          className="peer sr-only"
                        />
                        <div className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg transition-all
                          ${errors.typeLieuEnlevement ? "border-red-300" : "border-gray-200"}
                          hover:border-accent/50 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white`}
                        >
                          <lieu.icon size={18} />
                          <span className="text-sm font-medium">{lieu.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Adresse complète avec autocomplétion */}
                <div className="md:col-span-2">
                  <AddressAutocompleteField
                    label="Adresse complète d'enlèvement"
                    value={formData.adresseEnlevement}
                    onChange={(val) => handleChange("adresseEnlevement", val)}
                    onAddressSelect={handleAddressSelectEnlevement}
                    placeholder="N°, nom de rue, allée, boulevard, avenue, lieu-dit..."
                    error={errors.adresseEnlevement}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin size={12} />
                    Les champs ville, code postal et département seront remplis automatiquement
                  </p>
                </div>

                {/* Ville */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1 flex items-center gap-1">
                    Ville *
                    <span className="text-xs text-gray-400 font-normal">(auto-remplie)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.villeEnlevement}
                    onChange={(e) => handleChange("villeEnlevement", e.target.value)}
                    placeholder="Auto-remplie depuis l'adresse"
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.villeEnlevement ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent bg-gray-50"
                    }`}
                  />
                </div>

                {/* Code postal */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1 flex items-center gap-1">
                    Code postal
                    <span className="text-xs text-gray-400 font-normal">(auto-rempli)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.codePostalEnlevement}
                    onChange={(e) => handleChange("codePostalEnlevement", e.target.value)}
                    placeholder="Auto-rempli depuis l'adresse"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent bg-gray-50 text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                {/* Commune/Département */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1 flex items-center gap-1">
                    Département
                    <span className="text-xs text-gray-400 font-normal">(auto-rempli)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.communeEnlevement}
                    onChange={(e) => handleChange("communeEnlevement", e.target.value)}
                    placeholder="Auto-rempli depuis l'adresse"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent bg-gray-50 text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                {/* Pays */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Pays d'enlèvement
                  </label>
                  <input
                    type="text"
                    value={formData.paysEnlevement}
                    disabled
                    className="w-full p-3 border border-gray-200 rounded-lg bg-gray-100 text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 3 - Livraison */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-3">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Livraison - Destinataire / Client
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nom destinataire */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Nom & Prénom / Professionnel *
                  </label>
                  <input
                    type="text"
                    value={formData.destinataireNom}
                    onChange={(e) => handleChange("destinataireNom", e.target.value)}
                    placeholder="Ex: Marie Martin ou Société ABC"
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.destinataireNom ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Téléphone destinataire */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={formData.destinataireTelephone}
                    onChange={(e) => handleChange("destinataireTelephone", e.target.value)}
                    placeholder="Ex: +237 6 XX XX XX XX"
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.destinataireTelephone ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Date d'expédition */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Date d'expédition approximative
                  </label>
                  <input
                    type="date"
                    value={formData.dateExpedition}
                    onChange={(e) => handleChange("dateExpedition", e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900"
                  />
                </div>

                {/* Placeholder vide pour alignement */}
                <div></div>

                {/* Type de lieu livraison */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Type de lieu de livraison *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {TYPES_LIEU.map((lieu) => (
                      <label key={lieu.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="typeLieuLivraison"
                          value={lieu.value}
                          checked={formData.typeLieuLivraison === lieu.value}
                          onChange={(e) => handleChange("typeLieuLivraison", e.target.value)}
                          className="peer sr-only"
                        />
                        <div className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg transition-all
                          ${errors.typeLieuLivraison ? "border-red-300 bg-red-50" : "border-gray-200"}
                          hover:border-accent/50 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white`}
                        >
                          <lieu.icon size={18} />
                          <span className="text-sm font-medium">{lieu.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Adresse complète */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Adresse complète de livraison *
                  </label>
                  <input
                    type="text"
                    value={formData.adresseLivraison}
                    onChange={(e) => handleChange("adresseLivraison", e.target.value)}
                    placeholder="N°, nom de rue, allée, boulevard, avenue, lieu-dit..."
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.adresseLivraison ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Ville destination */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Ville de destination *
                  </label>
                  <input
                    type="text"
                    value={formData.villeDestination}
                    onChange={(e) => handleChange("villeDestination", e.target.value)}
                    placeholder="Ex: Douala, Abidjan, Yaoundé..."
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.villeDestination ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Code postal destination */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Code postal (si applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.codePostalDestination}
                    onChange={(e) => handleChange("codePostalDestination", e.target.value)}
                    placeholder="Ex: BP 1234"
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                {/* Pays destination */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Pays de destination *
                  </label>
                  <input
                    type="text"
                    value={formData.paysDestination}
                    onChange={(e) => handleChange("paysDestination", e.target.value)}
                    placeholder="Ex: Cameroun, Côte d'Ivoire..."
                    className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 ${
                      errors.paysDestination ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                    }`}
                  />
                </div>

                {/* Placeholder vide pour alignement si pas d'aéroport/port */}
                {(formData.typePrestation !== "groupage-aerien" && formData.typePrestation !== "groupage-maritime") && (
                  <div></div>
                )}

                {/* Aéroport destination (conditionnel) */}
                {(formData.typePrestation === "groupage-aerien") && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Aéroport de destination
                    </label>
                    <input
                      type="text"
                      value={formData.aeroportDestination}
                      onChange={(e) => handleChange("aeroportDestination", e.target.value)}
                      placeholder="Ex: Aéroport International de Douala"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                )}

                {/* Port destination (conditionnel) */}
                {(formData.typePrestation === "groupage-maritime") && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Port de destination
                    </label>
                    <input
                      type="text"
                      value={formData.portDestination}
                      onChange={(e) => handleChange("portDestination", e.target.value)}
                      placeholder="Ex: Port de Douala"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* SECTION 4 - Détail des colis */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-3">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Détail des Colis
              </h3>
              
              <div className="space-y-6">
                {/* Types de colis */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Type(s) d'emballage
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TYPES_COLIS.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleArrayItem("typesColis", type)}
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                          formData.typesColis.includes(type)
                            ? "border-accent bg-accent text-white"
                            : "border-gray-200 hover:border-accent/50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                    <input
                      type="text"
                      value={formData.autreTypeColis}
                      onChange={(e) => handleChange("autreTypeColis", e.target.value)}
                      placeholder="Autre..."
                      className="px-4 py-2 border-2 border-gray-200 rounded-full text-sm w-32 focus:border-accent outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nature envoi */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Nature ou désignation de l'envoi *
                    </label>
                    <textarea
                      value={formData.natureEnvoi}
                      onChange={(e) => handleChange("natureEnvoi", e.target.value)}
                      placeholder="Ex: Effets personnels, vêtements, électroménager..."
                      rows={2}
                      className={`w-full p-3 border rounded-lg outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none ${
                        errors.natureEnvoi ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                      }`}
                    />
                  </div>

                  {/* Nombre de colis */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Nombre de colis *
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleChange("nombreColis", String(Math.max(1, parseInt(formData.nombreColis) - 1)))}
                        className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus size={18} />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={formData.nombreColis}
                        onChange={(e) => handleChange("nombreColis", e.target.value)}
                        className={`w-20 p-3 border rounded-lg outline-none text-center text-slate-900 ${
                          errors.nombreColis ? "border-red-500 bg-red-50" : "border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => handleChange("nombreColis", String(parseInt(formData.nombreColis) + 1))}
                        className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Poids total */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Poids total (kg)
                    </label>
                    <input
                      type="text"
                      value={formData.poidsTotal}
                      onChange={(e) => handleChange("poidsTotal", e.target.value)}
                      placeholder="Ex: 150"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900 placeholder:text-slate-400"
                    />
                  </div>

                  {/* Dimensions */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Dimensions (L x l x H)
                    </label>
                    <input
                      type="text"
                      value={formData.dimensions}
                      onChange={(e) => handleChange("dimensions", e.target.value)}
                      placeholder="Ex: 120 x 80 x 60 cm"
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900 placeholder:text-slate-400"
                    />
                    <p className="text-xs text-gray-400 mt-1">Ex: 120 x 80 x 60 cm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 5 - Observations */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-3">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Observations / Instructions Particulières
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Sélectionnez une ou plusieurs options *
                  </label>
                  <div className={`flex flex-wrap gap-2 p-4 border-2 rounded-lg ${
                    errors.observations ? "border-red-300 bg-red-50" : "border-gray-100"
                  }`}>
                    {OBSERVATIONS_OPTIONS.map((obs) => (
                      <button
                        key={obs}
                        type="button"
                        onClick={() => toggleArrayItem("observations", obs)}
                        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                          formData.observations.includes(obs)
                            ? "border-accent bg-accent text-white"
                            : "border-gray-200 hover:border-accent/50"
                        }`}
                      >
                        {obs}
                      </button>
                    ))}
                  </div>
                  {errors.observations && (
                    <p className="text-red-500 text-xs mt-2">Veuillez sélectionner au moins une option</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Commentaires supplémentaires
                  </label>
                  <textarea
                    value={formData.autreObservation}
                    onChange={(e) => handleChange("autreObservation", e.target.value)}
                    placeholder="Autres observations ou instructions particulières..."
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-900 placeholder:text-slate-400 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 6 - Validation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b pb-3">
                <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Validation Client
              </h3>
              
              <div className="space-y-4">
                <label className={`flex items-start gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  formData.certificationExacte ? "border-accent bg-accent/5" : errors.certificationExacte ? "border-red-300 bg-red-50" : "border-gray-200 hover:border-accent/50"
                }`}>
                  <input
                    type="checkbox"
                    checked={formData.certificationExacte}
                    onChange={(e) => handleChange("certificationExacte", e.target.checked)}
                    className="mt-1 w-5 h-5 accent-accent"
                  />
                  <div>
                    <span className="font-medium text-gray-800">
                      Je certifie que les informations fournies sont exactes et complètes.
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      Documents à fournir : facture d'achat, liste de colisage, liste des effets personnels, 
                      déclaration d'exportation, bon de commande, etc.
                    </p>
                  </div>
                </label>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                  <FileText className="text-amber-600 shrink-0" size={20} />
                  <p className="text-sm text-amber-800">
                    <strong>Documents qui pourraient être requis :</strong> Facture d'achat, liste de colisage, 
                    liste des effets personnels, déclaration d'exportation, bon de commande, etc.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-3 px-12 py-4 bg-accent hover:bg-orange-600 text-white font-bold rounded-full shadow-lg transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    ENVOYER MA DEMANDE D'ENLÈVEMENT
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </section>
    </main>
  );
}

