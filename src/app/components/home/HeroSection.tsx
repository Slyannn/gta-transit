"use client";

import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center bg-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
           <div className="absolute inset-0 left-0 lg:w-1/2 h-full pointer-events-none"
                style={{
                  background: "linear-gradient(to right, rgba(8,47,73,0.7) 75%, rgba(8,47,73,0) 100%)"
                }}
           ></div>
           <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              VOTRE COMMISSIONNAIRE EN <br/>
              <span className="text-accent">TRANSPORT INTERNATIONAL.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light">
              Spécialiste du fret maritime, aérien et routier à l'échelle mondiale.
              Nous simplifions vos échanges commerciaux avec une expertise reconnue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/devis" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1"
              >
                OBTENIR UNE COTATION
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="/tracking" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
              >
                <Search className="mr-2 h-5 w-5" />
                SUIVRE UN COLIS
              </a>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default HeroSection;

