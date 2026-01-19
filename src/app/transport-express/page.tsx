"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Truck, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TransportExpressPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500 selection:text-white overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Network Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506972849873-0ce0dfc4d187?q=80&w=1974&auto=format&fit=crop" // Night City/Road with lights
            alt="Transport Express Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-slate-700/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
          
          {/* Network/Constellation Effect (CSS Overlay or SVG if needed, simulating with radial gradient for focus) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Label with Star */}
            <div className="flex items-center justify-center gap-2 text-amber-500 font-semibold tracking-wider uppercase text-sm mb-6">
              <Star className="fill-amber-500 w-4 h-4" />
              <span>Qualité, rapidité, sécurité</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight">
              Transport Express
            </h1>
            
            {/* Subtitle with Gradient */}
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-8">
              Colis & Courriers
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Rapide, fiable, partout en France sur le territoire national. <br className="hidden md:block" />
              Une solution sur-mesure pour vos urgences critiques.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/devis?mode=express" 
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Commander une course 
                <Zap size={20} className="group-hover:text-yellow-200 transition-colors" />
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full transition-all hover:bg-white hover:text-slate-900"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Decorative Element (Star icon in corner as per some designs, or just scroll indicator) */}
        <div className="absolute bottom-8 right-8 text-white/20 animate-pulse">
           <Star size={48} />
        </div>
      </section>

      {/* Qui Sommes Nous */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-lg relative z-10 border-y border-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Une solution pensée pour <span className="text-amber-400">vos urgences</span>.
              </h2>
              <div className="space-y-6 text-lg text-slate-300">
                <p>
                  Créée pour répondre aux besoins croissants de rapidité et de flexibilité, notre société est spécialisée dans le <strong className="text-white">transport express routier en véhicule léger (3,5T)</strong>.
                </p>
                <p>
                  Nous assurons l’enlèvement immédiat et la livraison directe de vos colis et courriers, <span className="text-white font-semibold underline decoration-amber-500/50 underline-offset-4">sans rupture de charge</span>, afin de garantir des délais optimisés et une sécurité maximale.
                </p>
                <p className="italic border-l-4 border-amber-500 pl-4 py-2 bg-white/5">
                  "Notre priorité : livrer vos envois dans les meilleurs délais, en toute confiance."
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-2xl rounded-full"></div>
              <div className="relative rounded-2xl shadow-2xl border border-white/10 overflow-hidden h-[400px]">
                 <Image 
                    src="https://images.unsplash.com/photo-1579992822406-2092a7bd5a36?q=80&w=2070&auto=format&fit=crop"
                    alt="Transport Express Véhicule" 
                    fill
                    className="object-cover"
                 />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Nos Prestations</h2>
            <p className="text-slate-400">Une gamme complète pour tous vos besoins logistiques urgents</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, title: "Transport Express", desc: "Livraison de colis en urgence absolue." },
              { icon: Clock, title: "Courriers Urgents", desc: "Documents confidentiels et plis importants." },
              { icon: MapPin, title: "Enlèvement sur site", desc: "Entreprises, commerces ou particuliers." },
              { icon: Truck, title: "Toutes distances", desc: "Livraison locale, régionale et nationale." },
              { icon: UserCheck, title: "Transport Dédié", desc: "Un véhicule réservé uniquement pour vous." },
              { icon: ShieldCheck, title: "Porte-à-Porte", desc: "Remise en main propre sans intermédiaire." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Nos Engagements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Réactivité Immédiate", text: "Nous intervenons rapidement pour vos demandes urgentes.", icon: Zap },
              { title: "Respect des Délais", text: "Vos livraisons sont effectuées dans les temps convenus.", icon: Clock },
              { title: "Sécurité & Confidentialité", text: "Vos colis et documents transportés avec soin et discrétion.", icon: ShieldCheck },
              { title: "Suivi & Communication", text: "Vous êtes informé en temps réel à chaque étape.", icon: Phone },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="shrink-0 w-12 h-12 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Transport Banner */}
      <section className="py-20 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-90"></div>
        {/* Placeholder for texture if needed */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transport Dédié – Zéro attente, Zéro détour
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Votre envoi est pris en charge immédiatement et livré directement à destination, sans regroupement ni transfert.
            </p>
            <div className="inline-block px-8 py-4 bg-white text-orange-700 font-bold text-xl rounded-lg shadow-xl">
              Un véhicule, un chauffeur, une mission : la vôtre.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-20 bg-slate-900/80 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-3xl font-bold text-white mb-8 border-b border-amber-500/30 pb-4 inline-block">
               Engagement GTA TRANSPORT ROUTIER EXPRESS
             </h2>
             <p className="text-xl text-slate-300 mb-12 leading-relaxed">
               Chaque demande de devis est traitée avec la plus grande attention afin de vous proposer la solution la plus rapide et la plus adaptée à votre urgence.
             </p>
             
             <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col items-center gap-4">
                   <div className="flex items-center gap-3 text-amber-400 font-bold text-xl md:text-2xl animate-pulse">
                      <span className="text-3xl">🚨</span>
                      <span>Une urgence immédiate ?</span>
                   </div>
                   <p className="text-white text-lg">
                     Contactez-nous directement pour une prise en charge sans délai
                   </p>
                   <a 
                     href="tel:+33607811308" 
                     className="mt-4 inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-700 font-bold text-2xl rounded-full hover:scale-105 transition-transform shadow-lg"
                   >
                      <Phone size={24} className="fill-current" />
                      33 6 07 81 13 08
                   </a>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 relative z-10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Besoin d'un transport <span className="text-amber-400">rapide</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/devis?mode=express" 
              className="px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-orange-500/40 transition-all hover:scale-105"
            >
              Obtenir un devis express
            </Link>
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-transparent border-2 border-slate-700 hover:border-white rounded-full text-white font-bold text-lg transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
