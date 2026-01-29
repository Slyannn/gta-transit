import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createDevisEmailTemplate } from '../email-templates/devis-template';

// URL du frontend pour CORS (À configurer selon l'environnement)
const PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_API_URL || 'https://www.gta-transit.vercel.app';
const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction pour gérer les en-têtes CORS
function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': PUBLIC_FRONTEND_URL, // ⚠️ En production, remplacez '*' par votre vrai domaine (ex: 'https://www.gta-transit.com')
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

// Gérer les requêtes préliminaires (OPTIONS) du navigateur
export async function OPTIONS() {
  return NextResponse.json({}, { headers: getCorsHeaders() });
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Utiliser le template professionnel
    const { html: htmlContent, text: textContent } = createDevisEmailTemplate(formData);

    // Envoyer l'email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'GTA Transit <onboarding@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'gta_transitaire@yahoo.com',
      subject: `Nouvelle demande de devis - ${formData.modeTransport || 'Transport'}`,
      html: htmlContent,
      text: textContent,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400, headers: getCorsHeaders() });
    }

    return NextResponse.json(
      { success: true, data }, 
      { status: 200, headers: getCorsHeaders() }
    );
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: getCorsHeaders() }
    );
  }
}
