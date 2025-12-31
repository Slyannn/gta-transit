"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Anchor, Globe, FileCheck } from "lucide-react";
import Link from "next/link";

const CommissionnaireSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary to-zinc-900 text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-accent font-semibold text-sm border border-white/10">
               <ShieldCheck size={18} />
               <span>AGRÉMENT OFFICIEL</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Plus qu'un transporteur, <br/>
              <span className="text-accent">un véritable partenaire stratégique.</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              En tant que <span className="text-white font-semibold">Commissionnaire de Transport</span>, GTA ne se contente pas d'exécuter. Nous concevons et pilotons l'intégralité de votre chaîne logistique. Nous sommes votre interlocuteur unique, responsable de la réussite de vos opérations, de l'enlèvement à la livraison finale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg h-fit text-accent shrink-0">
                    <Anchor size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Choix Libre</h4>
                    <p className="text-sm text-gray-400">Nous sélectionnons les meilleures compagnies maritimes et aériennes pour votre compte, en toute indépendance.</p>
                  </div>
               </div>
               
               <div className="flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg h-fit text-accent shrink-0">
                    <FileCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Garantie Totale</h4>
                    <p className="text-sm text-gray-400">Contrairement au mandataire, nous engageons notre responsabilité sur la bonne exécution du transport.</p>
                  </div>
               </div>
            </div>

            <div className="pt-6">
              <Link 
                href="/commissionnaire" 
                className="group inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg font-bold hover:bg-white hover:text-accent transition-all duration-300 shadow-lg shadow-accent/20"
              >
                Comprendre nos engagements
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <div 
                 className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')" }} 
               ></div>
               <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
               
               {/* Floating Card */}
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                 <div className="flex items-center gap-4 mb-3">
                   <div className="bg-accent rounded-full p-2 text-white">
                     <Globe size={20} />
                   </div>
                   <div className="font-bold text-white">Expertise Mondiale</div>
                 </div>
                 <p className="text-gray-300 text-sm">
                   Une maîtrise parfaite des incoterms et des réglementations douanières pour sécuriser vos échanges internationaux.
                 </p>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommissionnaireSection;
