"use client";

import { motion } from "framer-motion";
import { Truck, Globe, Box, ShieldCheck, ClipboardCheck, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DemenagementPage = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1698917414969-feade59e3343?q=80&w=2070&auto=format&fit=crop"
            alt="Déménagement International"
            fill
            objectPosition="center 40%"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-600/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Déménagement International
            </h1>
            
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="h-1 bg-accent w-24 mx-auto rounded-full"
          ></motion.div>
            <br/>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 text-gray-200">
              Votre spécialiste du déménagement international. <br/> Déménagez à l’étranger en toute sérénité.
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Votre projet de déménagement devient <span className="text-accent">simple, sécurisé et maîtrisé</span>
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Nous accompagnons particuliers et entreprises dans leurs déménagements nationaux et internationaux, 
              quelle que soit la destination. Que vous partiez pour une nouvelle aventure professionnelle ou 
              personnelle, notre équipe d'experts s'occupe de tout pour que vous puissiez vous concentrer sur l'essentiel.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos services de déménagement</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Déménagement International",
                desc: "Afrique, Europe, Antilles, Caraïbes, Amérique Latine, U.S.A, Asie, Australie."
              },
              {
                icon: Truck,
                title: "National & Longue Distance",
                desc: "Déménagement routier partout en France et en Europe."
              },
              {
                icon: Box,
                title: "Emballage Professionnel",
                desc: "Protection optimale de votre mobilier et objets fragiles."
              },
              {
                icon: ClipboardCheck,
                title: "Formalités Douanières",
                desc: "Gestion complète des documents export et procédures douanières."
              },
              {
                icon: ShieldCheck,
                title: "Assurance Incluse",
                desc: "Garantie sérénité selon la prestation choisie."
              },
              {
                icon: MapPin,
                title: "Stockage Sécurisé",
                desc: "Solutions de garde-meubles courte et longue durée."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-accent mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Pourquoi choisir <br/>
                <span className="text-accent">GTA DÉMÉNAGEMENT ?</span>
              </h2>
              
              <ul className="space-y-6">
                {[
                  "Expertise reconnue du déménagement international",
                  "Accompagnement personnalisé de A à Z",
                  "Respect des délais et sécurité des biens",
                  "Tarifs compétitifs et transparents",
                  "Devis gratuit et sans engagement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-accent/20 p-1 rounded-full text-accent mt-1">
                      <ShieldCheck size={20} />
                    </div>
                    <span className="text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                 <p className="text-xl italic text-gray-400 font-light border-l-4 border-accent pl-6 py-2">
                   "Votre tranquillité est notre priorité."
                 </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1614359835514-92f8ba196357?q=80&w=1974&auto=format&fit=crop"
                alt="Famille heureuse déménagement"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Besoin d’un devis rapide ?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Remplissez notre formulaire en ligne et recevez votre devis personnalisé sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
              href="/devis?mode=demenagement"
              className="px-8 py-4 bg-white text-accent font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-xl"
            >
              Demander mon devis
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-accent transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DemenagementPage;
