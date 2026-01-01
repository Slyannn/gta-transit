"use client";

import { ArrowRight, Ship, Plane, Truck, Zap, Package, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "express",
    title: "Transport Express",
    description: "Une solution rapide et fiable pour vos envois urgents. Nous garantissons des délais optimisés pour vos colis et documents importants, avec un suivi en temps réel.",
    link: "/transport-express",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1579992822406-2092a7bd5a36?q=80&w=2070&auto=format&fit=crop", // Warehouse/Express vibe
    color: "from-slate-900 to-blue-900",
    accent: "text-amber-400",
    features: ["Livraison J+1 / J+2", "Suivi en temps réel", "Service porte-à-porte"]
  },
  {
    id: "aerien",
    title: "Fret Aérien",
    description: "La rapidité au service de votre compétitivité. Idéal pour les marchandises à haute valeur ajoutée ou les délais critiques, avec des départs quotidiens vers l'Afrique et le monde.",
    link: "/aerien",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1698594691277-62dba3f51eda?q=80&w=1170&auto=format&fit=crop", // Plane
    color: "from-sky-900 to-blue-600",
    accent: "text-sky-300",
    features: ["Vols directs et groupage", "Gestion des formalités", "Réseau mondial IATA"]
  },
  {
    id: "maritime",
    title: "Fret Maritime",
    description: "L'option économique pour vos grands volumes. Nous gérons vos conteneurs complets (FCL) ou de groupage (LCL) avec une expertise reconnue sur les axes Afrique et Asie.",
    link: "/maritime",
    icon: Ship,
    image: "/Fret-istock.jpg", // Ship
    color: "from-blue-900 to-indigo-900",
    accent: "text-blue-300",
    features: ["Conteneurs Complets (FCL)", "Groupage (LCL)", "Transport Roulier (RO-RO)"]
  },
  {
    id: "demenagement",
    title: "Déménagement International",
    description: "Un accompagnement sur-mesure pour votre changement de vie. Nous prenons soin de vos biens personnels et véhicules avec des solutions d'emballage et de transport sécurisées.",
    link: "/vehicules", // Ou /maritime/groupage selon le besoin, je mets véhicules/général pour l'instant
    icon: Package,
    image: "https://images.unsplash.com/photo-1586781383963-8e66f88077ec?q=80&w=2070&auto=format&fit=crop", // Moving boxes / Home
    color: "from-orange-700 to-red-900",
    accent: "text-orange-300",
    features: ["Emballage professionnel", "Transport de véhicules", "Douane export/import"]
  },
  {
    id: "vehicules",
    title: "Transport de Véhicules",
    description: "Une expertise reconnue dans le transport de tous types de véhicules (tourisme, utilitaire, engins TP). Nous assurons le chargement, l'arrimage sécurisé et les formalités douanières.",
    link: "/vehicules",
    icon: Truck,
    image: "/Cargo_ro_ro_hero.png", // Car carrier / transport
    color: "from-zinc-800 to-stone-900",
    accent: "text-zinc-400",
    features: ["Ro-Ro & Conteneur", "Prise en charge parc auto", "Formalités export"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 py-20 px-4 max-w-7xl mx-auto relative z-10`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6 lg:px-8">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/20 ${service.accent.replace('text-', 'text-opacity-80 text-')}`}>
           <service.icon size={16} className={service.accent} />
           <span className="text-white/90 uppercase tracking-wider">{service.title}</span>
        </div>
        
        <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
          {service.title}
        </h3>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-3 pt-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 size={18} className={service.accent} />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="pt-6">
          <Link 
            href={service.link}
            className={`inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all duration-300 border-b-2 border-transparent hover:border-white pb-1`}
          >
            Découvrir ce service <ArrowRight size={20} className={service.accent} />
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
            <Image 
              src={service.image} 
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 mix-blend-multiply`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Heading */}
      <div className="relative py-20 bg-zinc-900 text-white text-center z-10">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="container mx-auto px-4"
         >
           <h2 className="text-3xl md:text-5xl font-bold mb-4">Nos Solutions de Transport</h2>
           <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
           <p className="max-w-2xl mx-auto text-gray-300">
             Une gamme complète de services logistiques pour répondre à tous vos besoins d'import-export.
           </p>
         </motion.div>
        
        </div>

      {/* Services List with Transitions */}
      <div className="relative pt-10">
         {services.map((service, index) => (
           <div key={service.id} className="relative">
              {/* Background Transition Gradient for each section */}
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-20`}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
              ></div>
              
              <ServiceCard service={service} index={index} />
              
              {/* Decorative separator */}
              {index < services.length - 1 && (
                <div className="h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>
              )}
           </div>
         ))}
      </div>
      
    </section>
  );
};

export default ServicesSection;
