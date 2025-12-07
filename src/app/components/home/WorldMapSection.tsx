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
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg group transform hover:scale-105"
              >
                <Globe className="mr-3 h-5 w-5 text-accent group-hover:text-white group-hover:rotate-180 transition-all duration-500" />
                CONTACTER NOTRE RÉSEAU
              </a>
            </motion.div>
          </div>

          {/* World Map Visualization */}
          <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
             
             {/* Illustration Logistique Mondiale */}
             <div 
               className="absolute inset-0 bg-contain bg-center bg-no-repeat rounded-2xl overflow-hidden"
               style={{ 
                 backgroundImage: "url('/World_presence.jpg')"
               }}
             ></div>
             
             {/* Note: Je remplace l'image par une URL externe temporaire qui ressemble au style demandé. 
                 Idéalement, vous devriez télécharger votre image "image.png", la mettre dans le dossier /public 
                 et utiliser src="/image.png" pour un résultat exact. */}

          </div>
        </div>
      </section>
  );
};

export default WorldMapSection;
