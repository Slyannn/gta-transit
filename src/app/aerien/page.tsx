"use client";

import { motion } from "framer-motion";
import { Plane, Clock, TrendingUp, ArrowRight, Package, Shield, Globe, Phone, Mail } from "lucide-react";

export default function AerienPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-50"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1698594691277-62dba3f51eda?q=80&w=1170&auto=format&fit=crop')",
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
            Fret Aérien
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2">
             <h2 className="text-3xl font-bold text-primary mb-6">Rapidité et Compétitivité</h2>
             <p className="text-lg text-gray-600 leading-relaxed mb-6">
               Comment tirer le meilleur parti du fret aérien ? L’avion peut être un levier puissant pour améliorer votre rentabilité et votre compétitivité sur les marchés étrangers.
             </p>
             <p className="text-gray-600 leading-relaxed">
               La rapidité du fret aérien permet non seulement de gagner du temps, mais aussi de limiter les risques de change liés à l'inflation dans certains pays.
             </p>
           </div>
           <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-accent">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Gains Financiers Directs</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <TrendingUp className="text-green-600 shrink-0" />
                  <span className="text-gray-600">Économies de trésorerie pour l'exportateur (paiement lié à la livraison).</span>
                </li>
                <li className="flex gap-3">
                  <TrendingUp className="text-green-600 shrink-0" />
                  <span className="text-gray-600">Avantage importateur : la marchandise est vendue ou utilisée plus tôt.</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="text-green-600 shrink-0" />
                  <span className="text-gray-600">Réponse immédiate aux commandes urgentes.</span>
                </li>
              </ul>
           </div>
        </div>
      </section>

      {/* Services Spécifiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Nos Solutions Aériennes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-50 rounded-xl hover:shadow-md transition-shadow">
               <Plane className="w-12 h-12 text-accent mx-auto mb-4" />
               <h3 className="text-xl text-secondary font-bold mb-3">Fret Express</h3>
               <p className="text-gray-600 text-sm">Pour vos envois les plus urgents, documents ou colis, avec un suivi prioritaire.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-xl hover:shadow-md transition-shadow">
               <Package className="w-12 h-12 text-accent mx-auto mb-4" />
               <h3 className="text-xl text-secondary font-bold mb-3">Groupage Aérien</h3>
               <p className="text-gray-600 text-sm">Mutualisez les coûts pour vos envois moins volumineux tout en gardant la rapidité de l'avion.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-xl hover:shadow-md transition-shadow">
               <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
               <h3 className="text-xl text-secondary font-bold mb-3">Service Commercial</h3>
               <p className="text-gray-600 text-sm">Une équipe spécialement conçue pour répondre à vos problématiques de transport international.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages du Fret Aérien */}
      <section className="py-20 bg-zinc-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
             <h2 className="text-3xl font-bold text-primary mb-6">Expédiez avec rapidité et sécurité</h2>
             <p className="text-xl text-gray-600 font-medium">
               Expédiez vos marchandises vers le Cameroun et à travers le monde grâce au <span className="text-accent font-bold">FRET AERIEN</span>.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {/* Colonne Avantages */}
             <div>
                <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                  <TrendingUp className="text-accent" /> Avantages Clés
                </h3>
                <div className="space-y-6">
                   <div className="flex gap-4">
                     <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                       <Clock className="text-blue-600" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-800 text-lg">Rapidité</h4>
                       <p className="text-gray-600">Livraison rapide et fiable de vos marchandises à travers l’Afrique, le Cameroun et le monde.</p>
                     </div>
                   </div>

                   <div className="flex gap-4">
                     <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                       <Shield className="text-blue-600" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-800 text-lg">Sécurité</h4>
                       <p className="text-gray-600">Suivi en temps réel et protection de vos marchandises pendant le transport.</p>
                     </div>
                   </div>

                   <div className="flex gap-4">
                     <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                       <Package className="text-blue-600" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-800 text-lg">Flexibilité</h4>
                       <p className="text-gray-600">Possibilité d'expédier des marchandises de toutes tailles et poids.</p>
                     </div>
                   </div>

                   <div className="flex gap-4">
                     <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                       <Globe className="text-blue-600" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-gray-800 text-lg">Fiabilité</h4>
                       <p className="text-gray-600">Réseau mondial de transporteurs aériens pour garantir la livraison de vos marchandises.</p>
                     </div>
                   </div>
                </div>
             </div>

             {/* Colonne Services */}
             <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-8">Nos Services Dédiés</h3>
                
                <div className="mb-8">
                   <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                     <Package size={20} className="text-accent" /> Expédition de marchandises
                   </h4>
                   <p className="text-gray-600 leading-relaxed pl-7">
                     G.T.A maîtrise le Frêt Aérien (de la collecte des colis à la livraison) et assure les fonctionnalités administratives et douanières pour toutes vos expéditions.
                   </p>
                </div>

                <div className="mb-8">
                   <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
                     <Globe size={20} className="text-accent" /> Suivi en temps réel
                   </h4>
                   <p className="text-gray-600 leading-relaxed pl-7">
                     Suivez vos marchandises en temps réel grâce à notre système de suivi avancé.
                   </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl text-center mt-8">
                   <p className="text-blue-900 font-medium mb-4">
                     Découvrez comment nous pouvons vous aider à réduire vos coûts et à améliorer votre chaîne logistique.
                   </p>
                   
                   <div className="flex flex-col gap-3 items-center mb-6 border-b border-blue-200 pb-6">
                     <a href="tel:+33607811308" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                        <Phone size={18} /> +33 6 07 81 13 08
                     </a>
                     <a href="mailto:gta_transitaire@yahoo.com" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                        <Mail size={18} /> gta_transitaire@yahoo.com
                     </a>
                   </div>

                   <a 
                     href="/devis" 
                     className="inline-flex items-center text-accent font-bold hover:underline"
                   >
                     Contactez-nous pour en savoir plus <ArrowRight size={16} className="ml-1" />
                   </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Vos marchandises n'attendent pas</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Profitez de notre réseau aérien mondial pour accélérer vos échanges.
          </p>
          <a 
            href="/devis" 
            className="inline-flex items-center bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
          >
            Obtenir une cotation express <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}

