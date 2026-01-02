"use client";

import Link from "next/link";
import { Search, FileText, Menu, X, Ship, Plane, Truck, ChevronDown, MapPin, Zap } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { 
    name: "L'ENTREPRISE", 
    href: "/presentation", 
    hasDropdown: true,
    dropdownItems:[
      { name : "Qui nous sommes ?", href : "/presentation" },
      { name : "Commissionnaire de transport international", href : "/commissionnaire" },
    ] 
  },
  { 
    name: "FRET MARITIME", 
    href: "/maritime", 
    icon: Ship,
    hasDropdown: true,
    dropdownItems: [
      { name: "Transport maritime", href: "/maritime" },
      { name: "Cameroun Bagages", href: "/maritime/cameroun-bagages" },
      { name: "Différents types de conteneurs", href: "/maritime/conteneurs" }
    ]
  },
  { 
    name: "FRET AÉRIEN", 
    href: "/aerien", 
    icon: Plane,
    hasDropdown: true,
    dropdownItems: [
      { name: "Fret Standard", href: "/aerien" },
      { name: "Afrique Bagages", href: "/aerien/afrique-bagages" }
    ]
  },
  { 
    name: "VÉHICULES", 
    href: "/vehicules", 
    icon: Truck,
    hasDropdown: true,
    dropdownItems: [
      { name: "Transport de voitures", href: "/vehicules" },
      { name: "Modalités de livraison", href: "/vehicules/modalites" },
      { name: "Déménagement International", href: "/vehicules/demenagement" }
    ]
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-start gap-2 z-10" onClick={() => setIsMobileMenuOpen(false)}>
           {/* Logo GTA Stylisé CSS */}
           <div className="h-20 w-[240px] xl:w-[350px] overflow-hidden flex items-center justify-center transition-all duration-300">
             <img src="/Logo_GTA_1.jpg" alt="Logo GTA" className="h-full w-auto object-cover scale-[1.35] -translate-y-3" />
           </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 font-medium text-[13px] xl:text-sm text-gray-700 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.name}
                className="relative px-3 xl:px-4 py-6 group"
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-2 relative z-10 transition-colors ${hoveredIndex === index ? 'text-primary' : 'text-gray-700'}`}
                >
                  {item.name}
                  {Icon && <Icon size={16} />}
                  {item.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                </Link>
                
                {/* Animated Underline */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-4 left-4 right-4 h-0.5 bg-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-56 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-20">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                      {item.dropdownItems?.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-accent transition-colors text-sm"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 z-10">
          <Link 
            href="/transport-express" 
            className="group relative flex items-center gap-2 bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all shadow-md overflow-hidden"
          >
             {/* Shine Effect */}
             <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[200%]" />

            <Zap size={18} className="text-amber-400 relative z-10" />
            <span className="relative z-10">EXPRESS</span>
          </Link>
          <Link 
            href="/devis" 
            className="flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg text-sm whitespace-nowrap"
          >
            <FileText size={18} />
            <span>DEMANDER UN DEVIS</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-primary z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                   <Link 
                    href={item.href} 
                    className="flex items-center justify-between text-gray-700 font-medium py-2 border-b border-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                   >
                     <span className="flex items-center gap-2">
                       {item.icon && <item.icon size={16} />} {item.name}
                     </span>
                   </Link>
                   {/* Mobile Dropdown Items displayed inline */}
                   {item.hasDropdown && (
                     <div className="pl-6 mt-2 space-y-2 border-l-2 border-gray-100 ml-2">
                        {item.dropdownItems?.map(subItem => (
                          <Link 
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-gray-500 py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                     </div>
                   )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                 <Link 
                   href="/transport-express" 
                   className="flex items-center justify-center gap-2 bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-3 rounded-lg font-bold"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                    <Zap size={18} className="text-amber-400" /> EXPRESS
                 </Link>
                 <Link 
                   href="/devis" 
                   className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg font-bold"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   DEMANDER UN DEVIS
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
