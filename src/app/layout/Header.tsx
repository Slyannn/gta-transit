"use client";

import Link from "next/link";
import { Search, FileText, Menu, X, Ship, Plane, Truck, ChevronDown, MapPin, Zap, Phone, ChevronRight, Box } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { 
    name: "L'ENTREPRISE", 
    href: "/presentation", 
    hasDropdown: true,
    dropdownItems: [
      { name : "Qui nous sommes ?", href : "/presentation" },
      { name : "Commissionnaire de transport international", href : "/commissionnaire" },
    ] 
  },
  { 
    name: "NOS SERVICES", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { 
        name: "Fret Maritime", 
        href: "/maritime",
        icon: Ship,
        hasSubMenu: true,
        subItems: [
          { name: "Transport maritime", href: "/maritime" },
          { name: "Cameroun Bagages", href: "/maritime/cameroun-bagages" },
          { name: "Différents types de conteneurs", href: "/maritime/conteneurs" }
        ]
      },
      { 
        name: "Fret Aérien", 
        href: "/aerien",
        icon: Plane,
        hasSubMenu: true,
        subItems: [
          { name: "Fret Standard", href: "/aerien" },
          { name: "Afrique Bagages", href: "/aerien/afrique-bagages" }
        ]
      },
      { 
        name: "Transport de Véhicules", 
        href: "/vehicules",
        icon: Truck,
        hasSubMenu: true,
        subItems: [
          { name: "Transport de voitures", href: "/vehicules" },
          { name: "Modalités de livraison", href: "/vehicules/modalites" }
        ]
      },
      {
        name: "Déménagement International",
        href: "/demenagement",
        icon: Truck,
        hasSubMenu: false,
        subItems: []
      },
      {
        name: "Logistique",
        href: "/logistique",
        icon: Box,
        hasSubMenu: false,
        subItems: []
      },
      {
        name: "Transport Express",
        href: "/transport-express",
        icon: Zap,
        hasSubMenu: false,
        subItems: []
      }
    ]
  },
  {
    name: "DEVENIR PARTENAIRE",
    href: "/partenaires",
    hasDropdown: false,
    dropdownItems: []
  },
  {
    name: "CONTACT",
    href: "/contact",
    hasDropdown: false
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-8 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-10" onClick={() => setIsMobileMenuOpen(false)}>
           {/* Logo GTA Stylisé CSS */}
           <div className="h-24 w-auto overflow-visible flex items-center justify-center transition-all duration-300">
             <img src="/Logo_GTA_1.jpg" alt="Logo GTA" className="h-full w-auto object-contain" />
           </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 font-medium text-[13px] xl:text-sm text-gray-700 relative" onMouseLeave={() => setHoveredIndex(null)}>
          {navItems.map((item, index) => {
            const Icon = (item as any).icon;
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
                  <div className="absolute top-full left-0 w-64 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-20">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-visible py-2">
                      {item.dropdownItems?.map((subItem: any) => (
                        <div 
                          key={subItem.name} 
                          className="relative group/submenu"
                          onMouseEnter={() => setHoveredSubItem(subItem.name)}
                          onMouseLeave={() => setHoveredSubItem(null)}
                        >
                          <Link 
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-accent hover:text-primary transition-colors text-sm"
                          >
                            <span className="flex items-center gap-2">
                               {subItem.icon && <subItem.icon size={16} />}
                               {subItem.name}
                            </span>
                            {subItem.hasSubMenu && <ChevronRight size={14} />}
                          </Link>
                          
                          {/* Nested Submenu */}
                          {subItem.hasSubMenu && subItem.subItems && (
                            <div className="absolute left-full top-0 w-64 pl-2 opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 ease-out z-30">
                              <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                                {subItem.subItems.map((child: any) => (
                                  <Link 
                                    key={child.name} 
                                    href={child.href}
                                      className="block px-4 py-3 text-gray-600 hover:bg-accent hover:text-primary transition-colors text-sm"
                                    >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
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
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                   <Link 
                    href={item.href} 
                    className="flex items-center justify-between text-gray-700 font-medium py-2 border-b border-gray-50"
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                   >
                     <span className="flex items-center gap-2">
                       {/* Icon for main items if any */}
                       {item.name}
                     </span>
                     {item.hasDropdown && <ChevronDown size={16} />}
                   </Link>
                   
                   {/* Mobile Dropdown */}
                   {item.hasDropdown && (
                     <div className="pl-4 mt-2 space-y-3 border-l-2 border-gray-100 ml-2">
                        {item.dropdownItems?.map((subItem: any) => (
                          <div key={subItem.name}>
                             {/* If it has subitems (nested) */}
                             {subItem.hasSubMenu ? (
                               <div className="mb-3">
                                  <Link 
                                    href={subItem.href}
                                    className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                     {subItem.icon && <subItem.icon size={16} className="text-accent" />}
                                     {subItem.name}
                                  </Link>
                                  {subItem.subItems && subItem.subItems.length > 0 && (
                                    <div className="pl-6 flex flex-col gap-2">
                                      {subItem.subItems.map((child: any) => (
                                        <Link 
                                          key={child.name}
                                          href={child.href}
                                          className="text-sm text-gray-500 hover:text-accent"
                                          onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                          {child.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                               </div>
                             ) : (
                               <Link 
                                 href={subItem.href}
                                 className="flex items-center gap-2 text-sm font-bold text-gray-700 py-1"
                                 onClick={() => setIsMobileMenuOpen(false)}
                               >
                                  {subItem.icon && <subItem.icon size={16} className="text-accent" />}
                                  {subItem.name}
                               </Link>
                             )}
                          </div>
                        ))}
                     </div>
                   )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-4">
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
