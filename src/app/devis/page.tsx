"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Send, Package, User, MapPin, Truck, Search, X } from "lucide-react";
import { LOCATIONS, AIRPORTS, SEAPORTS } from "./locations";

export default function DevisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<any>({ modeTransport: "Maritime" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getLocationsList = () => {
    switch (formData.modeTransport) {
      case "Maritime": return SEAPORTS;
      case "Aérien": return AIRPORTS;
      default: return []; // Pour routier ou autre, pas de liste restreinte pour l'instant ou liste complète si besoin
    }
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
          case "Maritime": return "Ex: Douala, Abidjan...";
          case "Aérien": return "Ex: Douala, Abidjan...";
          default: return "Ex: Douala, Abidjan...";
      }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleAutocompleteSelect = (name: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((prev) => prev + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Sécurité : On ne soumet que si on est à la dernière étape
    if (step !== 2) return;

    setIsSubmitting(true);
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="flex justify-center items-center mb-12">
           <div className="flex items-center">
             <div className={`flex flex-col items-center gap-2 ${step >= 1 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 1 ? 'bg-accent text-white border-accent' : 'bg-white border-gray-300'}`}>
                  {step > 1 ? <Check size={24} /> : <Package size={24} />}
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">1. Expédition</span>
             </div>
             <div className={`w-24 h-1 mx-4 transition-colors ${step >= 2 ? 'bg-accent' : 'bg-gray-200'}`}></div>
             <div className={`flex flex-col items-center gap-2 ${step >= 2 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${step >= 2 ? 'bg-accent text-white border-accent' : 'bg-white border-gray-300'}`}>
                  <User size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">2. Coordonnées</span>
             </div>
           </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl">
          <form id="devis-form" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              
              {/* ÉTAPE 1 : DÉTAILS EXPÉDITION */}
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
                      <Truck className="text-accent" /> Transport & Trajet
                    </h2>
                    <div className="space-y-6">

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Comment souhaitez-vous acheminer vos colis ? Mode de transport ?</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {["Maritime", "Aérien", "Routier", "Douane", "Logistique", "Autre"].map((mode) => (
                            <label key={mode} className="cursor-pointer">
                              <input 
                                type="radio" 
                                name="modeTransport" 
                                value={mode} 
                                checked={formData.modeTransport === mode}
                                onChange={handleChange} 
                                className="peer sr-only" 
                              />
                              <div className="p-4 border-2 border-gray-200 rounded-xl text-center hover:border-accent peer-checked:border-accent peer-checked:bg-accent/5 peer-checked:text-accent font-semibold transition-all text-gray-800 text-sm">
                                 {mode === "Routier" ? "Route : Camion" : mode === "Logistique" ? "Entreposage et Logistique" : mode === "Douane" ? "Solution Douane" : mode}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><MapPin size={18} className="text-gray-400"/> Départ (Enlèvement)</h3>
                          <div className="space-y-4">
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Pays d'enlèvement</label>
                                <input type="text" name="paysDepart" onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" placeholder="Ex: France" />
                            </div>
                            <AutocompleteInput 
                              label={getDepartLabel()}
                              name="depart"
                              value={formData.depart || ""}
                              onChange={(val) => handleAutocompleteSelect("depart", val)}
                              placeholder={getDepartPlaceholder()}
                              options={getLocationsList()}
                              isFreeText={formData.modeTransport !== "Maritime" && formData.modeTransport !== "Aérien"}
                            />
                            <div>
                              <label className="text-xs text-gray-500 mb-1 block">Date d'enlèvement souhaitée</label>
                              <input type="date" name="dateDepart" onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><MapPin size={18} className="text-gray-400"/> Arrivée (Livraison)</h3>
                          <div className="space-y-4">
                             <div>
                                <label className="text-xs text-gray-500 mb-1 block">Pays de livraison</label>
                                <input type="text" name="paysArrivee" onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" placeholder="Ex: Cameroun" />
                            </div>
                            <AutocompleteInput 
                              label={getArriveeLabel()}
                              name="arrivee"
                              value={formData.arrivee || ""}
                              onChange={(val) => handleAutocompleteSelect("arrivee", val)}
                              placeholder={getArriveePlaceholder()}
                              options={getLocationsList()}
                              isFreeText={formData.modeTransport !== "Maritime" && formData.modeTransport !== "Aérien"}
                            />
                             <div>
                              <label className="text-xs text-gray-500 mb-1 block">Date de livraison souhaitée</label>
                              <input type="date" name="dateArrivee" onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                      <Package className="text-accent" /> La Marchandise
                    </h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Nature des marchandises</label>
                           <input type="text" name="natureMarchandise" placeholder="Ex: Denrées, Meubles..." onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                         </div>
                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Description / Caractéristiques</label>
                           <textarea 
                              name="description" 
                              rows={1} 
                              placeholder="Sac, Valise, Palette, Voiture 4x4, Camion..." 
                              onChange={handleChange} 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" 
                            />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Type de conteneur souhaité</label>
                           <select name="typeContainer" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none bg-white text-gray-900">
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
                         </div>
                         <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions (L x l x H)</label>
                           <input type="text" name="dimensions" placeholder="Ex: 120x80x100 cm" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Nb Colis</label>
                           <input type="number" name="nbColis" placeholder="ex: 10" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
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
                           <label className="block text-sm font-medium text-gray-700 mb-2">Valeur (€)</label>
                           <input type="number" name="valeur" placeholder="Estimation" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" />
                         </div>
                       </div>
                    </div>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
                      <Search className="text-accent" /> Votre Projet
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                        <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">Objectif de la demande</label>
                           <select name="objectif" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none bg-white text-gray-900">
                             <option value="">Sélectionner...</option>
                             <option value="envoi_immediat">Envoi immédiat</option>
                             <option value="planification">Planification future</option>
                             <option value="comparaison">Comparaison de tarifs</option>
                           </select>
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

              {/* ÉTAPE 2 : COORDONNÉES */}
              {step === 2 && (
                <motion.div
                  key="step2"
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                      <input required type="text" name="nom" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                      <input required type="text" name="prenom" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input required type="email" name="email" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Adresse *</label>
                      <input required type="text" name="adresse" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pays *</label>
                      <input required type="text" name="pays" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                      <input required type="tel" name="telephone" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white" />
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
              {step < 2 && (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-secondary font-bold shadow-lg transition-transform hover:-translate-y-1"
                >
                  Suivant : Vos Coordonnées <ChevronRight size={20} />
                </button>
              )}

              {step === 2 && (
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

// Composant Autocomplete modifié pour accepter une liste d'options
function AutocompleteInput({ label, name, value, onChange, placeholder, options = [], isFreeText = false }: { label?: string, name: string, value: string, onChange: (val: string) => void, placeholder?: string, options?: string[], isFreeText?: boolean }) {
  const [query, setQuery] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si pas d'options fournies ou mode texte libre (Routier), on ne filtre pas
    if (options.length === 0 || isFreeText) {
        setFilteredLocations([]);
        return;
    }

    if (query.length > 0) {
      const filtered = options.filter(loc => 
        loc.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLocations(filtered.slice(0, 8));
    } else {
      setFilteredLocations([]);
    }
  }, [query, options, isFreeText]);

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
    if (!isFreeText && options.length > 0) {
        setIsOpen(true);
    }
  };

  return (
    <div className="relative" ref={wrapperRef}>
      {label && <label className="text-xs text-gray-500 mb-1 block">{label}</label>}
      <div className="relative">
        <input 
          type="text" 
          name={name}
          value={query}
          onChange={handleInputChange}
          onFocus={() => { if(!isFreeText && options.length > 0) setIsOpen(true); }}
          placeholder={placeholder}
          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white" 
          autoComplete="off"
        />
        {query && (
          <button 
            type="button"
            onClick={() => { setQuery(""); onChange(""); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && filteredLocations.length > 0 && (
          <motion.ul 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute z-50 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-100 max-h-60 overflow-y-auto"
          >
            {filteredLocations.map((loc, index) => (
              <li 
                key={index}
                onClick={() => handleSelect(loc)}
                className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-0 flex items-center gap-2"
              >
                <MapPin size={14} className="text-gray-400 shrink-0" />
                {loc}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}