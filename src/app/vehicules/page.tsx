"use client";

import { motion } from "framer-motion";
import { Truck, Ship, Car, CheckCircle, ArrowRight, Shield } from "lucide-react";

export default function VehiculesPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/Cargo_ro_ro_hero.png')",
            backgroundPosition: "center 60%",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Transport de Véhicules
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="h-1 bg-accent w-24 mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Une solution sur-mesure RO/RO & Conteneur</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Vous cherchez un spécialiste pour transporter votre voiture neuve, d'occasion ou même accidentée ?
            GTA assure l’enlèvement depuis la France (Le Havre, Rouen, Marseille) ou la Belgique (Anvers) 
            vers l'Afrique, les USA, les Antilles et plus encore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Ship className="text-primary" /> Transport Maritime
                </h3>
                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 bg-primary rounded-full shrink-0"></div>
                        <p className="text-gray-600"><strong>RO/RO (Conventionnel)</strong> : Idéal pour les véhicules roulants, chargés directement dans le navire.</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 bg-primary rounded-full shrink-0"></div>
                        <p className="text-gray-600"><strong>Conteneur Personnalisé</strong> : Pour une sécurité maximale ou pour charger des effets personnels avec le véhicule.</p>
                    </li>
                </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Truck className="text-accent" /> Types de Véhicules
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-zinc-50 rounded-lg">
                        <Car className="mx-auto text-gray-400 mb-2" />
                        <span className="font-semibold text-secondary text-sm">Voitures</span>
                    </div>
                    <div className="text-center p-4 bg-zinc-50 rounded-lg">
                        <Truck className="mx-auto text-gray-400 mb-2" />
                        <span className="font-semibold text-secondary text-sm">Camionnettes</span>
                    </div>
                     <div className="text-center p-4 bg-zinc-50 rounded-lg">
                        <Shield className="mx-auto text-gray-400 mb-2" />
                        <span className="font-semibold text-secondary text-sm">Prestige / Collection</span>
                    </div>
                     <div className="text-center p-4 bg-zinc-50 rounded-lg">
                        <Truck className="mx-auto text-gray-400 mb-2" />
                        <span className="font-semibold text-secondary text-sm">Poids Lourds</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Prestation Complète */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Une prestation logistique complète</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                "Devis personnalisé et gratuit",
                "Suivi de votre commande",
                "Préparation dossier export",
                "Prise en charge concessionnaire",
                "Transport sécurisé à quai",
                "Assurance maritime incluse",
                "Confirmation d'embarquement (10j)",
                "Stockage en entrepôt fermé"
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg hover:border-accent/30 hover:bg-accent/5 transition-colors">
                    <CheckCircle className="text-green-500 w-5 h-5 shrink-0" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Confiez-nous votre véhicule</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Particulier ou professionnel, nous garantissons une expédition dans de parfaites conditions de sécurité.
          </p>
          <a 
            href="/devis?mode=maritime" 
            className="inline-flex items-center bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-accent transition-colors shadow-lg"
          >
            Obtenir un tarif transport <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}


