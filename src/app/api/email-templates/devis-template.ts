export function createDevisEmailTemplate(formData: any): { html: string; text: string } {
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvelle demande de devis - GTA Transit</title>
        <style>
          /* Reset styles */
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif; line-height: 1.7; color: #1f2937; background-color: #f8fafc; font-size: 16px; }
          table { border-collapse: collapse; width: 100%; }
          img { max-width: 100%; height: auto; }
          
          /* Container */
          .email-container { max-width: 600px; margin: 0 auto; background: white; }
          
          /* Header */
          .header { 
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); 
            color: white; 
            padding: 40px 24px; 
            text-align: center; 
          }
          .header h1 { font-size: 28px; margin-bottom: 12px; font-weight: 800; }
          .header p { font-size: 18px; opacity: 0.95; font-weight: 500; }
          
          /* Content sections */
          .content { padding: 0; }
          .section { 
            margin: 0; 
            border-bottom: 1px solid #e5e7eb; 
          }
          .section:last-child { border-bottom: none; }
          
          .section-header { 
            background: #f1f5f9; 
            padding: 16px 24px; 
            border-left: 4px solid #1e40af; 
          }
          .section-header h2 { 
            font-size: 20px; 
            color: #1e40af; 
            margin: 0; 
            display: flex; 
            align-items: center; 
            gap: 8px; 
            font-weight: 700;
          }
          
          .section-body { padding: 24px 28px; }
          
          /* Field styling */
          .field-row { 
            display: flex; 
            margin-bottom: 16px; 
            align-items: flex-start; 
            line-height: 1.6;
          }
          .field-label { 
            font-weight: 700; 
            color: #1f2937; 
            min-width: 160px; 
            margin-right: 16px; 
            font-size: 16px;
          }
          .field-value { 
            color: #374151; 
            flex: 1; 
            word-break: break-word; 
            font-size: 16px;
            font-weight: 500;
          }
          
          /* Subsections */
          .subsection { 
            margin: 16px 0; 
            padding: 16px; 
            background: #f8fafc; 
            border-radius: 8px; 
            border-left: 3px solid #3b82f6; 
          }
          .subsection h3 { 
            font-size: 18px; 
            color: #1f2937; 
            margin-bottom: 16px; 
            display: flex; 
            align-items: center; 
            gap: 8px; 
            font-weight: 700;
          }
          
          /* Footer */
          .footer { 
            background: #f9fafb; 
            padding: 24px; 
            text-align: center; 
            border-top: 1px solid #e5e7eb; 
          }
          .footer p { 
            font-size: 15px; 
            color: #4b5563; 
            margin-bottom: 10px; 
            font-weight: 500;
          }
          .footer a { 
            color: #1e40af; 
            text-decoration: none; 
            font-weight: 600; 
          }
          .footer a:hover { text-decoration: underline; }
          
          /* Fallback link */
          .fallback-link { 
            background: #f8fafc; 
            border-top: 1px solid #e5e7eb;
            padding: 16px 24px; 
            text-align: center; 
            font-size: 13px;
          }
          .fallback-link a { 
            color: #6b7280; 
            text-decoration: underline; 
            font-weight: 400; 
          }
          .fallback-link a:hover { 
            color: #1e40af; 
          }
          
          /* Responsive */
          @media only screen and (max-width: 600px) {
            body { font-size: 15px; }
            .email-container { margin: 0; }
            .header { padding: 24px 16px; }
            .header h1 { font-size: 24px; }
            .header p { font-size: 16px; }
            .section-body { padding: 20px 16px; }
            .section-header h2 { font-size: 18px; }
            .field-row { flex-direction: column; margin-bottom: 14px; }
            .field-label { min-width: auto; margin-bottom: 6px; font-size: 15px; }
            .field-value { font-size: 15px; }
            .subsection h3 { font-size: 16px; }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <!-- Header -->
          <div class="header">
            <h1>📦 Nouvelle demande de devis</h1>
            <p>Mode de transport : <strong>${formData.modeTransport || 'Non renseigné'}</strong></p>
          </div>
          
          <!-- Fallback link -->
          <div class="fallback-link">
            <p>Si cet email ne s'affiche pas correctement, <a href="https://www.gta-transit.fr/contact" target="_blank">contactez-nous directement</a></p>
          </div>
          
          <!-- Content -->
          <div class="content">
            <!-- Client Info -->
            <div class="section">
              <div class="section-header">
                <h2>👤 Informations Client</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Nom complet :</span>
                  <span class="field-value">${formData.prenom || ''} ${formData.nom || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Email :</span>
                  <span class="field-value"><a href="mailto:${formData.email || ''}" style="color: #1e40af; text-decoration: none; font-weight: 600;">${formData.email || ''}</a></span>
                </div>
                <div class="field-row">
                  <span class="field-label">Téléphone :</span>
                  <span class="field-value"><a href="tel:${formData.telephone || ''}" style="color: #1e40af; text-decoration: none; font-weight: 600;">${formData.telephone || ''}</a></span>
                </div>
                <div class="field-row">
                  <span class="field-label">Société :</span>
                  <span class="field-value">${formData.societe || 'Particulier'}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Adresse :</span>
                  <span class="field-value">${formData.adresse || ''}<br>${formData.ville || ''} ${formData.codePostal || ''}<br>${formData.pays || ''}</span>
                </div>
                ${formData.website ? `<div class="field-row"><span class="field-label">Site Web :</span><span class="field-value"><a href="${formData.website}" style="color: #1e40af; text-decoration: none; font-weight: 600;">${formData.website}</a></span></div>` : ''}
                ${formData.carteFidelite ? '<div class="field-row" style="background: #f0fdf4; padding: 12px; border-radius: 6px; border-left: 4px solid #10b981;"><span class="field-label" style="color: #065f46;">Carte fidélité :</span><span class="field-value" style="color: #065f46; font-weight: 700;">✅ Demandée</span></div>' : ''}
              </div>
            </div>
            
            <!-- Trajet Info -->
            <div class="section">
              <div class="section-header">
                <h2>🚢 Détails du Trajet</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Mode :</span>
                  <span class="field-value"><strong>${formData.modeTransport || ''}</strong></span>
                </div>
                ${formData.typeTrajet ? `<div class="field-row"><span class="field-label">Type :</span><span class="field-value">${formData.typeTrajet}</span></div>` : ''}
                
                <div class="subsection">
                  <h3>📍 Départ (Enlèvement)</h3>
                  <div class="field-row">
                    <span class="field-label">Pays :</span>
                    <span class="field-value">${formData.paysDepart || ''}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">Port/Aéroport :</span>
                    <span class="field-value">${formData.depart || ''}</span>
                  </div>
                  ${formData.villeEnlevement ? `<div class="field-row"><span class="field-label">Ville :</span><span class="field-value">${formData.villeEnlevement}</span></div>` : ''}
                  <div class="field-row">
                    <span class="field-label">Date :</span>
                    <span class="field-value">${formData.dateDepart ? (new Date(formData.dateDepart).toLocaleDateString('fr-FR')) : ''}</span>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>📍 Arrivée (Livraison)</h3>
                  <div class="field-row">
                    <span class="field-label">Pays :</span>
                    <span class="field-value">${formData.paysArrivee || ''}</span>
                  </div>
                  <div class="field-row">
                    <span class="field-label">Port/Aéroport :</span>
                    <span class="field-value">${formData.arrivee || ''}</span>
                  </div>
                  ${formData.villeLivraison ? `<div class="field-row"><span class="field-label">Ville :</span><span class="field-value">${formData.villeLivraison}</span></div>` : ''}
                  <div class="field-row">
                    <span class="field-label">Date :</span>
                    <span class="field-value">${formData.dateArrivee ? (new Date(formData.dateArrivee).toLocaleDateString('fr-FR')) : ''}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Marchandise -->
            <div class="section">
              <div class="section-header">
                <h2>📦 Marchandise</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Nature :</span>
                  <span class="field-value">${formData.natureMarchandise || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Description :</span>
                  <span class="field-value">${formData.description || ''}</span>
                </div>
                ${formData.typeContainer ? `<div class="field-row"><span class="field-label">Type conteneur :</span><span class="field-value">${formData.typeContainer}</span></div>` : ''}
                <div class="field-row">
                  <span class="field-label">Nombre de colis :</span>
                  <span class="field-value">${formData.nbColis || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Poids :</span>
                  <span class="field-value">${formData.poids ? `${formData.poids} Kg` : 'Non renseigné'}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Volume :</span>
                  <span class="field-value">${formData.volume ? `${formData.volume} m³` : 'Non renseigné'}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Valeur :</span>
                  <span class="field-value">${formData.valeur || '0'} €</span>
                </div>
              </div>
            </div>
            
            <!-- Projet -->
            <div class="section">
              <div class="section-header">
                <h2>🎯 Projet</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Objectif :</span>
                  <span class="field-value">${formData.objectif || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Fréquence :</span>
                  <span class="field-value">${formData.frequence || 'Non renseigné'}</span>
                </div>
                ${formData.message ? `<div class="field-row"><span class="field-label">Message :</span><span class="field-value">${formData.message}</span></div>` : ''}
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer">
            <p><strong>GTA Transit</strong> - Groupeur Transitaire Associés</p>
            <p>📧 <a href="mailto:gta_transitaire@yahoo.com">gta_transitaire@yahoo.com</a> | 📞 <a href="tel:+33607811308">+33 6 07 81 13 08</a></p>
            <p style="margin-top: 12px; font-size: 12px;">Envoyé depuis <a href="https://www.gta-transit.fr">www.gta-transit.fr</a> le ${new Date().toLocaleString('fr-FR')}</p>
          </div>
          
        </div>
      </body>
    </html>
  `;

  return {
    html,
    text: createTextVersion(formData)
  };
}

function createTextVersion(formData: any): string {
  return `
NOUVELLE DEMANDE DE DEVIS - GTA TRANSIT
========================================

Mode de transport : ${formData.modeTransport || 'Non renseigné'}
Date de réception : ${new Date().toLocaleString('fr-FR')}

👤 INFORMATIONS CLIENT
======================
Nom complet : ${formData.nom || ''} ${formData.prenom || ''}
Email : ${formData.email || ''}
Téléphone : ${formData.telephone || ''}
Société : ${formData.societe || 'Particulier'}
Adresse : ${formData.adresse || ''}
          ${formData.ville || ''} ${formData.codePostal || ''}
          ${formData.pays || ''}
${formData.carteFidelite ? 'Carte fidélité : ✅ Demandée' : ''}

🚢 DÉTAILS DU TRAJET
====================
Mode de transport : ${formData.modeTransport || ''}
${formData.typeTrajet ? `Type de trajet : ${formData.typeTrajet}` : ''}

📍 DÉPART (Enlèvement)
Pays : ${formData.paysDepart || ''}
Port/Aéroport : ${formData.depart || ''}
${formData.villeEnlevement ? `Ville d'enlèvement : ${formData.villeEnlevement}` : ''}
Date : ${formData.dateDepart || ''}

📍 ARRIVÉE (Livraison)
Pays : ${formData.paysArrivee || ''}
Port/Aéroport : ${formData.arrivee || ''}
${formData.villeLivraison ? `Ville de livraison : ${formData.villeLivraison}` : ''}
Date : ${formData.dateArrivee || ''}

📦 MARCHANDISE
==============
Nature : ${formData.natureMarchandise || ''}
Description : ${formData.description || ''}
${formData.typeContainer ? `Type de conteneur : ${formData.typeContainer}` : ''}
Nombre de colis : ${formData.nbColis || ''}
Poids : ${formData.poids || 'Non renseigné'} kg
Volume : ${formData.volume || 'Non renseigné'} m³
Valeur : ${formData.valeur || ''} €

🎯 PROJET
=========
Objectif : ${formData.objectif || ''}
Fréquence : ${formData.frequence || 'Non renseigné'}
${formData.message ? `Message du client :\n${formData.message}` : ''}

========================================
GTA Transit - Groupeur Transitaire Associés
Email: gta_transitaire@yahoo.com
Tél: +33 6 07 81 13 08
Site: www.gta-transit.fr
  `.trim();
}