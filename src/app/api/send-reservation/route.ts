import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// URL du frontend pour CORS (À configurer selon l'environnement)
const PUBLIC_FRONTEND_URL = process.env.NEXT_PUBLIC_API_URL || '';
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
    const formData = await request.json();

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0ea5e9; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .section { background-color: #f0f9ff; padding: 20px; margin: 10px 0; border-radius: 8px; }
            .section-title { background-color: #0ea5e9; color: white; padding: 10px; margin: -20px -20px 15px -20px; border-radius: 8px 8px 0 0; font-weight: bold; }
            .field { margin: 10px 0; }
            .label { font-weight: bold; color: #0369a1; }
            .value { color: #374151; }
            .footer { text-align: center; padding: 20px; color: #64748b; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚢 Nouvelle réservation de conteneur</h1>
              <p>${formData.typeConteneur || 'Conteneur'} - ${formData.nombreConteneurs || '1'} unité(s)</p>
            </div>

            <div class="section">
              <div class="section-title">👤 DEMANDEUR</div>
              <div class="field"><span class="label">Type de client :</span> <span class="value">${formData.typeClient || ''}</span></div>
              <div class="field"><span class="label">Nom/Raison sociale :</span> <span class="value">${formData.nomRaisonSociale || ''}</span></div>
              <div class="field"><span class="label">Adresse :</span> <span class="value">${formData.adresseComplete || ''}</span></div>
              <div class="field"><span class="label">Ville :</span> <span class="value">${formData.ville || ''}, ${formData.codePostal || ''}, ${formData.pays || ''}</span></div>
              <div class="field"><span class="label">Contact :</span> <span class="value">${formData.nomContact || 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Téléphone :</span> <span class="value">${formData.telephone || ''}</span></div>
              <div class="field"><span class="label">Email :</span> <span class="value">${formData.email || ''}</span></div>
            </div>

            <div class="section">
              <div class="section-title">📦 DÉTAILS DE LA RÉSERVATION</div>
              <div class="field"><span class="label">Type de service :</span> <span class="value">${Array.isArray(formData.typeService) ? formData.typeService.join(', ') : 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Type de conteneur :</span> <span class="value">${formData.typeConteneur || 'Non renseigné'} ${formData.autreTypeConteneur || ''}</span></div>
              <div class="field"><span class="label">Nombre de conteneurs :</span> <span class="value">${formData.nombreConteneurs || 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Date de chargement :</span> <span class="value">${formData.dateChargement || 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Date d'expédition :</span> <span class="value">${formData.dateExpedition || 'Non renseigné'}</span></div>
            </div>

            <div class="section">
              <div class="section-title">📦 MARCHANDISE</div>
              <div class="field"><span class="label">Nature :</span> <span class="value">${formData.natureMarchandise || 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Poids total :</span> <span class="value">${formData.poidsTotal || 'Non renseigné'} kg</span></div>
              <div class="field"><span class="label">Volume estimé :</span> <span class="value">${formData.volumeEstime || 'Non renseigné'} m³</span></div>
              <div class="field"><span class="label">Marchandise dangereuse :</span> <span class="value">${formData.marchandiseDangereuse || 'Non renseigné'}</span></div>
              ${formData.classeIMDG ? `<div class="field"><span class="label">Classe IMDG :</span> <span class="value">${formData.classeIMDG}</span></div>` : ''}
              <div class="field"><span class="label">Valeur :</span> <span class="value">${formData.valeurMarchandise || 'Non renseigné'}</span></div>
            </div>

            <div class="section">
              <div class="section-title">🗺️ ITINÉRAIRE</div>
              <h4>📍 LIEU DE CHARGEMENT</h4>
              <div class="field"><span class="label">Adresse :</span> <span class="value">${formData.adresseChargement || ''}</span></div>
              <div class="field"><span class="label">Ville :</span> <span class="value">${formData.villeChargement || ''}, ${formData.codePostalChargement || ''}, ${formData.paysChargement || ''}</span></div>
              <div class="field"><span class="label">Contact :</span> <span class="value">${formData.nomContactChargement || 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Téléphone :</span> <span class="value">${formData.telephoneChargement || 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Email :</span> <span class="value">${formData.emailChargement || 'Non renseigné'}</span></div>
              
              <h4>⚓ PORTS</h4>
              <div class="field"><span class="label">Port de départ :</span> <span class="value">${formData.portDepart || ''}</span></div>
              <div class="field"><span class="label">Port de destination :</span> <span class="value">${formData.portDestination || 'Non renseigné'}</span></div>
              <div class="field"><span class="label">Lieu de livraison finale :</span> <span class="value">${formData.lieuLivraisonFinale || 'Non renseigné'}</span></div>
            </div>

            ${formData.servicesComplementaires && formData.servicesComplementaires.length > 0 ? `
            <div class="section">
              <div class="section-title">➕ SERVICES COMPLÉMENTAIRES</div>
              <div class="value">${Array.isArray(formData.servicesComplementaires) ? formData.servicesComplementaires.join(', ') : 'Aucun'}</div>
            </div>
            ` : ''}

            ${formData.informationsComplementaires ? `
            <div class="section">
              <div class="section-title">💬 INFORMATIONS COMPLÉMENTAIRES</div>
              <div class="value">${formData.informationsComplementaires}</div>
            </div>
            ` : ''}

            <div class="footer">
              <p>🌐 Envoyé depuis www.gta-transit.fr le ${new Date().toLocaleString('fr-FR')}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'GTA Transit <delivered@resend.dev>',
      to: process.env.RESEND_TO_EMAIL || 'gta_transitaire@yahoo.com',
      subject: `Nouvelle réservation de conteneur - ${formData.typeConteneur || 'Conteneur'}`,
      html: htmlContent,
      text: `
Nouvelle demande de réservation de conteneur

DEMANDEUR
Type de client : ${formData.typeClient || ''}
Nom/Raison sociale : ${formData.nomRaisonSociale || ''}
Téléphone : ${formData.telephone || ''}
Email : ${formData.email || ''}

RÉSERVATION
Type de conteneur : ${formData.typeConteneur || 'Non renseigné'}
Nombre : ${formData.nombreConteneurs || 'Non renseigné'}
Date de chargement : ${formData.dateChargement || 'Non renseigné'}

MARCHANDISE
Nature : ${formData.natureMarchandise || 'Non renseigné'}
Poids : ${formData.poidsTotal || 'Non renseigné'} kg
Marchandise dangereuse : ${formData.marchandiseDangereuse || 'Non renseigné'}

ITINÉRAIRE
Port de départ : ${formData.portDepart || ''}
Port de destination : ${formData.portDestination || 'Non renseigné'}

---
Envoyé depuis www.gta-transit.fr le ${new Date().toLocaleString('fr-FR')}
      `.trim(),
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 400, headers: getCorsHeaders() });
    }

    return NextResponse.json({ success: true, data }, { status: 200, headers: getCorsHeaders() });
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500, headers: getCorsHeaders() }
    );
  }
}
