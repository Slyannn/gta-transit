"use client";

import { motion } from "framer-motion";
import { Box, Container, Snowflake, Layers, ArrowRight, Scale, Info } from "lucide-react";

export default function ConteneursPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2670&auto=format&fit=crop')" }} // Photo aérienne de caisses de fret
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Types de Conteneurs
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-200 mt-4 font-light">Guide technique pour choisir le bon équipement</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Le transport par conteneur est le mode le plus répandu, mais il en existe plusieurs types adaptés à votre marchandise et votre volume.
            Effets personnels, véhicules, produits frais ou marchandises hors gabarit : voici le guide complet des équipements disponibles.
          </p>
        </div>
      </section>

      {/* Liste des Conteneurs */}
      <section className="pb-20 container mx-auto px-4 space-y-20">
        
        {/* DRY CONTAINERS */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
            <Box className="w-10 h-10 text-accent" />
            <h2 className="text-3xl font-bold text-primary">Conteneurs Tous Usages (Dry)</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Conteneur totalement cloisonné et étanche, le plus courant pour marchandises "sèches" (cartons, palettes, fûts).
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContainerCard 
              title="20' Dry"
              image="/ct-20pieds-dry-mini.png"
              desc="Le standard polyvalent."
              specs={[
                { label: "Volume", value: "33 m³" },
                { label: "Charge Max", value: "22 100 kg" },
                { label: "Dimensions Int.", value: "5.90 x 2.34 x 2.38 m" }
              ]}
            />
            <ContainerCard 
              title="40' Dry"
              image="/ct-40pieds-dry-mini.png"
              desc="Double volume pour marchandises légères."
              specs={[
                { label: "Volume", value: "67.3 m³" },
                { label: "Charge Max", value: "27 397 kg" },
                { label: "Dimensions Int.", value: "12.05 x 2.34 x 2.38 m" }
              ]}
            />
            <ContainerCard 
              title="40' High Cube"
              image="/ct-40pieds-high-cube-mini.png"
              desc="Plus de hauteur (+30cm) pour volume max."
              specs={[
                { label: "Volume", value: "76 m³" },
                { label: "Charge Max", value: "29 600 kg" },
                { label: "Dimensions Int.", value: "12.05 x 2.34 x 2.68 m" }
              ]}
            />
          </div>
        </div>

        {/* SPECIAL CONTAINERS */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
            <Layers className="w-10 h-10 text-accent" />
            <h2 className="text-3xl font-bold text-primary">Conteneurs Spéciaux</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Open Top (Toit Ouvrant)</h3>
              <p className="text-gray-600 mb-4">
                Équipé d'une bâche amovible à la place du toit rigide. Conçu pour le chargement par grue de produits lourds ou hors hauteur.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• <strong>20' Open Top</strong> : Charge max ~21 800 kg</li>
                <li>• <strong>40' Open Top</strong> : Charge max ~26 100 kg</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Flat Rack (Plateau)</h3>
              <p className="text-gray-600 mb-4">
                Sans parois latérales, avec extrémités rabattables. Pour marchandises hors gabarit (largeur/hauteur) ou colis très lourds.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• <strong>20' Flat Rack</strong> : Charge max ~21 600 kg</li>
                <li>• <strong>40' Flat Rack</strong> : Charge max ~25 200 kg</li>
              </ul>
            </div>
          </div>
        </div>

        {/* REEFER */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
            <Snowflake className="w-10 h-10 text-accent" />
            <h2 className="text-3xl font-bold text-primary">Conteneurs Frigorifiques (Reefer)</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Transport sous température dirigée (-35°C à +30°C) pour denrées périssables. Équipé d'un moteur électrique.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ContainerCard 
              title="20' Reefer"
              image="/20ft-reefer-container-side-800px.jpg"
              specs={[
                { label: "Volume", value: "28.2 m³" },
                { label: "Charge Max", value: "21 180 kg" }
              ]}
            />
            <ContainerCard 
              title="40' Reefer"
              image="/40FT-High-Cube-NEW-One-Trip-Reefer.png"
              specs={[
                { label: "Volume", value: "54.9 m³" },
                { label: "Charge Max", value: "25 881 kg" }
              ]}
            />
            <ContainerCard 
              title="40' HC Reefer"
              image="/ct-40ft-hc-reefer-new-1.png"
              specs={[
                { label: "Volume", value: "65.8 m³" },
                { label: "Charge Max", value: "28 180 kg" }
              ]}
            />
          </div>
        </div>

        {/* INFO REGLEMENTAIRE SOLAS */}
        <div className="bg-blue-900 text-white p-8 rounded-2xl">
          <div className="flex items-start gap-6">
            <Scale className="w-16 h-16 text-accent shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Réglementation SOLAS (VGM)</h2>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Pour des raisons de sécurité, la convention internationale SOLAS rend obligatoire la déclaration de la <strong>Masse Brute Vérifiée (VGM)</strong> avant chargement.
              </p>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2 flex items-center gap-2"><Info size={18} /> Obligation de pesée</h4>
                <p className="text-sm text-blue-200">
                  Sans transmission du poids vérifié (VGM), le conteneur ne pourra pas être embarqué.
                  L'expéditeur est responsable de cette vérification.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="py-12 bg-zinc-100 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 mb-6">Vous ne savez pas quel conteneur choisir ?</p>
          <a 
            href="/devis" 
            className="inline-flex items-center bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary transition-colors"
          >
            Demander conseil à nos experts <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}

function ContainerCard({ title, desc, specs, image, icon: Icon }: { title: string, desc?: string, specs: { label: string, value: string }[], image?: string, icon?: any }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-accent/30 hover:scale-[1.02] transition-transform duration-300">
      <div className="h-40 w-full mb-6 relative rounded-lg overflow-hidden bg-blue-50 flex items-center justify-center p-4">
        {image ? (
           <img src={image} alt={title} className="object-contain w-full h-full" />
        ) : Icon ? (
           <Icon className="w-20 h-20 text-primary opacity-80" strokeWidth={1} />
        ) : (
           <span className="text-gray-400 font-bold">NO IMAGE</span>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      {desc && <p className="text-gray-500 text-sm mb-4">{desc}</p>}
      <div className="space-y-2 pt-4 border-t border-gray-50">
        {specs.map((spec, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-gray-500">{spec.label}</span>
            <span className="font-bold text-gray-700">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

