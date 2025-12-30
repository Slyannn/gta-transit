import React from "react";
import { motion } from "framer-motion";
import { Truck, Ship, Plane, Shield, Box, HelpCircle, FastForward } from "lucide-react";
import { useDevis } from "../../context/DevisContext";

export default function StepTransport() {
  const { formData, handleChange, nextStep } = useDevis();

  const modes = ["Maritime", "Aérien", "Déménagement", "Express", "Logistique", "Autre"];

  const handleSelection = (mode: string) => {
    handleChange("modeTransport", mode);
    // Petit délai pour laisser l'utilisateur voir la sélection avant de changer de page
    setTimeout(() => {
        nextStep();
    }, 300);
  };

  return (
    <motion.div
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
            <label className="block text-lg font-medium text-gray-700 mb-6 text-center">
              Comment souhaitez-vous acheminer vos colis ?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto ">
              {modes.map((mode) => (
                <label key={mode} className="cursor-pointer group">
                  <input
                    type="radio"
                    name="modeTransport"
                    value={mode}
                    checked={formData.modeTransport === mode}
                    onChange={() => handleSelection(mode)}
                    className="peer sr-only"
                  />
                  <div className="flex flex-col items-center justify-center p-6 h-32 border-2 border-gray-300 rounded-xl text-gray-500 text-center hover:border-accent hover:bg-accent/5 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-checked:shadow-lg transition-all duration-300 transform peer-checked:scale-105">
                    {mode === "Maritime" && <Ship className="mb-2" size={32} />}
                    {mode === "Aérien" && <Plane className="mb-2" size={32} />}
                    {mode === "Déménagement" && <Truck className="mb-2" size={32} />}
                    {mode === "Express" && <FastForward className="mb-2" size={32} />}
                    {mode === "Logistique" && <Box className="mb-2" size={32} />}
                    {mode === "Autre" && <HelpCircle className="mb-2" size={32} />}
                    
                    <span className="font-bold text-lg">{mode}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

