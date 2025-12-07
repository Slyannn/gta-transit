"use client";

import { motion } from "framer-motion";
import { FileText, CheckSquare, AlertTriangle, Download, ArrowRight, Car } from "lucide-react";
import Link from "next/link";

export default function ModalitesVehiculesPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2670&auto=format&fit=crop')" }} // Image Ro-Ro / Chargement
        ></div>
        <div className="z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Conditions d'Expédition des Véhicules
          </motion.h1>
          <div className="h-1 bg-accent w-24 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-200 font-light">Vers l'Afrique et les DOM-TOM</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Intro */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <Car className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-lg text-gray-600">
              Pour assurer le bon déroulement de l'expédition de votre véhicule, merci de prendre connaissance des documents requis et des conditions de préparation obligatoires ci-dessous.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Section A: Documents Indispensables */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-primary"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-primary">A. Documents à Fournir</h2>
              </div>
              <ul className="space-y-4">
                <ListItem text="Carte grise originale ou Certificat d'Immatriculation Provisoire (CPI)" />
                <ListItem text="Facture d'achat du garage ou Certificat de cession (si achat à un particulier)" />
                <ListItem 
                  text="Certificat de non gage" 
                  extra={<a href="https://siv.interieur.gouv.fr/map-usg-ui/do/accueil_certificat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent text-sm font-bold hover:underline mt-1"><Download size={14} className="mr-1"/> Télécharger le certificat</a>}
                />
                <ListItem text="Avis de mutation (si applicable)" />
                <ListItem text="Coordonnées complètes Expéditeur & Destinataire (Nom, Adresse, Tél, Email)" />
                <ListItem text="Copie d'une pièce d'identité en cours de validité" />
              </ul>
            </motion.div>

            {/* Section B: Documents à Signer */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-secondary"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <CheckSquare className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold text-secondary">B. Documents à Signer</h2>
              </div>
              <p className="mb-4 text-sm text-gray-500 italic">Ces documents vous seront fournis par nos services :</p>
              <ul className="space-y-4">
                <ListItem text="Contrat de transport" />
                <ListItem text="Conditions générales de vente" />
                <ListItem text="Attestation de valeur" />
                <ListItem text="Déclaration sur l'honneur" />
                <ListItem text="Conditions d'assurance (si souscrite)" />
              </ul>
            </motion.div>
          </div>

          {/* Section C: Conditions de Dépôt */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50 p-8 md:p-12 rounded-2xl border border-orange-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-orange-100 p-3 rounded-full">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">C. Préparation Obligatoire du Véhicule</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              <ul className="space-y-4">
                <CheckItem text="Véhicule en bon état de fonctionnement et roulant." />
                <CheckItem text="Véhicule TOTALEMENT VIDE (aucun effet personnel à l'intérieur)." />
                <CheckItem text="Débrancher les cosses de batterie et désactiver l'alarme." />
                <CheckItem text="Démonter les accessoires volables (phares antibrouillard, spoilers...)." />
              </ul>
              <ul className="space-y-4">
                <CheckItem text="Replier/démonter les rétroviseurs 'grand angle'." />
                <CheckItem text="Replier ou rabattre l'antenne sur le toit." />
                <CheckItem text="Batterie chargée, pneus gonflés, niveaux faits." />
                <CheckItem text="Sièges accessibles et portières déverrouillées." />
              </ul>
            </div>

            <div className="mt-8 bg-white/60 p-4 rounded-lg border border-orange-200 text-sm text-orange-800 font-medium">
              <span className="font-bold">NOTE IMPORTANTE :</span> Une fois le véhicule au port, la compagnie maritime est autorisée à le toiser (mesurer) et le peser à nouveau pour vérification.
            </div>
          </motion.div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Prêt à expédier votre véhicule ?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Maintenant que vous connaissez les modalités, obtenez une estimation précise pour votre transport.
          </p>
          <Link 
            href="/devis" 
            className="inline-flex items-center bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Demander un devis en ligne <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ListItem({ text, extra }: { text: string, extra?: React.ReactNode }) {
  return (
    <li className="flex flex-col">
      <div className="flex items-start gap-3">
        <span className="h-2 w-2 rounded-full bg-gray-300 mt-2 shrink-0"></span>
        <span className="text-gray-700">{text}</span>
      </div>
      {extra && <div className="pl-5">{extra}</div>}
    </li>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 bg-green-100 rounded-full p-1 shrink-0">
        <CheckSquare size={14} className="text-green-600" />
      </div>
      <span className="text-gray-800">{text}</span>
    </li>
  );
}
