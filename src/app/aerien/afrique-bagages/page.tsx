"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Package, Home, Warehouse, Globe, CheckCircle, ArrowRight } from "lucide-react";

export default function AfriqueBagagesPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1718197029571-51a53883c636?q=80&w=1332&auto=format&fit=crop')" }} // Image voyage/bus/avion
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Afrique Bagages
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-200 mt-4 font-light">N°1 du transport international vers l'Afrique et les DOM-TOM</p>
        </div>
      </section>

      {/* Introduction & Leader */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Leader du réseau Bagage Africa Network</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Groupeur Transitaire Associés (GTA) est le spécialiste incontesté pour l'expédition de vos effets personnels, 
            courriers express et excédents de bagages. Nous assurons une qualité de service optimale, 
            de la France vers tous les aéroports et ports du monde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Globe, title: "Transport International", desc: "Bagages, effets personnels & achats hors taxes." },
            { icon: Plane, title: "Excédent de Bagages", desc: "Ne payez plus les prix forts à l'aéroport." },
            { icon: Package, title: "Emballage Pro", desc: "Cartons, bull-pack, caisses bois sur demande." },
            { icon: Warehouse, title: "Entreposage Sécurisé", desc: "Stockage de vos biens en toute sécurité." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-accent text-center hover:shadow-md transition-shadow"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-lg text-accent mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Les 3 Formules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Nos 3 Formules Adaptées</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offre 1 */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-gray-200 hover:border-accent transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-bl-lg">ÉCO</div>
              <Warehouse className="w-12 h-12 text-gray-400 mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-2">Offre 1</h3>
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Dépôt Entrepôt</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Dépôt par vos soins (93)
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-accent" /> Rendu Port / Aéroport
                </li>
              </ul>
            </div>

            {/* Offre 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary transform scale-105 relative z-10">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAIRE</div>
              <Home className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-2">Offre 2</h3>
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Enlèvement Domicile</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Enlèvement chez vous
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-accent" /> Rendu Port / Aéroport
                </li>
              </ul>
            </div>

            {/* Offre 3 */}
            <div className="bg-zinc-50 p-8 rounded-2xl border border-gray-200 hover:border-accent transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PREMIUM</div>
              <Globe className="w-12 h-12 text-gray-400 mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-2">Offre 3</h3>
              <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Porte à Porte</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Enlèvement Domicile
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500" /> Livraison Adresse Arrivée
                </li>
                <li className="flex items-center gap-3 text-gray-700 italic text-sm">
                  "Nous nous chargeons de tout"
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Public Cible */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Une offre conçue pour vous</h2>
              <p className="text-gray-300 mb-8">
                Que vous partiez pour une nouvelle vie, une mission diplomatique ou un simple voyage, 
                GTA a la solution adaptée à votre statut.
              </p>
              <a 
                href="/devis" 
                className="inline-flex items-center bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-accent transition-colors shadow-lg"
              >
                Obtenir un devis <ArrowRight className="ml-2" />
              </a>
            </div>
            <div className="w-full md:w-1/2 bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Expatriés", "Grands Voyageurs", 
                  "Ambassades", "Organismes Internationaux",
                  "Enseignants & Étudiants", "Commerçants",
                  "Sociétés de Production", "Troupes Artistiques"
                ].map((target) => (
                  <li key={target} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{target}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

