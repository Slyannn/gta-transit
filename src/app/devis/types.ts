export interface DevisFormData {
  // Étape 1 : Transport
  modeTransport: string;

  // Étape 2 : Trajet
  paysDepart: string;
  depart: string;
  dateDepart: string;
  paysArrivee: string;
  arrivee: string;
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
  handleChange: (name: string, value: string | boolean) => void;
  nextStep: () => void;
  prevStep: () => void;
  submitForm: () => void;
  
  // Helpers
  getAvailableCountries: (mode?: string) => string[];
  getAvailableLocations: (type: 'depart' | 'arrivee') => string[];
}

