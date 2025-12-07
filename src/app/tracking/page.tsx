"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, Ship, MapPin, CheckCircle, Clock, Truck, ArrowRight } from "lucide-react";

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsSearching(true);
    setError("");
    setResult(null);

    // Simulation d'un appel API (délai de 1.5s)
    setTimeout(() => {
      setIsSearching(false);
      // Simulation: On accepte n'importe quel code, ou on peut forcer une erreur
      if (trackingId.length < 3) {
        setError("Numéro de suivi invalide. Veuillez vérifier votre saisie.");
      } else {
        setResult(MOCK_SHIPMENT_DATA);
      }
    }, 1500);
  };

  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-primary py-16 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Suivi de Colis & Conteneurs</h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Entrez votre numéro de dossier ou de récépissé pour connaître l'état d'avancement de votre expédition en temps réel.
        </p>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto border border-gray-100">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900" />
              <input
                type="text"
                placeholder="Ex: GTA-2024-8892 ou Numéro de Conteneur"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all uppercase text-gray-900 font-medium"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSearching ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Recherche...
                </>
              ) : (
                "Suivre mon envoi"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Result Section */}
      <section className="container mx-auto px-4 py-12 max-w-4xl">
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 text-red-600 p-4 rounded-lg text-center border border-red-100"
          >
            {error}
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Shipment Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 p-6 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Numéro de suivi</p>
                  <p className="text-2xl font-bold text-primary">{trackingId.toUpperCase()}</p>
                </div>
                <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  En cours d'acheminement
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg"><MapPin className="text-primary" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Origine</p>
                    <p className="font-bold text-gray-800">{result.origin}</p>
                  </div>
                </div>
                <div className="hidden md:flex justify-center items-center text-gray-300">
                  <ArrowRight />
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-orange-50 p-3 rounded-lg"><MapPin className="text-accent" /></div>
                  <div>
                    <p className="text-sm text-gray-500">Destination</p>
                    <p className="font-bold text-gray-800">{result.destination}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50/50 px-6 py-4 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block">Type</span>
                  <span className="font-medium">{result.type}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Poids/Vol</span>
                  <span className="font-medium">{result.weight}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Date d'envoi</span>
                  <span className="font-medium">{result.sendDate}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Est. Arrivée</span>
                  <span className="font-medium">{result.eta}</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-primary mb-8">Historique d'acheminement</h3>
              <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                {result.timeline.map((step: any, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* Dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                      step.completed 
                        ? "bg-green-500 border-green-500" 
                        : "bg-white border-gray-300"
                    }`}></div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                      <div>
                        <h4 className={`text-lg font-bold ${step.completed ? "text-gray-800" : "text-gray-400"}`}>
                          {step.status}
                        </h4>
                        <p className="text-gray-500 text-sm">{step.location}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full w-fit">
                        <Clock size={14} />
                        {step.date}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </section>
    </main>
  );
}

// Données fictives pour la simulation
const MOCK_SHIPMENT_DATA = {
  origin: "Entrepôt Paris (Saint-Denis)",
  destination: "Port de Douala, Cameroun",
  type: "Groupage Maritime (Effets Personnels)",
  weight: "450 kg / 2.5 m³",
  sendDate: "01/12/2025",
  eta: "22/12/2025",
  status: "in_transit",
  timeline: [
    {
      status: "Arrivée au Port de Douala",
      location: "Douala, Cameroun",
      date: "Prévu le 22/12/2025",
      completed: false
    },
    {
      status: "En transit maritime",
      location: "Océan Atlantique",
      date: "05/12/2025 - 14:30",
      completed: true
    },
    {
      status: "Embarquement sur navire",
      location: "Port du Havre, France",
      date: "04/12/2025 - 09:15",
      completed: true
    },
    {
      status: "Dédouanement Export",
      location: "Douane Française",
      date: "03/12/2025 - 16:45",
      completed: true
    },
    {
      status: "Réception à l'entrepôt",
      location: "Saint-Denis (93)",
      date: "01/12/2025 - 10:00",
      completed: true
    }
  ]
};

