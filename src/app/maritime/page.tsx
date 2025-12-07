"use client";

import { motion } from "framer-motion";
import { Ship, Anchor, Globe, FileCheck, ArrowRight, CheckCircle } from "lucide-react";

export default function MaritimePage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/Fret-istock.jpg')" }}
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Fret Maritime
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Une expertise mondiale à votre service</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Présent directement ou indirectement dans tous les ports du monde, GTA suit au plus près l’ensemble des frets qui lui sont confiés.
            Exporter, importer, c’est transporter et distribuer en faisant la preuve de votre dynamisme commercial.
          </p>
          <p className="text-gray-600 italic border-l-4 border-accent pl-4 text-left max-w-2xl mx-auto bg-white p-6 shadow-sm rounded-r-lg">
            "Évitez les pertes de temps, les frais de mise à terre et les complications administratives. GTA vous offre un service personnalisé, simple, rapide et fiable."
          </p>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Colonne Gauche : Nos Offres */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Ship className="text-accent" /> Des transports sur mesure
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Dessertes Régulières</h4>
                    <p className="text-gray-600 text-sm">Pour vos conteneurs de groupage (LCL) ou conteneurs complets (FCL).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Acheminements Spécialisés</h4>
                    <p className="text-gray-600 text-sm">Ponctuels et programmés avec vous pour répondre à vos impératifs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Couverture Mondiale</h4>
                    <p className="text-gray-600 text-sm">Liaisons avec tous les ports vers tous les pays du monde et l’ensemble de l’Europe.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Colonne Droite : Tarifs & Administratif */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FileCheck className="text-accent" /> Tarifs & Administratif
              </h3>
              <div className="bg-zinc-50 p-8 rounded-2xl border border-gray-100">
                <p className="mb-4 text-gray-700 font-medium">Un seul contact pour un service complet :</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">Prix applicable de bout en bout tendant à effacer les frontières tarifaires.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">Prix négociable au cas par cas et stable pendant un an.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">Contrat unique quel que soit le nombre d’expéditions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une cotation maritime ?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts sont prêts à optimiser votre chaîne logistique maritime.
            Contactez-nous pour une offre personnalisée.
          </p>
          <a 
            href="/devis" 
            className="inline-flex items-center bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-accent transition-colors shadow-lg"
          >
            Demander un Devis <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}
