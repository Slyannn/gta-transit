"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  PackageCheck, 
  MapPin, 
  Truck, 
  RefreshCcw, 
  CheckCircle2, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

export default function PartenairesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
            alt="Partenaires GTA"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Devenez notre partenaire logistique
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="h-1 bg-accent w-24 mx-auto rounded-full mb-8"
            />
            <p className="text-xl md:text-2xl font-light text-slate-100 max-w-3xl mx-auto">
              Solutions Point Relais & Distribution du dernier kilomètre <br className="hidden md:block"/>
              Une solution stratégique pour les acteurs du e-commerce
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTRODUCTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Une solution stratégique pour les acteurs du e-commerce
          </h2>
          <div className="text-lg text-slate-600 leading-relaxed mb-12 space-y-6">
            <p>
              Dans un contexte de croissance continue du commerce en ligne, la rapidité, la fiabilité et la proximité de livraison sont devenues des critères déterminants de satisfaction client.
            </p>
            <p>
              GTA se positionne comme un partenaire logistique de confiance, capable d’assurer la réception, la gestion et la distribution de colis pour les plateformes e-commerce nationales et internationales.
            </p>
            <p>
              Nous proposons aux entreprises telles que <strong>Amazon, Temu, Alibaba, AliExpress, Shein, Cdiscount, Jumia</strong> et toute autre marketplace e-commerce, une infrastructure logistique performante pour optimiser le dernier kilomètre.
            </p>
          </div>
        </div>
      </section>

      {/* --- NOTRE MISSION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Notre mission</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Offrir aux plateformes e-commerce un réseau de points relais fiables, flexibles et sécurisés, afin de :
                </p>
                <ul className="space-y-6">
                  {[
                    "Réduire les délais de livraison",
                    "Désengorger les circuits traditionnels",
                    "Améliorer l’expérience client finale",
                    "Optimiser les coûts logistiques"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-accent">
                         <CheckCircle2 size={20} />
                      </div>
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                   alt="Logistique E-commerce"
                   fill
                   className="object-cover"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* --- NOS SERVICES DEDIES --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos services dédiés aux plateformes e-commerce</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: PackageCheck,
                title: "Réception sécurisée des colis",
                points: [
                  "Réception quotidienne de colis B2C et B2B",
                  "Contrôle, enregistrement et traçabilité",
                  "Gestion des volumes importants et pics d’activité"
                ]
              },
              {
                icon: MapPin,
                title: "Point relais & mise à disposition clients",
                points: [
                  "Mise à disposition rapide des colis aux destinataires",
                  "Horaires élargis et accessibilité optimisée",
                  "Procédures simples et fluides pour le retrait"
                ]
              },
              {
                icon: Truck,
                title: "Distribution locale & dernier kilomètre",
                points: [
                  "Livraison urbaine et périurbaine",
                  "Distribution programmée ou express",
                  "Adaptation aux exigences de chaque plateforme"
                ]
              },
              {
                icon: RefreshCcw,
                title: "Gestion des retours e-commerce",
                points: [
                  "Centralisation des retours clients",
                  "Reconditionnement et réexpédition",
                  "Suivi et reporting logistique"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- POURQUOI CHOISIR GTA --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Pourquoi choisir GTA ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 font-light italic">
                "Nous ne sommes pas un simple point relais, mais un véritable maillon stratégique de votre chaîne logistique."
              </p>
              
              <div className="space-y-4">
                {[
                  "Infrastructure logistique professionnelle",
                  "Équipe expérimentée et réactive",
                  "Capacité d’adaptation aux standards des grandes plateformes",
                  "Solutions personnalisées selon vos volumes et zones de livraison",
                  "Image premium et engagement qualité"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="text-accent shrink-0" size={24} />
                    <span className="font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
               <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                   <TrendingUp className="text-accent" />
                   Un partenariat gagnant-gagnant
                 </h3>
                 <p className="text-gray-300 mb-6">
                   En collaborant avec GTA, vous bénéficiez :
                 </p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {[
                     "D’un partenaire local fiable",
                     "D’une meilleure satisfaction client",
                     "D’une optimisation de vos performances logistiques",
                     "D’une présence renforcée sur le terrain"
                   ].map((benefit, idx) => (
                     <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                       <CheckCircle2 size={16} className="text-green-400 mt-0.5 shrink-0" />
                       <span>{benefit}</span>
                     </li>
                   ))}
                 </ul>
                 <div className="mt-8 pt-8 border-t border-slate-700">
                    <Link 
                      href="/contact" 
                      className="w-full bg-accent hover:bg-orange-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      Contactez nous pour devenir Partenaire
                      <ArrowRight size={20} />
                    </Link>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
