"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construction du lien mailto
    const recipient = "gta_transitaire@yahoo.com";
    const subject = encodeURIComponent(`[Contact Site Web] ${formState.subject} - ${formState.name}`);
    const body = encodeURIComponent(
      `Nom: ${formState.name}\n` +
      `Email: ${formState.email}\n` +
      `Sujet: ${formState.subject}\n\n` +
      `Message:\n${formState.message}`
    );

    // Ouverture du client de messagerie par défaut
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // On réinitialise l'état après un court délai pour laisser le temps au mailto de se lancer
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
         <div className="absolute inset-0 bg-black/20 z-0"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contactez-nous
            </motion.h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner dans tous vos besoins logistiques.
            </p>
         </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                <MessageSquare className="text-accent" /> Nos Coordonnées
              </h2>
              <p className="text-gray-600 mb-8">
                Nous sommes disponibles du lundi au vendredi de 08h00 à 18h00 pour répondre à toutes vos demandes.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Siège Social */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Siège Social</h3>
                <address className="not-italic text-gray-600 text-sm mb-4">
                  Groupeur Transitaire Associés. (G.T.A.)<br/>
                  du Groupe R.V.S et Compagnie. SAS<br/> <br/>
                  126, Avenue de la République.<br/>
                  Escalier 1, 1er étage,<br/>
                  93800 Épinay-sur-Seine<br/>
                  France
                </address>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=126+Avenue+de+la+République+93800+Épinay-sur-Seine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-bold text-sm hover:underline inline-flex items-center"
                >
                  Voir sur la carte <MapPin size={14} className="ml-1" />
                </a>
              </div>

              {/* Entrepôt */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-accent mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">Entrepôt Wakam</h3>
                <p className="text-xs text-gray-500 mb-1">(Nord Sud Transit)</p>
                <address className="not-italic text-gray-600 text-sm mb-4">
                  145 avenue du président Wilson.<br/>
                  93210 La plaine Saint-Denis<br/>
                  France
                </address>
                <a 
                   href="https://www.google.com/maps/search/?api=1&query=145+avenue+du+président+Wilson+93210+La+plaine+Saint-Denis" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-accent font-bold text-sm hover:underline inline-flex items-center"
                >
                  Voir sur la carte <MapPin size={14} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Direct Contact List */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
               <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Téléphone</h4>
                      <div className="flex flex-col gap-1 mt-1">
                        <a href="tel:+33607811308" className="text-gray-600 hover:text-accent transition-colors">+33 6 07 81 13 08 (Mobile)</a>
                        <a href="tel:+33684883811" className="text-gray-600 hover:text-accent transition-colors">+33 6 84 88 38 11 (Mobile)</a>
                        <a href="tel:+33986228353" className="text-gray-600 hover:text-accent transition-colors">+33 9 86 22 83 53 (Bureau)</a>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <a href="mailto:gta_transitaire@yahoo.com" className="text-gray-600 hover:text-accent transition-colors block mt-1">gta_transitaire@yahoo.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Horaires d'ouverture</h4>
                      <p className="text-gray-600 mt-1">Lundi - Vendredi : 08h00 - 18h00</p>
                      <p className="text-gray-400 text-sm">Fermé le week-end</p>
                    </div>
                  </li>
               </ul>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-4 border-accent h-fit"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h3>
            
            {isSent ? (
               <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-green-700 mb-2">Message envoyé !</h4>
                  <p className="text-gray-600">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => setIsSent(false)} className="mt-6 text-accent font-bold hover:underline">Envoyer un autre message</button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                  <select 
                    name="subject"
                    value={formState.subject}
                    onChange={(e: any) => handleChange(e)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all"
                  >
                    <option value="">Sélectionnez un sujet...</option>
                    <option value="devis">Demande de devis</option>
                    <option value="info">Renseignement général</option>
                    <option value="suivi">Suivi de dossier</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="logistique">Demande de service logistique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'} <Send size={18} />
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour vous recontacter.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Maps Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Nos Emplacements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[400px]">
             {/* Map 1 Placeholder/Iframe - Epinay */}
             <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=126%20Avenue%20de%20la%20R%C3%A9publique%2093800%20%C3%89pinay-sur-Seine&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-sm pointer-events-none">
                  Siège Social
                </div>
             </div>

             {/* Map 2 Placeholder/Iframe - St Denis */}
             <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 relative group">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=145%20avenue%20du%20pr%C3%A9sident%20Wilson%2093210%20La%20plaine%20Saint-Denis&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-sm pointer-events-none">
                  Entrepôt Wakam
                </div>
             </div>
          </div>
        </div>

      </div>
    </main>
  );
}
