import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useDevis } from "../../context/DevisContext";
import AutocompleteInput from "../ui/AutocompleteInput";

export default function StepTrajet() {
  const { formData, handleChange, errors, getAvailableCountries, getAvailableLocations } = useDevis();

  // Helpers locaux pour les labels/placeholders
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
  };

  const getArriveePlaceholder = () => {
      switch (formData.modeTransport) {
          case "Maritime": return "Ex: Los Angeles, Shanghai...";
          case "Aérien": return "Ex: Chicago, Pekin...";
          default: return "Ex: Los Angeles, Shanghai...";
      }
  };

  // Styles helpers
  const getInputClass = (hasError: boolean) => 
    `w-full p-3 border rounded-lg outline-none text-gray-900 bg-white transition-all ${
      hasError 
        ? 'border-red-500 ring-1 ring-red-500 bg-red-50' 
        : 'border-gray-200 focus:ring-2 focus:ring-accent'
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
          <MapPin className="text-accent" /> Détails du Trajet ({formData.modeTransport})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* DÉPART */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" /> Départ (Enlèvement)
            </h3>
            <div className="space-y-4">
              <div>
                <AutocompleteInput
                  label="Pays d'enlèvement *"
                  name="paysDepart"
                  value={formData.paysDepart || ""}
                  onChange={(val) => {
                    handleChange("paysDepart", val);
                    handleChange("depart", ""); // Reset ville/port si pays change
                  }}
                  placeholder="Ex: France, Abidjan, Allemagne, ..."
                  options={getAvailableCountries()}
                  isFreeText={false}
                  error={errors.paysDepart}
                />
              </div>
              <AutocompleteInput
                label={getDepartLabel()}
                name="depart"
                value={formData.depart || ""}
                onChange={(val) => handleChange("depart", val)}
                placeholder={getDepartPlaceholder()}
                options={getAvailableLocations("depart")}
                isFreeText={
                  formData.modeTransport !== "Maritime" &&
                  formData.modeTransport !== "Aérien"
                }
                disabled={!formData.paysDepart}
                error={errors.depart}
              />
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
            </div>
          </div>

          {/* ARRIVÉE */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-gray-400" /> Arrivée (Livraison)
            </h3>
            <div className="space-y-4">
              <div>
                <AutocompleteInput
                  label="Pays de livraison *"
                  name="paysArrivee"
                  value={formData.paysArrivee || ""}
                  onChange={(val) => {
                    handleChange("paysArrivee", val);
                    handleChange("arrivee", "");
                  }}
                  placeholder="Ex: Cameroun, Chine, Etats-Unis..."
                  options={getAvailableCountries()}
                  isFreeText={false}
                  error={errors.paysArrivee}
                />
              </div>
              <AutocompleteInput
                label={getArriveeLabel()}
                name="arrivee"
                value={formData.arrivee || ""}
                onChange={(val) => handleChange("arrivee", val)}
                placeholder={getArriveePlaceholder()}
                options={getAvailableLocations("arrivee")}
                isFreeText={
                  formData.modeTransport !== "Maritime" &&
                  formData.modeTransport !== "Aérien"
                }
                disabled={!formData.paysArrivee}
                error={errors.arrivee}
              />
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

