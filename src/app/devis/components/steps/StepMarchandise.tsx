import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, Plane, Ship, CheckSquare, List } from "lucide-react";
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

  // Helper pour les checkboxes multiples
  const handleServiceChange = (service: string) => {
    const currentServices = (formData.demenagementServices as string[]) || [];
    const newServices = currentServices.includes(service)
      ? currentServices.filter((s) => s !== service)
      : [...currentServices, service];
    handleChange("demenagementServices", newServices);
  };

  // Si c'est un Déménagement, on affiche le formulaire spécifique
  if (formData.modeTransport === "Déménagement") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-10"
      >
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-gray-100 pb-3">
            <Truck className="text-accent" /> Détails du Déménagement
          </h2>
          
          <div className="space-y-8">
            
            {/* Type de déménagement */}
            <div>
              <label className="block text-lg font-medium text-gray-800 mb-4">Type de déménagement</label>
              <div className="flex flex-wrap gap-4">
                {["Déménagement international", "Déménagement national"].map((type) => (
                   <label key={type} className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-colors flex-1 min-w-[200px]">
                      <input 
                        type="radio" 
                        name="demenagementType" 
                        value={type}
                        checked={formData.demenagementType === type}
                        onChange={(e) => handleChange("demenagementType", e.target.value)}
                        className="w-5 h-5 text-accent focus:ring-accent"
                      />
                      <span className="font-medium text-gray-700">{type}</span>
                   </label>
                ))}
              </div>
            </div>

            {/* Volume et Liste */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Volume estimé (m³)
                </label>
                <input
                  type="number"
                  name="demenagementVolume"
                  value={formData.demenagementVolume || ""}
                  placeholder="Ex: 30"
                  onChange={(e) => handleChange("demenagementVolume", e.target.value)}
                  className={getInputClass(false)}
                />
              </div>
              <div className="md:row-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <List size={16} /> Liste des meubles et cartons
                </label>
                <textarea
                  name="demenagementMeubles"
                  rows={5}
                  value={formData.demenagementMeubles || ""}
                  placeholder="Ex: 1 Canapé, 2 Lits, 20 Cartons livres..."
                  onChange={(e) => handleChange("demenagementMeubles", e.target.value)}
                  className={getInputClass(false)}
                />
              </div>
            </div>

            {/* Services Souhaités */}
            <div>
               <label className="block text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                 <CheckSquare size={20} className="text-accent" /> Services Supplémentaires souhaités
               </label>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 {[
                   "Emballage professionnel",
                   "Fourniture de cartons",
                   "Démontage / remontage",
                   "Je joins à ma demande une liste non exhaustive des effets"
                 ].map((service) => (
                    <label key={service} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={((formData.demenagementServices as string[]) || []).includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-5 h-5 text-accent rounded focus:ring-accent"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                 ))}
               </div>
            </div>

            {/* Mode de transport spécifique Déménagement */}
            <div>
               <label className="block text-lg font-medium text-gray-800 mb-4">Mode de transport souhaité</label>
               <div className="space-y-4">
                  {/* Maritime */}
                  <div className="border rounded-xl p-4 bg-gray-50/50">
                     <label className="flex items-center gap-3 cursor-pointer mb-3">
                        <input
                          type="radio"
                          name="demenagementModeTransport"
                          value="Maritime"
                          checked={formData.demenagementModeTransport === "Maritime"}
                          onChange={(e) => handleChange("demenagementModeTransport", e.target.value)}
                          className="w-5 h-5 text-accent focus:ring-accent"
                        />
                        <div className="flex items-center gap-2 font-bold text-gray-800">
                           <Ship size={20} /> Transport maritime
                        </div>
                     </label>
                     
                     {/* Options Maritime */}
                     {formData.demenagementModeTransport === "Maritime" && (
                       <div className="ml-8 space-y-3 pl-4 border-l-2 border-gray-200">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                             {/* Container Type */}
                             <select
                                value={formData.demenagementContainerType || ""}
                                onChange={(e) => handleChange("demenagementContainerType", e.target.value)}
                                className="p-2 border rounded bg-white text-sm w-full"
                             >
                                <option value="">Type de conteneur...</option>
                                <option value="groupage">Conteneur de groupage</option>
                                <option value="perso_20_dry">Conteneur perso 20’ dry</option>
                                <option value="perso_40_hc">Conteneur perso 40’ dry hc</option>
                             </select>
                          </div>
                       </div>
                     )}
                  </div>

                  {/* Aérien */}
                  <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="demenagementModeTransport"
                        value="Aérien"
                        checked={formData.demenagementModeTransport === "Aérien"}
                        onChange={(e) => handleChange("demenagementModeTransport", e.target.value)}
                        className="w-5 h-5 text-accent focus:ring-accent"
                      />
                      <div className="flex items-center gap-2 font-medium text-gray-700">
                         <Plane size={20} /> Transport aérien
                      </div>
                  </label>

                  {/* Routier */}
                  <label className="flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="demenagementModeTransport"
                        value="Routier"
                        checked={formData.demenagementModeTransport === "Routier"}
                        onChange={(e) => handleChange("demenagementModeTransport", e.target.value)}
                        className="w-5 h-5 text-accent focus:ring-accent"
                      />
                      <div className="flex items-center gap-2 font-medium text-gray-700">
                         <Truck size={20} /> Transport routier
                      </div>
                  </label>
               </div>
            </div>

            {/* Formalités */}
            <label className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl cursor-pointer">
               <input
                 type="checkbox"
                 checked={formData.demenagementFormalites || false}
                 onChange={(e) => handleChange("demenagementFormalites", e.target.checked)}
                 className="w-5 h-5 text-accent rounded focus:ring-accent"
               />
               <span className="font-medium text-gray-800">Je souhaite inclure les formalités douanières</span>
            </label>

          </div>
        </div>
      </motion.div>
    );
  }

  // --- FORMULAIRE STANDARD (NON DEMENAGEMENT) ---
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

          {formData.modeTransport === "Maritime" && (
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
                    <option value="ro/ro">Conteneur RO/RO (Véhicules)</option>
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
          )}

          {formData.modeTransport !== "Maritime" && (
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
          )}

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
