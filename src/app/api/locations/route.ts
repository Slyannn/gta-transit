import { NextRequest, NextResponse } from "next/server";
import { AIRPORTS_BY_COUNTRY, SEAPORTS_BY_COUNTRY } from "@/app/devis/locations";

// Fonction pour normaliser le texte (enlever accents, lowercase)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";
  const type = searchParams.get("type") || "airports"; // "airports" ou "seaports"
  const country = searchParams.get("country") || "";
  const limit = parseInt(searchParams.get("limit") || "15");

  // Sélectionner la bonne base de données
  const database = type === "seaports" ? SEAPORTS_BY_COUNTRY : AIRPORTS_BY_COUNTRY;

  // Si un pays est spécifié, filtrer par pays
  let results: { name: string; country: string }[] = [];

  if (country) {
    // Recherche insensible à la casse pour le pays
    const countryKey = Object.keys(database).find(
      (k) => normalizeText(k) === normalizeText(country)
    );

    if (countryKey && database[countryKey]) {
      const locations = database[countryKey];
      
      if (query) {
        // Filtrer par requête dans le pays
        const normalizedQuery = normalizeText(query);
        results = locations
          .filter((loc) => normalizeText(loc).includes(normalizedQuery))
          .map((name) => ({ name, country: countryKey }));
      } else {
        // Retourner tous les emplacements du pays
        results = locations.map((name) => ({ name, country: countryKey }));
      }
    }
  } else if (query && query.length >= 2) {
    // Recherche globale dans tous les pays
    const normalizedQuery = normalizeText(query);

    for (const [countryName, locations] of Object.entries(database)) {
      const matches = locations
        .filter((loc) => normalizeText(loc).includes(normalizedQuery))
        .map((name) => ({ name, country: countryName }));
      
      results.push(...matches);
      
      // Limiter les résultats pour les performances
      if (results.length >= limit * 2) break;
    }
  }

  // Trier par pertinence (ceux qui commencent par la query en premier)
  if (query) {
    const normalizedQuery = normalizeText(query);
    results.sort((a, b) => {
      const aStartsWith = normalizeText(a.name).startsWith(normalizedQuery);
      const bStartsWith = normalizeText(b.name).startsWith(normalizedQuery);
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      return a.name.localeCompare(b.name);
    });
  }

  // Limiter le nombre de résultats
  results = results.slice(0, limit);

  return NextResponse.json({
    results,
    total: results.length,
    query,
    type,
    country: country || null,
  });
}

// Endpoint pour récupérer la liste des pays disponibles
export async function POST(request: NextRequest) {
  const body = await request.json();
  const type = body.type || "airports";

  const database = type === "seaports" ? SEAPORTS_BY_COUNTRY : AIRPORTS_BY_COUNTRY;
  const countries = Object.keys(database).sort();

  return NextResponse.json({
    countries,
    total: countries.length,
    type,
  });
}

