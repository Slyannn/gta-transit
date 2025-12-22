import React from "react";
import { motion } from "framer-motion";
import { useDevis } from "../../context/DevisContext";
import AutocompleteInput from "../ui/AutocompleteInput";

export default function StepContact() {
  const { formData, handleChange, errors, getAvailableCountries } = useDevis();

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
      className="space-y-8 max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Où devons-nous envoyer le devis ?
        </h2>
        <p className="text-gray-500 mt-2">
          Dernière étape ! Laissez-nous vos coordonnées pour recevoir votre
          offre personnalisée.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={getLabelClass(errors.nom)}>Nom *</label>
          <input
            type="text"
            name="nom"
            value={formData.nom || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={getInputClass(errors.nom)}
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1">Requis</p>}
        </div>
        <div>
          <label className={getLabelClass(errors.prenom)}>Prénom *</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={getInputClass(errors.prenom)}
          />
          {errors.prenom && <p className="text-red-500 text-xs mt-1">Requis</p>}
        </div>
        <div className="md:col-span-2">
          <label className={getLabelClass(errors.email)}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={getInputClass(errors.email)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Email valide requis</p>
          )}
        </div>
        <div>
          <label className={getLabelClass(errors.adresse)}>Adresse *</label>
          <input
            type="text"
            name="adresse"
            value={formData.adresse || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={getInputClass(errors.adresse)}
          />
          {errors.adresse && (
            <p className="text-red-500 text-xs mt-1">Requis</p>
          )}
        </div>
        <div>
          <AutocompleteInput
            label="Pays *"
            name="pays"
            value={formData.pays || ""}
            onChange={(val) => handleChange("pays", val)}
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
            value={formData.telephone || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={getInputClass(errors.telephone)}
          />
          {errors.telephone && (
            <p className="text-red-500 text-xs mt-1">Requis</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Société
          </label>
          <input
            type="text"
            name="societe"
            value={formData.societe || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Site Web (Optionnel)
          </label>
          <input
            type="text"
            name="website"
            value={formData.website || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none text-gray-900 bg-white"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 mt-6">
        <input
          required
          type="checkbox"
          id="rgpd"
          className="mt-1 w-4 h-4 text-accent rounded border-gray-300 focus:ring-accent shrink-0"
        />
        <label htmlFor="rgpd" className="text-sm text-blue-800">
          J’accepte les mentions légales. Vos données sont collectées par GTA
          aux fins de traiter votre demande et répondre à vos questions. Elles
          seront traitées conformément à notre Politique de Confidentialité.
        </label>
      </div>
    </motion.div>
  );
}

