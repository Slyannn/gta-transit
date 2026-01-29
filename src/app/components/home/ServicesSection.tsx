"use client";

import { ArrowRight, Ship, Plane, Truck, Zap, Package, CheckCircle2, Warehouse } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "express",
    title: "Transport Express",
    description: "Une solution rapide et fiable pour vos envois urgents. Nous garantissons des délais optimisés pour vos colis et documents importants, avec un suivi en temps réel.",
    link: "/transport-express",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1579992822406-2092a7bd5a36?q=80&w=2070&auto=format&fit=crop",
    color: "from-slate-900 to-blue-900",
    gradient: "from-slate-900 to-blue-900",
    accent: "text-amber-400",
    features: ["Livraison J+1 / J+2", "Suivi en temps réel", "Service porte-à-porte"]
  },
  {
    id: "aerien",
    title: "Fret Aérien",
    description: "La rapidité au service de votre compétitivité. Idéal pour les marchandises à haute valeur ajoutée ou les délais critiques, avec des départs quotidiens vers l'Afrique et le monde.",
    link: "/aerien",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1698594691277-62dba3f51eda?q=80&w=1170&auto=format&fit=crop",
    color: "from-sky-900 to-blue-600",
    gradient: "from-sky-900 to-blue-600",
    accent: "text-sky-300",
    features: ["Vols directs et groupage", "Gestion des formalités", "Réseau mondial IATA"]
  },
  {
    id: "maritime",
    title: "Fret Maritime",
    description: "L'option économique pour vos grands volumes. Nous gérons vos conteneurs complets (FCL) ou de groupage (LCL) avec une expertise reconnue sur les axes Afrique et Asie.",
    link: "/maritime",
    icon: Ship,
    image: "/Fret-istock.jpg",
    color: "from-blue-900 to-indigo-900",
    gradient: "from-blue-900 to-indigo-900",
    accent: "text-blue-300",
    features: ["Conteneurs Complets (FCL)", "Groupage (LCL)", "Transport Roulier (RO-RO)"]
  },
  {
    id: "demenagement",
    title: "Déménagement International",
    description: "Un accompagnement sur-mesure pour votre changement de vie. Nous prenons soin de vos biens personnels et véhicules avec des solutions d'emballage et de transport sécurisées.",
    link: "/vehicules/demenagement",
    icon: Package,
    image: "https://images.unsplash.com/photo-1586781383963-8e66f88077ec?q=80&w=2070&auto=format&fit=crop",
    color: "from-orange-700 to-red-900",
    gradient: "from-orange-700 to-red-900",
    accent: "text-orange-300",
    features: ["Emballage professionnel", "Transport de véhicules", "Douane export/import"]
  },
  {
    id: "vehicules",
    title: "Transport de Véhicules",
    description: "Une expertise reconnue dans le transport de tous types de véhicules (tourisme, utilitaire, engins TP). Nous assurons le chargement, l'arrimage sécurisé et les formalités douanières.",
    link: "/vehicules",
    icon: Truck,
    image: "/Cargo_ro_ro_hero.png",
    color: "from-zinc-800 to-stone-900",
    gradient: "from-zinc-800 to-stone-900",
    accent: "text-zinc-400",
    features: ["Ro-Ro & Conteneur", "Transport de véhicules", "Formalités export"]
  },
  {
    id: "logistique",
    title: "Logistique & Entreposage",
    description: "Solutions complètes de stockage, gestion d'entrepôts et distribution. Nous offrons des espaces sécurisés, une gestion optimisée des stocks et des services de préparation de commandes.",
    link: "/logistique",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    color: "from-emerald-800 to-teal-900",
    gradient: "from-emerald-800 to-teal-900",
    accent: "text-emerald-300",
    features: ["Stockage sécurisé", "Gestion des stocks"]
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
      className="group"
    >
      <Link href={service.link} className="block h-full">
        <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
          {/* Image - Pas d'overlay, juste l'image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Icône en badge blanc dans le coin */}
            <div className="absolute top-4 right-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                <service.icon size={24} className={service.accent} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            {/* Description tronquée à 3 lignes */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
              {service.description}
            </p>
            
            {/* 2 features principales */}
            <ul className="space-y-2 mb-4">
              {service.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 size={14} className={service.accent} />
                  {feature}
                </li>
              ))}
              {service.features.length > 2 && (
                <li className="text-xs text-gray-500">
                  +{service.features.length - 2} autres avantages
                </li>
              )}
            </ul>
            
            
            <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
              En savoir plus <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Heading avec background sombre */}
      <div className="relative py-10 bg-slate-900 text-white text-center z-10">
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

      {/* Contenu avec grille 3x2 */}
      <div className="relative pt-10 pb-20">
        <div className="max-w-[1600px] mx-auto px-4">
          {/* Grille responsive optimisée */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} className="relative">
                {/* Background subtle pour chaque service */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-10 rounded-xl`}
                ></div>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
