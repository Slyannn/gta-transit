"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const WorldMapSection = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden text-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Présent dans tous les ports <br/>
                <span className="text-accent">et aéroports du monde</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Présent dans tous les ports et aéroports du monde, notre réseau 
                de partenaires couvre les cinq continents pour vous assurer des solutions
                stratégiques et maîtrisées et des livraisons de port à port ou porte à porte.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg group"
              >
                <Globe className="mr-3 h-5 w-5 text-accent group-hover:rotate-12 transition-transform" />
                CONTACTER NOTRE RÉSEAU
              </a>
            </motion.div>
          </div>

          {/* World Map Visualization (Abstract) */}
          <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
             {/* Simple Abstract Map Representation with Circles */}
             <div className="relative w-full h-full opacity-30">
                <svg viewBox="0 0 800 400" className="w-full h-full fill-current text-white">
                  {/* Simplified World Map Paths would go here - using circles for abstract representation */}
                  <circle cx="200" cy="150" r="40" />
                  <circle cx="230" cy="180" r="30" />
                  <circle cx="400" cy="200" r="60" />
                  <circle cx="550" cy="150" r="50" />
                  <circle cx="600" cy="250" r="30" />
                  <circle cx="150" cy="250" r="30" />
                </svg>
             </div>
             
             {/* Animated Connection Points */}
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute top-1/3 left-1/4 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]" 
             />
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 4, repeat: Infinity, delay: 1 }}
               className="absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
             />
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
               transition={{ duration: 3, repeat: Infinity, delay: 2 }}
               className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(249,115,22,0.6)]" 
             />
          </div>
        </div>
      </section>
  );
};

export default WorldMapSection;



