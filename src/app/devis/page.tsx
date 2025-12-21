"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { DevisProvider, useDevis } from "./context/DevisContext";
import Stepper from "./components/Stepper";
import Navigation from "./components/Navigation";
import StepTransport from "./components/steps/StepTransport";
import StepTrajet from "./components/steps/StepTrajet";
import StepMarchandise from "./components/steps/StepMarchandise";
import StepProjet from "./components/steps/StepProjet";
import StepContact from "./components/steps/StepContact";

function DevisContent() {
  const { step, isSuccess, formData, submitForm } = useDevis();

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Demande Envoyée !
          </h2>
          <p className="text-gray-600 mb-8">
            Merci {formData.prenom} {formData.nom}, votre demande de cotation a
            bien été reçue. Notre équipe commerciale va étudier votre projet et
            vous répondra sous 24h à l'adresse <strong>{formData.email}</strong>
            .
          </p>
          <a
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary transition-colors"
          >
            Retour à l'accueil
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-zinc-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Demande de Cotation
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Vous avez besoin de transporter un ou plusieurs produits vers une
            destination internationale (Europe, Afrique, Asie, Amérique,
            Antilles, Australie...), il vous faut un partenaire transitaire qui
            respecte ses engagements. Spécialiste du transport international,
            GTA maîtrise le fret Maritime et Aérien et assure les formalités
            administratives et douanières.
          </p>
        </div>

        {/* Stepper Progress */}
        <Stepper />

        {/* Form Container */}
        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-xl">
          <form
            id="devis-form"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <AnimatePresence mode="wait">
              {step === 1 && <StepTransport key="step1" />}
              {step === 2 && <StepTrajet key="step2" />}
              {step === 3 && <StepMarchandise key="step3" />}
              {step === 4 && <StepProjet key="step4" />}
              {step === 5 && <StepContact key="step5" />}
            </AnimatePresence>
          </form>

          {/* Navigation Buttons */}
          <Navigation />
        </div>
      </div>
    </main>
  );
}

export default function DevisPage() {
  return (
    <DevisProvider>
      <DevisContent />
    </DevisProvider>
  );
}
