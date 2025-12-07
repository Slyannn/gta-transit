"use client";

import { motion } from "framer-motion";
import { Plane, Clock, TrendingUp, ArrowRight, Package } from "lucide-react";

export default function AerienPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop')" }}
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Fret Aérien
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
             <h2 className="text-3xl font-bold text-primary mb-6">Rapidité et Compétitivité</h2>
             <p className="text-lg text-gray-600 leading-relaxed mb-6">
               Comment tirer le meilleur parti du fret aérien ? L’avion peut être un levier puissant pour améliorer votre rentabilité et votre compétitivité sur les marchés étrangers.
             </p>
             <p className="text-gray-600 leading-relaxed">
               La rapidité du fret aérien permet non seulement de gagner du temps, mais aussi de limiter les risques de change liés à l'inflation dans certains pays.
             </p>
           </div>
           <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Gains Financiers Directs</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <TrendingUp className="text-green-600 shrink-0" />
                  <span className="text-gray-600">Économies de trésorerie pour l'exportateur (paiement lié à la livraison).</span>
                </li>
                <li className="flex gap-3">
                  <TrendingUp className="text-green-600 shrink-0" />
                  <span className="text-gray-600">Avantage importateur : la marchandise est vendue ou utilisée plus tôt.</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="text-green-600 shrink-0" />
                  <span className="text-gray-600">Réponse immédiate aux commandes urgentes.</span>
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Services Spécifiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Nos Solutions Aériennes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-50 rounded-xl hover:shadow-md transition-shadow">
               <Plane className="w-12 h-12 text-accent mx-auto mb-4" />
               <h3 className="text-xl text-secondary font-bold mb-3">Fret Express</h3>
               <p className="text-gray-600 text-sm">Pour vos envois les plus urgents, documents ou colis, avec un suivi prioritaire.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-xl hover:shadow-md transition-shadow">
               <Package className="w-12 h-12 text-accent mx-auto mb-4" />
               <h3 className="text-xl text-secondary font-bold mb-3">Groupage Aérien</h3>
               <p className="text-gray-600 text-sm">Mutualisez les coûts pour vos envois moins volumineux tout en gardant la rapidité de l'avion.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-xl hover:shadow-md transition-shadow">
               <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
               <h3 className="text-xl text-secondary font-bold mb-3">Service Commercial</h3>
               <p className="text-gray-600 text-sm">Une équipe spécialement conçue pour répondre à vos problématiques de transport international.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Vos marchandises n'attendent pas</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Profitez de notre réseau aérien mondial pour accélérer vos échanges.
          </p>
          <a 
            href="/devis" 
            className="inline-flex items-center bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
          >
            Obtenir une cotation express <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}


