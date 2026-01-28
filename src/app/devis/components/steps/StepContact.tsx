import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDevis } from "../../context/DevisContext";
import AutocompleteInput from "../ui/AutocompleteInput";

export default function StepContact() {
  const { formData, handleChange, errors, getAvailableCountries } = useDevis();
  const [addressSuggestions, setAddressSuggestions] = useState<string[]>([]);

  // Fonction pour extraire seulement la partie adresse (sans ville/code postal)
  const extractAddressOnly = (fullAddress: string): string => {
    // L'API retourne: "126 Avenue de la République, 93800 Épinay-sur-Seine"
    // On veut: "126 Avenue de la République"
    const parts = fullAddress.split(',');
    return parts[0]?.trim() || fullAddress;
  };

  // Fonction pour récupérer les suggestions d'adresses françaises
  const fetchAddressSuggestions = async (query: string) => {
    if (query.length < 3) {
      setAddressSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(query)}&limit=8`
      );
      if (response.ok) {
        const data = await response.json();
        const suggestions = data.features.map((feature: any) => feature.properties.label);
        setAddressSuggestions(suggestions);
      }
    } catch (error) {
      console.error("Erreur API Adresse:", error);
      setAddressSuggestions([]);
    }
  };

  // Fonction pour gérer la sélection d'une adresse
  const handleAddressSelect = async (selectedAddress: string) => {
    // Extraire seulement la partie adresse (sans ville/code postal)
    const addressOnly = extractAddressOnly(selectedAddress);
    handleChange("adresse", addressOnly);
    
    // Récupérer les détails de l'adresse sélectionnée pour auto-remplir
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(selectedAddress)}&limit=1`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.features.length > 0) {
          const feature = data.features[0].properties;
          handleChange("ville", feature.city || "");
          handleChange("codePostal", feature.postcode || "");
          handleChange("pays", "France");
        }
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des détails d'adresse:", error);
    }
  };

  // Fonction pour valider l'adresse quand l'utilisateur tape sans sélectionner
  const handleAddressBlur = () => {
    const currentAddress = formData.adresse;
    
    // Si l'utilisateur a tapé une adresse mais n'a pas sélectionné de suggestion
    // et que ville/code postal sont vides, on essaie de les remplir automatiquement
    if (currentAddress && currentAddress.length > 5 && !formData.ville && !formData.codePostal) {
      // Tentative de récupération automatique des données
      fetchAddressDetails(currentAddress);
    }
  };

  // Fonction pour récupérer les détails d'une adresse tapée manuellement
  const fetchAddressDetails = async (address: string) => {
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.features.length > 0) {
          const feature = data.features[0].properties;
          // Auto-remplir seulement si les champs sont vides
          if (!formData.ville) handleChange("ville", feature.city || "");
          if (!formData.codePostal) handleChange("codePostal", feature.postcode || "");
          if (!formData.pays) handleChange("pays", "France");
        }
      }
    } catch (error) {
      console.error("Erreur lors de la récupération automatique:", error);
    }
  };

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
        <div className="md:col-span-2">
          <AutocompleteInput
            label="Adresse complète *"
            name="adresse"
            value={formData.adresse || ""}
            onChange={(val) => {
              handleChange("adresse", val);
              fetchAddressSuggestions(val);
            }}
            onSelect={handleAddressSelect}
            onBlur={handleAddressBlur}
            placeholder="Commencez à taper votre adresse (ex: 126 Avenue de la République)"
            options={addressSuggestions}
            isFreeText={true}
            error={errors.adresse}
          />
        </div>
        <div>
          <label className={getLabelClass(errors.ville)}>Ville</label>
          <input
            type="text"
            name="ville"
            value={formData.ville || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={getInputClass(errors.ville)}
            placeholder={formData.ville ? "Auto-rempli" : "Remplissage automatique"}
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.ville ? "✓ Rempli automatiquement" : "Se remplit en sélectionnant une adresse"}
          </p>
        </div>
        <div>
          <label className={getLabelClass(errors.codePostal)}>Code Postal</label>
          <input
            type="text"
            name="codePostal"
            value={formData.codePostal || ""}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={getInputClass(errors.codePostal)}
            placeholder={formData.codePostal ? "Auto-rempli" : "Remplissage automatique"}
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.codePostal ? "✓ Rempli automatiquement" : "Se remplit en sélectionnant une adresse"}
          </p>
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

      {/* Option Carte Fidélité */}
      <div className="bg-orange-50 p-4 rounded-lg flex items-start gap-3 mt-8 border border-orange-100">
        <input 
          type="checkbox" 
          id="carteFidelite" 
          name="carteFidelite"
          checked={formData.carteFidelite || false}
          onChange={(e) => handleChange("carteFidelite", e.target.checked)}
          className="mt-1 w-5 h-5 text-accent rounded border-gray-300 focus:ring-accent shrink-0 cursor-pointer" 
        />
        <label htmlFor="carteFidelite" className="text-sm text-gray-800 cursor-pointer select-none">
          <strong>Je souhaite recevoir ma Carte de Fidélité GTA gratuitement.</strong>
          <br/>
          <span className="text-gray-500 text-xs">
            Profitez de l'offre 5 = 1 (La 6ème expédition offerte sur les effets personnels).
          </span>
        </label>
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

