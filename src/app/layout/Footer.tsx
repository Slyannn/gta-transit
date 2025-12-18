"use client";

import Link from "next/link";
import { Mail, Phone, Clock, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="text-accent" /> Newsletter GTA
            </h3>
            <p className="text-gray-400">Recevez nos dernières actualités et offres.</p>
          </div>
          <div className="flex w-full md:w-auto gap-4">
             <input 
              type="email" 
              placeholder="Votre email" 
              className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent w-full md:w-80"
             />
             <button className="bg-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
               S'abonner
             </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="block">
             <span className="text-3xl font-bold text-white tracking-tighter">GTA</span>
             <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-1">
              Groupeur Transitaire Associés
            </p>
          </Link>
          <p className="text-sm leading-relaxed">
            Votre partenaire de confiance pour tous vos besoins en transport international. 
            Maritime, Aérien, et Routier.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Liens Rapides</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/about" className="hover:text-accent transition-colors">À propos</Link></li>
            <li><Link href="#services" className="hover:text-accent transition-colors">Nos Services</Link></li>
            <li><Link href="/devis" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
           <h4 className="text-white font-bold text-lg mb-6">Nos Services</h4>
           <ul className="space-y-4 text-sm">
            <li><Link href="/maritime" className="hover:text-accent transition-colors">Fret Maritime</Link></li>
            <li><Link href="/aerien" className="hover:text-accent transition-colors">Fret Aérien</Link></li>
            <li><Link href="/vehicules" className="hover:text-accent transition-colors">Transport de véhicules</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent mt-1 shrink-0" />
              <span>
                Entrepôt Wakam<br/>
                (Nord Sud Transit)<br/>
                145 avenue du président Wilson.<br/>
                93210 La plaine Saint-Denis<br/>
                France
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <span>+33 6 07 81 13 08</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <span>gta_transitaire@yahoo.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-accent shrink-0" />
              <span>Lun - Ven: 08h - 18h</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/30 py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} GTA - Groupeur Transitaire Associés. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Mentions légales</Link>
            <Link href="#" className="hover:text-white">Politique de confidentialité</Link>
            <Link href="#" className="hover:text-white">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

