export function createEnlevementEmailTemplate(formData: any): { html: string; text: string } {
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouvelle demande d'enlèvement - GTA Transit</title>
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
            background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%); 
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
            border-left: 4px solid #dc2626; 
          }
          .section-header h2 { 
            font-size: 20px; 
            color: #dc2626; 
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
            border-left: 3px solid #ef4444; 
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
          
          /* Lists */
          .list-items { 
            background: #f9fafb; 
            padding: 12px 16px; 
            border-radius: 6px; 
            border-left: 3px solid #6b7280; 
          }
          .list-items ul { 
            list-style: none; 
            margin: 0; 
            padding: 0; 
          }
          .list-items li { 
            padding: 4px 0; 
            color: #374151; 
            font-weight: 500; 
          }
          .list-items li:before { 
            content: "• "; 
            color: #dc2626; 
            font-weight: bold; 
            margin-right: 8px; 
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
            color: #dc2626; 
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
            color: #dc2626; 
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
            <h1>🚚 Nouvelle demande d'enlèvement</h1>
            <p>Type de prestation : ${getTypePrestationLabel(formData.typePrestation)}</p>
          </div>
          
          <!-- Fallback link -->
          <div class="fallback-link">
            <p>Si cet email ne s'affiche pas correctement, <a href="https://www.gta-transit.fr/contact" target="_blank">contactez-nous directement</a></p>
          </div>
          
          <!-- Content -->
          <div class="content">
            <!-- Type de prestation -->
            <div class="section">
              <div class="section-header">
                <h2>📋 Type de Prestation</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Service demandé :</span>
                  <span class="field-value">${getTypePrestationLabel(formData.typePrestation)}</span>
                </div>
              </div>
            </div>
            
            <!-- Expéditeur / Enlèvement -->
            <div class="section">
              <div class="section-header">
                <h2>📦 Expéditeur / Enlèvement</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Nom & Prénom :</span>
                  <span class="field-value">${formData.expediteurNom || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Téléphone :</span>
                  <span class="field-value"><a href="tel:${formData.expediteurTelephone || ''}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${formData.expediteurTelephone || ''}</a></span>
                </div>
                <div class="field-row">
                  <span class="field-label">Email :</span>
                  <span class="field-value"><a href="mailto:${formData.expediteurEmail || ''}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${formData.expediteurEmail || ''}</a></span>
                </div>
                <div class="field-row">
                  <span class="field-label">Date d'enlèvement :</span>
                  <span class="field-value">${formData.dateEnlevement || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Heure d'enlèvement :</span>
                  <span class="field-value">${formData.heureEnlevement || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Type de lieu :</span>
                  <span class="field-value">${getTypeLieuLabel(formData.typeLieuEnlevement)}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Adresse complète :</span>
                  <span class="field-value">
                    ${formData.adresseEnlevement || ''}<br>
                    ${formData.villeEnlevement || ''} ${formData.codePostalEnlevement || ''}<br>
                    ${formData.communeEnlevement || ''}<br>
                    ${formData.paysEnlevement || ''}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Destinataire / Livraison -->
            <div class="section">
              <div class="section-header">
                <h2>🎯 Destinataire / Livraison</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Nom & Prénom :</span>
                  <span class="field-value">${formData.destinataireNom || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Téléphone :</span>
                  <span class="field-value"><a href="tel:${formData.destinataireTelephone || ''}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${formData.destinataireTelephone || ''}</a></span>
                </div>
                <div class="field-row">
                  <span class="field-label">Date d'expédition :</span>
                  <span class="field-value">${formData.dateExpedition || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Destination :</span>
                  <span class="field-value">
                    ${formData.villeDestination || ''} ${formData.codePostalDestination || ''}<br>
                    ${formData.paysDestination || ''}
                  </span>
                </div>
                ${formData.aeroportDestination ? `<div class="field-row"><span class="field-label">Aéroport :</span><span class="field-value">${formData.aeroportDestination}</span></div>` : ''}
                ${formData.portDestination ? `<div class="field-row"><span class="field-label">Port :</span><span class="field-value">${formData.portDestination}</span></div>` : ''}
                <div class="field-row">
                  <span class="field-label">Type de lieu :</span>
                  <span class="field-value">${getTypeLieuLabel(formData.typeLieuLivraison)}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Adresse de livraison :</span>
                  <span class="field-value">${formData.adresseLivraison || ''}</span>
                </div>
              </div>
            </div>
            
            <!-- Détail des colis -->
            <div class="section">
              <div class="section-header">
                <h2>📦 Détail des Colis</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Types de colis :</span>
                  <span class="field-value">
                    <div class="list-items">
                      <ul>
                        ${formData.typesColis?.map((type: string) => `<li>${getTypeColisLabel(type)}</li>`).join('') || ''}
                        ${formData.autreTypeColis ? `<li>Autre : ${formData.autreTypeColis}</li>` : ''}
                      </ul>
                    </div>
                  </span>
                </div>
                <div class="field-row">
                  <span class="field-label">Nature de l'envoi :</span>
                  <span class="field-value">${formData.natureEnvoi || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Nombre de colis :</span>
                  <span class="field-value">${formData.nombreColis || ''}</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Poids total :</span>
                  <span class="field-value">${formData.poidsTotal || ''} kg</span>
                </div>
                <div class="field-row">
                  <span class="field-label">Dimensions :</span>
                  <span class="field-value">${formData.dimensions || ''}</span>
                </div>
              </div>
            </div>
            
            <!-- Observations -->
            <div class="section">
              <div class="section-header">
                <h2>📝 Observations Particulières</h2>
              </div>
              <div class="section-body">
                <div class="field-row">
                  <span class="field-label">Instructions :</span>
                  <span class="field-value">
                    <div class="list-items">
                      <ul>
                        ${formData.observations?.map((obs: string) => `<li>${getObservationLabel(obs)}</li>`).join('') || ''}
                        ${formData.autreObservation ? `<li>Autre : ${formData.autreObservation}</li>` : ''}
                      </ul>
                    </div>
                  </span>
                </div>
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

function getTypePrestationLabel(type: string): string {
  const types: { [key: string]: string } = {
    'groupage-maritime': 'Groupage Maritime',
    'groupage-aerien': 'Groupage Aérien',
    'demenagement': 'Déménagement',
    'transport-express': 'Transport Express',
    'logistique': 'Logistique & Entreposage'
  };
  return types[type] || type;
}

function getTypeLieuLabel(type: string): string {
  const types: { [key: string]: string } = {
    'domicile': 'Domicile',
    'entrepot': 'Entrepôt',
    'magasin': 'Magasin',
    'commerce': 'Commerce',
    'boutique': 'Boutique'
  };
  return types[type] || type;
}

function getTypeColisLabel(type: string): string {
  const types: { [key: string]: string } = {
    'sac': 'Sac',
    'valise': 'Valise',
    'fut': 'Fût',
    'cantine': 'Cantine',
    'carton': 'Carton',
    'caisse': 'Caisse',
    'palette': 'Palette',
    'vrac': 'Vrac',
    'autres': 'Autres'
  };
  return types[type] || type;
}

function getObservationLabel(obs: string): string {
  const observations: { [key: string]: string } = {
    'acces-difficile': 'Accès difficile',
    'etage-avec-ascenseur': 'Étage avec ascenseur',
    'etage-sans-ascenseur': 'Étage sans ascenseur',
    'niveau-etage': 'Niveau d\'étage',
    'marchandise-fragile': 'Marchandise fragile',
    'marchandise-volumineuse': 'Marchandise volumineuse',
    'marchandise-lourde': 'Marchandise lourde',
    'manutention-speciale': 'Manutention spéciale',
    'horaires-imposes': 'Horaires imposés',
    'aucun': 'Aucune observation particulière'
  };
  return observations[obs] || obs;
}

function createTextVersion(formData: any): string {
  return `
NOUVELLE DEMANDE D'ENLÈVEMENT - GTA TRANSIT
==========================================

Type de prestation : ${getTypePrestationLabel(formData.typePrestation)}
Date de réception : ${new Date().toLocaleString('fr-FR')}

📋 TYPE DE PRESTATION
=====================
Service demandé : ${getTypePrestationLabel(formData.typePrestation)}

📦 EXPÉDITEUR / ENLÈVEMENT
==========================
Nom & Prénom : ${formData.expediteurNom || ''}
Téléphone : ${formData.expediteurTelephone || ''}
Email : ${formData.expediteurEmail || ''}
Date d'enlèvement : ${formData.dateEnlevement || ''}
Heure d'enlèvement : ${formData.heureEnlevement || ''}
Type de lieu : ${getTypeLieuLabel(formData.typeLieuEnlevement)}
Adresse complète : ${formData.adresseEnlevement || ''}
                  ${formData.villeEnlevement || ''} ${formData.codePostalEnlevement || ''}
                  ${formData.communeEnlevement || ''}
                  ${formData.paysEnlevement || ''}

🎯 DESTINATAIRE / LIVRAISON
===========================
Nom & Prénom : ${formData.destinataireNom || ''}
Téléphone : ${formData.destinataireTelephone || ''}
Date d'expédition : ${formData.dateExpedition || ''}
Destination : ${formData.villeDestination || ''} ${formData.codePostalDestination || ''}
             ${formData.paysDestination || ''}
${formData.aeroportDestination ? `Aéroport : ${formData.aeroportDestination}` : ''}
${formData.portDestination ? `Port : ${formData.portDestination}` : ''}
Type de lieu : ${getTypeLieuLabel(formData.typeLieuLivraison)}
Adresse de livraison : ${formData.adresseLivraison || ''}

📦 DÉTAIL DES COLIS
===================
Types de colis :
${formData.typesColis?.map((type: string) => `  - ${getTypeColisLabel(type)}`).join('\n') || ''}
${formData.autreTypeColis ? `  - Autre : ${formData.autreTypeColis}` : ''}

Nature de l'envoi : ${formData.natureEnvoi || ''}
Nombre de colis : ${formData.nombreColis || ''}
Poids total : ${formData.poidsTotal || ''} kg
Dimensions : ${formData.dimensions || ''}

📝 OBSERVATIONS PARTICULIÈRES
=============================
Instructions :
${formData.observations?.map((obs: string) => `  - ${getObservationLabel(obs)}`).join('\n') || ''}
${formData.autreObservation ? `  - Autre : ${formData.autreObservation}` : ''}

========================================
GTA Transit - Groupeur Transitaire Associés
Email: gta_transitaire@yahoo.com
Tél: +33 6 07 81 13 08
Site: www.gta-transit.fr
  `.trim();
}