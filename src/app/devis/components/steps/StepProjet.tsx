import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useDevis } from "../../context/DevisContext";

export default function StepProjet() {
  const { formData, handleChange, errors } = useDevis();

  const getInputClass = (hasError: boolean) => 
    `w-full p-3 border rounded-lg outline-none bg-white text-gray-900 ${
      hasError 
        ? 'border-red-500 ring-1 ring-red-500 bg-red-50' 
        : 'border-gray-300 focus:ring-2 focus:ring-accent'
    }`;

  const getLabelClass = (hasError: boolean) =>
    `block text-sm font-medium mb-2 ${hasError ? 'text-red-500' : 'text-gray-700'}`;

  return (
    <motion.div
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
            <label className={getLabelClass(errors.objectif)}>
              Objectif de la demande *
            </label>
            <select
              name="objectif"
              value={formData.objectif || ""}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={getInputClass(errors.objectif)}
            >
              <option value="">Sélectionner...</option>
              <option value="envoi_immediat">Envoi immédiat</option>
              <option value="planification">Planification future</option>
              <option value="comparaison">Comparaison de tarifs</option>
            </select>
            {errors.objectif && (
              <p className="text-red-500 text-xs mt-1">Sélection requise</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fréquence du trajet
            </label>
            <select
              name="frequence"
              value={formData.frequence || ""}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none bg-white text-gray-900"
            >
              <option value="">Sélectionner...</option>
              <option value="unique">Envoi unique (One shot)</option>
              <option value="regulier">Régulier</option>
              <option value="hebdo">Hebdomadaire</option>
              <option value="mensuel">Mensuel</option>
            </select>
          </div>
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Précisions sur le projet / Budget estimatif
        </label>
        <textarea
          name="message"
          rows={2}
          value={formData.message || ""}
          placeholder="Détails supplémentaires, budget approximatif..."
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white"
        />
      </div>
    </motion.div>
  );
}

