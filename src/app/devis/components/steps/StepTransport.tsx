import React from "react";
import { motion } from "framer-motion";
import { Truck, Ship, Plane, Shield, Box, HelpCircle, FastForward } from "lucide-react";
import { useDevis } from "../../context/DevisContext";

export default function StepTransport() {
  const { formData, handleChange, nextStep } = useDevis();

  const modes = [
    { value: "Maritime", label: "Fret Maritime" },
    { value: "Aérien", label: "Fret Aérien" },
    { value: "Déménagement", label: "Déménagement" },
    { value: "Express", label: "Transport Express" },
    { value: "Logistique", label: "Logistique" }
  ];

  const handleSelection = (modeValue: string) => {
    handleChange("modeTransport", modeValue);
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
          <Truck className="text-accent" /> Service de Transport
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-6 text-center">
              Quel service souhaitez-vous ?
            </label>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {modes.map((mode) => (
                <label key={mode.value} className="cursor-pointer group w-full sm:w-[45%] md:w-[30%]">
                  <input
                    type="radio"
                    name="modeTransport"
                    value={mode.value}
                    checked={formData.modeTransport === mode.value}
                    onChange={() => handleSelection(mode.value)}
                    className="peer sr-only"
                  />
                  <div className="flex flex-col items-center justify-center p-6 h-36 border-2 border-gray-200 bg-white rounded-2xl text-gray-500 text-center hover:border-accent hover:bg-accent/5 peer-checked:border-accent peer-checked:bg-accent peer-checked:text-white peer-checked:shadow-xl transition-all duration-300 transform peer-checked:scale-105 peer-checked:hover:bg-accent peer-checked:hover:text-white peer-checked:hover:border-accent">
                    {mode.value === "Maritime" && <Ship className="mb-3" size={36} />}
                    {mode.value === "Aérien" && <Plane className="mb-3" size={36} />}
                    {mode.value === "Déménagement" && <Truck className="mb-3" size={36} />}
                    {mode.value === "Express" && <FastForward className="mb-3" size={36} />}
                    {mode.value === "Logistique" && <Box className="mb-3" size={36} />}
                    
                    <span className="font-bold text-lg tracking-wide">{mode.label}</span>
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

