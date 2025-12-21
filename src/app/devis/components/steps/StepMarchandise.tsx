import React from "react";
import { motion } from "framer-motion";
import { Package } from "lucide-react";
import { useDevis } from "../../context/DevisContext";

export default function StepMarchandise() {
  const { formData, handleChange, errors } = useDevis();

  const getInputClass = (hasError: boolean) => 
    `w-full p-3 border rounded-lg outline-none text-gray-900 bg-white transition-all ${
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
          <Package className="text-accent" /> La Marchandise
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={getLabelClass(errors.natureMarchandise)}>
                Nature des marchandises *
              </label>
              <input
                type="text"
                name="natureMarchandise"
                value={formData.natureMarchandise || ""}
                placeholder="Ex: Denrées, Meubles..."
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={getInputClass(errors.natureMarchandise)}
              />
              {errors.natureMarchandise && (
                <p className="text-red-500 text-xs mt-1">Champ requis</p>
              )}
            </div>
            <div>
              <label className={getLabelClass(errors.description)}>
                Description / Caractéristiques *
              </label>
              <textarea
                name="description"
                rows={1}
                value={formData.description || ""}
                placeholder="Sac, Valise, Palette, Voiture 4x4, Camion..."
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={getInputClass(errors.description)}
              />
              {errors.description && (
                <p className="text-red-500 text-xs mt-1">Champ requis</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={getLabelClass(errors.typeContainer)}>
                Type de conteneur souhaité *
              </label>
              <select
                name="typeContainer"
                value={formData.typeContainer || ""}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
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
              {errors.typeContainer && (
                <p className="text-red-500 text-xs mt-1">Sélection requise</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dimensions (L x l x H)
              </label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions || ""}
                placeholder="Ex: 120x80x100 cm"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className={getLabelClass(errors.nbColis)}>Nb Colis *</label>
              <input
                type="number"
                name="nbColis"
                value={formData.nbColis || ""}
                placeholder="ex: 10"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={getInputClass(errors.nbColis)}
              />
              {errors.nbColis && (
                <p className="text-red-500 text-xs mt-1">Requis</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Poids Total (kg)
              </label>
              <input
                type="number"
                name="poids"
                value={formData.poids || ""}
                placeholder="ex: 500"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volume Total (m³)
              </label>
              <input
                type="number"
                name="volume"
                value={formData.volume || ""}
                placeholder="ex: 2.5"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent outline-none text-gray-900 bg-white"
              />
            </div>
            <div>
              <label className={getLabelClass(errors.valeur)}>Valeur (€) *</label>
              <input
                type="number"
                name="valeur"
                value={formData.valeur || ""}
                placeholder="Estimation"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                className={getInputClass(errors.valeur)}
              />
              {errors.valeur && (
                <p className="text-red-500 text-xs mt-1">Requis</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

