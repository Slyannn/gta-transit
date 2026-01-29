"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Anchor, Plane } from "lucide-react";

// Données des partenaires
const maritimePartners = [
  { name: "Grimaldi Group", logo: "/partners/Grimaldi_logo.png" },
  { name: "MSC", logo: "/partners/MSC_logo.png" },
  { name: "CMA-CGM", logo: "/partners/CMA_CGM_logo.svg" },
  { name: "EOLIS Compagnie", logo: "/partners/EOLIS_logo.png" },
  { name: "Hapag-Lloyd", logo: "/partners/hapag_lloyd.png" },
  { name: "La Norddeutscher Llyod (NDL)", logo: "/partners/NDL_logo.svg" },
  { name: "Maersk Lines", logo: "/partners/Maersk_logo.svg" },
  { name: "Sealogis", logo: "/partners/Sealogis_logo.png" }
];

const aerialPartners = [
  { name: "Air France KLM Cargo", logo: "/partners/airfrance_cargo.gif" },
  { name: "Cargolux", logo: "/partners/Cargolux_Logo.svg" },
  { name: "Ethiopian Cargo Airlines", logo: "/partners/ethiopian_logo.png" },
  { name: "British Airways", logo: "/partners/british_logo.png" },
  { name: "Kenya Airways", logo: "/partners/kenya_logo.png" },
  { name: "Lufthansa Cargo", logo: "/partners/lufthansa_logo.svg" }
];

// Composant Logo simple sans carte/bordure
const PartnerLogo = ({ name, logo, type }: { name: string, logo: string, type: 'maritime' | 'aerial' }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex items-center justify-center mx-8 md:mx-12 w-32 h-20 md:w-40 md:h-24">
       <img 
          src={logo} 
          alt={`Logo ${name}`} 
          className={`w-full h-full object-contain transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(false)}
          // Astuce pour forcer le check si l'image est déjà en cache
          ref={(img) => {
            if (img?.complete) setImgLoaded(true);
          }}
        />
        {!imgLoaded && (
             <span className="text-gray-400 font-bold text-sm text-center">{name}</span>
        )}
    </div>
  );
};

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-2">Ils nous font confiance</h2>
        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto mask-gradient">
        {/* Row 1: Maritime - Vitesse Rapide */}
        <div className="flex w-full mb-8">
            <motion.div 
                className="flex w-max items-center"
                animate={{ x: "-50%" }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 40 
                }}
              >
                {[...maritimePartners, ...maritimePartners].map((partner, idx) => (
                  <PartnerLogo key={`maritime-${idx}`} name={partner.name} logo={partner.logo} type="maritime" />
                ))}
            </motion.div>
        </div>

        {/* Row 2: Aérien */}
        <div className="flex w-full">
            <motion.div 
                className="flex w-max items-center"
                animate={{ x: "-50%" }}
                transition={{ 
                  repeat: Infinity, 
                  ease: "linear", 
                  duration: 35 
                }}
              >
                {[...aerialPartners, ...aerialPartners].map((partner, idx) => (
                  <PartnerLogo key={`aerial-${idx}`} name={partner.name} logo={partner.logo} type="aerial" />
                ))}
            </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
