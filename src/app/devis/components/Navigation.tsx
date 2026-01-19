import React from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { useDevis } from "../context/DevisContext";

export default function Navigation() {
  const { step, nextStep, prevStep, isSubmitting, formData } = useDevis();

  const mode = formData.modeTransport;
  const isLogistique = mode === "Logistique";

  // Dynamic button text based on step and mode
  const getNextButtonText = () => {
    if (step === 1) {
      // If Logistique, skip Trajet
      return isLogistique ? "Suivant : Marchandise" : "Suivant : Trajet";
    }
    if (step === 2) return "Suivant : Marchandise";
    if (step === 3) return "Suivant : Projet";
    return "Suivant : Vos Coordonnées";
  };

  // Dynamic back button text
  const getBackButtonText = () => {
    if (step === 3 && isLogistique) return "Retour : Transport";
    if (step === 3) return "Retour : Trajet";
    if (step === 2) return "Retour : Transport";
    return "Retour";
  };

  return (
    <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
      <div>
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-semibold transition-colors"
          >
            <ChevronLeft size={20} /> {getBackButtonText()}
          </button>
        )}
      </div>

      <div>
        {step < 5 && (
          <button
            type="button"
            onClick={() => nextStep()}
            className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-secondary font-bold shadow-lg transition-transform hover:-translate-y-1"
          >
            {getNextButtonText()}
            <ChevronRight size={20} />
          </button>
        )}

        {step === 5 && (
          <button
            type="submit"
            form="devis-form"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-10 py-4 rounded-lg bg-accent text-white hover:bg-orange-600 font-bold shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1"
          >
            {isSubmitting ? "Envoi en cours..." : "OBTENIR MON DEVIS GRATUIT"}
            <Send size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

