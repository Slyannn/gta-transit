"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe, Anchor, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PresentationPage() {
  return (
    <main className="bg-zinc-50">
      {/* Hero Section Page */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1759216373582-a24c4a65b031?q=80&w=2070&auto=format&fit=crop')", 
            backgroundPosition: "center 99%",
            backgroundSize: "cover",
          }} // Chaine logistique
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Qui Sommes-Nous ?
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
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">
              Groupeur Transitaire Associés (GTA)
            </h2>
            <p className="text-lg text-gray-900 leading-relaxed mb-6">
              GTA est une société de transport international, commissionnaire en transport et spécialisée dans le fret maritime, aérien et routier.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 border-l-4 border-accent pl-4 italic">
              "GTA se présente comme l’interlocuteur unique d’un grand nombre de ses clients pour l’ensemble de leurs transports internationaux."
            </p>
            <p className="text-gray-900 leading-relaxed">
              Pour assurer sa mission tout au long de la chaîne de transport, GTA s’est doté d’une structure internationale de correspondants et de représentants répartis sur toute la surface du globe.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
             {/* Placeholder pour une image de bureau/équipe */}
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1739877907105-2e578ee67bca?q=80&w=2070&auto=format&fit=crop')"
              }} // Équipe logistique professionnelle
             ></div>
          </motion.div>
        </div>
      </section>


      {/* Section Commissionnaire */}
      <section className="py-20 bg-zinc-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full md:w-1/2 order-2 md:order-1"
            >
               <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                 <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1583911026662-95161686d9a6?q=80&w=2070&auto=format&fit=crop')"
                  }} // Équipe logistique professionnelle                 
                 ></div>
                 <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full md:w-1/2 order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm mb-6">
                 <ShieldCheck size={18} />
                 <span>AGRÉMENT OFFICIEL</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Notre Rôle de Commissionnaire
              </h2>
              <p className="text-lg text-gray-900 mb-8 leading-relaxed">
                En tant que <span className="font-semibold text-primary">Commissionnaire de Transport agréé</span>, GTA ne se limite pas à exécuter un transport. Nous sommes les architectes juridiques et techniques de vos expéditions internationales.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-accent shrink-0 border border-gray-100">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Organisateur Responsable</h4>
                    <p className="text-gray-500 mt-2">Contrairement au simple mandataire, nous choisissons librement nos sous-traitants et sommes garants de la bonne fin de l'opération de bout en bout.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-accent shrink-0 border border-gray-100">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Expertise Douanière</h4>
                    <p className="text-gray-500 mt-2">Nous maîtrisons les réglementations internationales complexes pour faciliter le passage de vos marchandises aux frontières sans retard.</p>
                  </div>
                </div>

                 <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-accent shrink-0 border border-gray-100">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">Optimisation des Coûts</h4>
                    <p className="text-gray-500 mt-2">Notre volume d'affaires nous permet de négocier les meilleurs tarifs auprès des compagnies maritimes et aériennes pour votre compte.</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <a 
                    href="/commissionnaire" 
                    className="group inline-flex items-center px-6 py-3 border-2 border-accent text-accent rounded-lg font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Découvrir notre statut de Commissionnaire
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Gamme de Services (Grid) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Notre Expertise Globale</h2>
            <p className="text-gray-800 max-w-2xl mx-auto">
              Nous assurons à l’échelle mondiale toutes les fonctions de transit et de commerce international.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Groupage maritime & aérien",
              "Conteneur personnalisé",
              "Effets personnels & Déménagement",
              "Transport de Voitures (Maritime)",
              "Transport Routier International",
              "Messagerie express & Affrètement",
              "Transport de denrées périssables",
              "Matières dangereuses (Classe III)",
              "Transit & Douane"
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-zinc-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle size={20} />
                </div>
                <span className="font-semibold text-gray-800">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Section Internationale & Destinations */}
      <section id="presence_mondiale" className="py-20 bg-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Globe className="text-accent" size={32} />
                Une Présence Mondiale
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Présent directement ou indirectement dans tous les ports et aéroports du monde, 
                GTA suit au plus près l’ensemble des frets qui lui sont confiés.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  "France", "Afrique", "Europe", "U.S.A.", "Canada", 
                  "Amérique du Sud", "Antilles", "Caraïbes", 
                  "Océan Indien", "Australie", "Extrême	-Orient", "Chine" , "Asie"
                ].map((country) => (
                  <span key={country} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20 hover:bg-accent hover:border-accent transition-colors">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
               <h3 className="text-xl font-bold mb-4 text-accent">Pourquoi choisir GTA ?</h3>
               <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-2 h-2 bg-accent rounded-full shrink-0"></div>
                   <p className="text-gray-300 text-sm">Approvisionnement régulier grâce à la rapidité du fret aérien.</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-2 h-2 bg-accent rounded-full shrink-0"></div>
                   <p className="text-gray-300 text-sm">Solutions adaptées à tous les budgets (excédent bagage, déménagement...).</p>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="mt-1 w-2 h-2 bg-accent rounded-full shrink-0"></div>
                   <p className="text-gray-300 text-sm">Réseau de correspondants coordonnés pour une efficacité maximale.</p>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Devise / Conclusion */}
      <section className="py-24 bg-zinc-50 text-center">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block relative p-10 border-4 border-double border-primary/20 rounded-lg max-w-4xl"
          >
            <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight uppercase">
              GTA, Votre Partenaire Confiance
            </h2>
            <p className="mt-6 text-gray-500 font-medium">
              L'expertise logistique au service de votre réussite internationale.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

