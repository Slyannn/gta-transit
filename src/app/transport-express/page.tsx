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
  UserCheck
} from "lucide-react";
import Link from "next/link";

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
      
      {/* Background Global Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-sm tracking-wider mb-6">
              Qualité, rapidité, sécurité
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Transport Express <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Colis & Courriers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Rapide, fiable, partout en France sur le territoire national.
              Une solution sur-mesure pour vos urgences critiques.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/devis" 
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Commander une course <Zap size={20} />
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold rounded-full transition-all backdrop-blur-sm"
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
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
              <img 
                src="https://images.unsplash.com/photo-1579992822406-2092a7bd5a36?q=80&w=2070&auto=format&fit=crop" 
                alt="Transport Express Véhicule" 
                className="relative rounded-2xl shadow-2xl border border-white/10 z-10 w-full object-cover h-[400px]"
              />
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
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
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
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
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

      {/* CTA Footer */}
      <section className="py-24 relative z-10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Besoin d'un transport <span className="text-amber-400">rapide</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/devis" 
              className="px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-orange-500/40 transition-all hover:scale-105"
            >
              Obtenir un devis express
            </Link>
            <Link 
              href="tel:+33123456789" 
              className="px-10 py-5 bg-transparent border-2 border-slate-700 hover:border-white rounded-full text-white font-bold text-lg transition-all"
            >
              Appeler maintenant
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}


