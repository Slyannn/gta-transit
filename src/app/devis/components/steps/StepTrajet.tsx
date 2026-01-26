import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, Home } from "lucide-react";
import { useDevis } from "../../context/DevisContext";
import AutocompleteInput from "../ui/AutocompleteInput";
import CityAutocomplete from "../ui/CityAutocomplete";

export default function StepTrajet() {
  const { formData, handleChange, errors, getAvailableCountries, getAvailableLocations } = useDevis();

  const mode = formData.modeTransport;
  const isNationalMode = mode === "Déménagement" || mode === "Express";
  const isNational = formData.typeTrajet === "national";

  // Set default typeTrajet for Déménagement/Express if not set
  useEffect(() => {
    if (isNationalMode && !formData.typeTrajet) {
      handleChange("typeTrajet", "international");
    }
  }, [isNationalMode, formData.typeTrajet]);

  // Auto-set France as country when national is selected
  useEffect(() => {
    if (isNational && isNationalMode) {
      handleChange("paysDepart", "France");
      handleChange("paysArrivee", "France");
    }
  }, [isNational, isNationalMode]);

  // Helpers locaux pour les labels/placeholders
  const getDepartLabel = () => {
    switch (mode) {
      case "Maritime": return "Port de départ *";
      case "Aérien": return "Aéroport de départ *";
      default: return "Ville d'enlèvement *";
    }
  };

  const getArriveeLabel = () => {
    switch (mode) {
      case "Maritime": return "Port de destination *";
      case "Aérien": return "Aéroport de destination *";
      default: return "Ville de livraison *";
    }
  };

  const getDepartPlaceholder = () => {
    switch (mode) {
        case "Maritime": return "Ex: Le Havre, Marseille...";
        case "Aérien": return "Ex: Paris CDG, Lyon...";
        default: return "Ex: Paris, Lyon...";
    }
  };

  const getArriveePlaceholder = () => {
      switch (mode) {
          case "Maritime": return "Ex: Los Angeles, Shanghai...";
          case "Aérien": return "Ex: Chicago, Pekin...";
          default: return isNational ? "Ex: Marseille, Bordeaux..." : "Ex: Los Angeles, Shanghai...";
      }
  };

  // Styles helpers
  const getInputClass = (hasError: boolean, disabled?: boolean) => 
    `w-full p-3 border rounded-lg outline-none text-gray-900 transition-all ${
      disabled 
        ? 'bg-gray-100 border-gray-200 cursor-not-allowed text-gray-500'
        : hasError 
          ? 'border-red-500 ring-1 ring-red-500 bg-red-50' 
          : 'border-gray-200 focus:ring-2 focus:ring-accent bg-white'
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10"
    >
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
          <MapPin className="text-accent" /> Détails du Trajet ({mode})
        </h2>

        {/* Toggle National / International pour Déménagement et Express */}
        {isNationalMode && (
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Type de trajet *
            </label>
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="typeTrajet"
                  value="national"
                  checked={formData.typeTrajet === "national"}
                  onChange={() => handleChange("typeTrajet", "national")}
                  className="peer sr-only"
                />
                <div className="flex items-center justify-center gap-3 p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-600 hover:border-accent/50 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white transition-all">
                  <Home size={24} />
                  <div className="text-left">
                    <span className="font-bold block">National</span>
                    <span className="text-xs opacity-80">En France uniquement</span>
                  </div>
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="typeTrajet"
                  value="international"
                  checked={formData.typeTrajet === "international"}
                  onChange={() => handleChange("typeTrajet", "international")}
                  className="peer sr-only"
                />
                <div className="flex items-center justify-center gap-3 p-4 border-2 border-gray-200 rounded-xl bg-white text-gray-600 hover:border-accent/50 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white transition-all">
                  <Globe size={24} />
                  <div className="text-left">
                    <span className="font-bold block">International</span>
                    <span className="text-xs opacity-80">Vers l'étranger</span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* DÉPART */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" /> Départ (Enlèvement)
            </h3>
            <div className="space-y-4">
              {/* Pays de départ - masqué ou grisé si national */}
              {isNationalMode && isNational ? (
                <div>
                  <label className="text-xs font-medium mb-1 block text-gray-500">
                    Pays d'enlèvement
                  </label>
                  <input
                    type="text"
                    value="France"
                    disabled
                    className={getInputClass(false, true)}
                  />
                </div>
              ) : (
                <AutocompleteInput
                  label="Pays d'enlèvement *"
                  name="paysDepart"
                  value={formData.paysDepart || ""}
                  onChange={(val) => {
                    handleChange("paysDepart", val);
                    handleChange("depart", ""); // Reset port si pays change
                    handleChange("villeEnlevement", ""); // Reset ville enlevement
                  }}
                  placeholder="Ex: France, Côte d'Ivoire, Allemagne..."
                  options={getAvailableCountries()}
                  isFreeText={false}
                  error={errors.paysDepart}
                />
              )}
              
              {/* Port/Aéroport de départ - CityAutocomplete pour national, AutocompleteInput sinon */}
              {isNationalMode && isNational ? (
                <CityAutocomplete
                  label={getDepartLabel()}
                  name="depart"
                  value={formData.depart || ""}
                  onChange={(val) => handleChange("depart", val)}
                  placeholder="Tapez le nom d'une ville française..."
                  error={errors.depart}
                />
              ) : (
                <AutocompleteInput
                  label={getDepartLabel()}
                  name="depart"
                  value={formData.depart || ""}
                  onChange={(val) => handleChange("depart", val)}
                  placeholder={getDepartPlaceholder()}
                  options={getAvailableLocations("depart")}
                  isFreeText={mode !== "Maritime" && mode !== "Aérien"}
                  disabled={!formData.paysDepart}
                  error={errors.depart}
                />
              )}

              {/* Ville d'enlèvement (Post-port) - Pour Maritime/Aérien APRÈS le port */}
              {(mode === "Maritime" || mode === "Aérien") && !isNational && (
                formData.paysDepart === "France" ? (
                  <CityAutocomplete
                    label="Ville d'enlèvement *"
                    name="villeEnlevement"
                    value={formData.villeEnlevement || ""}
                    onChange={(val) => handleChange("villeEnlevement", val)}
                    placeholder="Ex: Lyon, Bordeaux..."
                    disabled={!formData.depart}
                    // @ts-ignore
                    error={errors.villeEnlevement}
                  />
                ) : (
                  <AutocompleteInput
                    label="Ville d'enlèvement *"
                    name="villeEnlevement"
                    value={formData.villeEnlevement || ""}
                    onChange={(val) => handleChange("villeEnlevement", val)}
                    placeholder="Ex: Munich, Bamako..."
                    options={[]}
                    isFreeText={true}
                    disabled={!formData.paysDepart || !formData.depart}
                    // @ts-ignore
                    error={errors.villeEnlevement}
                  />
                )
              )}
              
              {/* Date d'enlèvement - masquée pour national (Déménagement/Express) */}
              {!(isNationalMode && isNational) && (
                <div>
                  <label className={`text-xs font-medium mb-1 block ${errors.dateDepart ? 'text-red-500' : 'text-gray-500'}`}>
                      Date d'enlèvement souhaitée *
                  </label>
                  <input
                    type="date"
                    name="dateDepart"
                    // @ts-ignore
                    value={formData.dateDepart || ""}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    className={getInputClass(errors.dateDepart)}
                  />
                  {errors.dateDepart && (
                    <p className="text-red-500 text-xs mt-1">Date requise</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ARRIVÉE */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" /> Arrivée (Livraison)
            </h3>
            <div className="space-y-4">
              {/* Pays d'arrivée - masqué ou grisé si national */}
              {isNationalMode && isNational ? (
                <div>
                  <label className="text-xs font-medium mb-1 block text-gray-500">
                    Pays de livraison
                  </label>
                  <input
                    type="text"
                    value="France"
                    disabled
                    className={getInputClass(false, true)}
                  />
                </div>
              ) : (
                <AutocompleteInput
                  label="Pays de livraison *"
                  name="paysArrivee"
                  value={formData.paysArrivee || ""}
                  onChange={(val) => {
                    handleChange("paysArrivee", val);
                    handleChange("arrivee", "");
                    handleChange("villeLivraison", ""); // Reset ville livraison
                  }}
                  placeholder="Ex: Cameroun, Chine, Etats-Unis..."
                  options={getAvailableCountries()}
                  isFreeText={false}
                  error={errors.paysArrivee}
                />
              )}
              
              {/* Port/Aéroport d'arrivée - CityAutocomplete pour national, AutocompleteInput sinon */}
              {isNationalMode && isNational ? (
                <CityAutocomplete
                  label={getArriveeLabel()}
                  name="arrivee"
                  value={formData.arrivee || ""}
                  onChange={(val) => handleChange("arrivee", val)}
                  placeholder="Tapez le nom d'une ville française..."
                  error={errors.arrivee}
                />
              ) : (
                <AutocompleteInput
                  label={getArriveeLabel()}
                  name="arrivee"
                  value={formData.arrivee || ""}
                  onChange={(val) => handleChange("arrivee", val)}
                  placeholder={getArriveePlaceholder()}
                  options={getAvailableLocations("arrivee")}
                  isFreeText={mode !== "Maritime" && mode !== "Aérien"}
                  disabled={!formData.paysArrivee}
                  error={errors.arrivee}
                />
              )}

              {/* Ville de livraison finale (Post-port) - Pour Maritime/Aérien APRÈS le port */}
              {(mode === "Maritime" || mode === "Aérien") && !isNational && (
                formData.paysArrivee === "France" ? (
                  <CityAutocomplete
                    label="Ville de livraison *"
                    name="villeLivraison"
                    value={formData.villeLivraison || ""}
                    onChange={(val) => handleChange("villeLivraison", val)}
                    placeholder="Ex: Marseille, Bordeaux..."
                    disabled={!formData.arrivee}
                    // @ts-ignore
                    error={errors.villeLivraison}
                  />
                ) : (
                  <AutocompleteInput
                    label="Ville de livraison *"
                    name="villeLivraison"
                    value={formData.villeLivraison || ""}
                    onChange={(val) => handleChange("villeLivraison", val)}
                    placeholder="Ex: Douala, Los Angeles..."
                    options={[]}
                    isFreeText={true}
                    disabled={!formData.paysArrivee || !formData.arrivee}
                    // @ts-ignore
                    error={errors.villeLivraison}
                  />
                )
              )}
              
              <div>
                <label className={`text-xs font-medium mb-1 block ${errors.dateArrivee ? 'text-red-500' : 'text-gray-500'}`}>
                    Date de livraison souhaitée *
                </label>
                <input
                  type="date"
                  name="dateArrivee"
                  // @ts-ignore
                  value={formData.dateArrivee || ""}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  className={getInputClass(errors.dateArrivee)}
                />
                {errors.dateArrivee && (
                  <p className="text-red-500 text-xs mt-1">Date requise</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

