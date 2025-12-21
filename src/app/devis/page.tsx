"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Send, Package, User, MapPin, Truck, Search, X, Ship, Plane, Shield, HelpCircle, Box, ChevronDown } from "lucide-react";
import { LOCATIONS, AIRPORTS_BY_COUNTRY, SEAPORTS_BY_COUNTRY } from "./locations";
import { toast } from "sonner";

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({ modeTransport: "Maritime" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  // Styles communs pour éviter la répétition
  const getInputClass = (hasError: boolean) => 
    `w-full p-3 border rounded-lg outline-none text-gray-900 bg-white transition-all ${
      hasError 
        ? 'border-red-500 ring-1 ring-red-500 bg-red-50' 
        : 'border-gray-200 focus:ring-2 focus:ring-accent'
    }`;

  const getLabelClass = (hasError: boolean) =>
    `block text-sm font-medium mb-2 ${hasError ? 'text-red-500' : 'text-gray-700'}`;

  // Configuration des champs requis par étape
  const REQUIRED_FIELDS: Record<number, string[]> = {
    2: ["paysDepart", "depart", "dateDepart", "paysArrivee", "arrivee", "dateArrivee"],
    3: ["natureMarchandise", "description", "typeContainer", "nbColis", "valeur"],
    4: ["objectif"],
    5: ["nom", "prenom", "email", "adresse", "pays", "telephone"]
  };

  const validateStep = (currentStep: number) => {
    const fields = REQUIRED_FIELDS[currentStep] || [];
    const newErrors: Record<string, boolean> = {};
    let isValid = true;

    fields.forEach(field => {
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
        
        toast.error(message, {
            description: "Les champs en rouge sont requis."
        });
    }

    return isValid;
  };

  // Nouvelles fonctions pour gérer les listes par pays
  const getLocationsByCountry = (country: string, mode: string) => {
    if (!country) return [];
    
    // Normalisation basique pour la correspondance (insensible à la casse)
    // Dans une vraie app, on utiliserait des codes ISO
    const normalizedCountry = Object.keys(mode === "Maritime" ? SEAPORTS_BY_COUNTRY : AIRPORTS_BY_COUNTRY)
      .find(c => c.toLowerCase() === country.toLowerCase());

    if (!normalizedCountry) return [];

    if (mode === "Maritime") {
      return SEAPORTS_BY_COUNTRY[normalizedCountry] || [];
    } else if (mode === "Aérien") {
      return AIRPORTS_BY_COUNTRY[normalizedCountry] || [];
    }
    return [];
  };

  const getAvailableLocations = (type: 'depart' | 'arrivee') => {
    const countryField = type === 'depart' ? 'paysDepart' : 'paysArrivee';
    const country = formData[countryField];
    const mode = formData.modeTransport;
    
    // Si un pays est renseigné, on essaie de filtrer par ce pays
    if (country && (mode === "Maritime" || mode === "Aérien")) {
       const locations = getLocationsByCountry(country, mode);
       if (locations.length > 0) return locations;
    }

    // Sinon, comportement par défaut (liste complète ou vide selon logique précédente)
    // Mais ici l'utilisateur a demandé explicitement "uniquement les ports/aeroports de ce pays"
    // Donc si pays renseigné mais pas trouvé, on retourne vide ou on laisse libre ?
    // Pour l'instant, gardons la logique de fallback sur tous les ports/aéroports si pas de pays,
    // ou si le pays n'est pas dans notre liste "hardcodée".
    
    // Fallback : Liste complète aplatie si pas de pays spécifique détecté
    if (mode === "Maritime") return Object.values(SEAPORTS_BY_COUNTRY).flat();
    if (mode === "Aérien") return Object.values(AIRPORTS_BY_COUNTRY).flat();
    
    return [];
  };

  const getDepartLabel = () => {
    switch (formData.modeTransport) {
      case "Maritime": return "Port de départ";
      case "Aérien": return "Aéroport de départ";
      default: return "Ville d'enlèvement";
    }
  };

  const getArriveeLabel = () => {
    switch (formData.modeTransport) {
      case "Maritime": return "Port de destination";
      case "Aérien": return "Aéroport de destination";
      default: return "Ville de livraison";
    }
  };

  const getDepartPlaceholder = () => {
    switch (formData.modeTransport) {
        case "Maritime": return "Ex: Le Havre, Marseille...";
        case "Aérien": return "Ex: Paris CDG, Lyon...";
        default: return "Ex: Paris, Lyon...";
    }
  }

  const getArriveePlaceholder = () => {
      switch (formData.modeTransport) {
          case "Maritime": return "Ex: Los Angeles, Shanghai...";
          case "Aérien": return "Ex: Chicago, Pekin...";
          default: return "Ex: Los Angeles, Shanghai...";
      }
  }

  const getAvailableCountries = (mode?: string) => {
    if (mode === "Maritime") {
      return Object.keys(SEAPORTS_BY_COUNTRY);
    } else if (mode === "Aérien") {
      return Object.keys(AIRPORTS_BY_COUNTRY);
    }
    // Fallback pour Routier, Douane, etc. : on retourne tous les pays connus
    const maritimeCountries = Object.keys(SEAPORTS_BY_COUNTRY);
    const airCountries = Object.keys(AIRPORTS_BY_COUNTRY);
    return Array.from(new Set([...maritimeCountries, ...airCountries])).sort();
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    // Effacer l'erreur quand l'utilisateur commence à corriger
    if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleAutocompleteSelect = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
    if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (validateStep(step)) {
        setErrors({}); // Reset errors on valid step change
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setStep((prev) => prev + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sécurité : On ne soumet que si on est à la dernière étape
    if (step !== 5) return;

    // Validation Étape 5 (Contact)
    const form = e.currentTarget as HTMLFormElement;
    if (!form.checkValidity()) {
        return;
    }

    if (!validateStep(5)) {
        return;
    }

    setErrors({});
    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success("Demande de devis envoyée avec succès !");
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Demande Envoyée !</h2>
          <p className="text-gray-600 mb-8">
            Merci {formData.prenom} {formData.nom}, votre demande de cotation a bien été reçue.
            Notre équipe commerciale va étudier votre projet et vous répondra sous 24h à l'adresse <strong>{formData.email}</strong>.
          </p>
          <a href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors">
            Retour à l'accueil
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-zinc-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Demande de Cotation</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vous avez besoin de transporter un ou plusieurs produits vers une destination internationale (Europe, Afrique, Asie, Amérique, Antilles, Australie...), il vous faut un partenaire transitaire qui respecte ses engagements. Spécialiste du transport international, GTA maîtrise le fret Maritime et Aérien et assure les formalités administratives et douanières.
          </p>
        </div>

        {/* Stepper Progress */}
        <div className="flex justify-center items-center mb-8 md:mb-12">
           {/* Mobile Stepper - Simple Text */}
           <div className="md:hidden w-full">
              <div className="flex justify-between items-center mb-2">
                 <span className="font-bold text-primary">Étape {step}/5</span>
                 <span className="text-xs text-gray-500 uppercase font-semibold">
                    {step === 1 ? 'Transport' : 
                     step === 2 ? 'Trajet' : 
                     step === 3 ? 'Marchandise' : 
                     step === 4 ? 'Projet' : 'Contact'}
                 </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                 <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 5) * 100}%` }}
                 ></div>
              </div>
           </div>

           {/* Desktop Stepper */}
           <div className="hidden md:flex items-center w-full justify-center">
             <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 1 ? 'bg-accent text-white border-accent' : 'bg-white border-gray-300'}`}>
                  {step > 1 ? <Check size={24} /> : <Truck size={24} />}
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">1. Transport</span>
             </div>
             
             <div className={`w-12 h-1 mx-2 transition-colors ${step >= 2 ? 'bg-accent' : 'bg-gray-200'}`}></div>
             
             <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 2 ? 'bg-accent text-white border-accent' : 'bg-white border-gray-300'}`}>
                  {step > 2 ? <Check size={24} /> : <MapPin size={24} />}
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">2. Trajet</span>
             </div>

             <div className={`w-12 h-1 mx-2 transition-colors ${step >= 3 ? 'bg-accent' : 'bg-gray-200'}`}></div>

             <div className={`flex flex-col items-center gap-2 ${step >= 3 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 3 ? 'bg-accent text-white border-accent' : 'bg-white border-gray-300'}`}>
                  {step > 3 ? <Check size={24} /> : <Package size={24} />}
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">3. Marchandise</span>
             </div>

             <div className={`w-12 h-1 mx-2 transition-colors ${step >= 4 ? 'bg-accent' : 'bg-gray-200'}`}></div>

             <div className={`flex flex-col items-center gap-2 ${step >= 4 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 4 ? 'bg-accent text-white border-accent' : 'bg-white border-gray-300'}`}>
                  {step > 4 ? <Check size={24} /> : <Search size={24} />}
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">4. Projet</span>
             </div>

             <div className={`w-12 h-1 mx-2 transition-colors ${step >= 5 ? 'bg-accent' : 'bg-gray-200'}`}></div>

             <div className={`flex flex-col items-center gap-2 ${step >= 5 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 5 ? 'bg-accent text-white border-accent' : 'bg-white border-gray-300'}`}>
                  <User size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">5. Contact</span>
             </div>
           </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl">
          <form id="devis-form" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              
              {/* ÉTAPE 1 : CHOIX DU MODE DE TRANSPORT */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                      <Truck className="text-accent" /> Mode de Transport
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-6 text-center">Comment souhaitez-vous acheminer vos colis ?</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto ">
                          {["Maritime", "Aérien", "Routier", "Douane", "Logistique", "Autre"].map((mode) => (
                            <label key={mode} className="cursor-pointer group">
                              <input 
                                type="radio" 
                                name="modeTransport" 
                                value={mode} 
                                checked={formData.modeTransport === mode}
                                onChange={(e) => {
                                    handleChange(e);
                                    handleNext(e as any); // Auto-advance on selection
                                }}
                                className="peer sr-only" 
                              />
                              <div className="flex flex-col items-center justify-center p-6 h-32 border-2 border-gray-300 rounded-xl text-gray-500 text-center hover:border-accent hover:bg-accent/5 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-checked:shadow-lg transition-all duration-300 transform peer-checked:scale-105">
                                 {mode === "Maritime" && <Ship className="mb-2" size={32} />}
                                 {mode === "Aérien" && <Plane className="mb-2" size={32} />}
                                 {mode === "Routier" && <Truck className="mb-2" size={32} />}
                                 {mode === "Douane" && <Shield className="mb-2" size={32} />}
                                 {mode === "Logistique" && <Box className="mb-2" size={32} />}
                                 {mode === "Autre" && <HelpCircle className="mb-2" size={32} />}
                                 {/* Icons placeholders, adjust if needed */}
                                 <span className="font-bold text-lg">
                                    {mode}
                                 </span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 2 : DÉTAILS TRAJET */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                   <div>
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                      <MapPin className="text-accent" /> Détails du Trajet ({formData.modeTransport})
                    </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><MapPin size={18} className="text-gray-400"/> Départ (Enlèvement)</h3>
                          <div className="space-y-4">
                            <div>
                                <AutocompleteInput 
                                  label="Pays d'enlèvement *"
                                  name="paysDepart"
                                  value={formData.paysDepart || ""}
                                  onChange={(val) => {
                                      setFormData((prev: any) => ({ ...prev, paysDepart: val, depart: "" }));
                                      if (errors.paysDepart) setErrors(prev => ({ ...prev, paysDepart: false }));
                                  }}
                                  placeholder="Ex: France, Abidjan, Allemagne, ..."
                                  options={getAvailableCountries(formData.modeTransport)}
                                  isFreeText={false} 
                                  error={errors.paysDepart}
                                />
                            </div>
                            <AutocompleteInput 
                              label={getDepartLabel()}
                              name="depart"
                              value={formData.depart || ""}
                              onChange={(val) => {
                                handleAutocompleteSelect("depart", val);
                                if (errors.depart) setErrors(prev => ({ ...prev, depart: false }));
                              }}
                              placeholder={getDepartPlaceholder()}
                              options={getAvailableLocations('depart')}
                              isFreeText={formData.modeTransport !== "Maritime" && formData.modeTransport !== "Aérien"}
                              disabled={!formData.paysDepart }
                              error={errors.depart}
                            />
                            <div>
                              <label className={`text-xs font-medium mb-1 block ${errors.dateDepart ? 'text-red-500' : 'text-gray-500'}`}>Date d'enlèvement souhaitée *</label>
                              <input 
                                type="date" 
                                name="dateDepart" 
                                onChange={handleChange} 
                                className={getInputClass(errors.dateDepart)} 
                              />
                              {errors.dateDepart && <p className="text-red-500 text-xs mt-1">Date requise</p>}
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><MapPin size={18} className="text-gray-400"/> Arrivée (Livraison)</h3>
                          <div className="space-y-4">
                             <div>
                                <AutocompleteInput 
                                  label="Pays de livraison *"
                                  name="paysArrivee"
                                  value={formData.paysArrivee || ""}
                                  onChange={(val) => {
                                      setFormData((prev: any) => ({ ...prev, paysArrivee: val, arrivee: "" }));
                                      if (errors.paysArrivee) setErrors(prev => ({ ...prev, paysArrivee: false }));
                                  }}
                                  placeholder="Ex: Cameroun, Chine, Etats-Unis..."
                                  options={getAvailableCountries(formData.modeTransport)}
                                  isFreeText={false}
                                  error={errors.paysArrivee}
                                />
                            </div>
                            <AutocompleteInput 
                              label={getArriveeLabel()}
                              name="arrivee"
                              value={formData.arrivee || ""}
                              onChange={(val) => {
                                handleAutocompleteSelect("arrivee", val);
                                if (errors.arrivee) setErrors(prev => ({ ...prev, arrivee: false }));
                              }}
                              placeholder={getArriveePlaceholder()}
                              options={getAvailableLocations('arrivee')}
                              isFreeText={formData.modeTransport !== "Maritime" && formData.modeTransport !== "Aérien"}
                              disabled={!formData.paysArrivee}
                              error={errors.arrivee}
                            />
                             <div>
                              <label className={`text-xs font-medium mb-1 block ${errors.dateArrivee ? 'text-red-500' : 'text-gray-500'}`}>Date de livraison souhaitée *</label>
                              <input 
                                type="date" 
                                name="dateArrivee" 
                                onChange={handleChange} 
                                className={getInputClass(errors.dateArrivee)} 
                              />
                              {errors.dateArrivee && <p className="text-red-500 text-xs mt-1">Date requise</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>
                </motion.div>
              )}

              {/* ÉTAPE 3 : MARCHANDISE */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                      <Package className="text-accent" /> La Marchandise
                    </h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                           <label className={getLabelClass(errors.natureMarchandise)}>Nature des marchandises *</label>
                           <input 
                            type="text" 
                            name="natureMarchandise" 
                            placeholder="Ex: Denrées, Meubles..." 
                            onChange={handleChange} 
                            className={getInputClass(errors.natureMarchandise)} 
                           />
                           {errors.natureMarchandise && <p className="text-red-500 text-xs mt-1">Champ requis</p>}
                         </div>
                         <div>
                           <label className={getLabelClass(errors.description)}>Description / Caractéristiques *</label>
                           <textarea 
                              name="description" 
                              rows={1} 
                              placeholder="Sac, Valise, Palette, Voiture 4x4, Camion..." 
                              onChange={handleChange} 
                              className={getInputClass(errors.description)} 
                            />
                            {errors.description && <p className="text-red-500 text-xs mt-1">Champ requis</p>}
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                           <label className={getLabelClass(errors.typeContainer)}>Type de conteneur souhaité *</label>
                           <select 
                            name="typeContainer" 
                            onChange={handleChange} 
                            className={getInputClass(errors.typeContainer)}
                           >
                             <option value="">Sélectionner...</option>
                             <option value="groupage">Conteneur de groupage (LCL)</option>
                             <option value="perso">Conteneur personnalisé (FCL)</option>
                             <optgroup label="Détail Conteneurs">
                                <option value="20_dry">Conteneur 20’ dry</option>
                                <option value="20_reefer">Conteneur 20’ reefer/frigorifique</option>
                                <option value="20_opentop">Conteneur 20’ open top</option>
                                <option value="20_flatrack">Conteneur 20’ flat rack</option>
                                <option value="40_dry">Conteneur 40’ dry</option>
                                <option value="40_hc">Conteneur 40’ High Cube</option>
                                <option value="40_reefer">Conteneur 40’ reefer/frigorifique</option>
                                <option value="40_opentop">Conteneur 40’ open top</option>
                                <option value="40_flatrack">Conteneur 40’ flat rack</option>
                             </optgroup>
                           </select>
                           {errors.typeContainer && <p className="text-red-500 text-xs mt-1">Sélection requise</p>}
                         </div>
                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions (L x l x H)</label>
                           <input type="text" name="dimensions" placeholder="Ex: 120x80x100 cm" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div>
                           <label className={getLabelClass(errors.nbColis)}>Nb Colis *</label>
                           <input 
                            type="number" 
                            name="nbColis" 
                            placeholder="ex: 10" 
                            onChange={handleChange} 
                            className={getInputClass(errors.nbColis)} 
                           />
                           {errors.nbColis && <p className="text-red-500 text-xs mt-1">Requis</p>}
                         </div>
                          <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Poids Total (kg)</label>
                           <input type="number" name="poids" placeholder="ex: 500" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                         </div>
                          <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Volume Total (m³)</label>
                           <input type="number" name="volume" placeholder="ex: 2.5" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                         </div>
                         <div>
                           <label className={getLabelClass(errors.valeur)}>Valeur (€) *</label>
                           <input 
                            type="number" 
                            name="valeur" 
                            placeholder="Estimation" 
                            onChange={handleChange} 
                            className={getInputClass(errors.valeur)} 
                           />
                           {errors.valeur && <p className="text-red-500 text-xs mt-1">Requis</p>}
                         </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 4 : PROJET */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-10"
                >
                  <div>
                     <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                      <Search className="text-accent" /> Votre Projet
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                           <label className={getLabelClass(errors.objectif)}>Objectif de la demande *</label>
                           <select 
                            name="objectif" 
                            onChange={handleChange} 
                            className={getInputClass(errors.objectif)}
                           >
                             <option value="">Sélectionner...</option>
                             <option value="envoi_immediat">Envoi immédiat</option>
                             <option value="planification">Planification future</option>
                             <option value="comparaison">Comparaison de tarifs</option>
                           </select>
                           {errors.objectif && <p className="text-red-500 text-xs mt-1">Sélection requise</p>}
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Fréquence du trajet</label>
                           <select name="frequence" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none bg-white text-gray-900">
                             <option value="">Sélectionner...</option>
                             <option value="unique">Envoi unique (One shot)</option>
                             <option value="regulier">Régulier</option>
                             <option value="hebdo">Hebdomadaire</option>
                             <option value="mensuel">Mensuel</option>
                           </select>
                        </div>
                    </div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Précisions sur le projet / Budget estimatif</label>
                      <textarea 
                        name="message" 
                        rows={2} 
                        placeholder="Détails supplémentaires, budget approximatif..." 
                        onChange={handleChange} 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" 
                      />
                  </div>
                </motion.div>
              )}

              {/* ÉTAPE 5 : COORDONNÉES */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8 max-w-2xl mx-auto"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Où devons-nous envoyer le devis ?</h2>
                    <p className="text-gray-500 mt-2">Dernière étape ! Laissez-nous vos coordonnées pour recevoir votre offre personnalisée.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={getLabelClass(errors.nom)}>Nom *</label>
                      <input 
                        type="text" 
                        name="nom" 
                        onChange={handleChange} 
                        className={getInputClass(errors.nom)} 
                      />
                      {errors.nom && <p className="text-red-500 text-xs mt-1">Requis</p>}
                    </div>
                    <div>
                      <label className={getLabelClass(errors.prenom)}>Prénom *</label>
                      <input 
                        type="text" 
                        name="prenom" 
                        onChange={handleChange} 
                        className={getInputClass(errors.prenom)} 
                      />
                      {errors.prenom && <p className="text-red-500 text-xs mt-1">Requis</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className={getLabelClass(errors.email)}>Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        className={getInputClass(errors.email)} 
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">Email valide requis</p>}
                    </div>
                    <div>
                      <label className={getLabelClass(errors.adresse)}>Adresse *</label>
                      <input 
                        type="text" 
                        name="adresse" 
                        onChange={handleChange} 
                        className={getInputClass(errors.adresse)} 
                      />
                      {errors.adresse && <p className="text-red-500 text-xs mt-1">Requis</p>}
                    </div>
                    <div>
                      <AutocompleteInput
                        label="Pays *"
                        name="pays"
                        value={formData.pays || ""}
                        onChange={(val) => {
                            setFormData((prev: any) => ({ ...prev, pays: val }));
                            if (errors.pays) setErrors(prev => ({ ...prev, pays: false }));
                        }}
                        placeholder="Votre pays"
                        options={getAvailableCountries()}
                        isFreeText={false}
                        error={errors.pays}
                      />
                    </div>
                    <div>
                      <label className={getLabelClass(errors.telephone)}>Téléphone *</label>
                      <input 
                        type="tel" 
                        name="telephone" 
                        onChange={handleChange} 
                        className={getInputClass(errors.telephone)} 
                      />
                      {errors.telephone && <p className="text-red-500 text-xs mt-1">Requis</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Société</label>
                      <input type="text" name="societe" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
                    </div>
                     <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Web (Optionnel)</label>
                      <input type="text" name="website" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 mt-6">
                    <input required type="checkbox" id="rgpd" className="mt-1 w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent shrink-0" />
                    <label htmlFor="rgpd" className="text-sm text-blue-800">
                      J’accepte les mentions légales. Vos données sont collectées par GTA aux fins de traiter votre demande et répondre à vos questions. Elles seront traitées conformément à notre Politique de Confidentialité.
                    </label>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </form>

          {/* Navigation Buttons - SORTIS DU FORMULAIRE */}
          <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
            <div>
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-semibold transition-colors"
                >
                  <ChevronLeft size={20} /> Retour
                </button>
              )}
            </div>

            <div>
              {step < 5 && (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-secondary font-bold shadow-lg transition-transform hover:-translate-y-1"
                >
                  {step === 1 ? 'Suivant : Trajet' : 
                   step === 2 ? 'Suivant : Marchandise' : 
                   step === 3 ? 'Suivant : Projet' : 
                   'Suivant : Vos Coordonnées'} <ChevronRight size={20} />
                </button>
              )}

              {step === 5 && (
                <button 
                  type="submit" 
                  form="devis-form"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-10 py-4 rounded-lg bg-accent text-white hover:bg-orange-600 font-bold shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'OBTENIR MON DEVIS GRATUIT'} <Send size={20} />
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

function AutocompleteInput({ label, name, value, onChange, placeholder, options = [], isFreeText = false, disabled = false, error = false }: { label?: string, name: string, value: string, onChange: (val: string) => void, placeholder?: string, options?: string[], isFreeText?: boolean, disabled?: boolean, error?: boolean }) {
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
      const filtered = options.filter(loc => 
        loc.toLowerCase().includes(query.toLowerCase())
      );
      // Limite le nombre de résultats pour éviter une liste trop longue, mais assez pour être utile
      setFilteredLocations(filtered.slice(0, 50));
    } else {
      // Si vide, on montre les premiers éléments (ou tout si liste courte)
      setFilteredLocations(options.slice(0, 50));
    }
  }, [query, options, isFreeText, disabled]);
  
  // Update query when value changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
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
  }

  return (
    <div className={`relative ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} ref={wrapperRef}>
      {label && (
        <label className={`text-xs font-medium mb-1 block ${error ? 'text-red-500' : 'text-gray-500'}`}>
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
          placeholder={disabled ? "Veuillez sélectionner un pays d'abord" : placeholder}
          className={`w-full p-3 pr-10 border rounded-lg outline-none text-gray-900 bg-white transition-all
            ${disabled ? 'bg-gray-100 cursor-not-allowed border-gray-200' : 'cursor-text'}
            ${error ? 'border-red-500 ring-1 ring-red-500 bg-red-50' : 'border-gray-200 focus:ring-2 focus:ring-accent'}
          `}
          autoComplete="off"
          disabled={disabled}
        />
        
        {/* Bouton Chevron pour simuler un Select */}
        <div 
            className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${error ? 'text-red-400' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={toggleDropdown}
        >
            {query && !disabled && (
                <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setQuery(""); onChange(""); }}
                    className="mr-2 hover:text-red-500"
                >
                    <X size={16} />
                </button>
            )}
            <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
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
                isFreeText && query.length > 0 && (
                    <li className="px-4 py-3 text-sm text-gray-500 italic">
                        Appuyez sur Entrée ou continuez à taper pour "{query}"
                    </li>
                )
            )}
            
            {filteredLocations.length === 0 && !isFreeText && (
                 <li className="px-4 py-3 text-sm text-gray-400 italic">Aucun résultat trouvé</li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}