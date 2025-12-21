import React from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { useDevis } from "../context/DevisContext";

export default function Navigation() {
  const { step, nextStep, prevStep, isSubmitting } = useDevis();

  return (
    <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
      <div>
        {step > 1 && (
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-semibold transition-colors"
          >
            <ChevronLeft size={20} /> Retour
          </button>
        )}
      </div>

      <div>
        {step < 5 && (
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-white hover:bg-secondary font-bold shadow-lg transition-transform hover:-translate-y-1"
          >
            {step === 1 ? "Suivant : Trajet" :
             step === 2 ? "Suivant : Marchandise" :
             step === 3 ? "Suivant : Projet" :
             "Suivant : Vos Coordonnées"}
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

