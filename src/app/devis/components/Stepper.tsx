import React from "react";
import { Check, Truck, MapPin, Package, Search, User } from "lucide-react";
import { useDevis } from "../context/DevisContext";

export default function Stepper() {
  const { step, formData } = useDevis();
  const isLogistique = formData.modeTransport === "Logistique";

  // Calculate effective step for display (Logistique skips step 2)
  const getDisplayStep = () => {
    if (isLogistique) {
      if (step === 1) return 1;
      if (step === 3) return 2;
      if (step === 4) return 3;
      if (step === 5) return 4;
    }
    return step;
  };

  const totalSteps = isLogistique ? 4 : 5;
  const displayStep = getDisplayStep();

  const getStepName = () => {
    if (isLogistique) {
      if (step === 1) return "Transport";
      if (step === 3) return "Marchandise";
      if (step === 4) return "Projet";
      if (step === 5) return "Contact";
    }
    if (step === 1) return "Transport";
    if (step === 2) return "Trajet";
    if (step === 3) return "Marchandise";
    if (step === 4) return "Projet";
    return "Contact";
  };

  return (
    <div className="flex justify-center items-center mb-8 md:mb-12">
      {/* Mobile Stepper - Simple Text */}
      <div className="md:hidden w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-primary">Étape {displayStep}/{totalSteps}</span>
          <span className="text-xs text-gray-500 uppercase font-semibold">
            {getStepName()}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${(displayStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Desktop Stepper */}
      <div className="hidden md:flex items-center w-full justify-center">
        {isLogistique ? (
          // Logistique mode: 4 steps (no Trajet)
          <>
            <StepItem currentStep={step} stepNumber={1} icon={Truck} label="Transport" isLogistique />
            <StepConnector currentStep={step} stepNumber={3} isLogistique />
            <StepItem currentStep={step} stepNumber={3} icon={Package} label="Marchandise" isLogistique displayNumber={2} />
            <StepConnector currentStep={step} stepNumber={4} isLogistique />
            <StepItem currentStep={step} stepNumber={4} icon={Search} label="Projet" isLogistique displayNumber={3} />
            <StepConnector currentStep={step} stepNumber={5} isLogistique />
            <StepItem currentStep={step} stepNumber={5} icon={User} label="Contact" isLogistique displayNumber={4} />
          </>
        ) : (
          // Standard mode: 5 steps
          <>
            <StepItem currentStep={step} stepNumber={1} icon={Truck} label="Transport" />
            <StepConnector currentStep={step} stepNumber={2} />
            <StepItem currentStep={step} stepNumber={2} icon={MapPin} label="Trajet" />
            <StepConnector currentStep={step} stepNumber={3} />
            <StepItem currentStep={step} stepNumber={3} icon={Package} label="Marchandise" />
            <StepConnector currentStep={step} stepNumber={4} />
            <StepItem currentStep={step} stepNumber={4} icon={Search} label="Projet" />
            <StepConnector currentStep={step} stepNumber={5} />
            <StepItem currentStep={step} stepNumber={5} icon={User} label="Contact" />
          </>
        )}
      </div>
    </div>
  );
}

function StepItem({ currentStep, stepNumber, icon: Icon, label, isLogistique, displayNumber }: any) {
  const isActive = currentStep >= stepNumber;
  const isCompleted = currentStep > stepNumber;
  const labelNumber = displayNumber || stepNumber;

  return (
    <div className={`flex flex-col items-center gap-2 ${isActive ? "text-accent" : "text-gray-400"}`}>
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors ${
          isActive ? "bg-accent text-white border-accent" : "bg-white border-gray-300"
        }`}
      >
        {isCompleted ? <Check size={24} /> : <Icon size={24} />}
      </div>
      <span className="text-sm font-bold uppercase tracking-wider">{labelNumber}. {label}</span>
    </div>
  );
}

function StepConnector({ currentStep, stepNumber, isLogistique }: any) {
  return (
    <div
      className={`w-12 h-1 mx-2 transition-colors ${
        currentStep >= stepNumber ? "bg-accent" : "bg-gray-200"
      }`}
    ></div>
  );
}

