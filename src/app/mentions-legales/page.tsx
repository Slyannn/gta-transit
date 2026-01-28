"use client";

import { motion } from "framer-motion";
import { Scale, Building2, Mail, Phone, MapPin, Globe, Server } from "lucide-react";

export default function MentionsLegalesPage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="text-accent" size={48} />
            <h1 className="text-3xl md:text-5xl font-bold text-white">Mentions Légales</h1>
          </div>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Informations légales relatives au site www.gta-transit.fr
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          
          {/* Section 1 : Éditeur du site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Building2 className="text-accent" /> 1. Éditeur du site
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Raison sociale :</p>
                <p>Groupeur Transitaire Associés (G.T.A.)<br/>
                du Groupe R.V.S et Compagnie. SAS</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Forme juridique :</p>
                <p>Société à Actions Simplifiées (SAS)</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Capital social :</p>
                <p>[À compléter]</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">SIRET :</p>
                <p>[À compléter]</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Numéro de TVA intracommunautaire :</p>
                <p>[À compléter]</p>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Siège social :</p>
                  <p>126, Avenue de la République.<br/>
                  Escalier 1, 1er étage,<br/>
                  93800 Épinay-sur-Seine<br/>
                  France</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Téléphone :</p>
                  <p>+33 6 07 81 13 08</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Email :</p>
                  <p>gta_transitaire@yahoo.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2 : Directeur de publication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Globe className="text-accent" /> 2. Directeur de publication
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Nom du directeur de publication :</p>
                <p>[À compléter : Nom et prénom du représentant légal]</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Qualité :</p>
                <p>[À compléter : Gérant, Président, etc.]</p>
              </div>
            </div>
          </motion.div>

          {/* Section 3 : Hébergement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Server className="text-accent" /> 3. Hébergement du site
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Hébergeur :</p>
                <p>[À compléter : Nom de l'hébergeur - ex: Vercel, OVH, AWS, etc.]</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Adresse de l'hébergeur :</p>
                <p>[À compléter]</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Contact hébergeur :</p>
                <p>[À compléter]</p>
              </div>
            </div>
          </motion.div>

          {/* Section 4 : Propriété intellectuelle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              4. Propriété intellectuelle
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>

              <p>
                La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>

              <p>
                Les marques et logos présents sur le site sont déposés par GTA Transit ou éventuellement par un de ses partenaires. Toute reproduction totale ou partielle de ces marques ou de ces logos sans l'autorisation expresse de GTA Transit est prohibée.
              </p>
            </div>
          </motion.div>

          {/* Section 5 : Protection des données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              5. Protection des données personnelles
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>

              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : <span className="font-semibold text-primary">gta_transitaire@yahoo.com</span>
              </p>

              <p>
                Pour plus d'informations sur la collecte et le traitement de vos données personnelles, consultez notre{" "}
                <a href="/politique-confidentialite" className="text-accent font-semibold hover:underline">
                  Politique de Confidentialité
                </a>.
              </p>
            </div>
          </motion.div>

          {/* Section 6 : Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              6. Cookies
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le site www.gta-transit.fr peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
              </p>

              <p>
                Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et enregistrer des informations. Certaines parties de ce site ne peuvent être fonctionnelles sans l'acceptation de cookies.
              </p>

              <p>
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </div>
          </motion.div>

          {/* Section 7 : Responsabilité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              7. Limitation de responsabilité
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>

              <p>
                Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email à l'adresse <span className="font-semibold text-primary">gta_transitaire@yahoo.com</span>, en décrivant le problème de la manière la plus précise possible.
              </p>

              <p>
                GTA Transit ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </div>
          </motion.div>

          {/* Section 8 : Droit applicable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              8. Droit applicable et attribution de juridiction
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tout litige en relation avec l'utilisation du site www.gta-transit.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
              </p>
            </div>
          </motion.div>

          {/* Date de mise à jour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-50 p-6 rounded-xl border-l-4 border-accent text-center"
          >
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">Dernière mise à jour :</span> Janvier 2026
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
