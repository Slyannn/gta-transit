"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle, Mail, FileText, Phone, MapPin } from "lucide-react";

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-accent" size={48} />
            <h1 className="text-3xl md:text-5xl font-bold text-white">Politique de Confidentialité</h1>
          </div>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Protection de vos données personnelles - Conformité RGPD
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="space-y-8">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Lock className="text-accent" /> Introduction
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                GTA Transit (ci-après « nous », « notre » ou « GTA ») s'engage à protéger et respecter votre vie privée. Cette politique de confidentialité décrit comment nous collectons, utilisons, partageons et protégeons vos données personnelles.
              </p>

              <p>
                Cette politique s'applique à l'ensemble des services proposés par GTA Transit via le site web <span className="font-semibold">www.gta-transit.fr</span> et nos communications.
              </p>

              <p>
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité.
              </p>
            </div>
          </motion.div>

          {/* Section 1 : Responsable du traitement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <UserCheck className="text-accent" /> 1. Responsable du traitement des données
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le responsable du traitement de vos données personnelles est :
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">Groupeur Transitaire Associés (GTA Transit)</p>
                <p className="mt-2">Adresse : 126, Avenue de la République.<br/>
                Escalier 1, 1er étage,<br/>
                93800 Épinay-sur-Seine<br/>
                France</p>
                <p className="flex items-center gap-2 mt-1">
                  <Mail size={16} className="text-accent" />
                  Email : gta_transitaire@yahoo.com
                </p>
                <p className="mt-1">Téléphone : +33 6 07 81 13 08</p>
              </div>
            </div>
          </motion.div>

          {/* Section 2 : Données collectées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Database className="text-accent" /> 2. Données personnelles collectées
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Nous collectons les données personnelles suivantes lorsque vous utilisez nos services :
              </p>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2.1 Données d'identification</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nom et prénom</li>
                  <li>Raison sociale (pour les professionnels)</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2.2 Données relatives aux expéditions</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nature de la marchandise</li>
                  <li>Poids et volume des colis</li>
                  <li>Lieux de départ et d'arrivée</li>
                  <li>Dates souhaitées d'expédition</li>
                  <li>Informations sur les conteneurs</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2.3 Données de navigation</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et système d'exploitation</li>
                  <li>Pages visitées et temps de visite</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 3 : Finalités */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Eye className="text-accent" /> 3. Finalités du traitement
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Traitement des demandes de devis</span> : Pour vous fournir une estimation tarifaire personnalisée
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Gestion des réservations</span> : Pour organiser vos expéditions maritimes, aériennes ou routières
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Communication commerciale</span> : Pour vous informer de nos services et promotions (avec votre consentement)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Amélioration des services</span> : Pour analyser et améliorer la qualité de nos prestations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-gray-900">Obligations légales</span> : Pour respecter les obligations réglementaires (douanes, fiscalité, etc.)
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 4 : Base légale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <FileText className="text-accent" /> 4. Base légale du traitement
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Exécution du contrat</span> : Traitement nécessaire à la fourniture de nos services de transport
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Consentement</span> : Pour l'envoi de communications marketing
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Obligation légale</span> : Pour respecter les réglementations en vigueur
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Intérêt légitime</span> : Pour améliorer nos services et assurer la sécurité de notre site
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 5 : Durée de conservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              5. Durée de conservation des données
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Données clients actifs</span> : Pendant toute la durée de la relation contractuelle + 3 ans
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Données de prospection</span> : Maximum 3 ans après le dernier contact
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Données comptables</span> : 10 ans conformément aux obligations légales
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Cookies</span> : Maximum 13 mois
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 6 : Partage des données */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              6. Destinataires des données
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Vos données personnelles peuvent être partagées avec :
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Nos partenaires transporteurs</span> : Compagnies maritimes et aériennes pour l'exécution des expéditions
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Autorités douanières</span> : Dans le cadre des obligations réglementaires
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Prestataires techniques</span> : Hébergement web, outils de gestion (sous engagement de confidentialité)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="font-semibold">Organismes légaux</span> : En cas d'obligation légale ou judiciaire
                  </div>
                </li>
              </ul>

              <div className="bg-yellow-50 p-4 rounded-lg mt-6 border-l-4 border-accent">
                <p className="text-sm">
                  <span className="font-semibold">Important :</span> Nous ne vendons jamais vos données personnelles à des tiers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 7 : Vos droits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Shield className="text-accent" /> 7. Vos droits RGPD
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">✓ Droit d'accès</h4>
                  <p className="text-sm">Obtenir une copie de vos données personnelles</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">✓ Droit de rectification</h4>
                  <p className="text-sm">Corriger vos données inexactes ou incomplètes</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">✓ Droit à l'effacement</h4>
                  <p className="text-sm">Supprimer vos données personnelles</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">✓ Droit d'opposition</h4>
                  <p className="text-sm">Vous opposer au traitement de vos données</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">✓ Droit à la limitation</h4>
                  <p className="text-sm">Limiter le traitement de vos données</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">✓ Droit à la portabilité</h4>
                  <p className="text-sm">Récupérer vos données dans un format structuré</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h4 className="font-semibold text-gray-900 mb-3">Comment exercer vos droits ?</h4>
                <p className="mb-3">
                  Pour exercer l'un de ces droits, contactez-nous par email à :
                </p>
                <p className="font-semibold text-primary text-lg">gta_transitaire@yahoo.com</p>
                <p className="text-sm mt-3">
                  Merci de joindre une copie de votre pièce d'identité pour vérification. Nous traiterons votre demande dans un délai maximum de 1 mois.
                </p>
              </div>

              <p className="text-sm italic mt-4">
                Vous avez également le droit de déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.cnil.fr</a>
              </p>
            </div>
          </motion.div>

          {/* Section 8 : Sécurité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Lock className="text-accent" /> 8. Sécurité des données
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, perte, destruction ou altération :
              </p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Chiffrement des données sensibles (HTTPS/SSL)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Accès restreint aux données (principe du moindre privilège)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Sauvegardes régulières et sécurisées
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Surveillance et mise à jour des systèmes de sécurité
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Section 9 : Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-100 pb-3">
              9. Cookies et technologies similaires
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser l'utilisation du site.
              </p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Types de cookies utilisés :</h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary mt-1">•</span>
                    <div>
                      <span className="font-semibold">Cookies essentiels</span> : Nécessaires au fonctionnement du site
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary mt-1">•</span>
                    <div>
                      <span className="font-semibold">Cookies analytiques</span> : Pour comprendre comment vous utilisez notre site
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                Vous pouvez à tout moment gérer vos préférences de cookies dans les paramètres de votre navigateur ou refuser les cookies non essentiels.
              </p>
            </div>
          </motion.div>

          {/* Section 10 : Modifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <AlertCircle className="text-accent" /> 10. Modifications de la politique
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
              </p>

              <p>
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
              </p>
            </div>
          </motion.div>

          {/* Section 11 : Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-gradient-to-br from-primary to-blue-700 text-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/20 pb-3">
              <Mail className="text-accent" /> 11. Nous contacter
            </h2>
            
            <div className="space-y-4">
              <p>
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
              </p>

              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <Mail size={18} className="text-accent" />
                    <span className="font-semibold">Email :</span> gta_transitaire@yahoo.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-accent" />
                    <span className="font-semibold">Téléphone :</span> +33 6 07 81 13 08
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin size={18} className="text-accent shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">Adresse :</span> 126, Avenue de la République.<br/>
                      Escalier 1, 1er étage,<br/>
                      93800 Épinay-sur-Seine<br/>
                      France
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Date de mise à jour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
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
