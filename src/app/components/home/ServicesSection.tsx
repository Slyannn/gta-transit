"use client";

import { ArrowRight, Ship, Plane, Truck } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-zinc-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Une gamme complète de services</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte Maritime */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Ship size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Fret Maritime</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Présent dans tous les ports, GTA simplifie vos échanges. 
                Nous offrons des transports sur mesure, des tarifs compétitifs négociés et une gestion administrative complète pour éviter les pertes de temps.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">• Dessertes régulières (Groupage & Complet)</li>
                <li className="flex items-center">• Prix stable et négociable</li>
                <li className="flex items-center">• Suivi de bout en bout</li>
              </ul>
              <a href="/maritime" className="text-accent font-semibold flex items-center hover:gap-2 transition-all mt-auto">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>

            {/* Carte Aérien */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-accent/20 relative overflow-hidden group flex flex-col"
            >
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                <Plane size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Fret Aérien</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Améliorez votre rentabilité et compétitivité grâce à la rapidité de l'aérien.
                Idéal pour répondre aux urgences et limiter les risques de change, avec un service spécialement conçu pour le commerce international.
              </p>
               <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">• Optimisation de trésorerie</li>
                <li className="flex items-center">• Réponse rapide aux commandes</li>
                <li className="flex items-center">• Service commercial dédié</li>
              </ul>
              <a href="/aerien" className="text-accent font-semibold flex items-center hover:gap-2 transition-all mt-auto">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>

            {/* Carte Véhicules */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Transport de Véhicules</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                Une solution sur-mesure en RO/RO ou conteneur pour vos véhicules neufs, d'occasion ou accidentés.
                Prise en charge complète depuis la France ou la Belgique vers l'Afrique et l'international.
              </p>
               <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">• RO/RO et Conteneur sécurisé</li>
                <li className="flex items-center">• Enlèvement et livraison à quai</li>
                <li className="flex items-center">• Formalités douanières incluses</li>
              </ul>
              <a href="/vehicules" className="text-accent font-semibold flex items-center hover:gap-2 transition-all mt-auto">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;
