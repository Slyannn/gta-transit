"use client";

import { motion } from "framer-motion";
import { Globe, Users, Navigation, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const WorldMapSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-900 flex flex-col md:block">
      
      {/* Background Image - Absolute to cover the whole section */}
      <div className="absolute inset-0 z-0">
        <Image
            src="/World_presence.jpg" 
            alt="Carte du monde GTA Transit"
            fill
            className="object-cover object-center"
            priority
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      {/* Main Content Wrapper - Flex column to push stats to bottom naturally on mobile */}
      <div className="relative z-10 flex flex-col min-h-[600px] md:min-h-[70vh]">
          
          {/* Text Content - Centered in remaining space */}
          <div className="flex-grow flex items-center justify-center px-4 py-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white max-w-4xl mx-auto space-y-6 md:space-y-8"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Une présence mondiale <br/>
                <span className="text-accent">pour une action locale</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-2">
                    Notre réseau étendu de partenaires nous permet d'opérer sur les 5 continents avec la même efficacité et le même niveau d'exigence.
                </p>

                <div className="pt-4 md:pt-8">
                <Link 
                    href="/devis" 
                    className="inline-flex items-center px-8 py-4 bg-accent hover:bg-white hover:text-accent text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-accent/20"
                >
                    <Globe className="mr-2 h-5 w-5" />
                    Découvrir notre réseau
                </Link>
                </div>
            </motion.div>
          </div>

          {/* Stats Band Removed - Moved to dedicated section */}
      </div>
    </section>
  );
};

export default WorldMapSection;