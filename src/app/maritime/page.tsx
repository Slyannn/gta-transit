"use client";

import { motion } from "framer-motion";
import { Ship, Anchor, Globe, FileCheck, ArrowRight, CheckCircle, TrendingDown, ShieldCheck, Package, Clock, Phone, Mail, MapPin } from "lucide-react";

export default function MaritimePage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "url('/Fret-istock.jpg')" ,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Fret Maritime
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Une expertise mondiale à votre service</h2>
          <p className="text-lg text-gray-900 leading-relaxed mb-8">
            Présent directement ou indirectement dans tous les ports du monde, GTA suit au plus près l’ensemble des frets qui lui sont confiés.
            Exporter, importer, c’est transporter et distribuer en faisant la preuve de votre dynamisme commercial.
          </p>
          <p className="text-gray-600 italic border-l-4 border-accent pl-4 text-left max-w-2xl mx-auto bg-white p-6 shadow-sm rounded-r-lg">
            "Évitez les pertes de temps, les frais de mise à terre et les complications administratives. GTA vous offre un service personnalisé, simple, rapide et fiable."
          </p>
        </div>
      </section>

      {/* SECTION AVANTAGES GROUPAGE MARITIME */}
      <section className="py-10 bg-zinc-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
           <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
              <div className="bg-primary text-white p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Les avantages du groupage maritime</h2>
                <p className="text-xl text-gray-200 italic font-light">"La solution économique et fiable pour vos expéditions"</p>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg border-2 border-accent transform md:-translate-y-2 relative">
                    <div className="absolute -top-3 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Avantage N°1</div>
                    <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110 shadow-md">
                      <TrendingDown className="text-white w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-accent text-xl mb-2">Économies Garanties</h4>
                    <p className="text-gray-600 text-sm">Réduisez significativement vos coûts de transport en regroupant vos marchandises avec d'autres expéditeurs.</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                      <ShieldCheck className="text-accent w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Fiabilité</h4>
                    <p className="text-gray-600 text-sm">Bénéficiez d'un service de transport sécurisé et fiable, avec des départs réguliers.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                      <Package className="text-accent w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Flexibilité</h4>
                    <p className="text-gray-600 text-sm">Adaptez vos expéditions à vos besoins, avec des options de groupage adaptées à vos marchandises.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                      <Clock className="text-accent w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-gray-800 text-lg mb-2">Suivi</h4>
                    <p className="text-gray-600 text-sm">Suivez vos expéditions en temps réel, grâce à notre système de suivi avancé.</p>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-xl p-8 border border-gray-100">
                  <h3 className="font-bold text-primary text-xl mb-6 text-center">Nos Services Inclus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-start gap-3">
                       <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                         <CheckCircle size={14} />
                       </div>
                       <span className="text-sm text-gray-700 font-medium">Groupage de conteneurs (consolidation/déconsolidation)</span>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                         <CheckCircle size={14} />
                       </div>
                       <span className="text-sm text-gray-700 font-medium">Gestion des formalités douanières</span>
                    </div>
                     <div className="flex items-start gap-3">
                       <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                         <CheckCircle size={14} />
                       </div>
                       <span className="text-sm text-gray-700 font-medium">Options d'assurance tous risques</span>
                    </div>
                     <div className="flex items-start gap-3">
                       <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                         <CheckCircle size={14} />
                       </div>
                       <span className="text-sm text-gray-700 font-medium">Conseil & Accompagnement logistique</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                   <div className="flex flex-col md:flex-row items-center justify-between bg-blue-50 p-6 rounded-2xl border border-blue-100 gap-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="bg-white p-3 rounded-full shadow-md text-accent">
                          <Phone size={32} />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg">Contactez-nous pour en savoir plus</h4>
                          <p className="text-gray-600 text-sm mb-2">
                            Découvrez comment nous pouvons vous aider à réduire vos coûts.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 mt-2">
                             <a href="tel:+33607811308" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                                <Phone size={16} /> +33 6 07 81 13 08
                             </a>
                             <a href="mailto:gta_transitaire@yahoo.com" className="flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                                <Mail size={16} /> gta_transitaire@yahoo.com
                             </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="shrink-0">
                        <a href="/devis" className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg font-bold hover:bg-secondary transition-colors shadow-md">
                          Obtenir un devis <ArrowRight size={16} className="ml-2" />
                        </a>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>





      {/* Services Détaillés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Colonne Gauche : Nos Offres */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Ship className="text-accent" /> Des transports sur mesure
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Dessertes Régulières</h4>
                    <p className="text-gray-600 text-sm">Pour vos conteneurs de groupage (LCL) ou conteneurs complets (FCL).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Acheminements Spécialisés</h4>
                    <p className="text-gray-600 text-sm">Ponctuels et programmés avec vous pour répondre à vos impératifs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Couverture Mondiale</h4>
                    <p className="text-gray-600 text-sm">Liaisons avec tous les ports vers tous les pays du monde et l’ensemble de l’Europe.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Colonne Droite : Tarifs & Administratif */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <FileCheck className="text-accent" /> Tarifs & Administratif
              </h3>
              <div className="bg-zinc-50 p-8 rounded-2xl border border-gray-100">
                <p className="mb-4 text-gray-700 font-medium">Un seul contact pour un service complet :</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">Prix applicable de bout en bout tendant à effacer les frontières tarifaires.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">Prix négociable au cas par cas et stable pendant un an.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">Contrat unique quel que soit le nombre d’expéditions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Besoin d'une cotation maritime ?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nos experts sont prêts à optimiser votre chaîne logistique maritime.
            Contactez-nous pour une offre personnalisée.
          </p>
          <a 
            href="/devis" 
            className="inline-flex items-center bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-accent transition-colors shadow-lg"
          >
            Demander un Devis <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </main>
  );
}
