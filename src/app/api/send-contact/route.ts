import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// URL du frontend pour CORS (À configurer selon l'environnement)

const PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_API_URL || 'https://www.gta-transit.vercel.app';
const resend = new Resend(process.env.RESEND_API_KEY);

function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': PUBLIC_FRONTEND_URL, // ⚠️ Remplacer '*' par votre domaine en production
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: getCorsHeaders() });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .section { background-color: #f8fafc; padding: 20px; margin: 10px 0; border-radius: 8px; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #1e40af; }
            .value { color: #374151; }
            .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📩 Nouveau message de contact</h1>
            </div>

            <div class="section">
              <div class="field"><span class="label">Sujet :</span> <span class="value">${sujet || 'Aucun sujet'}</span></div>
            </div>

            <div class="section">
              <h3>👤 Informations de contact</h3>
              <div class="field"><span class="label">Nom :</span> <span class="value">${nom}</span></div>
              <div class="field"><span class="label">Email :</span> <span class="value">${email}</span></div>
              <div class="field"><span class="label">Téléphone :</span> <span class="value">${telephone || 'Non renseigné'}</span></div>
            </div>

            <div class="section">
              <h3>💬 Message</h3>
              <p class="value" style="white-space: pre-wrap;">${message}</p>
            </div>

            <div class="footer">
              <p>🌐 Envoyé depuis www.gta-transit.fr le ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'GTA Contact <delivered@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'gta_transitaire@yahoo.com',
      cc: process.env.RESEND_CC_EMAIL || 'gta_transitaire@yahoo.com',
      subject: `Contact : ${sujet || 'Nouveau message'}`,
      
      html: htmlContent,
      text: `
Nouveau message de contact

Sujet : ${sujet}

De : ${nom} (${email})
Tél : ${telephone}

Message :
${message}
      `.trim(),
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400, headers: getCorsHeaders() });
    }

    return NextResponse.json({ success: true, data }, { status: 200, headers: getCorsHeaders() });
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi du contact:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: getCorsHeaders() }
    );
  }
}
