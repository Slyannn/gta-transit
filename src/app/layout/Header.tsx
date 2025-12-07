"use client";

import Link from "next/link";
import { Search, FileText, Menu, X, Ship, Plane, Truck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { 
    name: "QUI NOUS SOMMES ?", 
    href: "/presentation", 
    hasDropdown: false 
  },
  { 
    name: "FRET MARITIME", 
    href: "/maritime", 
    icon: Ship,
    hasDropdown: true,
    dropdownItems: [
      { name: "Cameroun Bagages", href: "/maritime/groupage" },
      { name: "Différents types de conteneurs", href: "/maritime/conteneurs" }
    ]
  },
  { 
    name: "FRET AÉRIEN", 
    href: "/aerien", 
    icon: Plane,
    hasDropdown: true,
    dropdownItems: [
      { name: "Afrique Bagages", href: "/aerien/afrique-bagages" },
      { name: "Fret Standard", href: "/aerien/standard" }
    ]
  },
  { 
    name: "VÉHICULES", 
    href: "/vehicules", 
    icon: Truck,
    hasDropdown: true,
    dropdownItems: [
      { name: "Transport de voitures", href: "/vehicules" },
      { name: "Modalités de livraison", href: "/vehicules/modalites" }
    ]
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10">
           {/* Logo GTA Stylisé CSS */}
           <div className="flex items-center mr-1">
              <span className="text-4xl font-black text-blue-700 tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>GT</span>
              <div className="relative">
                 <span className="text-4xl font-black text-blue-700 tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>A</span>
                 {/* Barre Orange sur le A */}
                 <div className="absolute top-[55%] left-[-10%] w-[120%] h-[5px] bg-orange-500 -rotate-12 shadow-sm rounded-sm" />
              </div>
           </div>
           
           {/* Texte Empilé */}
           <div className="flex flex-col justify-center leading-[0.9]">
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">GROUPEUR</span>
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">TRANSITAIRE</span>
              <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">ASSOCIÉS</span>
           </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-medium text-sm text-gray-700 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.name}
                className="relative px-4 py-6 group"
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
        <div className="hidden md:flex items-center space-x-6 z-10">
          <Link href="/tracking" className="flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors">
            <Search size={20} />
            Tracking
          </Link>
          <Link 
            href="/devis" 
            className="flex items-center gap-2 bg-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            <FileText size={18} />
            DEMANDER UN DEVIS
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary z-10"
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
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
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
                 <Link href="/tracking" className="flex items-center gap-2 text-primary font-semibold">
                    <Search size={18} /> Tracking
                 </Link>
                 <Link href="/devis" className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg font-bold">
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
