export interface DevisFormData {
  // Étape 1 : Transport
  modeTransport: string;

  // Étape 2 : Trajet
  typeTrajet?: "national" | "international"; // Pour Déménagement et Express
  paysDepart: string;
  depart: string; // Port/Aéroport de départ
  villeEnlevement?: string; // Ville d'enlèvement (Post-port)
  dateDepart: string;
  paysArrivee: string;
  arrivee: string; // Port/Aéroport d'arrivée
  villeLivraison?: string; // Ville de livraison finale (Post-port)
  dateArrivee: string;

  // Étape 3 : Marchandise
  natureMarchandise: string;
  description: string;
  typeContainer: string;
  dimensions: string;
  nbColis: string;
  poids: string;
  volume: string;
  valeur: string;

  // Optionnels Déménagement
  demenagementType?: string;
  demenagementVolume?: string;
  demenagementMeubles?: string;
  demenagementServices?: string[];
  demenagementModeTransport?: string; // 'Maritime', 'Aérien', 'Routier'
  demenagementContainerType?: string; // '20_dry', '40_hc'
  demenagementFormalites?: boolean;

  // Étape 4 : Projet
  objectif: string;
  frequence: string;
  message: string;

  // Étape 5 : Contact
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  pays: string;
  telephone: string;
  societe: string;
  website: string;
  carteFidelite?: boolean;
}

export type FormErrors = Record<string, boolean>;

export interface DevisContextType {
  step: number;
  formData: Partial<DevisFormData>;
  errors: FormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  
  // Actions
  handleChange: (name: string, value: string | boolean | string[]) => void;
  nextStep: (overrideMode?: string) => void;
  prevStep: () => void;
  submitForm: () => void;
  
  // Helpers
  getAvailableCountries: (mode?: string) => string[];
  getAvailableLocations: (type: 'depart' | 'arrivee') => string[];
}
