"use client";

import { motion } from "framer-motion";
import { Globe, Users, Navigation, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const WorldMapSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
            src="/World_presence.jpg" 
            alt="Carte du monde GTA Transit"
            fill
            className="object-cover object-center"
            priority
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Une présence mondiale <br/>
              <span className="text-accent">pour une action locale</span>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Notre réseau étendu de partenaires nous permet d'opérer sur les 5 continents avec la même efficacité et le même niveau d'exigence.
            </p>

            <div className="pt-8">
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

      {/* Stats Band */}
      <div className="absolute bottom-0 w-full bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-10 z-20">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-accent">+50</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
                          <Navigation size={16} /> Destinations
                      </div>
                  </div>
                  <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-white">+200</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
                          <Users size={16} /> Partenaires
                      </div>
                  </div>
                  <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-accent">+15</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
                          <Calendar size={16} /> Années d'expérience
                      </div>
                  </div>
                   <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-white">24/7</div>
                      <div className="text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
                          <Globe size={16} /> Support
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default WorldMapSection;