"use client";

import { motion } from "framer-motion";
import { Truck, Ship, Package, MapPin, CheckCircle, Gift, UserPlus, Send } from "lucide-react";
import { useState } from "react";

export default function CamerounBagagesPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulation d'envoi
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/Fret-istock.jpg')" }} // Image chargement bagages
        ></div>
        <div className="z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Cameroun Bagages
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-200 mt-4 font-light">Spécialiste du groupage maritime d'effets personnels</p>
        </div>
      </section>

      {/* Présentation du Service */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contenu Gauche */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-primary mb-6">Solution clé en main France - Cameroun</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Le département <strong>Cameroun Bagages</strong> est spécialisé dans le groupage maritime des effets personnels usagés et neufs 
              (valises, cantines, sacs de voyage, électroménager, meubles, etc.) depuis la France à destination du Cameroun.
            </p>

            {/* Etapes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Truck className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl text-secondary font-bold mb-2">1. Enlèvement & Chargement</h3>
                <p className="text-gray-600 text-sm">
                  Enlèvement à domicile sur demande ou dépôt dans nos entrepôts de <strong>Saint-Denis (93)</strong> ou <strong>Aulnay-Sous-Bois (93)</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Ship className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl text-secondary font-bold mb-2">2. Transport Maritime</h3>
                <p className="text-gray-600 text-sm">
                  Transport sécurisé par voie maritime jusqu'au port de <strong>Douala</strong>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl text-secondary font-bold mb-2">3. Dédouanement Inclus</h3>
                <p className="text-gray-600 text-sm">
                  Nous gérons toutes les formalités. Vos colis sont dédouanés et prêts à être récupérés.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <MapPin className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl text-secondary font-bold mb-2">4. Mise à disposition</h3>
                <p className="text-gray-600 text-sm">
                  Récupération dans nos entrepôts de <strong>DOUALA</strong> ou <strong>YAOUNDÉ</strong>. 
                  Possibilité de livraison dans d'autres villes.
                </p>
              </div>
            </div>

            {/* Information Paiement */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary mb-12">
              <h3 className="text-lg font-bold text-primary mb-2">Conditions de Règlement</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Tous les frais sont payables à Paris.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Le destinataire retire ses colis <strong>sans aucun frais supplémentaire</strong> à destination.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">ℹ</span>
                  Possibilité de paiement à destination selon accord préférentiel.
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Offres & Promo */}
          <div className="lg:w-1/3 space-y-8">
            {/* Carte Fidelité */}
            <div className="bg-gradient-to-br from-accent to-orange-600 text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <Gift className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-black uppercase mb-2">Offre Exceptionnelle</h3>
              <p className="text-4xl font-bold mb-4">5 = 1</p>
              <p className="font-medium mb-6">
                5 Expéditions effectuées<br/>= 1 Expédition GRATUITE*
              </p>
              <p className="text-xs opacity-80">*Valable sur colis effets personnels usagés, max 15kg.</p>
            </div>

            {/* Parrainage */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Parrainage</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Gagnez <strong>5% de réduction</strong> pour chaque personne parrainée !
              </p>
              <p className="text-sm text-gray-500">
                Il suffit de faire tamponner votre carte de fidélité à chaque passage. 
                Valable pour vos filleuls en France, Afrique ou Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire Carte Fidélité */}
      <section id="carte-fidelite" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">Demandez votre Carte de Fidélité</h2>
            <p className="text-gray-600">
              Remplissez ce formulaire pour recevoir votre carte et commencer à cumuler vos avantages.
            </p>
          </div>

          <div className="bg-zinc-50 p-8 rounded-2xl shadow-inner">
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Demande enregistrée !</h3>
                <p className="text-gray-600 mt-2">Votre carte de fidélité est en cours de création.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-6 text-accent underline font-medium">Faire une autre demande</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                    <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adresse Complète</label>
                  <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input required type="tel" className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input required type="email" className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-accent outline-none" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Envoi en cours...' : 'COMMANDER MA CARTE'} 
                  {!formStatus && <Send size={20} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

