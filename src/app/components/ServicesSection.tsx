"use client";

import { ArrowRight, Ship, Plane, Container } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-zinc-50">
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
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Ship size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Fret Maritime</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Groupeur Transitaire Associés domine en volume de fret.
                Solutions complètes FCL et LCL adaptées à vos besoins.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">• FCL maritime (Conteneur complet)</li>
                <li className="flex items-center">• LCL maritime (Groupage)</li>
                <li className="flex items-center">• Projet cargo et hors gabarit</li>
              </ul>
              <a href="/maritime" className="text-accent font-semibold flex items-center hover:gap-2 transition-all">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>

            {/* Carte Aérien */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-accent/20 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4"></div>
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                <Plane size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Fret Aérien</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Votre partenaire en fret aérien pour des solutions rapides et sécurisées.
                Express ou standard selon vos urgences.
              </p>
               <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">• Express urgent</li>
                <li className="flex items-center">• Charter et affrètement</li>
                <li className="flex items-center">• Température dirigée</li>
              </ul>
              <a href="/aerien" className="text-accent font-semibold flex items-center hover:gap-2 transition-all">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>

            {/* Carte Transport de véhicules */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <Container size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Transport de véhicules</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transport de véhicules par voie maritime, aérienne ou routière.
                Nous gérons vos formalités complexes.
              </p>
               <ul className="space-y-2 mb-8 text-sm text-gray-500">
                <li className="flex items-center">• Solutions de dédouanement</li>
                <li className="flex items-center">• Entreposage sécurisé</li>
                <li className="flex items-center">• Solutions de transit sous douane</li>
              </ul>
              <a href="/douane" className="text-accent font-semibold flex items-center hover:gap-2 transition-all">
                En savoir plus <ArrowRight size={16} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default ServicesSection;



