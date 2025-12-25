"use client";

import { motion } from "framer-motion";
import { Check, Truck, Anchor, Globe, Shield, FileText, ArrowRight, User, CheckCircle, Plane } from "lucide-react";

import { useState } from "react";

// Helper component for Partner Card
const PartnerCard = ({ name, logo, type }: { name: string, logo: string, type: 'maritime' | 'aerial' }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all flex flex-col items-center justify-center gap-4 group h-48 w-full cursor-pointer"
    >
      <div className="w-full h-24 flex items-center justify-center overflow-hidden relative p-2">
        {/* L'image est chargée en "caché". Si elle charge (onLoad), on passe imgLoaded à true pour l'afficher */}
        <img 
          src={logo} 
          alt={`Logo ${name}`} 
          className={`w-auto h-auto max-w-[90%] max-h-[90%] object-contain filter lg:grayscale group-hover:grayscale-0 transition-all duration-300 ${imgLoaded ? 'block' : 'hidden absolute'}`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(false)}
        />

        {/* Le placeholder SVG est affiché par défaut, et caché seulement si l'image est chargée */}
        {!imgLoaded && (
          <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-colors ${type === 'maritime' ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'}`}>
             {type === 'maritime' ? <Anchor size={28} /> : <Plane size={28} />}
          </div>
        )}
      </div>
      <span className="font-bold text-gray-700 text-center text-sm group-hover:text-primary transition-colors line-clamp-2">{name}</span>
    </motion.div>
  );
};

const maritimePartners = [
  { name: "Grimaldi Group", logo: "/partners/Grimaldi_logo.png" },
  { name: "MSC", logo: "/partners/MSC_logo.png" },
  { name: "CMA-CGM", logo: "/partners/CMA_CGM_logo.svg" },
  { name: "EOLIS Compagnie", logo: "/partners/EOLIS_logo.png" },
  { name: "Hapag-Lloyd", logo: "/partners/hapag_lloyd.png" },
  { name: "La Norddeutscher Llyod (NDL)", logo: "/partners/NDL_logo.svg" },
  { name: "Maersk Lines", logo: "/partners/Maersk_logo.svg" }
];

const aerialPartners = [
  { name: "Air France KLM Cargo", logo: "/partners/airfrance_cargo.gif" },
  { name: "Cargolux", logo: "/partners/Cargolux_Logo.svg" },
  { name: "Ethiopian Cargo Airlines", logo: "/partners/ethiopian_logo.png" },
  { name: "British Airways", logo: "/partners/british_logo.png" },
  { name: "Kenya Airways", logo: "/partners/kenya_logo.png" },
  { name: "Lufthansa Cargo", logo: "/partners/lufthansa_logo.png" }
];

export default function CommissionnairePage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')" ,            
            backgroundPosition: "center 75%",
          }}
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Commissionnaire de Transport
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-accent mx-auto rounded-full"
          ></motion.div>
        </div>
      </section>

      {/* Notre Métier */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-8 flex items-center justify-center gap-3"
          >
            <Globe className="text-accent" size={32} /> Notre Métier
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Groupeur Transitaire Associés est un <span className="font-semibold text-primary">commissionnaire et transitaire en transport international</span> spécialisé dans l’organisation de solutions logistiques maritimes, aériennes et multimodales.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nous accompagnons nos clients dans l’acheminement de leurs marchandises de l’origine à la destination finale, en garantissant fiabilité, conformité réglementaire et maîtrise des délais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Valeur Ajoutée */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Notre Valeur Ajoutée</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Contrairement à un simple intermédiaire, nous intervenons comme <span className="font-bold text-accent">chef d’orchestre du transport</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Mise à disposition des conteneurs aux professionnels et aux particuliers (plus de 160 dossiers/mois)",
              "Organisation de Transport International",
              "Groupage Fret Aérien et Fret Maritime",
              "Import / Export, Négoces et Douane",
              "Solutions logistiques sur mesure",
              "Sélection rigoureuse des transporteurs",
              "Gestion documentaire et douanière",
              "Suivi opérationnel continu",
              "Sécurisation des flux internationaux",
              "Transport de produits cosmétiques, pharmaceutiques et industriels",
              "Transport maritime de véhicules",
              "Déménagement national et international",
              "Courses Express, Enlèvement, Livraison",
              "Transport des effets personnels rendus dédouanés",
              "Point relais colis (SHEIN, AMAZON, etc.)"
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-zinc-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100"
              >
                <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-blue-50 border-l-4 border-accent rounded-r-xl text-center">
            <p className="text-blue-900 font-semibold text-lg">
              En tant que commissionnaire de transport international, nous engageons notre responsabilité sur la bonne exécution des opérations confiées.
            </p>
          </div>
        </div>
      </section>

      {/* Transitaire vs Commissionnaire */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Positionnement</h2>
            <p className="text-gray-300">Groupeur Transitaire Associés réunit les deux expertises pour un service complet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-accent">
                <FileText /> Transitaire
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Nous exécutons des opérations précises : douane, réservation, manutention.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-accent text-white p-8 rounded-2xl shadow-xl transform md:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Anchor /> Commissionnaire
              </h3>
              <p className="text-white text-lg leading-relaxed font-medium">
                Nous organisons et garantissons le transport de vos conteneurs de bout en bout.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
             <p className="text-xl font-bold inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
               <User className="text-accent" /> Un interlocuteur unique, responsable et engagé.
             </p>
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Nos Engagements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Obligation de résultat", icon: Shield },
              { title: "Transparence", icon: Globe },
              { title: "Normes Internationales", icon: FileText },
              { title: "Conseil Personnalisé", icon: User },
              { title: "Réactivité & Fiabilité", icon: Truck }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="text-accent" size={32} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos partenaires */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos Partenaires Privilégiés</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des alliances stratégiques avec les leaders mondiaux du transport.
            </p>
          </div>

          {/* Maritime Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 px-2 justify-center">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Anchor size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary">Compagnies Maritimes</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
                {maritimePartners.map((partner, idx) => (
                  <div key={idx} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] flex justify-center">
                    <PartnerCard name={partner.name} logo={partner.logo} type="maritime" />
                  </div>
                ))}
            </div>
          </div>

          {/* Aerial Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 px-2 justify-center">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                <Plane size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary">Compagnies Aériennes</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {aerialPartners.map((partner, idx) => (
                  <div key={idx} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] flex justify-center">
                    <PartnerCard name={partner.name} logo={partner.logo} type="aerial" />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>


      {/* Conclusion */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Ce qui nous distingue</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Un seul interlocuteur", "Une responsabilité claire", "Des solutions adaptées"].map((text, i) => (
              <div key={i} className="flex items-center gap-2 px-6 py-3 bg-zinc-100 rounded-full text-gray-700 font-semibold">
                <CheckCircle size={18} className="text-green-500" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif italic text-accent max-w-3xl mx-auto">
            "Vous confiez votre conteneur, votre marchandise, nous garantissons son acheminement."
          </blockquote>
        </div>
      </section>

    </main>
  );
}
