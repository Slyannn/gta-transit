"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Warehouse, 
  Package, 
  Barcode, 
  ClipboardCheck, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Users, 
  Target, 
  CheckCircle2,
  Box,
  MapPin,
  ArrowRight
} from "lucide-react";

export default function LogistiquePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
            alt="Logistique Entrepôt" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-white text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Logistique & Transport
            </h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="h-1 bg-accent w-24 mx-auto rounded-full mb-8"
            />

            <p className="text-xl md:text-2xl font-light text-slate-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              L’excellence logistique au service de votre performance. <br className="hidden md:block"/>
              Des solutions complètes, de la réception à la livraison finale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRODUCTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
            >
              Une maîtrise totale de la chaîne logistique
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Nous prenons en charge l’ensemble de vos opérations logistiques, quels que soient la nature, le volume ou la complexité de vos flux.
              Chaque prestation est exécutée selon des processus rigoureux, conformes aux standards professionnels les plus exigeants.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-sm">Nos Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Des prestations complètes et intégrées</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="relative py-24 min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1643894440673-553350d13370?q=80&w=2070&auto=format&fit=crop" 
               alt="Logistique Entrepôt" 
               fill
               className="object-cover"
             />
             {/* Dark Overlays for readability */}
             <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Pourquoi nous choisir ?</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Votre logistique mérite l’excellence</h2>
            <p className="text-slate-200 mb-12 text-lg leading-relaxed">
              Confiez votre chaîne logistique à GTA et transformez vos contraintes en avantage concurrentiel.
              Que vous soyez particulier, PME, e-commerçant, industrie ou grande entreprise, GTA conçoit des solutions flexibles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-medium text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TARGET AUDIENCE --- */}
      <section className="py-20 bg-slate-900 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Des solutions pour tous</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Nous accompagnons une grande variété de clients avec des solutions personnalisées et adaptées à chaque besoin.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {targets.map((target, index) => (
              <span 
                key={index} 
                className="px-8 py-4 bg-white/5 rounded-full text-slate-300 font-bold border border-white/10 hover:bg-accent hover:text-white hover:border-accent hover:scale-105 transition-all cursor-default backdrop-blur-sm shadow-lg"
              >
                {target}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Besoin d’un prestataire logistique fiable ?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Contactez GTA dès maintenant pour un devis personnalisé et une étude de vos besoins logistiques.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg text-lg flex items-center gap-2"
              >
                Contacter un expert
                <ArrowRight size={20} />
              </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// DATA CONFIGURATION

const services = [
  {
    title: "Réception & Contrôle",
    description: "Réception de marchandises de toutes natures avec contrôle rigoureux.",
    icon: ClipboardCheck,
    points: [
      "Courriers et petits colis",
      "Colis volumineux",
      "Palettes et marchandises lourdes",
      "Enregistrement précis"
    ]
  },
  {
    title: "Stockage Sécurisé",
    description: "Infrastructures adaptées pour la conservation optimale de vos biens.",
    icon: Warehouse,
    points: [
      "Court, moyen ou long terme",
      "Espaces organisés et surveillés",
      "Adapté à la nature des marchandises",
      "Sécurité 24/7"
    ]
  },
  {
    title: "Emballage & Conditionnement",
    description: "Techniques et matériaux professionnels pour une protection maximale.",
    icon: Package,
    points: [
      "Protection maximale",
      "Conformité aux normes de transport",
      "Valorisation de vos produits",
      "Matériaux adaptés"
    ]
  },
  {
    title: "Étiquetage & Traçabilité",
    description: "Système d’identification clair pour un suivi optimal.",
    icon: Barcode,
    points: [
      "Suivi à chaque étape",
      "Identification précise",
      "Systèmes informatisés",
      "Transparence totale"
    ]
  },
  {
    title: "Préparation de Commandes",
    description: "Gestion complète de vos commandes avec rigueur et précision.",
    icon: Box,
    points: [
      "Picking & Packing",
      "Conditionnement sur mesure",
      "Consolidation des envois",
      "Vérification qualité"
    ]
  },
  {
    title: "Transport & Livraison",
    description: "Acheminement fiable et rapide vers la destination finale.",
    icon: Truck,
    points: [
      "Respect des délais annoncés",
      "Livraison nationale & internationale",
      "Normes de sécurité respectées",
      "Satisfaction client"
    ]
  }
];

const reasons = [
  "Expertise logistique éprouvée",
  "Sécurité maximale des marchandises",
  "Respect strict des délais",
  "Traçabilité complète",
  "Interlocuteur unique et dédié",
  "Engagement qualité & satisfaction"
];

const targets = [
  "Particuliers",
  "PME & TPE",
  "E-commerce",
  "Industries",
  "Grandes entreprises"
];

