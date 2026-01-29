"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, MapPin, User, FileText, CheckCircle, ArrowRight, Mail, Phone, Building, Truck, Ship, Calendar, AlertCircle } from "lucide-react";
import { toast } from "sonner";

// URL de l'API (À configurer selon l'environnement)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export default function ReservationConteneurPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    // Section 1 : Demandeur
    typeClient: "",
    nomRaisonSociale: "",
    adresseComplete: "",
    pays: "",
    ville: "",
    codePostal: "",
    nomContact: "",
    telephone: "",
    email: "",
    
    // Section 2 : Réservation
    typeService: [] as string[],
    typeConteneur: "",
    autreTypeConteneur: "",
    nombreConteneurs: "",
    dateChargement: "",
    dateExpedition: "",
    
    // Section 3 : Marchandise
    natureMarchandise: "",
    poidsTotal: "",
    volumeEstime: "",
    marchandiseDangereuse: "",
    classeIMDG: "",
    valeurMarchandise: "",
    
    // Section 4 : Itinéraire
    adresseChargement: "",
    paysChargement: "",
    villeChargement: "",
    codePostalChargement: "",
    nomContactChargement: "",
    telephoneChargement: "",
    emailChargement: "",
    portDepart: "",
    portDestination: "",
    lieuLivraisonFinale: "",
    
    // Section 5 : Services complémentaires
    servicesComplementaires: [] as string[],
    
    // Section 6 : Informations complémentaires
    informationsComplementaires: "",
    
    // Section 7 : Validation
    confirmation: false,
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleCheckboxArray = (field: string, value: string, checked: boolean) => {
    setFormData((prev) => {
      const currentArray = prev[field as keyof typeof prev] as string[];
      const newArray = checked
        ? [...currentArray, value]
        : currentArray.filter((item) => item !== value);
      return { ...prev, [field]: newArray };
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {};
    
    // Section 1 - Required fields
    if (!formData.typeClient) newErrors.typeClient = true;
    if (!formData.nomRaisonSociale) newErrors.nomRaisonSociale = true;
    if (!formData.adresseComplete) newErrors.adresseComplete = true;
    if (!formData.pays) newErrors.pays = true;
    if (!formData.ville) newErrors.ville = true;
    if (!formData.codePostal) newErrors.codePostal = true;
    if (!formData.telephone) newErrors.telephone = true;
    if (!formData.email) newErrors.email = true;
    
    // Section 4 - Required fields
    if (!formData.adresseChargement) newErrors.adresseChargement = true;
    if (!formData.paysChargement) newErrors.paysChargement = true;
    if (!formData.villeChargement) newErrors.villeChargement = true;
    if (!formData.codePostalChargement) newErrors.codePostalChargement = true;
    if (!formData.portDepart) newErrors.portDepart = true;
    
    // Section 7 - Confirmation
    if (!formData.confirmation) newErrors.confirmation = true;
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Envoyer l'email via l'API Resend
      const response = await fetch(`/api/send-reservation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setIsSubmitting(false);
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.success("Votre demande a été envoyée avec succès ! Nous vous contacterons rapidement.");
      } else {
        throw new Error(result.error || "Échec de l'envoi de l'email");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réservation:", error);
      setIsSubmitting(false);
      toast.error("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement.", {
        description: "Email: gta_transitaire@yahoo.com | Tél: +33 6 07 81 13 08"
      });
    }
  };

  const getInputClass = (hasError: boolean) =>
    `w-full p-3 border rounded-lg outline-none text-gray-900 transition-all ${
      hasError
        ? "border-red-500 ring-1 ring-red-500 bg-red-50"
        : "border-gray-200 focus:ring-2 focus:ring-accent bg-white"
    }`;

  if (isSuccess) {
    return (
      <main className="bg-zinc-50 min-h-screen py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-2xl shadow-xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-4">Demande envoyée avec succès !</h1>
            <p className="text-gray-600 text-lg mb-8">
              Notre équipe vous contactera dans les plus brefs délais pour confirmation de la réservation, disponibilité du conteneur et devis.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Retour à l'accueil
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Ship className="text-accent" size={48} />
            <h1 className="text-3xl md:text-5xl font-bold text-white">Réservation de Conteneur</h1>
          </div>
          <p className="text-blue-200 max-w-3xl mx-auto text-lg">
            Merci de compléter ce formulaire afin de nous permettre de traiter votre demande de réservation de conteneur dans les meilleurs délais.
          </p>
          <p className="text-blue-200 max-w-3xl mx-auto text-sm mt-2">
            Cette page s'adresse aussi bien aux professionnels qu'aux particuliers.
          </p>
        </motion.div>
      </section>

      {/* Formulaire */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <form onSubmit={handleSubmit} className="space-y-12">
          
          {/* Section 1 : Informations sur le demandeur */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <User className="text-accent" /> 1. Informations sur le demandeur
            </h2>
            
            <div className="space-y-6">
              {/* Type de client */}
              <div>
                <label className={`text-sm font-medium mb-2 block ${errors.typeClient ? 'text-red-500' : 'text-gray-700'}`}>
                  Type de client <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="typeClient"
                      value="professionnel"
                      checked={formData.typeClient === "professionnel"}
                      onChange={(e) => handleChange("typeClient", e.target.value)}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-gray-700">Professionnel</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="typeClient"
                      value="particulier"
                      checked={formData.typeClient === "particulier"}
                      onChange={(e) => handleChange("typeClient", e.target.value)}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-gray-700">Particulier</span>
                  </label>
                </div>
                {errors.typeClient && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}
              </div>

              {/* Nom et prénom / Raison sociale */}
              <div>
                <label className={`text-sm font-medium mb-2 block ${errors.nomRaisonSociale ? 'text-red-500' : 'text-gray-700'}`}>
                  Nom et prénom / Raison sociale <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.nomRaisonSociale}
                  onChange={(e) => handleChange("nomRaisonSociale", e.target.value)}
                  className={getInputClass(errors.nomRaisonSociale)}
                  placeholder="Ex: Jean Dupont ou Entreprise SARL"
                />
                {errors.nomRaisonSociale && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}
              </div>

              {/* Adresse complète */}
              <div>
                <label className={`text-sm font-medium mb-2 block ${errors.adresseComplete ? 'text-red-500' : 'text-gray-700'}`}>
                  Adresse complète du demandeur <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.adresseComplete}
                  onChange={(e) => handleChange("adresseComplete", e.target.value)}
                  className={getInputClass(errors.adresseComplete)}
                  placeholder="Ex: 123 Rue de la République"
                />
                {errors.adresseComplete && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}
              </div>

              {/* Pays / Ville / Code postal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={`text-sm font-medium mb-2 block ${errors.pays ? 'text-red-500' : 'text-gray-700'}`}>
                    Pays <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pays}
                    onChange={(e) => handleChange("pays", e.target.value)}
                    className={getInputClass(errors.pays)}
                    placeholder="Ex: France"
                  />
                  {errors.pays && <p className="text-red-500 text-xs mt-1">Requis</p>}
                </div>
                <div>
                  <label className={`text-sm font-medium mb-2 block ${errors.ville ? 'text-red-500' : 'text-gray-700'}`}>
                    Ville <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.ville}
                    onChange={(e) => handleChange("ville", e.target.value)}
                    className={getInputClass(errors.ville)}
                    placeholder="Ex: Paris"
                  />
                  {errors.ville && <p className="text-red-500 text-xs mt-1">Requis</p>}
                </div>
                <div>
                  <label className={`text-sm font-medium mb-2 block ${errors.codePostal ? 'text-red-500' : 'text-gray-700'}`}>
                    Code postal <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.codePostal}
                    onChange={(e) => handleChange("codePostal", e.target.value)}
                    className={getInputClass(errors.codePostal)}
                    placeholder="Ex: 75001"
                  />
                  {errors.codePostal && <p className="text-red-500 text-xs mt-1">Requis</p>}
                </div>
              </div>

              {/* Nom du contact */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Nom du contact (si professionnel ou particulier)
                </label>
                <input
                  type="text"
                  value={formData.nomContact}
                  onChange={(e) => handleChange("nomContact", e.target.value)}
                  className={getInputClass(false)}
                  placeholder="Ex: Marie Martin"
                />
              </div>

              {/* Téléphone et Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`text-sm font-medium mb-2 block ${errors.telephone ? 'text-red-500' : 'text-gray-700'}`}>
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => handleChange("telephone", e.target.value)}
                    className={getInputClass(errors.telephone)}
                    placeholder="+33 6 12 34 56 78"
                  />
                  {errors.telephone && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}
                </div>
                <div>
                  <label className={`text-sm font-medium mb-2 block ${errors.email ? 'text-red-500' : 'text-gray-700'}`}>
                    Adresse e-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={getInputClass(errors.email)}
                    placeholder="exemple@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2 : Détails de la réservation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <FileText className="text-accent" /> 2. Détails de la réservation (Booking)
            </h2>
            
            <div className="space-y-6">
              {/* Type de service */}
              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">
                  Type de service demandé
                </label>
                <div className="space-y-2">
                  {[
                    "Réservation de conteneur (booking maritime)",
                    "Mise à disposition de conteneur vide",
                    "Transport maritime",
                    "Transport terrestre (pré-acheminement / post-acheminement)"
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.typeService.includes(service)}
                        onChange={(e) => handleCheckboxArray("typeService", service, e.target.checked)}
                        className="w-4 h-4 text-accent focus:ring-accent rounded"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type de conteneur */}
              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">
                  Type de conteneur souhaité
                </label>
                <div className="space-y-2">
                  {[
                    { value: "20_standard", label: "20 pieds standard" },
                    { value: "40_standard", label: "40 pieds standard" },
                    { value: "40_hc", label: "40 pieds High Cube" },
                    { value: "reefer", label: "Réfrigéré (Reefer)" },
                    { value: "autre", label: "Autre (préciser)" }
                  ].map((type) => (
                    <label key={type.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="typeConteneur"
                        value={type.value}
                        checked={formData.typeConteneur === type.value}
                        onChange={(e) => handleChange("typeConteneur", e.target.value)}
                        className="w-4 h-4 text-accent focus:ring-accent"
                      />
                      <span className="text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>
                {formData.typeConteneur === "autre" && (
                  <input
                    type="text"
                    value={formData.autreTypeConteneur}
                    onChange={(e) => handleChange("autreTypeConteneur", e.target.value)}
                    className={`${getInputClass(false)} mt-2`}
                    placeholder="Précisez le type de conteneur"
                  />
                )}
              </div>

              {/* Nombre de conteneurs */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Nombre de conteneurs
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.nombreConteneurs}
                  onChange={(e) => handleChange("nombreConteneurs", e.target.value)}
                  className={getInputClass(false)}
                  placeholder="Ex: 1"
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">
                    Date souhaitée de chargement
                  </label>
                  <input
                    type="date"
                    value={formData.dateChargement}
                    onChange={(e) => handleChange("dateChargement", e.target.value)}
                    className={getInputClass(false)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">
                    Date souhaitée d'expédition / départ
                  </label>
                  <input
                    type="date"
                    value={formData.dateExpedition}
                    onChange={(e) => handleChange("dateExpedition", e.target.value)}
                    className={getInputClass(false)}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3 : Informations sur la marchandise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Package className="text-accent" /> 3. Informations sur la marchandise
            </h2>
            
            <div className="space-y-6">
              {/* Nature de la marchandise */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Nature de la marchandise
                </label>
                <input
                  type="text"
                  value={formData.natureMarchandise}
                  onChange={(e) => handleChange("natureMarchandise", e.target.value)}
                  className={getInputClass(false)}
                  placeholder="Ex: Meubles, électronique, textile..."
                />
              </div>

              {/* Poids et Volume */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">
                    Poids total estimé (kg)
                  </label>
                  <input
                    type="text"
                    value={formData.poidsTotal}
                    onChange={(e) => handleChange("poidsTotal", e.target.value)}
                    className={getInputClass(false)}
                    placeholder="Ex: 5000"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">
                    Volume estimé (m³)
                  </label>
                  <input
                    type="text"
                    value={formData.volumeEstime}
                    onChange={(e) => handleChange("volumeEstime", e.target.value)}
                    className={getInputClass(false)}
                    placeholder="Ex: 15"
                  />
                </div>
              </div>

              {/* Marchandise dangereuse */}
              <div>
                <label className="text-sm font-medium mb-3 block text-gray-700">
                  Marchandise dangereuse
                </label>
                <div className="flex gap-6 mb-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="marchandiseDangereuse"
                      value="oui"
                      checked={formData.marchandiseDangereuse === "oui"}
                      onChange={(e) => handleChange("marchandiseDangereuse", e.target.value)}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-gray-700">Oui</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="marchandiseDangereuse"
                      value="non"
                      checked={formData.marchandiseDangereuse === "non"}
                      onChange={(e) => handleChange("marchandiseDangereuse", e.target.value)}
                      className="w-4 h-4 text-accent focus:ring-accent"
                    />
                    <span className="text-gray-700">Non</span>
                  </label>
                </div>
                {formData.marchandiseDangereuse === "oui" && (
                  <input
                    type="text"
                    value={formData.classeIMDG}
                    onChange={(e) => handleChange("classeIMDG", e.target.value)}
                    className={getInputClass(false)}
                    placeholder="Préciser la classe IMDG (optionnel)"
                  />
                )}
              </div>

              {/* Valeur estimée */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Valeur estimée de la marchandise (optionnel)
                </label>
                <input
                  type="text"
                  value={formData.valeurMarchandise}
                  onChange={(e) => handleChange("valeurMarchandise", e.target.value)}
                  className={getInputClass(false)}
                  placeholder="Ex: 50 000 €"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 4 : Itinéraire souhaité */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <MapPin className="text-accent" /> 4. Itinéraire souhaité
            </h2>
            
            <div className="space-y-8">
              {/* Lieu de chargement (origine) */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-4">Lieu de chargement (origine) <span className="text-red-500">*</span></h3>
                <div className="space-y-4">
                  <div>
                    <label className={`text-sm font-medium mb-2 block ${errors.adresseChargement ? 'text-red-500' : 'text-gray-700'}`}>
                      Adresse complète du lieu de chargement <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.adresseChargement}
                      onChange={(e) => handleChange("adresseChargement", e.target.value)}
                      className={getInputClass(errors.adresseChargement)}
                      placeholder="Ex: 456 Avenue du Port"
                    />
                    {errors.adresseChargement && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={`text-sm font-medium mb-2 block ${errors.paysChargement ? 'text-red-500' : 'text-gray-700'}`}>
                        Pays <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.paysChargement}
                        onChange={(e) => handleChange("paysChargement", e.target.value)}
                        className={getInputClass(errors.paysChargement)}
                        placeholder="Ex: France"
                      />
                      {errors.paysChargement && <p className="text-red-500 text-xs mt-1">Requis</p>}
                    </div>
                    <div>
                      <label className={`text-sm font-medium mb-2 block ${errors.villeChargement ? 'text-red-500' : 'text-gray-700'}`}>
                        Ville <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.villeChargement}
                        onChange={(e) => handleChange("villeChargement", e.target.value)}
                        className={getInputClass(errors.villeChargement)}
                        placeholder="Ex: Le Havre"
                      />
                      {errors.villeChargement && <p className="text-red-500 text-xs mt-1">Requis</p>}
                    </div>
                    <div>
                      <label className={`text-sm font-medium mb-2 block ${errors.codePostalChargement ? 'text-red-500' : 'text-gray-700'}`}>
                        Code postal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.codePostalChargement}
                        onChange={(e) => handleChange("codePostalChargement", e.target.value)}
                        className={getInputClass(errors.codePostalChargement)}
                        placeholder="Ex: 76600"
                      />
                      {errors.codePostalChargement && <p className="text-red-500 text-xs mt-1">Requis</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">
                        Nom du contact
                      </label>
                      <input
                        type="text"
                        value={formData.nomContactChargement}
                        onChange={(e) => handleChange("nomContactChargement", e.target.value)}
                        className={getInputClass(false)}
                        placeholder="Ex: Pierre Dubois"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-gray-700">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.telephoneChargement}
                        onChange={(e) => handleChange("telephoneChargement", e.target.value)}
                        className={getInputClass(false)}
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-gray-700">
                      Adresse e-mail (optionnel)
                    </label>
                    <input
                      type="email"
                      value={formData.emailChargement}
                      onChange={(e) => handleChange("emailChargement", e.target.value)}
                      className={getInputClass(false)}
                      placeholder="contact@exemple.com"
                    />
                  </div>
                </div>
              </div>

              {/* Ports */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`text-sm font-medium mb-2 block ${errors.portDepart ? 'text-red-500' : 'text-gray-700'}`}>
                    Port de départ ou de chargement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.portDepart}
                    onChange={(e) => handleChange("portDepart", e.target.value)}
                    className={getInputClass(errors.portDepart)}
                    placeholder="Ex: Port du Havre"
                  />
                  {errors.portDepart && <p className="text-red-500 text-xs mt-1">Ce champ est requis</p>}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-gray-700">
                    Port de destination
                  </label>
                  <input
                    type="text"
                    value={formData.portDestination}
                    onChange={(e) => handleChange("portDestination", e.target.value)}
                    className={getInputClass(false)}
                    placeholder="Ex: Port de Douala"
                  />
                </div>
              </div>

              {/* Lieu de livraison finale */}
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">
                  Lieu de livraison finale (le cas échéant)
                </label>
                <input
                  type="text"
                  value={formData.lieuLivraisonFinale}
                  onChange={(e) => handleChange("lieuLivraisonFinale", e.target.value)}
                  className={getInputClass(false)}
                  placeholder="Ex: Entrepôt Yaoundé"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 5 : Services complémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <Truck className="text-accent" /> 5. Services complémentaires (optionnel)
            </h2>
            
            <div className="space-y-2">
              {[
                "Assurance transport",
                "Dédouanement export",
                "Dédouanement import",
                "Entreposage / stockage",
                "Suivi et traçabilité du conteneur"
              ].map((service) => (
                <label key={service} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.servicesComplementaires.includes(service)}
                    onChange={(e) => handleCheckboxArray("servicesComplementaires", service, e.target.checked)}
                    className="w-4 h-4 text-accent focus:ring-accent rounded"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Section 6 : Informations complémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <FileText className="text-accent" /> 6. Informations complémentaires
            </h2>
            
            <div>
              <label className="text-sm font-medium mb-2 block text-gray-700">
                Merci d'indiquer toute information utile pour le traitement de votre demande
              </label>
              <p className="text-xs text-gray-500 mb-2">
                (Contraintes de délais, type de marchandise spécifique, instructions particulières, etc.)
              </p>
              <textarea
                rows={6}
                value={formData.informationsComplementaires}
                onChange={(e) => handleChange("informationsComplementaires", e.target.value)}
                className={getInputClass(false)}
                placeholder="Décrivez vos besoins et contraintes particulières..."
              />
            </div>
          </motion.div>

          {/* Section 7 : Validation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
              <CheckCircle className="text-accent" /> 7. Validation de la demande
            </h2>
            
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.confirmation}
                  onChange={(e) => handleChange("confirmation", e.target.checked)}
                  className={`w-5 h-5 mt-0.5 text-accent focus:ring-accent rounded ${errors.confirmation ? 'border-red-500' : ''}`}
                />
                <span className={`text-gray-700 ${errors.confirmation ? 'text-red-500' : ''}`}>
                  Je confirme l'exactitude des informations fournies et autorise le traitement de ma demande de réservation de conteneur. <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.confirmation && <p className="text-red-500 text-xs">Vous devez confirmer pour continuer</p>}

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-accent flex items-start gap-3">
                <AlertCircle className="text-accent shrink-0 mt-1" size={20} />
                <p className="text-sm text-gray-700">
                  Une fois votre demande envoyée, notre équipe vous contactera dans les plus brefs délais pour confirmation de la réservation, disponibilité du conteneur et devis.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-12 py-5 bg-accent text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <ArrowRight size={24} />
                </>
              )}
            </button>
          </motion.div>
        </form>
      </section>
    </main>
  );
}
