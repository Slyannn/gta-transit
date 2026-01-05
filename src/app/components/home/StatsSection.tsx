"use client";

import { motion } from "framer-motion";
import { Users, Navigation, Calendar, Globe } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-12 bg-slate-900 border-b border-white/10 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-center space-y-2"
          >
            <div className="text-3xl md:text-5xl font-bold text-accent">+50</div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <Navigation size={16} /> Destinations
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-center space-y-2"
          >
            <div className="text-3xl md:text-5xl font-bold text-white">+200</div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <Users size={16} /> Partenaires
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-center space-y-2"
          >
            <div className="text-3xl md:text-5xl font-bold text-accent">+25</div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <Calendar size={16} /> Années d'expérience
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="text-center space-y-2"
          >
            <div className="text-3xl md:text-5xl font-bold text-white">24/7</div>
            <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <Globe size={16} /> Support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

