// Données structurées pour les aéroports et ports

// --- AÉROPORTS INTERNATIONAUX (Extraction : Aeroport internationaux.txt) ---
export const AIRPORTS_BY_COUNTRY: Record<string, string[]> = {
    "Afghanistan": [
        "Kaboul - Aéroport international de Kaboul",
        "Kandahar - Aéroport international de Kandahar"
    ],
    "Afrique du Sud": [
        "Durban - Aéroport international King Shaka",
        "Johannesbourg - Aéroport de Johannesbourg-Lanséria",
        "Johannesbourg - Aéroport international OR Tambo",
        "Le Cap - Aéroport international du Cap",
        "Nelspruit - Aéroport du Kruger Mpumalanga"
    ],
    "Albanie": [
        "Tirana – Aéroport international de Tirana"
    ],
    "Algérie": [
        "Alger – Aéroport d'Alger - Houari Boumédiène",
        "Annaba – Aéroport d'Annaba - Rabah-Bitat",
        "Batna – Aéroport de Batna - Mostepha Ben Boulaid",
        "Béjaïa – Aéroport de Béjaïa - Soummam - Abane Ramdane",
        "Biskra - Aéroport de Biskra - Mohamed Khider",
        "Chlef - Aéroport de Chlef",
        "Constantine – Aéroport de Constantine - Mohamed Boudiaf",
        "Jijel - Aéroport de Jijel - Ferhat Abbas",
        "Oran - Aéroport d'Oran - Ahmed Ben Bella",
        "Sétif – Aéroport de Sétif - 8 Mai 1945",
        "Tlemcen – Aéroport de Tlemcen - Zenata - Messali El Hadj"
    ],
    "Allemagne": [
        "Baden-Baden/Karlsruhe – Aéroport Karlsruhe-Baden-Baden",
        "Berlin - Aéroport Brandenburg-Willy-Brandt",
        "Berlin – Aéroport Schönefeld",
        "Berlin – Aéroport Tegel",
        "Brême - Aéroport de Brême",
        "Cologne/Bonn - Aéroport Konrad-Adenauer",
        "Dortmund - Aéroport de Dortmund",
        "Dresde - Aéroport de Dresde",
        "Düsseldorf - Aéroport de Düsseldorf",
        "Erfurt - Aéroport d'Erfurt-Weimar",
        "Francfort - Aéroport de Francfort",
        "Francfort- Aéroport Hahn",
        "Friedrichshafen - Aéroport de Friedrichshafen",
        "Hambourg - Aéroport de Hambourg",
        "Hanovre – Aéroport Langenhagen",
        "Leipzig – Aéroport Halle",
        "Lübeck - Aéroport de Lübeck",
        "Memmingen - Aéroport de Memmingen",
        "Munich - Aéroport Franz-Josef-Strauss",
        "Münster - Aéroport international de Münster/Osnabrück",
        "Nuremberg - Aéroport de Nuremberg",
        "Stuttgart - Aéroport de Stuttgart",
        "Weeze - Aéroport de Weeze"
    ],
    "Andorre": [
        // Not found in base data, left intentionally empty if missing.
    ],
    "Angola": [
        "Luanda - Aéroport de Luanda-Quatro de Fevereiro",
        "Luanda - Aéroport international d'Angola (en construction)",
        "Lubango - Aéroport de Lubango"
    ],
    "Anguilla": [
        "The Valley – Aéroport de Wallblake"
    ],
    "Antigua-et-Barbuda": [
        "Saint John's (Antigua – Aéroport international V. C. Bird"
    ],
    "Antilles néerlandaises": [
        "Kralendijk, Bonaire – Aéroport international Flamingo-Bonaire",
        "Oranjestad – Aéroport international Reine-Beatrix",
        "Philipsburg (Saint-Martin) – Aéroport international Princess Juliana",
        "Willemstad (Curaçao) – Aéroport international Hato"
    ],
    "Arabie saoudite": [
        "Dammam – Aéroport international du roi Fahd",
        "Djeddah – Aéroport international Roi-Abdelaziz",
        "Médine – Aéroport international Prince Mohammad Bin Abdulaziz",
        "Riyad – Aéroport international du roi Khaled"
    ],
    "Argentine": [
        "Buenos Aires – Aéroport international d'Ezeiza",
        "Buenos Aires – Aéroport Jorge-Newbery",
        "Córdoba – Aéroport international Ingeniero Ambrosio L.V. Taravella",
        "Mendoza – Aéroport international Governor Francisco Gabrielli",
        "Oruro - Aéroport international Juan Mendoza",
        "Puerto Iguazú – Aéroport des chutes d'Iguazú",
        "Río Gallegos – Aéroport international Piloto Civil Norberto Fernández",
        "Rio Grande - Aéroport international Gob. Ramón Trejo Noel",
        "Salta - Aéroport international Martín Miguel de Güemes",
        "San Carlos de Bariloche – Aéroport international Teniente Luis Candelaria (en)",
        "San Fernando - Aéroport international de San Fernando",
        "Trelew – Aéroport Almirante Marcos A. Zar Airport (en)",
        "Ushuaïa - Aéroport international d'Ushuaïa"
    ],
    "Arménie": [
        "Gyumri - Aéroport international Shirak",
        "Yerevan – Aéroport international Zvartnots"
    ],
    "Australie": [
        "Adélaïde - Aéroport international d'Adélaïde",
        "Brisbane - Aéroport international de Brisbane",
        "Cairns - Aéroport international de Cairns",
        "Canberra - Aéroport de Canberra",
        "Darwin - Aéroport international de Darwin",
        "Gold Coast – Aéroport international de Gold Coast",
        "Hobart - Aéroport international de Hobart",
        "Melbourne- Aéroport Melbourne-Tullamarine",
        "Perth – Aéroport de Perth",
        "Port Hedland - Aéroport de Port Hedland",
        "Sydney - Aéroport Sydney-Kingsford Smith",
        "Townsville - Aéroport international de Townsville"
    ],
    "Autriche": [
        "Graz - Aéroport de Graz",
        "Innsbruck - Aéroport d'Innsbruck",
        "Klagenfurt - Aéroport de Klagenfurt",
        "Linz - Aéroport de Linz",
        "Salzbourg - Aéroport Wolfgang-Amadeus-Mozart",
        "Vienne - Aéroport Schwechat"
    ],
    "Azerbaïdjan": [
        "Bakou – Aéroport international Heydar Aliyev",
        "Gandja – Aéroport international de Gandja",
        "Nakhitchevan - Aéroport de Nakhitchevan"
    ],
    "Bahamas": [
        "Chub Cay - Aéroport international de Chub Cay (en)",
        "Freeport - Aéroport international de Grand Bahama",
        "Îles Exumas - Aéroport international d'Exuma",
        "Nassau – Aéroport international Lynden Pindling",
        "Rock Sound - Aéroport international de Rock Sound (en)",
        "South Bimini - Aéroport international de South Bimini"
    ],
    "Bahreïn": [
        "Manama – Aéroport international de Bahreïn"
    ],
    "Bangladesh": [
        "Chittagong – Aéroport international Shah Amanat",
        "Dacca – Aéroport international Shah Jalal",
        "Sylhet – Aéroport international Osmani"
    ],
    "Barbade": [
        "Bridgetown – Aéroport international Grantley Adams"
    ],
    "Belgique": [
        "Anvers - Aéroport d'Anvers",
        "Bruxelles - Aéroport de Bruxelles",
        "Charleroi – Aéroport Bruxelles-Sud",
        "Liège - Aéroport de Liège",
        "Ostende/Bruges - Aéroport d'Ostende-Bruges"
    ],
    "Belize": [
        "Belize City – Aéroport international Philip S. W. Goldson"
    ],
    "Bénin": [
        "Cotonou – Aéroport international de Cotonou"
    ],
    "Bermudes": [
        "Île Saint David – Aéroport international L.F. Wade"
    ],
    "Bhoutan": [
        "Paro – Aéroport international de Paro"
    ],
    "Biélorussie": [
        "Minsk - Aéroport international de Minsk"
    ],
    "Birmanie": [
        "Mandalay - Aéroport international de Mandalay",
        "Naypyidaw - Aéroport international de Naypyidaw",
        "Rangoun - Aéroport international de Yangon"
    ],
    "Bolivie": [
        "Cochabamba - Aéroport international Jorge Wilstermann",
        "La Paz – Aéroport international El Alto",
        "Puerto Suárez - Aéroport international de Puerto Suárez",
        "Santa Cruz de la Sierra – Aéroport international de Viru Viru"
    ],
    "Bosnie-Herzégovine": [
        "Banja Luka - Aéroport international de Banja Luka",
        "Mostar- Aéroport de Mostar",
        "Sarajevo - Aéroport international de Sarajevo",
        "Tuzla - Aéroport international de Tuzla"
    ],
    "Botswana": [
        "Francistown - Aéroport international de Francistown",
        "Gaborone - Aéroport international de Gaborone",
        "Kasane - Aérodrome de Kasane",
        "Maun - Aéroport de Maun"
    ],
    "Brésil": [
        "Aracaju – Aéroport Santa Maria (en)",
        "Bagé – Aéroport international de Bagé (en)",
        "Belém – Aéroport international Val de Cães",
        "Belo Horizonte – Aéroport international Tancredo Neves",
        "Boa Vista – Aéroport international de Boa Vista",
        "Brasília – Aéroport international Presidente Juscelino Kubitschek",
        "Cabo Frio – Aéroport international de Cabo Frio (en)",
        "Campinas – Aéroport international de Viracopos/Campinas",
        "Campo Grande – Aéroport international de Campo Grande",
        "Cruzeiro do Sul – Aéroport international de Cruzeiro do Sul",
        "Cuiabá – Aéroport international Marechal Rondon (en)",
        "Curitiba – Aéroport international de Curitiba",
        "Florianópolis – Aéroport international Hercílio-Luz",
        "Fortaleza – Aéroport international de Fortaleza",
        "Foz do Iguaçu – Aéroport international de Foz do Iguaçu",
        "Goiânia – Aéroport international Santa Genoveva",
        "João Pessoa – Aéroport international Presidente Castro Pinto",
        "Macapá – Aéroport international de Macapá",
        "Maceió – Aéroport international Zumbi dos Palmares",
        "Manaus – Aéroport de Manaus-Eduardo Gomes",
        "Navegantes – Aéroport international Ministro Victor Konder",
        "Natal – Aéroport international Augusto Severo (en)",
        "Parnaíba – Aéroport international de Parnaíba (en)",
        "Petrolina – Aéroport Senador Nilo Coelho",
        "Ponta Porã – Aéroport international de Ponta Porã (en)",
        "Porto Alegre – Aéroport international Salgado Filho",
        "Porto Seguro – Aéroport de Porto Seguro (en)",
        "Porto Velho – Aéroport international Governador Jorge Teixeira de Oliveira (en)",
        "Recife – Aéroport international de Recife",
        "Rio Branco – Aéroport international de Rio Branco",
        "Rio de Janeiro – Aéroport international de Rio de Janeiro-Galeão",
        "Salvador – Aéroport international de Salvador",
        "Santarém – Aéroport international de Santarém",
        "São Carlos – Aéroport de São Carlos",
        "São Luís – Aéroport international Marechal Cunha Machado",
        "São Paulo – Aéroport international de Guarulhos",
        "Tabatinga – Aéroport international de Tabatinga",
        "Vitória – Aéroport international de Vitória"
    ],
    "Brunei": [
        "Bandar Seri Begawan – Aéroport international de Bandar Seri Begawan"
    ],
    "Bulgarie": [
        "Bourgas - Aéroport de Bourgas",
        "Plovdiv – Aéroport de Plovdiv",
        "Sofia- Aéroport de Sofia",
        "Varna - Aéroport de Varna"
    ],
    "Burkina Faso": [
        "Bobo-Dioulasso – Aéroport de Bobo-Dioulasso",
        "Ouagadougou - Aéroport de Ouagadougou"
    ],
    "Burundi": [
        "Bujumbura - Aéroport international de Bujumbura"
    ],
    "Cambodge": [
        "Phnom Penh - Aéroport international de Phnom Penh",
        "Siem Reap – Aéroport international de Siem Reap-Angkor"
    ],
    "Cameroun": [
        "Douala - Aéroport de Douala",
        "Garoua - Aéroport international de Garoua",
        "Salak - Aéroport international de Maroua Salak",
        "Yaoundé – Aéroport international de Yaoundé-Nsimalen",
        "Yaoundé - Aéroport de Yaoundé-Ville"
    ],
    "Canada": [
        "Calgary - Aéroport international de Calgary",
        "Edmonton - Aéroport international d'Edmonton",
        "Gander – Aéroport international de Gander",
        "Halifax – Aéroport international Stanfield d'Halifax",
        "Hamilton - Aéroport international John C. Munro d'Hamilton",
        "Kelowna - Aéroport international de Kelowna",
        "London - Aéroport international de London",
        "Moncton - Aéroport international du Grand Moncton",
        "Mont-Tremblant – Aéroport international de Mont-Tremblant",
        "Montréal - Aéroport international Pierre-Elliott-Trudeau de Montréal",
        "Ottawa - Aéroport international Macdonald-Cartier d'Ottawa",
        "Québec – Aéroport international Jean-Lesage de Québec",
        "Regina – Aéroport international de Regina",
        "Saskatoon - Aéroport John G. Diefenbaker",
        "Saint-Jean – Aéroport international de Saint-Jean de Terre-Neuve",
        "Sydney – Aéroport de Sydney-J.A. Douglas McCurdy",
        "Toronto – Aéroport international Pearson de Toronto",
        "Vancouver - Aéroport international de Vancouver",
        "Victoria – Aéroport international de Victoria",
        "Winnipeg - Aéroport international James Armstrong Richardson de Winnipeg"
    ],
    "Cap-Vert": [
        "Boa Vista – Aéroport de Rabil",
        "Praia - Aéroport international de Praia",
        "Sal - Aéroport international Amílcar-Cabral",
        "Sao Vicente - Aéroport international Cesária-Évora"
    ],
    "Centrafrique": [
        "Bangui - Aéroport international M'Poko"
    ],
    "Chili": [
        "Antofagasta – Aéroport d'Antofagasta",
        "Concepción - Aéroport international Carriel Sur",
        "Puerto Montt - Aéroport international El Tepual",
        "Punta Arenas - Aéroport international Presidente Carlos Ibáñez del Campo",
        "Santiago du Chili – Aéroport international Arturo-Merino-Benítez"
    ],
    "Chine, République populaire de": [
        // Concord with "République populaire de Chine" below
    ],
    "Chypre": [
        "Larnaca - Aéroport international de Larnaca",
        "Paphos - Aéroport international de Paphos"
    ],
    "Chypre du Nord": [
        "Aéroport international Ercan"
    ],
    "Colombie": [
        "Armenia – Aéroport international El Edén",
        "Barranquilla – Aéroport international Ernesto Cortissoz",
        "Bogota – Aéroport international El Dorado",
        "Bucaramanga – Aéroport international Palonegro",
        "Cali – Aéroport international Alfonso Bonilla Aragón",
        "Carthagène des Indes – Aéroport international Rafael Núñez",
        "Cúcuta – Aéroport international Camilo Daza",
        "Leticia – Aéroport international Alfredo Vásquez Cobo",
        "Medellín – Aéroport international José María Córdova",
        "Pereira – Aéroport international Matecaña",
        "San Andrés – Aéroport international Gustavo Rojas Pinilla",
        "Santa Marta – Aéroport international Simón-Bolívar"
    ],
    "Comores": [
        "Hahaya - Aéroport international Prince Saïd Ibrahim"
    ],
    "Corée du Nord": [
        "Pyongyang – Aéroport Sunan"
    ],
    "Corée du Sud": [
        "Busan – Aéroport international de Gimhae",
        "Cheongju - Aéroport de Cheongju",
        "Daegu – Aéroport international de Daegu",
        "Incheon – Aéroport international d'Incheon",
        "Jeju – Aéroport international de Jeju",
        "Muan - Aéroport international de Muan",
        "Séoul – Aéroport Gimpo",
        "Yangyang - Aéroport international de Yangyang"
    ],
    "Costa Rica": [
        "Liberia – Aéroport Daniel-Oduber-Quirós",
        "San José – Aéroport international Juan Santamaría de San José"
    ],
    "Côte d'Ivoire": [
        "Abidjan – Aéroport international Félix-Houphouët-Boigny",
        "Bouaké Aéroport de bouaké",
        "Korogho Aéroport de korogho",
        "Odienné Aéroport de Odienné",
        "San Pedro Aéroport de San Pedro",
        "San Pedro Aéroport de San-Pedro",
        "Yamoussoukro Aéroport de Yamoussoukro"
    ],
    "Croatie": [
        "Dubrovnik - Aéroport de Dubrovnik",
        "Osijek - Aéroport d'Osijek",
        "Pula - Aéroport de Pula",
        "Rijeka - Aéroport de Rijeka",
        "Split – Aéroport de Split",
        "Zadar - Aéroport de Zadar",
        "Zagreb - Aéroport de Zagreb"
    ],
    "Cuba": [
        "Cayo Coco - Aéroport de Jardines del Rey",
        "Holguín – Aéroport d'Holguín",
        "La Havane – Aéroport international José Martí",
        "Santa Clara – Aéroport Abel Santa María",
        "Varadero – Aéroport Juan Gualberto Gómez"
    ],
    "Danemark": [
        "Aalborg - Aéroport d'Aalborg",
        "Aarhus - Aéroport d'Aarhus",
        "Billund – Aéroport de Billund",
        "Copenhague- Aéroport de Copenhague"
    ],
    "Djibouti": [
        "Djibouti - Aéroport international Ambouli"
    ],
    "Dominique": [
        "Roseau – Aéroport Douglas-Charles"
    ],
    "Égypte": [
        "Alexandrie - Aéroport de Borg El Arab",
        "Alexandrie - Aéroport El Nouzha (en travaux)",
        "Assouan - Aéroport d'Assouan",
        "Charm el-Cheikh - Aéroport international de Charm el-Cheikh",
        "El-Arich - Aéroport international d'El-Arich",
        "Hurghada - Aéroport international de Hurghada",
        "Le Caire - Aéroport international du Caire",
        "Louxor - Aéroport international de Louxor",
        "Marsa Alam - Aéroport de Marsa Alam",
        "Marsa Matruh - Aéroport de Marsa Matruh",
        "Taba – Aéroport international de Taba"
    ],
    "Émirats arabes unis": [
        "Abu Dhabi - Aéroport international d'Abu Dhabi",
        "Al-Aïn - Aéroport international d'Al Ain",
        "Charjah – Aéroport international de Charjah",
        "Dubaï - Aéroport international de Dubaï",
        "Fujaïrah – Aéroport international de Fujaïrah",
        "Jebel Ali - Aéroport international Al Maktoum",
        "Ras el Khaïmah - Aéroport international de Ras Al Khaimah"
    ],
    "Équateur": [
        "Guayaquil – Aéroport international José Joaquín de Olmedo",
        "Quito – Aéroport international Mariscal Sucre",
        "Tulcán – Aéroport international Teniente Coronel Luis a Mantilla"
    ],
    "Espagne": [
        "Alicante - Aéroport d'Alicante",
        "Almería - Aéroport d'Almeria",
        "Asturies - Aéroport des Asturies",
        "Barcelone - Aéroport El Prat",
        "Bilbao - Aéroport international de Bilbao",
        "Ciudad Real - Aéroport Central-Ciudad Real",
        "Fuerteventura - Aéroport de Fuerteventura",
        "Gérone - Aéroport Costa Brava",
        "Grande Canarie - Aéroport de Gran Canaria",
        "Grenade - Aéroport Federico-García-Lorca",
        "Huesca - Aéroport de Huesca-Pyrénées",
        "Ibiza - Aéroport d'Ibiza",
        "Jerez de la Frontera – Aéroport de Jerez",
        "La Corogne – Aéroport d'Alvedro",
        "Lanzarote - Aéroport de Lanzarote",
        "Lérida – Aéroport de Lleida-Alguaire",
        "Madrid - Aéroport Barajas",
        "Malaga - Aéroport de Malaga",
        "Minorque – Aéroport de Minorque",
        "Murcie - Aéroport de Murcia-San Javier",
        "Palma de Majorque - Aéroport de Palma de Majorque",
        "Reus - Aéroport de Reus",
        "Saint-Jacques-de-Compostelle - Aéroport de Saint-Jacques-de-Compostelle",
        "Santander – Aéroport de Santander",
        "Santa Cruz de la Palma – Aéroport de La Palma",
        "Saragosse - Aéroport de Saragosse",
        "Séville - Aéroport de Séville",
        "Tenerife - Aéroport Nord",
        "Tenerife - Aéroport Sud",
        "Valence – Aéroport de Valence",
        "Valladolid - Aéroport de Valladolid",
        "Vigo - Aéroport de Vigo-Peinador"
    ],
    "Estonie": [
        "Tallinn – Aéroport international de Tallinn (Aéroport Lennart Meri)",
        "Tartu - Aéroport de Tartu"
    ],
    "États-Unis (USA)": [
        "Akron - Aéroport régional d'Akron-Canton",
        "Albany - Aéroport international d'Albany",
        "Albuquerque – Aéroport international d'Albuquerque",
        "Alexandria - Aéroport international d'Alexandria",
        "Alice - Aéroport international Austin-Bergstrom",
        "Allentown - Aéroport international Lehigh Valley",
        "Anchorage – Aéroport international d'Anchorage Ted-Stevens",
        "Atlanta – Aéroport Hartsfield-Jackson",
        "Atlantic City - Aéroport international d'Atlantic City",
        "Austin - Aéroport Bergstrom",
        "Bakersfield - Meadows Field",
        "Baltimore - Aéroport Thurgood Marshall",
        "Bangor - Aéroport international de Bangor",
        "Bellingham - Aéroport international de Bellingham",
        "Billings - Aéroport international de Billings Logan",
        "Binghamton - Aéroport régional de Binghamton",
        "Birmingham - Aéroport international de Birmingham-Shuttlesworth (en)",
        "Boston – Aéroport international de Boston-Logan",
        "Brownsville - Aéroport international de Brownsville-South Padre Island (en)",
        "Buffalo - Aéroport Niagara",
        "Burlington - Aéroport international de Burlington",
        "Calexico - Aéroport international de Calexico",
        "Casper - Aéroport international du comté de Natrona",
        "Charlotte – Aéroport Douglas",
        "Charleston - Aéroport international de Charleston",
        "Chicago - Aéroport international de Gary/Chicago",
        "Chicago - Aéroport international Midway de Chicago",
        "Chicago – Aéroport international O'Hare de Chicago",
        "Chicago – Aéroport international de Rockford/Chicago",
        "Cincinnati - Aéroport international de Cincinnati-Northern Kentucky",
        "Cleveland - Aéroport international de Cleveland-Hopkins",
        "Columbus - Aéroport international Port Columbus, Aéroport international Rickenbacker",
        "Corpus Christi - Aéroport international de Corpus Christi",
        "Dallas/Fort Worth – Aéroport DFW",
        "Dayton - Aéroport James M. Cox",
        "Daytona Beach - Aéroport international de Daytona Beach",
        "Del Bonita - Aéroport international Whetstone (en)",
        "Del Rio - Aéroport international de Del Rio (en)",
        "Denver - Aéroport international de Denver",
        "Des Moines - Aéroport international de Des Moines",
        "Détroit - Aéroport métropolitain de Détroit",
        "Duluth - Aéroport international de Duluth (en)",
        "Eagle Pass - Maverick County Memorial (en)",
        "Edinburg - Aéroport international South Texas d'Edinburg (en)",
        "El Paso - Aéroport international d'El Paso",
        "Érié - Aéroport international d'Érié (en)",
        "Fairbanks - Aéroport international de Fairbanks",
        "Fargo - Aéroport international Hector",
        "Flint - Aéroport international Bishop de Flint",
        "Fort Lauderdale – Aéroport Fort Lauderdale-Hollywood",
        "Fort Myers - Aéroport international du sud-ouest de la Floride",
        "Fort Wayne - Aéroport international de Fort Wayne (en)",
        "Fort Worth - Aéroport international de Fort Worth Meacham (en)",
        "Fresno - Aéroport international de Fresno Yosemite",
        "Glasgow - Aéroport international de Glasgow",
        "Grand Rapids - Aéroport international Gerald R. Ford",
        "Great Falls - Aéroport international de Great Falls",
        "Green Bay - Aéroport International Austin Straubel",
        "Greensboro - Aéroport international de Piedmont Triad (en)",
        "Greenville/Spartanburg - Aéroport international de Greenville-Spartanburg",
        "Gulfport/Biloxi - Aéroport international de Gulfport-Biloxi",
        "Harlingen - Aéroport international Valley (en)",
        "Harrisburg/Middletown - Aéroport international d'Harrisburg",
        "Honolulu - Aéroport international d'Honolulu",
        "Houlton - Aéroport international de Houlton (en)",
        "Houston – Aéroport George-Bush",
        "Huntsville - Aéroport international de Huntsville",
        "Indianapolis - Aéroport international d'Indianapolis",
        "International Falls - Aéroport international de Falls (en)",
        "Jackson - Aéroport international Jackson-Evers",
        "Jacksonville - Aéroport international de Jacksonville",
        "Juneau - Aéroport international de Juneau",
        "Kalamazoo/Battle Creek - Aéroport international de Kalamazoo-Battle Creek (en)",
        "Kalispell - Aéroport international de Glacier Park (en)",
        "Kansas City – Aéroport international de Kansas City",
        "Kalaoa – Aéroport international de Kona",
        "Key West - Aéroport international de Key West",
        "Ketchikan - Aéroport international de Ketchikan (en)",
        "Lake Charles - Aéroport international Chennault",
        "Lansing - Aéroport international Capital Region",
        "Laredo - Aéroport international de Laredo (en)",
        "Las Cruces - Aéroport international de Las Cruces",
        "Las Vegas – Aéroport McCarran",
        "Los Angeles - Aéroport international de Los Angeles",
        "Louisville – Aéroport international de Louisville",
        "Lubbock - Aéroport international de Lubbock Preston Smith",
        "Marquette/Gwinn - Aéroport international Sawyer (en)",
        "Massena - Aéroport international de Massena (en)",
        "McAllen - Aéroport international McAllen-Miller (en)",
        "Medford - Aéroport international Rogue Valley International-Medford",
        "Melbourne - Aéroport d'Orlando-Melbourne",
        "Memphis – Aéroport international de Memphis",
        "Miami - Aéroport international de Miami",
        "Milwaukee – Aéroport international General Mitchell de Milwaukee",
        "Minneapolis/Saint Paul – Aéroport international de Minneapolis-Saint-Paul",
        "Missoula - Aéroport international de Missoula",
        "Monticello - Aéroport international du comté de Sullivan (en)",
        "Moses Lake - Aéroport international du comté de Grant (en)",
        "Myrtle Beach - Aéroport international de Myrtle Beach",
        "Nashville - Aéroport international de Nashville",
        "New York – Aéroport international de New York - John-F.-Kennedy",
        "New York – Aéroport LaGuardia de New York",
        "Newark – Aéroport international Liberty de Newark",
        "Newburgh – Aéroport de Newburgh-Stewart",
        "Newport News – Aéroport international Newport News/Williamsburg (en)",
        "Niagara Falls - Aéroport international des Niagara Falls",
        "Norfolk - Aéroport international de Norfolk",
        "North Charleston – Aéroport international de Charleston",
        "Nouvelle-Orléans – Aéroport Louis Armstrong",
        "Oakland – Aéroport international d'Oakland",
        "Ogdensburg – Aéroport international d'Ogdensburg (en)",
        "Ontario – Aéroport international d'Ontario",
        "Orlando – Aéroport international d'Orlando",
        "Palm Springs – Aéroport international de Palm Springs",
        "Panama City Beach – Aéroport international des plages du nord-ouest de la Floride",
        "Pensacola – Aéroport de Pensacola",
        "Peoria – Aéroport international General Wayne A. Downing Peoria (en)",
        "Philadelphie - Aéroport international de Philadelphie",
        "Phoenix – Aéroport Sky Harbor",
        "Pittsburgh - Aéroport international de Pittsburgh",
        "Plattsburgh - Aéroport international de Plattsburgh",
        "Pontiac - Aéroport international du comté d'Oakland (en)",
        "Port Angeles - Aéroport international William R. Fairchild (en)",
        "Port Huron - Aéroport international du comté de St. Clair (en)",
        "Port Townsend - Aéroport international du comté de Jefferson (en)",
        "Portland, Maine – Aéroport international de Portland (Maine)",
        "Portland, Oregon – Aéroport international de Portland",
        "Portsmouth - Aéroport international Portsmouth at Pease (en)",
        "Providence - Aéroport international T.F. Green",
        "Quad Cities - Aéroport international de Quad Cities (en)",
        "Raleigh – Aéroport international de Raleigh-Durham",
        "Reno - Aéroport international de Reno-Tahoe",
        "Richmond – Aéroport international de Richmond",
        "Rochester (Minnesota) - Aéroport international de Rochester (en)",
        "Rochester, New York - Aéroport international de Rochester",
        "Sacramento – Aéroport international de Sacramento",
        "Saginaw - Aéroport international MBS (en)",
        "Saint-Louis – Aéroport international de Lambert-Saint Louis",
        "Salt Lake City - Aéroport international de Salt Lake City",
        "San Antonio - Aéroport international de San Antonio",
        "San Diego - Aéroport international de San Diego",
        "San Francisco - Aéroport international de San Francisco",
        "San José – Aéroport international de San José",
        "Santa Ana/Comté d'Orange – Aéroport John Wayne",
        "Sarasota/Bradenton - Aéroport de Sarasota-Bradenton",
        "Savannah - Aéroport international de Savannah/Hilton Head",
        "Sault Ste. Marie - Aéroport international du comté de Chippewa (en)",
        "Seattle - Aéroport Tacoma",
        "Spokane - Aéroport international de Spokane",
        "St. Petersburg - Aéroport de St. Petersburg-Clearwater",
        "Sweetgrass - Aéroport international Ross (en)",
        "Syracuse - Aéroport Hancock",
        "Tampa – Aéroport international de Tampa",
        "Toledo - Aéroport express de Toledo",
        "Tucson – Aéroport international de Tucson",
        "Tulsa - Aéroport international de Tulsa (en)",
        "Washington – Aéroport Dulles",
        "Watertown - Aéroport de Watertown",
        "West Palm Beach – Aéroport international de Palm Beach",
        "Wilkes-Barre/Scranton - Aéroport Scranton",
        "Wilmington - Aéroport international de Wilmington (en)",
        "Windsor Locks - Aéroport Bradley",
        "Yuma - Aéroport international de Yuma (en)"
    ],
    "Fidji": [
        "Aéroport international de Nadi",
        "Suva – Aéroport de Suva-Nausori"
    ],
    "Finlande": [
        "Aéroport de Mariehamn (Åland)",
        "Helsinki - Aéroport de Helsinki-Vantaa",
        "Kittilä - Aéroport de Kittilä",
        "Kuopio - Aéroport de Kuopio",
        "Kuusamo - Aéroport de Kuusamo",
        "Lappeenranta - Aéroport de Lappeenranta",
        "Oulu - Aéroport d'Oulu",
        "Rovaniemi - Aéroport de Rovaniemi",
        "Tampere - Aéroport de Tampere-Pirkkala",
        "Turku - Aéroport de Turku",
        "Vaasa- Aéroport de Vaasa"
    ],
    "France": [
        "Ajaccio – Aéroport Napoléon-Bonaparte (Anc. Aéroport Campo dell'Oro)",
        "Bastia – Aéroport Poretta",
        "Beauvais - Aéroport Tillé",
        "Bergerac – Aéroport Dordogne-Périgord",
        "Béziers - Aéroport Cap d'Agde",
        "Biarritz/Bayonne - Aéroport Anglet",
        "Bordeaux – Aéroport Mérignac",
        "Brest – Aéroport Bretagne",
        "Calvi - Aéroport Sainte-Catherine",
        "Carcassonne – Aéroport Salvaza",
        "Châlons-en-Champagne – Aéroport Vatry",
        "Chambéry - Aéroport Savoie",
        "Clermont-Ferrand - Aéroport Auvergne",
        "Dinard – Aéroport Pleurtuit Saint-Malo",
        "Figari - Aéroport Sud Corse",
        "Grenoble - Aéroport Isère",
        "La Rochelle - Aéroport île de Ré",
        "Lille - Aéroport Lesquin",
        "Limoges – Aéroport Bellegarde",
        "Lyon – Aéroport Saint-Exupéry",
        "Marseille – Aéroport Provence",
        "Metz/Nancy - Aéroport Lorraine",
        "Montpellier - Aéroport Méditerranée",
        "Mulhouse – Aéroport international de Bâle-Mulhouse-Fribourg",
        "Nantes - Aéroport-Atlantique",
        "Nice – Aéroport Côte d'Azur",
        "Nîmes – Aéroport Garons",
        "Paris – Aéroport Orly",
        "Paris – Aéroport Roissy-CDG",
        "Pau – Aéroport Pau-Pyrénées",
        "Perpignan – Aéroport Rivesaltes",
        "Poitiers – Aéroport Biard",
        "Rennes - Aéroport de Rennes",
        "Rodez – Aéroport Aveyron",
        "Strasbourg - Aéroport Entzheim",
        "Tarbes/Lourdes - Aéroport Pyrénées",
        "Toulon – Aéroport Hyères",
        "Toulouse – Aéroport Blagnac",
        "Tours - Aéroport Val de Loire"
    ],
    "Gabon": [
        "Franceville - Aéroport de Franceville",
        "Libreville - Aéroport international Léon-Mba",
        "Port-Gentil - Aéroport international de Port-Gentil"
    ],
    "Gambie": [
        "Banjul - Aéroport international de Banjul"
    ],
    "Géorgie": [
        "Batoumi - Aéroport international de Batoumi",
        "Koutaïssi - Aéroport international de Koutaïssi",
        "Tbilissi - Aéroport international de Tbilissi"
    ],
    "Ghana": [
        "Accra – Aéroport international de Kotoka",
        "Tamale - Aéroport de Tamale"
    ],
    "Gibraltar": [
        "Aéroport de Gibraltar"
    ],
    "Grèce": [
        "Athènes - Aéroport Elefthérios-Venizélos",
        "Céphalonie - Aéroport international de Céphalonie",
        "Chios - Aéroport de l'île de Chios",
        "Corfou – Aéroport Ioánnis-Kapodístrias",
        "Héraklion - Aéroport international d'Héraklion Níkos-Kazantzákis",
        "Kalamata - Aéroport de Kalamata",
        "Karpathos - Aéroport de l'île de Karpathos",
        "Kavala - Aéroport international de Kavala",
        "Kos - Aéroport international de l'île de Kos",
        "La Canée - Aéroport international de La Canée",
        "Mykonos - Aéroport de l'île de Mykonos",
        "Mytilène - Aéroport international de Mytilène",
        "Patras - Aéroport d'Araxos",
        "Préveza – Aéroport d'Aktion",
        "Rhodes - Aéroport de Rhodes",
        "Samos - Aéroport de Samos",
        "Santorin - Aéroport de Santorin (Thira)",
        "Skiathos - Aéroport de Skiathos",
        "Skyros - Aérodrome de Skyros",
        "Thessalonique - Aéroport international de Thessalonique «Makédonia»",
        "Vólos – Aéroport de Néa Anchíalos",
        "Zante - Aéroport international de Zante"
    ],
    "Grenade": [
        "Aéroport de Pointe Salines"
    ],
    "Groenland": [
        "Kujalleq – Aéroport de Narsarsuaq",
        "Nuuk – Aéroport de Nuuk",
        "Qaasuitsup – Aéroport d'Ilulissat",
        "Qeqqata – Aéroport de Kangerlussuaq",
        "Sermersooq – Aéroport de Kulusuk",
        "Sermersooq – Aéroport de Nerlerit Inaat"
    ],
    "Guadeloupe": [
        "Aéroport Guadeloupe - Pôle Caraïbes"
    ],
    "Guam": [
        "Hagåtña – Aéroport international Antonio B. Won Pat"
    ],
    "Guernesey": [
        "Aéroport de Guernesey"
    ],
    "Guinée-Bissau": [
        "Bissau - Aéroport international Osvaldo Vieira de Bissau"
    ],
    "Guinée-Conakry": [
        "Conakry - Aéroport international de Conakry"
    ],
    "Guinée Équatoriale": [
        "Malabo - Aéroport de Malabo",
        "Mengomeyén - Aéroport international Obiang Nguema"
    ],
    "Guyana": [
        "Georgetown – Aéroport international Cheddi Jagan"
    ],
    "Guyane Française": [
        "Cayenne - Aéroport international Félix Éboué"
    ],
    "Haïti": [
        "Port-au-Prince – Aéroport international Toussaint-Louverture"
    ],
    "Honduras": [
        "La Ceiba – Aéroport international Golosón",
        "Roatán – Aéroport international Juan-Manuel-Gálvez",
        "San Pedro Sula – Aéroport international Ramón-Villeda-Morales",
        "Tegucigalpa – Aéroport international de Toncontín"
    ],
    "Hong Kong": [
        "Hong Kong - Aéroport international de Hong Kong"
    ],
    "Hongrie": [
        "Budapest - Aéroport international de Budapest-Ferenc Liszt",
        "Debrecen - Aéroport international de Debrecen",
        "Győr - Aéroport de Győr-Pér",
        "Pécs - Aéroport international de Pécs-Pogány",
        "Sármellék - Aéroport international Hévíz-Balaton (FlyBalaton)"
    ],
    "Île Christmas": [
        "Aéroport de l'île Christmas"
    ],
    "Île de Man": [
        "Aéroport du Ronaldsway"
    ],
    "Île de Pâques": [
        "Hanga Roa – Aéroport international Mataveri"
    ],
    "Île Norfolk": [
        "Aéroport international de l'île Norfolk"
    ],
    "Îles Caïmans": [
        "George Town – Aéroport international Owen Roberts"
    ],
    "Îles Cocos": [
        "Aéroport des îles Cocos"
    ],
    "Îles Cook": [
        "Aéroport international de Rarotonga"
    ],
    "Îles Féroé": [
        "Vágar – Aéroport de Vagar"
    ],
    "Îles Malouines": [
        "Mount Pleasant – RAF Mount Pleasant"
    ],
    "Îles Mariannes du Nord": [
        "Rota - Aéroport international de Rota (en)",
        "Saipan – Aéroport international de Saipan",
        "Tinian - Aéroport international de Tinian"
    ],
    "Îles Marshall": [
        "Majuro – Aéroport international des îles Marshall"
    ],
    "Îles Salomon": [
        "Honiara - Aéroport international de Honiara"
    ],
    "Îles Turques-et-Caïques": [
        "Aéroport international de Providenciales"
    ],
    "Îles Vierges": [
        "Saint Thomas – Aéroport international Cyril E. King",
        "Sainte-Croix – Aéroport international Henry E. Rohlsen"
    ],
    "Îles Vierges britanniques": [
        "Road Town – Aéroport international Terrance B. Lettsome (en)"
    ],
    "Inde": [
        "Ahmedabad - Aéroport international Sardar Vallabhbhai Patel",
        "Amritsar - Aéroport international de Raja Sansi",
        "Bangalore - Aéroport international Kempegowda",
        "Bhubaneswar - Aéroport Biju Patnaik de Bhubaneswar",
        "Bombay – Aéroport international Chhatrapati-Shivaji",
        "Calcutta – Aéroport international Netaji Subhash Chandra Bose",
        "Calicut - Aéroport international de Calicut",
        "Chennai - Aéroport international de Chennai",
        "Cochin - Aéroport international de Cochin",
        "Coimbatore - Aéroport international de Coimbatore",
        "Delhi – Aéroport international Indira Gandhi",
        "Guwahati - Aéroport international Lokpriya Gopinath Bordoloi",
        "Hyderabad – Aéroport international d'Hyderabad",
        "Jaipur - Aéroport de Jaipur",
        "Lucknow - Aéroport international Chaudhary Charan Singh",
        "Mangalore - Aéroport international de Mangalore",
        "Nagpur - Aéroport international Dr. Babasaheb Ambedkar de Nagpur",
        "Pune - Aéroport de Pune",
        "Ranchi - Aéroport international de Birsa Munda",
        "Siliguri - Aéroport de Bagdogra",
        "Trichy - Aéroport international de Trichy",
        "Trivandrum - Aéroport international de Trivandrum",
        "Vasco da Gama - Aéroport international de Goa",
        "Varanasi - Aéroport de Lal Bahadur Shastri",
        "Visakhapatnam - Aéroport de Visakhapatnam"
    ],
    "Indonésie": [
        "Ambon - Aéroport Pattimura",
        "Balikpapan - Aéroport international Sultan Aji Muhamad Sulaiman",
        "Bandung - Aéroport international Husein Sastranegara",
        "Banjarmasin - Aéroport Syamsudin Noor",
        "Denpasar - Aéroport international Ngurah Rai",
        "Jakarta - Aéroport international Soekarno-Hatta",
        "Jayapura - Aéroport Sentani",
        "Kendari - Aéroport Haluoleo",
        "Kupang - Aéroport El Tari",
        "Makassar – Aéroport international Sultan Hasanuddin",
        "Manado – Aéroport international Sam Ratulangi",
        "Mataram – Aéroport international de Lombok",
        "Medan – Aéroport international de Kuala Namu",
        "Padang – Aéroport international Minangkabau",
        "Palembang – Aéroport international Sultan Mahmud Badaruddin II",
        "Palu - Aéroport Mutiara",
        "Pekanbaru – Aéroport international Sultan Syarif Qasim II",
        "Samarinda - Aéroport international de Samarinda",
        "Semarang – Aéroport international Achmad Yani",
        "Solo – Aéroport international Adisumarmo",
        "Surabaya – Aéroport international Juanda",
        "Yogyakarta – Aéroport international Adisutjipto"
    ],
    "Iran": [
        "Aéroport international de Tabriz",
        "Bandar Abbas - Aéroport international de Bandar Abbas",
        "Birjand - Aéroport international de Birjand",
        "Chiraz - Aéroport international Shahid Dastghaib",
        "Ispahan - Aéroport international Shahid Beheshti",
        "Kish – Aéroport de l'île de Kish",
        "Mashhad - Aéroport international Shahid Hashemi Nejad",
        "Qeshm - Aéroport Dayrestan",
        "Téhéran - Aéroport international Imam Khomeini",
        "Téhéran - Aéroport international Mehrabad"
    ],
    "Irak": [
        "Aéroport international de Diyala",
        "Bagdad - Aéroport international de Bagdad",
        "Bassorah - Aéroport international de Bassorah",
        "Erbil – Aéroport international d'Erbil",
        "Mossoul - Aéroport international de Mossoul",
        "Najaf - Aéroport international de Najaf",
        "Souleimaniye - Aéroport international de Souleimaniye"
    ],
    "Irlande": [
        "Cork – Aéroport de Cork",
        "Dublin - Aéroport international de Dublin",
        "Kerry – Aéroport de Kerry",
        "Knock – Aéroport de Knock",
        "Limerick – Aéroport de Shannon"
    ],
    "Islande": [
        "Akureyri – Aéroport d'Akureyri",
        "Reykjavik – Aéroport international de Keflavík"
    ],
    "Israël": [
        "Eilat - Aéroport international Ovda",
        "Haïfa - Aéroport d'Haïfa",
        "Tel Aviv-Jaffa – Aéroport international de Tel Aviv-David Ben Gourion"
    ],
    "Italie": [
        "Alghero – Aéroport d'Alghero-Fertilia",
        "Ancône - Aéroport d'Ancône-Falconara",
        "Bari - Aéroport de Bari",
        "Bergame – Aéroport de Bergame-Orio al Serio",
        "Bologne - Aéroport Borgo Panigale-Guglielmo Marconi",
        "Brescia - Aéroport de Brescia",
        "Brindisi - Aéroport de Brindisi",
        "Cagliari - Aéroport de Cagliari-Elmas",
        "Catane – Aéroport de Catane-Fontanarossa",
        "Coni - Aéroport international de Coni",
        "Florence – Aéroport Peretola",
        "Gênes – Aéroport Christophe-Colomb",
        "Lamezia Terme - Aéroport de Lamezia Terme",
        "Milan – Aéroport Linate",
        "Milan – Aéroport Malpensa",
        "Naples – Aéroport Capodichino",
        "Olbia – Aéroport d'Olbia",
        "Palerme - Aéroport de Palerme",
        "Parme - Aéroport de Parme",
        "Pérouse – Aéroport de Pérouse-Sant'Egidio",
        "Pescara – Aéroport des Abruzzes",
        "Pise – Aéroport international Galileo-Galilei",
        "Reggio de Calabre - Aéroport de Reggio de Calabre",
        "Rimini – Aéroport Federico-Fellini",
        "Rome – Aéroport Ciampino-Giovan Battista Pastine",
        "Rome – Aéroport Fiumicino Léonard-de-Vinci",
        "Trapani – Aéroport de Trapani (Aéroport Vincenzo-Florio)",
        "Trévise - Aéroport de Trévise",
        "Trieste – Aéroport du Frioul-Vénétie julienne",
        "Turin – Aéroport Caselle-Sandro-Pertini",
        "Venise - Aéroport Marco Polo",
        "Vérone - Aéroport de Vérone"
    ],
    "Jamaïque": [
        "Kingston – Aéroport international Norman-Manley",
        "Montego Bay – Aéroport international Donald-Sangster"
    ],
    "Japon": [
        "Akita – Aéroport d'Akita",
        "Aomori – Aéroport d'Aomori",
        "Fukuoka – Aéroport de Fukuoka",
        "Hakodate- Aéroport de Hakodate",
        "Hiroshima - Aéroport de Hiroshima",
        "Ibaraki - Aéroport d'Ibaraki",
        "Kagoshima – Aéroport de Kagoshima",
        "Kitakyūshū – Aéroport de New Kitakyushu",
        "Komatsu – Aéroport de Komatsu",
        "Nagasaki – Aéroport de Nagasaki",
        "Nagoya – Aéroport international du Chūbu",
        "Naha - Aéroport de Naha",
        "Niigata – Aéroport de Niigata",
        "Ōita – Aéroport d'Ōita",
        "Okayama – Aéroport d'Okayama",
        "Osaka - Aéroport international d'Osaka (ou Osaka-Itame)",
        "Osaka – Aéroport international du Kansai",
        "Sapporo – Aéroport New Chitose",
        "Sendai – Aéroport de Sendai",
        "Shizuoka – Aéroport de Shizuoka",
        "Tokyo\\Yokohama – Aéroport Haneda",
        "Tokyo\\Yokohama – Aéroport Narita"
    ],
    "Jersey": [
        "Aéroport de Jersey"
    ],
    "Jordanie": [
        "Amman – Aéroport civil d'Amman",
        "Amman – Aéroport international Reine-Alia",
        "Aqaba – Aéroport international Roi-Hussein"
    ],
    "Kazakhstan": [
        "Aktaou - Aéroport d'Aktaou",
        "Almaty - Aéroport international d'Almaty",
        "Astana - Aéroport international d'Astana",
        "Atyraou - Aéroport d'Atyraou",
        "Chimkent - Aéroport international de Chimkent",
        "Karaganda - Aéroport de Sary-Arka",
        "Kostanaï - Aéroport de Kostanaï",
        "Ouralsk – Aéroport Ak Zhol d'Oural"
    ],
    "Kenya": [
        "Eldoret - Eldoret",
        "Kisumu - Aéroport de Kisumu",
        "Mombasa - Aéroport international Moi",
        "Nairobi - Aéroport international Jomo-Kenyatta"
    ],
    "Kirghizistan": [
        "Bishkek – Aéroport international de Manas",
        "Och - Aéroport d'Och"
    ],
    "Kiribati": [
        "Kiritimati – Aéroport international Cassidy",
        "Tarawa – Aéroport international de Bonriki"
    ],
    "Koweït": [
        "Aéroport international de Koweït"
    ],
    "Kosovo": [
        "Pristina - Aéroport international de Pristina"
    ],
    "La Réunion": [
        "Saint-Denis - Aéroport de La Réunion Roland-Garros",
        "Saint-Pierre - Aéroport de Pierrefonds"
    ],
    "Laos": [
        "Luang Prabang - Aéroport international de Luang Prabang",
        "Paksé - Aéroport de Paksé",
        "Vientiane – Aéroport international de Wattay"
    ],
    "Lesotho": [
        "Maseru - Aéroport international de Maseru"
    ],
    "Lettonie": [
        "Riga - Aéroport international de Riga",
        "Ventspils - Aéroport international de Ventspils"
    ],
    "Liban": [
        "Beyrouth - Aéroport international de Beyrouth - Rafic Hariri"
    ],
    "Libye": [
        "Benghazi – Aéroport international de Benina",
        "Misrata - Aéroport de Misrata",
        "Sebha - Aéroport international de Sebha",
        "Tripoli - Aéroport de Mitiga",
        "Tripoli - Aéroport international de Tripoli"
    ],
    "Lituanie": [
        "Kaunas - Aéroport de Kaunas",
        "Palanga - Aéroport international de Palanga",
        "Šiauliai - Aéroport international de Šiauliai",
        "Vilnius - Aéroport international de Vilnius"
    ],
    "Luxembourg": [
        "Luxembourg-ville – Aéroport Findel"
    ],
    "Macédoine du Nord": [
        "Ohrid - Aéroport Saint-Paul-l'Apôtre d'Ohrid",
        "Skopje - Aéroport international de Skopje"
    ],
    "Macao": [
        "Macao - Aéroport international de Macao"
    ],
    "Madagascar": [
        "Antananarivo - Aéroport international d'Ivato",
        "Antsiranana - Aérodrome d'Arrachart",
        "Mahajanga - Aérodrome d'Amborovy",
        "Nosy Be - Aéroport international de Fascene",
        "Toamasina - Aéroport de Toamasina",
        "Tôlanaro - Aérodrome de Fort-Dauphin",
        "Toliara - Aéroport de Toliara"
    ],
    "Malaisie": [
        "Aéroport international de Langkawi",
        "Aéroport international de Malacca",
        "Aéroport international de Penang",
        "Ipoh – Aéroport Sultan Azlan Shah",
        "Johor Bahru – Aéroport international de Senai",
        "Kota Kinabalu - Aéroport international de Kota Kinabalu",
        "Kuala Lumpur - Aéroport international de Kuala Lumpur",
        "Kuantan - Aéroport Sultan Haji Ahmad Shah",
        "Kuching - Aéroport international de Kuching",
        "Subang Jaya – Aéroport Sultan Abdul Aziz Shah"
    ],
    "Malawi": [
        "Blantyre - Aéroport international de Chileka",
        "Lilongwe - Aéroport international de Lilongwe"
    ],
    "Maldives": [
        "Aéroport international de Gan",
        "Malé - Aéroport international de Malé"
    ],
    "Mali": [
        "Bamako – Aéroport international de Bamako-Sénou"
    ],
    "Malte": [
        "Luqa – Aéroport international de Malte"
    ],
    "Man (Île de)": [
        // For harmonization, kept empty as "Île de Man" above suffices.
    ],
    "Maroc": [
        "Agadir - Aéroport d'Agadir-Al Massira",
        "Al Hoceïma - Aéroport Al Hoceima - Cherif-Al-Idrissi",
        "Casablanca – Aéroport Mohammed-V de Casablanca",
        "Essaouira - Aéroport d'Essaouira-Mogador",
        "Fès - Aéroport de Fès-Saïss",
        "Marrakech - Aéroport de Marrakech-Ménara",
        "Nador - Aéroport de Nador-Al Aroui",
        "Ouarzazate - Aéroport de Ouarzazate",
        "Oujda – Aéroport d'Oujda-Angads",
        "Rabat - Aéroport international de Rabat-Salé",
        "Tanger - Aéroport de Tanger-Ibn Battouta",
        "Tétouan – Aéroport Tétouan - Sania R'mel"
    ],
    "Maroc région du Sud": [
        "Dakhla – Aéroport de Dakhla",
        "Laâyoune – Aéroport international Laâyoune - Hassan Ier"
    ],
    "Martinique": [
        "Aéroport international Martinique Aimé Césaire"
    ],
    "Maurice": [
        "Plaine Magnien - Aéroport international Sir-Seewoosagur-Ramgoolam"
    ],
    "Mauritanie": [
        "Nouakchott - Aéroport international de Nouakchott-Oumtounsy"
    ],
    "Mayotte": [
        "Dzaoudzi - Aéroport de Dzaoudzi-Pamandzi"
    ],
    "Mexique": [
        "Acapulco – Aéroport international général Juan N. Álvarez",
        "Aguascalientes – Aéroport international Lic. Jesús Terán Peredo",
        "Cabo San Lucas - Aéroport international de Cabo San Lucas (en)",
        "Campeche - Aéroport international Ing. Alberto Acuña Ongay (en)",
        "Cancún - Aéroport international de Cancún",
        "Chihuahua – Aéroport international général Roberto Fierro Villalobos",
        "Ciudad del Carmen - Aéroport international de Ciudad del Carmen",
        "Cozumel - Aéroport international de Cozumel",
        "Culiacán - Aéroport international Federal de Bachigualato (en)",
        "Durango – Aéroport international General Guadalupe Victoria",
        "Guadalajara – Aéroport international Don Miguel Hidalgo y Costilla",
        "Huatulco – Aéroport international Bahías de Huatulco",
        "Ixtapa–Zihuatanejo – Aéroport international d'Ixtapa-Zihuatanejo",
        "León – Aéroport international Del Bajío",
        "Loreto - Aéroport international de Loreto",
        "Manzanillo – Aéroport international Playa de Oro",
        "Mazatlán – Aéroport international général Rafael Buelna",
        "Mérida – Aéroport international Manuel Crescencio Rejón (en)",
        "Mexico - Aéroport international de Mexico",
        "Monterrey – Aéroport international General Mariano Escobedo",
        "Morelia – Aéroport international General Francisco J. Mujica (en)",
        "Oaxaca – Aéroport international Xoxocotlán (en)",
        "Puebla – Aéroport international Hermanos Serdán",
        "Puerto Vallarta – Aéroport international Lic. Gustavo Díaz Ordaz",
        "Querétaro – Aéroport intercontinental de Querétaro",
        "Saltillo – Aéroport international Plan de Guadalupe (en)",
        "San José del Cabo – Aéroport international Los Cabos",
        "San Luis Potosí – Aéroport international de San Luis Potosí",
        "Tampico – Aéroport international General Francisco Javier Mina",
        "Tijuana - Aéroport international de Tijuana",
        "Toluca – Aéroport international Adolfo López Mateos",
        "Torreón – Aéroport international Francisco Sarabia",
        "Tuxtla Gutiérrez – Aéroport de Tuxtla Gutiérrez",
        "Veracruz – Aéroport international General Heriberto Jara (en)",
        "Villahermosa – Aéroport international Carlos Rovirosa Pérez (en)"
    ],
    "Micronésie": [
        "Aéroport international de Chuuk",
        "Aéroport international de Kosrae",
        "Aéroport international de Pohnpei",
        "Aéroport international de Yap"
    ],
    "Moldavie": [
        "Chișinău - Aéroport international de Chișinău"
    ],
    "Monaco": [
        // No data found
    ],
    "Mongolie": [
        "Oulan-Bator – Aéroport international Gengis Khan"
    ],
    "Montserrat": [
        "Gerald's – Aéroport John A. Osborne"
    ],
    "Mozambique": [
        "Beira - Aéroport de Beira",
        "Inhambane - Aérodrome d'Inhambane",
        "Maputo - Aéroport international de Maputo",
        "Nampula - Aérodrome de Nampula",
        "Pemba - Pemba, Mozambique",
        "Tete - Aéroport de Chingozi",
        "Vilanculos - Aéroport de Vilankulo"
    ],
    "Nauru": [
        "Yaren – Aéroport international de Nauru"
    ],
    "Népal": [
        "Katmandou – Aéroport international Tribhuvan"
    ],
    "Nicaragua": [
        "Bluefields - Aéroport de Bluefields (en)",
        "Îles du Maïs - Aéroport de Corn Island (en)",
        "Managua – Aéroport international de Managua",
        "Puerto Cabezas - Aéroport de Puerto Cabezas (en)"
    ],
    "Niger": [
        "Niamey – Aéroport international Diori Hamani"
    ],
    "Nigeria": [
        "Abuja – Aéroport international Nnamdi Azikiwe",
        "Kano – Aéroport international Mallam Aminu Kano",
        "Lagos – Aéroport international Murtala-Muhammed",
        "Port Harcourt - Aéroport international de Port Harcourt"
    ],
    "Niue": [
        "Nieu – Aéroport international de Niue"
    ],
    "Norvège": [
        "Bergen - Aéroport de Bergen",
        "Haugesund - Aéroport de Haugesund",
        "Oslo – Aéroport Sandefjord",
        "Oslo - Aéroport Gardermoen",
        "Oslo/Rygge - Aéroport d'Oslo-Rygge (Aéroport Moss/Rygge)",
        "Stavanger - Aéroport de Stavanger",
        "Tromsø - Aéroport de Tromsø",
        "Trondheim - Aéroport de Trondheim Værnes"
    ],
    "Nouvelle-Calédonie": [
        "Nouméa – Aéroport international de Nouméa - La Tontouta"
    ],
    "Nouvelle-Zélande": [
        "Auckland - Aéroport d'Auckland",
        "Christchurch - Aéroport international de Christchurch",
        "Dunedin - Aéroport international de Dunedin",
        "Hamilton – Aérodrome de Hamilton",
        "Queenstown – Aéroport international de Queenstown",
        "Rotorua - Aéroport international de Rotorua",
        "Wellington - Aéroport international de Wellington"
    ],
    "Oman": [
        "Mascate – Aéroport international de Mascate",
        "Salalah - Aéroport de Salalah"
    ],
    "Ouganda": [
        "Entebbe - Aéroport international d'Entebbe"
    ],
    "Ouzbékistan": [
        "Boukhara - Aéroport de Boukhara",
        "Namangan - Aéroport de Namangan (en)",
        "Samarcande - Aéroport de Samarcande",
        "Tachkent - Aéroport international de Tachkent"
    ],
    "Pakistan": [
        "Bahawalpur - Aéroport international de Bahawalpur",
        "Dera Ghazi Khan - Aéroport international de Dera Ghazi Khan",
        "Faisalabad - Aéroport international de Faisalabad",
        "Gwadar - Aéroport international de Gwadar",
        "Hyderabad - Aéroport international de Hyderabad",
        "Islamabad - Aéroport international Gandhara (En construction)",
        "Islamabad – Aéroport international Benazir Bhutto",
        "Karachi – Aéroport international Jinnah",
        "Lahore – Aéroport international Allama Iqbal",
        "Multan - Aéroport international de Multan",
        "Peshawar – Aéroport international de Peshawar",
        "Quetta - Aéroport international de Quetta",
        "Rahim Yar Khan – Aéroport international Shaikh Zayed",
        "Sialkot - Aéroport international de Sialkot",
        "Turbat - Aéroport international de Turbat"
    ],
    "Palaos": [
        // Not found, but "Palau" below
    ],
    "Palau": [
        "Koror – Aéroport international Roman-Tmetuchl"
    ],
    "Panama": [
        "Bocas del Toro – Aéroport international Bocas del Toro \"Isla Colón\"",
        "David – Aéroport de David",
        "Panama – Aéroport international de Tocumen"
    ],
    "Papouasie-Nouvelle-Guinée": [
        "Port Moresby – Aéroport international Jacksons"
    ],
    "Paraguay": [
        "Asuncion – Aéroport international Silvio Pettirossi",
        "Ciudad del Este – Aéroport international Guaraní"
    ],
    "Pays-Bas": [
        "Amsterdam – Aéroport Schiphol",
        "Eindhoven - Aéroport d'Eindhoven",
        "Groningue – Aéroport Groningue-Eelde",
        "Maastricht - Aéroport Maastricht-Aix-la-Chapelle",
        "Rotterdam - Aéroport Rotterdam-La Haye"
    ],
    "Philippines": [
        "Ángeles – Aéroport international de Clark",
        "Bacolod - Aéroport international Bacolod-Silay",
        "Cagayán de Oro - Aéroport international de Laguindingan",
        "Cebu – Aéroport international de Mactan-Cebu",
        "Davao – Aéroport international Francisco Bangoy",
        "General Santos - Aéroport international de General Santos",
        "Iloilo - Aéroport international d'Iloilo",
        "Kalibo - Aéroport international de Kalibo",
        "Laoag – Aéroport international de Laoag",
        "Legazpi - Aéroport international de Legazpi City",
        "Manille – Aéroport international Ninoy Aquino",
        "Olongapo - Aéroport international de Subic Bay",
        "Puerto Princesa - Aéroport international de Puerto Princesa",
        "Zamboanga – Aéroport international de Zamboanga"
    ],
    "Pologne": [
        "Bydgoszcz - Aéroport Ignacy Jan Paderewski",
        "Cracovie – Aéroport de Cracovie-Jean-Paul II",
        "Gdańsk - Aéroport Lech Wałęsa de Gdańsk",
        "Katowice - Aéroport de Katowice-Pyrzowice",
        "Łódź - Aéroport Władysław Reymont de Łódź",
        "Lublin - Aéroport de Lublin",
        "Poznań - Aéroport Henryk-Wieniawski de Poznań",
        "Rzeszów - Aéroport de Rzeszów",
        "Szczecin - Aéroport Solidarité de Stettin-Goleniów",
        "Varsovie - Aéroport de Mazovie Varsovie-Modlin",
        "Varsovie - Aéroport de Varsovie-Chopin",
        "Wrocław – Aéroport de Wroclaw-Nicolas Copernic"
    ],
    "Polynésie française": [
        "Papeete – Aéroport international de Tahiti Fa'a'ā"
    ],
    "Portugal": [
        "Faro – Aéroport de Faro",
        "Funchal – Aéroport de Funchal",
        "Lisbonne – Aéroport Portela",
        "Ponta Delgada – Aéroport João Paulo II",
        "Porto – Aéroport Francisco Sá-Carneiro",
        "Porto Santo – Aéroport de Porto Santo",
        "Terceira – Base aérienne de Lajes"
    ],
    "Porto Rico": [
        "Aguadilla – Aéroport Rafael Hernández",
        "San Juan – Aéroport international Luis Muñoz Marín"
    ],
    "Qatar": [
        "Doha - Aéroport international Hamad (Remplace l'Aéroport international de Doha)"
    ],
    "République de Chine": [
        "Kaohsiung- Aéroport international de Kaohsiung",
        "Taichung - Aéroport de Taichung",
        "Taipei - Aéroport de Taipei Songshan",
        "Taipei – Aéroport international Taiwan Taoyuan"
    ],
    "République démocratique du Congo": [
        "Bipemba - Aéroport de Mbujimayi",
        "Goma - Aéroport international de Gomach",
        "Kinshasa - Aéroport international de Ndjili",
        "Kisangani - Aéroport international de Bangoka",
        "Lubumbashi - Aéroport international de Lubumbashi"
    ],
    "République dominicaine": [
        "Barahona – Aéroport international María-Montez",
        "La Romana – Aéroport international Casa de Campo",
        "Punta Cana - Aéroport international de Punta Cana",
        "Samana – Aéroport international El Catey",
        "San Felipe de Puerto Plata – Aéroport international Gregorio Luperón",
        "Santiago de los Caballeros – Aéroport international du Cibao",
        "Saint-Domingue – Aéroport international Las Américas"
    ],
    "République du Congo": [
        "Brazzaville - Aéroport international Maya-Maya",
        "Pointe-Noire - Aéroport international Agostinho-Neto"
    ],
    "République populaire de Chine": [
        "Canton - Aéroport Baiyun",
        "Changchun - Aéroport international de Changchun Longjia",
        "Changsha - Aéroport international de Changsha Huanghua",
        "Chengdu - Aéroport international de Chengdu-Shuangliu",
        "Chongqing - Aéroport international de Chongqing Jiangbei",
        "Dalian - Aéroport international de Dalian Zhoushuizi",
        "Fuzhou - Aéroport international de Fuzhou Changle",
        "Guilin - Aéroport international de Guilin Liangjiang",
        "Guiyang - Aéroport international de Guiyang Longdongbao",
        "Haikou - Aéroport international de Haikou Meilan",
        "Hangzhou - Aéroport international de Hangzhou Xiaoshan",
        "Harbin- Aéroport international de Harbin Taiping",
        "Hefei - Aéroport international de Hefei Xinqiao",
        "Hohhot - Aéroport international de Hohhot Baita",
        "Huangshan - Aéroport international de Huangshan Tunxi",
        "Jieyang - Aéroport international de Jieyang Chaoshan",
        "Jinan - Aéroport international de Jinan Yaoqiang",
        "Kunming - Aéroport international de Kunming Changshui (remplace Kunming-Wujiaba)",
        "Lanzhou - Aéroport de Lanzhou Zhongchuan",
        "Lhassa - Aéroport de Lhassa Gonggar",
        "Mudanjiang - Aéroport international de Mudanjiang Hailang",
        "Nanchang - Aéroport international de Nanchang Changbei",
        "Nankin - Aéroport international de Nankin Lukou",
        "Nanning - Aéroport international de Nanning Wuxu",
        "Ningbo - Aéroport international de Ningbo Lishe",
        "Pékin - Aéroport international de Pékin",
        "Qingdao - Aéroport international de Qingdao Liuting",
        "Quanzhou - Aéroport international de Quanzhou Jinjiang",
        "Sanya - Aéroport international de Sanya Phoenix",
        "Shanghai - Aéroport international de Shanghai Hongqiao",
        "Shanghai - Aéroport international de Shanghai Pudong",
        "Shenyang - Aéroport international de Shenyang Taoxian",
        "Shenzen - Aéroport international de Shenzhen Bao'an",
        "Shijiazhuang - Aéroport international de Shijiazhuang Zhengding",
        "Taiyuan - Aéroport international de Taiyuan Wusu",
        "Tianjin - Aéroport international de Tianjin Binhai",
        "Ürümqi - Aéroport international d'Ürümqi Diwopu",
        "Weihai - Aéroport international de Wēihǎi Dàshuǐbó",
        "Wenzhou - Aéroport international de Wenzhou Longwan",
        "Wuhan - Aéroport international de Wuhan Tianhe",
        "Wuxi - Aéroport international de Sunan Shuofang",
        "Xiamen - Aéroport international de Xiàmén Gāoqí",
        "Xi'an - Aéroport international de Xi'an Xianyang",
        "Yanji - Aéroport de Yanji Chaoyangchuan",
        "Yantai - Aéroport international de Yantai Laishan",
        "Zhengzhou - Aéroport international de Zhengzhou Xinzheng"
    ],
    "République tchèque": [
        "Brno - Aéroport de Brno",
        "Karlovy Vary - Aéroport de Karlovy Vary",
        "Ostrava – Aéroport Leoš Janáček",
        "Pardubice - Aéroport de Pardubice (en)",
        "Prague – Aéroport de Prague-Václav-Havel"
    ],
    "Royaume-Uni (Angleterre/UK)": [
        "Aberdeen - Aéroport d'Aberdeen",
        "Belfast - Aéroport international de Belfast",
        "Belfast - George Best City Airport",
        "Birmingham - Aéroport international de Birmingham",
        "Bournemouth - Aéroport de Bournemouth",
        "Bristol - Aéroport de Bristol",
        "Cardiff - Aéroport de Cardiff",
        "Derby/Leicester/Nottingham - Aéroport d'East Midlands",
        "Derry - Aéroport de Derry",
        "Doncaster - Aéroport de Doncaster-Sheffield Robin Hood",
        "Durham - Aéroport de Durham Tees Valley",
        "Édimbourg - Aéroport d’Édimbourg",
        "Exeter - Aéroport international d'Exeter",
        "Glasgow - Aéroport international de Glasgow",
        "Glasgow - Aéroport Prestwick",
        "Inverness - Aéroport d'Inverness",
        "Leeds/Bradford – Aéroport international de Leeds-Bradford",
        "Liverpool - Aéroport John-Lennon",
        "Londres – Aéroport City",
        "Londres – Aéroport Gatwick",
        "Londres – Aéroport Heathrow",
        "Londres – Aéroport Luton",
        "Londres – Aéroport Stansted",
        "Londres - Aéroport Southend",
        "Manchester – Aéroport de Manchester",
        "Newcastle upon Tyne – Aéroport international de Newcastle",
        "Newquay - Aéroport de Newquay Cornwall",
        "Norwich - Aéroport international de Norwich",
        "Southampton - Aéroport de Southampton"
    ],
    "Russie": [
        "Abakan – Aéroport international d'Abakan",
        "Anadyr – Aéroport d'Ougolny",
        "Anapa – Aéroport d'Anapa",
        "Arkhangelsk – Aéroport Talagi",
        "Astrakhan – Aéroport Narimanovo",
        "Barnaoul – Aéroport de Barnaoul",
        "Belgorod – Aéroport international de Belgorod",
        "Blagovechtchensk – Aéroport d'Ignatyevo",
        "Bratsk – Aéroport de Bratsk",
        "Briansk – Aéroport international de Briansk",
        "Elista – Aéroport d'Elista",
        "Grozny – Aéroport de Grozny",
        "Iakoutsk – Aéroport de Iakoutsk",
        "Iekaterinbourg – Aéroport Koltsovo",
        "Ioujno-Sakhalinsk – Aéroport de Ioujno-Sakhalinsk",
        "Irkoutsk– Aéroport international d'Irkoutsk",
        "Kaliningrad – Aéroport Khrabrovo",
        "Kazan – Aéroport international de Kazan",
        "Kemerovo – Aéroport international de Kemerovo",
        "Khabarovsk – Aéroport de Khabarovsk",
        "Khanty-Mansiïsk – Aéroport de Khanty-Mansiïsk (en)",
        "Komsomolsk-sur-l'Amour – Aéroport de Komsomolsk-sur-l'Amour (en)",
        "Koursk – Aéroport de Kursk Vostochny (en)",
        "Krasnodar – Aéroport international de Krasnodar (Aéroport Pashkovsky)",
        "Krasnoïarsk – Aéroport international Yemelyanovo",
        "Magadan – Aéroport de Sokol (en)",
        "Magnitogorsk – Aéroport international de Magnitogorsk",
        "Makhatchkala – Aéroport de Makhatchkala",
        "Mineralnye Vody – Aéroport de Mineralnye Vody",
        "Moscou – Aéroport International Domodedovo",
        "Moscou – Aéroport International Ostafyevo (en)",
        "Moscou – Aéroport de Moscou-Cheremetievo",
        "Moscou – Aéroport de Moscou-Ramenskoïé/Jukovski",
        "Moscou – Aéroport international de Vnoukovo",
        "Mourmansk – Aéroport de Mourmansk",
        "Naltchik – Aéroport de Nalchik (en)",
        "Nijnevartovsk – Aéroport de Nijnevartovsk (en)",
        "Nijnekamsk – Aéroport Begishevo",
        "Nijni Novgorod – Aéroport international de Nijni Novgorod (Ou aéroport Strigino)",
        "Novokouznetsk – Aéroport Spichenkovo (en)",
        "Novossibirsk – Aéroport Tolmachevo",
        "Omsk – Aéroport d'Omsk",
        "Orenburg – Aéroport d'Orenbourg Tsentralni",
        "Orsk – Aérodrome d'Orsk",
        "Oufa - Aéroport international d'Oufa",
        "Oulan-Oude – Aéroport international Baïkal",
        "Oulianovsk – Aéroport d'Oulianovsk Vostochny (en)",
        "Perm – Aéroport international de Perm",
        "Petropavlovsk-Kamtchatski – Aéroport de Petropavlovsk-Kamtchatski",
        "Petrozavodsk – Aéroport de Petrozavodsk",
        "Providenia – Aéroport de Provideniya Bay (en)",
        "Pskov – Aéroport de Pskov (en)",
        "Rostov-sur-le-Don – Aéroport de Rostov-sur-le-Don",
        "Saint-Pétersbourg – Aéroport international Pulkovo",
        "Samara – Aéroport international de Samara (Kouroumotch)",
        "Saratov – Aéroport de Saratov",
        "Sébastopol - Aéroport international de Sébastopol",
        "Simferopol - Aéroport international de Simferopol",
        "Sotchi - Aéroport international de Sotchi",
        "Sourgout – Aéroport de Sourgout",
        "Stavropol – Aéroport de Stavropol Shpakovskoye (en)",
        "Syktyvkar – Aéroport de Syktyvkar (en)",
        "Tcheboksary – Aéroport de Tcheboksary (en)",
        "Tcheliabinsk – Aéroport de Tcheliabinsk",
        "Tcherepovets – Aéroport de Tcherepovets (en)",
        "Tchita – Aéroport de Kadala (en)",
        "Tioumen – Aéroport international Roshchino",
        "Tomsk – Aéroport de Bogashevo",
        "Vladikavkaz – Aéroport de Beslan (en)",
        "Vladivostok - Aéroport international de Vladivostok",
        "Volgograd – Aéroport de Volgograd",
        "Voronej – Aéroport international de Voronej (en)",
        "Yaroslavl – Aéroport Tounochna"
    ],
    "Rwanda": [
        "Bugesera - Aéroport international de Bugesera (en construction)",
        "Kigali - Aéroport de Kigali"
    ],
    "Saint-Barthélemy": [
        "Aéroport de Saint-Jean-Gustave III"
    ],
    "Saint-Christophe-et-Niévès": [
        "Saint-Christophe – Aéroport international Robert L. Bradshaw"
    ],
    "Sainte-Lucie": [
        "Vieux-Fort – Aéroport international d'Hewanorra"
    ],
    "Saint-Martin": [
        "Aéroport de Grand-Case Espérance",
        "Aéroport international Princess Juliana (Partie hollandaise)"
    ],
    "Saint-Pierre-et-Miquelon": [
        "Saint-Pierre – Aéroport de Saint-Pierre Pointe-Blanche"
    ],
    "Saint-Vincent-et-les-Grenadines": [
        "Canouan - Aéroport de Canouan (en)",
        "Kingstown – Aéroport E. T. Joshua (en)"
    ],
    "Salvador": [
        "San Salvador – Aéroport international de San Salvador"
    ],
    "Samoa": [
        "Apia – Aéroport international Faleolo"
    ],
    "Sao Tomé et Príncipe": [
        "São Tomé - Aéroport international de Sao Tomé"
    ],
    "Sénégal": [
        "Dakar - Aéroport international Blaise-Diagne",
        "Dakar – Aéroport international Léopold-Sédar-Senghor"
    ],
    "Serbie": [
        "Belgrade - Aéroport Nikola-Tesla de Belgrade",
        "Niš - Aéroport Constantin-le-Grand de Niš"
    ],
    "Seychelles": [
        "Victoria - Aéroport international des Seychelles"
    ],
    "Sierra Leone": [
        "Freetown – Aéroport international de Lungi"
    ],
    "Singapour": [
        "Aéroport de Singapour Changi"
    ],
    "Slovaquie": [
        "Bratislava – Aéroport M. R. Štefánik",
        "Košice - Aéroport international de Košice",
        "Žilina - Aéroport de Žilina"
    ],
    "Slovénie": [
        "Ljubljana - Aéroport Jože Pučnik de Ljubljana",
        "Portorož - Aéroport de Portorož"
    ],
    "Somalie": [
        "Bosasso - Aéroport international Bender Qassim",
        "Gaal Kacyo - Aéroport international Abdullahi Yusuf",
        "Garowe - Aéroport international de Garowe",
        "Hargeisa - Aéroport d'Hargeisa",
        "Kismayo - Aéroport de Kismayo",
        "Mogadiscio - Aéroport international de Mogadiscio",
        ""
    ],
    "Soudan": [
        "Khartoum - Aéroport international de Khartoum",
        "Port-Soudan - Aéroport de Port-Soudan"
    ],
    "Soudan du Sud": [
        "Djouba - Aéroport international de Djouba"
    ],
    "Sri Lanka": [
        "Colombo – Aéroport international Bandaranaike",
        "Hambantota - Aéroport Mattala Rajapaksa de Hambantota"
    ],
    "Suède": [
        "Göteborg - Aéroport de Göteborg-City",
        "Göteborg - Aéroport de Göteborg-Landvetter",
        "Helsingborg - Aéroport d'Ängelholm–Helsingborg",
        "Luleå - Aéroport de Luleå",
        "Malmö - Aéroport de Malmö",
        "Norrköping - Aéroport de Norrköping",
        "Stockholm - Aéroport de Stockholm-Arlanda",
        "Stockholm - Aéroport de Stockholm-Bromma",
        "Stockholm - Aéroport de Stockholm-Skavsta",
        "Stockholm - Aéroport de Stockholm-Västerås",
        "Umeå - Aéroport de Umeå",
        "Växjö - Aéroport de Växjö",
        "Visby - Aéroport de Visby",
        "Åre/Östersund - Aéroport d'Åre Östersund"
    ],
    "Suisse": [
        "Bâle - Aéroport international de Bâle-Mulhouse-Fribourg",
        "Berne - Aéroport international de Berne",
        "Genève - Aéroport international de Genève",
        "Lugano - Aéroport de Lugano",
        "Saint-Gall - Aéroport international Saint-Gall-Altenrhein",
        "Sion - Aéroport de Sion",
        "Zurich - Aéroport international de Zurich"
    ],
    "Suriname": [
        "Paramaribo – Aéroport international Johan Adolf Pengel"
    ],
    "Swaziland": [
        "Manzini - Aéroport de Matsapha"
    ],
    "Syrie": [
        "Alep - Aéroport international d'Alep",
        "Damas - Aéroport international de Damas",
        "Lattaquié – Aéroport international Bassel Al-Assad"
    ],
    "Tadjikistan": [
        "Douchanbé - Aéroport international de Douchanbé",
        "Khodjent - Aéroport international de Khodjent",
        "Qurghonteppa - Aéroport international de Qurghonteppa"
    ],
    "Tanzanie": [
        "Arusha et Moshi - Aéroport international du Kilimandjaro",
        "Dar es Salam - Aéroport international Julius-Nyerere",
        "Unguja/Zanzibar - Zanzibar"
    ],
    "Tchad": [
        "N'Djaména - Aéroport international de Ndjamena"
    ],
    "Thaïlande": [
        "Bangkok - Aéroport international Don Muang",
        "Bangkok – Aéroport Suvarnabhumi de Bangkok",
        "Chiang Mai - Aéroport international de Chiang Mai",
        "Chiang Rai – Aéroport international Mae Fah Luang",
        "Hat Yai - Aéroport international de Hat Yai",
        "Ko Samui - Aéroport international de Ko Samui",
        "Krabi - Aéroport de Krabi",
        "Phuket – Aéroport international de Phuket",
        "Rayong/Pattaya - Aéroport de Pattaya-U-Tapao",
        "Surat Thani – Aéroport de Surat Thani",
        "Udon Thani – Aéroport international d'Udon Thani"
    ],
    "Timor Oriental": [
        "Dili – Aéroport international de Dili"
    ],
    "Togo": [
        "Lomé – Aéroport international de Lomé-Tokoin",
        "Niamtougou – Aéroport international de Niamtougou"
    ],
    "Tonga": [
        "Nukuʻalofa – Aéroport international Fuaʻamotu"
    ],
    "Trinité-et-Tobago": [
        "Port-d'Espagne – Aéroport de Piarco",
        "Tobago – Aéroport international Arthur Napoleon Raymond Robinson (anciennement Aéroport international Crown Pointt)"
    ],
    "Tunisie": [
        "Djerba – Aéroport international de Djerba-Zarzis",
        "Enfida – Aéroport international d'Enfidha-Hammamet",
        "Gafsa - Aéroport international de Gafsa-Ksar",
        "Monastir – Aéroport international de Monastir Habib-Bourguiba",
        "Sfax - Aéroport international de Sfax-Thyna",
        "Tabarka - Aéroport international de Tabarka-Aïn Draham (anc. aéroport du 7 novembre)",
        "Tozeur et Nefta - Aéroport international de Tozeur-Nefta",
        "Tunis - Aéroport international de Tunis-Carthage"
    ],
    "Turkménistan": [
        "Achgabat - Aéroport d'Achgabat"
    ],
    "Turquie": [
        "Adana – Aéroport international d'Adana-Sakirpasa",
        "Ankara – Aéroport international Esenboğa",
        "Antalya - Aéroport d'Antalya",
        "Antioche - Aéroport d'Hatay",
        "Bodrum – Aéroport de Bodrum-Milas",
        "Bursa – Aéroport de Yenişehir",
        "Dalaman - Aéroport de Dalaman",
        "Gaziantep – Aéroport international de Gaziantep-Oğuzeli",
        "Istanbul – Aéroport international Atatürk",
        "Istanbul – Aéroport international Sabiha Gökçen",
        "İzmir – Aéroport Adnan-Menderes",
        "Kayseri – Aéroport international de Kayseri-Erkilet",
        "Konya - Aéroport de Konya",
        "Kütahya - Aéroport de Zafer (en)",
        "Malatya – Aéroport Erhaç (en)",
        "Nevşehir – Aéroport de Nevşehir-Cappadoce",
        "Samsun - Aéroport de Samsun-Çarşamba",
        "Trabzon - Aéroport de Trabzon",
        "Zonguldak - Aéroport de Zonguldak (en)"
    ],
    "Tuvalu": [
        "Funafuti - Aéroport international de Funafuti"
    ],
    "Ukraine": [
        "Dnipropetrovsk - Aéroport international de Dnipro",
        "Donetsk - Aéroport international de Donetsk",
        "Ivano-Frankivsk - Aéroport international d'Ivano-Frankivsk",
        "Kharkiv - Aéroport international de Kharkiv",
        "Kiev - Aéroport de Hostomel (Cargo)",
        "Kiev - Aéroport de Kiev-Boryspil",
        "Kiev - Aéroport international de Kiev (Kiev-Jouliani)",
        "Kryvyï Rih - Aéroport de Kryvy Rih",
        "Louhansk - Aéroport international de Louhansk",
        "Lviv - Aéroport international de Lviv",
        "Mykolaïv - Aéroport international de Mykolaiv",
        "Odessa - Aéroport international d'Odessa",
        "Odessa - Aéroport international Lymanske (en)",
        "Tchernivtsi - Aéroport international de Tchernivtsi",
        "Zaporijia - Aéroport international de Zaporijjia"
    ],
    "Uruguay": [
        "Montevideo – Aéroport international de Carrasco",
        "Punta del Este – Aéroport international Capitan Corbeta CA Curbelo (en)"
    ],
    "Vanuatu": [
        "Port Vila – Aéroport international Bauerfield"
    ],
    "Venezuela": [
        "Caracas – Aéroport international Maiquetía - Simón Bolívar",
        "Maracaibo – Aéroport international La Chinita",
        "Valencia – Aéroport international Arturo Michelena"
    ],
    "Vietnam": [
        "Cần Thơ - Aéroport international de Cần Thơ",
        "Đà Nẵng - Aéroport international de Đà Nẵng",
        "Hai Phong - Aéroport de Cat Bi",
        "Hanoi – Aéroport international de Nội Bài",
        "Ho Chi Minh Ville – Aéroport international de Tân Sơn Nhất",
        "Hué - Aéroport international de Phú Bài",
        "Khanh Hoa - Aéroport de Cam Ranh",
        "Phú Quốc - Aéroport international de Phú Quốc",
        "Quang Nam - Aéroport de Chu Lai"
    ],
    "Wallis-et-Futuna": [
        "Futuna – Aérodrome de Futuna Pointe Vele",
        "Wallis – Aéroport de Wallis-Hihifo"
    ],
    "Yémen": [
        "Aden - Aéroport d'Aden",
        "Sanaa - Aéroport international El Rahaba"
    ],
    "Zambie": [
        "Livingstone - Aéroport Harry Mwanga Nkumbula de Livingstone",
        "Lusaka - Aéroport international de Lusaka",
        "Ndola - Aéroport Simon Mwansa Kapwepwe"
    ],
    "Zimbabwe": [
        "Bulawayo - Aéroport international de Joshua Mqabuko Nkomo",
        "Harare - Aéroport international d'Harare",
        "Victoria Falls - Aéroport de Victoria Falls",
        ""
    ]
};

// --- PORTS MARITIMES (Extraction : Liste des ports maritimes.txt) ---
export const SEAPORTS_BY_COUNTRY: Record<string, string[]> = {
    "Algérie": [
        "Alger",
        "Algérie",
        "Annaba",
        "Bejaia",
        "Mestghanem",
        "Oran",
        "Skikda"
    ],
    "American Samoa": [
        "Pago Pago Pago"
    ],
    "Angola": [
        "Cabinda",
        "Lobito",
        "Luanda",
        "Namibe",
        "Soyo"
    ],
    "Anguilla": [
        "Ladkrabang",
        "Road Bay",
        "Antigua-et-Barbuda",
        "Praia",
        "St. Johns"
    ],
    "Argentine": [
        "Bahia Blanca",
        "Buenos Aires",
        "Ensenada",
        "La Plata",
        "Mar del Plata",
        "Puerto Deseado",
        "Puerto Madryn",
        "Rio Grande",
        "Rosario",
        "San Lorenzo",
        "Ushuaia",
        "Zarate"
    ],
    "Aruba": [
        "Oranjestad"
    ],
    "Australie": [
        "Adélaïde",
        "Bell Bay",
        "Brisbane",
        "Broome",
        "Burnie",
        "Dampier",
        "Darwin",
        "Darwin",
        "Darwin (Nt)",
        "Fremantle",
        "Gladstone",
        "Gove",
        "Hobart",
        "Kingston",
        "Launceston",
        "Longreach Tasmanian",
        "Melbourn",
        "Melbourne",
        "Newcastle",
        "Perth",
        "Port Hedland",
        "Port Kembla",
        "Sydney",
        "Torres Strait",
        "Townsville",
        "Wyndham"
    ],
    "Autriche": [
        "Vienne",
        "Wels"
    ],
    "Azerbaïdjan": [
        "Bakou"
    ],
    "Bahamas": [
        "Port franc",
        "Nassau"
    ],
    "Bahrain": [
        "Bahreïn",
        "Manameh",
        "Mina Sulman"
    ],
    "Bangladesh": [
        "Chalna",
        "Chittagong",
        "Dhaka",
        "Mongla",
        "Mongla"
    ],
    "Barbade": [
        "Bridgetown"
    ],
    "Belgique": [
        "Anvers",
        "Bruxelles",
        "Ostende",
        "Zeebgrugge",
        "Belize",
        "Belize"
    ],
    "Bénin": [
        "Cotonou"
    ],
    "Bermudes": [
        "Hamilton"
    ],
    "Bolivie": [
        "San Pedro"
    ],
    "Brésil": [
        "Aratu",
        "Belem",
        "Fortaleza",
        "Imbituba",
        "Itajai",
        "Macapa",
        "Maceio",
        "Manaus",
        "Paranagua",
        "Pecem",
        "Porto Alegre",
        "Port Of Itaguai",
        "Recife",
        "Rio De Jan Eiro",
        "Rio Grande",
        "Salvador",
        "Santana",
        "Santos",
        "Sao Francisco",
        "Sao Sebastiao",
        "Sepetiba",
        "Sto. Tomas",
        "Suape",
        "Vila do Conde",
        "Vitoria"
    ],
    "Brunei Darussalam": [
        "Kuala Belait",
        "port de Muara"
    ],
    "Bulgarie": [
        "Burgas",
        "Sofia",
        "Varna"
    ],
    "Burmese": [
        "Rangoon"
    ],
    "Cambodge": [
        "Kampong Saom",
        "Phnom Penh",
        "Sihanoukville"
    ],
    "Cameroun": [
        "Douala",
        "Kribi"
    ],
    "Canada": [
        "Argentia",
        "Calgary",
        "Crofton",
        "Baie Duncan",
        "Edmonton",
        "Georgetown",
        "Halifax",
        "Hull",
        "Kingston",
        "Montréal",
        "Prince Rupert",
        "Roberts Bank",
        "Saskatoon",
        "Shelburne",
        "Squamish",
        "Toronto",
        "Vancouver et Winnipeg"
    ],
    "Cap-Vert (Îles)": [
        "Porto Grande",
        "Praia"
    ],
    "Îles Caïmans": [
        "Georgetown"
    ],
    "République Centrafricaine": [
        "Nola"
    ],
    "Chili": [
        "Antofagasta",
        "Arica",
        "Bahia Posesion",
        "Caldera",
        "Caleta Barquito",
        "Coquimbo",
        "Île de Pâques",
        "Iquique",
        "Lirquen",
        "Mejillones",
        "Puerto Chacabuco",
        "Puerto Montt",
        "Puerto Natales",
        "Punta Arenas",
        "Punta Patache",
        "San Antonio",
        "San Vicente",
        "San Vicente-Cap",
        "Talcahuano",
        "Tocopilla",
        "Valparaiso"
    ],
    "Chine": [
        "Anqing",
        "Bayuquan",
        "Beihai",
        "Beijiao",
        "Bengbu",
        "Buji",
        "Changsha",
        "Changshu",
        "Changzhou",
        "Chengdu",
        "Chenglingji",
        "Chiwan",
        "Chongqing",
        "Dagang",
        "Dalian",
        "Dandong",
        "Dianbai",
        "Dongguan",
        "Dongwan",
        "Doumen",
        "Fangcheng",
        "Fangcheng Gezu Zizhixian",
        "Fangcun",
        "Foshan",
        "Fushan",
        "Fuyang",
        "Fuzhou",
        "Ganzhou",
        "Gaoming",
        "Guangzhou",
        "Guigang",
        "Gui Gang",
        "Haikou",
        "Haimen",
        "Hangzhou",
        "Harbin",
        "Hefei",
        "Hengyang",
        "Heshan",
        "Hong Kong",
        "Huadu",
        "Hua Du",
        "Huaibei",
        "Huangpu",
        "Huangshi",
        "Huizhou",
        "Huzhou",
        "Jambi",
        "Jiangmen",
        "Jiangyin",
        "Jiao Xin",
        "Jinan",
        "Jingdezhen",
        "Jinhua",
        "Jinzhou",
        "Jiujiang",
        "Kaiping",
        "Kunming",
        "Kunshan",
        "Lanshi",
        "Lanzhou",
        "Leliu",
        "Lian Hua Shan",
        "Lianyungang",
        "Liaoyang",
        "Linjiang",
        "Linyi",
        "Liudu",
        "Liuzhou",
        "Longkou",
        "Maanshan",
        "Machong",
        "Maoming",
        "Mawan",
        "Mawei",
        "Mianyang",
        "Mongla",
        "Nanchang",
        "Nangangang",
        "Nanhai",
        "Nanjing",
        "Nanning",
        "Nansha",
        "Nan Sha",
        "Nantong",
        "Ningbo",
        "Panyu",
        "Pinghu",
        "Putian",
        "Qingdao",
        "Qingyuan",
        "Qinhuangdao",
        "Quanzhou",
        "Rongqi",
        "Sanshan",
        "Sanshui",
        "Shanghai",
        "Shantou",
        "Shantou",
        "Shashi",
        "Shatian",
        "Shekou",
        "Shenwan",
        "Shenzhen",
        "Shimizu",
        "Shiqiao",
        "Shui Dong",
        "Shunde",
        "Suzhou",
        "Taian",
        "Taiping",
        "Taizhou",
        "Tianjin",
        "Tongling",
        "Wai Gao Qiao",
        "Wanzai",
        "Weihai",
        "Weitou",
        "Wenzhou",
        "Wuhan",
        "Wuhu",
        "Wuxi",
        "Wuzhou",
        "Xiamen",
        "Xiaogan",
        "Xiaolan",
        "Xiaoshan",
        "Xinfeng",
        "Xingang",
        "Xinhui",
        "Xuzhou",
        "Yangpu",
        "Yangzhou",
        "Yantai",
        "Yantian",
        "Yichang",
        "Yingkou",
        "Yunfu",
        "Zaozhuang",
        "Zhangjiagang",
        "Zhangzhou",
        "Zhanjiang",
        "Zhaoqing",
        "Zhengzhou",
        "Zhenjiang",
        "Zhongshan",
        "Zhai",
        "Zhuji",
        "Zhuozhou"
    ],
    "Colombie": [
        "Barranquilla",
        "Buenaventura",
        "Cartagena",
        "Santa Marta"
    ],
    "Comores": [
        "Mayotte",
        "Moroni",
        "Mutsamudu"
    ],
    "Congo": [
        "Pointe Noire"
    ],
    "Congo, Dem. Rép. de": [
        "Boma",
        "Matadi"
    ],
    "Costa Rica": [
        "Caldera",
        "Puerto Limon"
    ],
    "Côte d'Ivoire": [
        "Abidjan",
        "San Pedro"
    ],
    "Croatie": [
        "Dubrovnik",
        "Ploce",
        "Rijeka Bakar",
        "Split",
        "Zadar"
    ],
    "Cuba": [
        "La Havane",
        "Manzanillo",
        "Santa Lucia",
        "Santiago"
    ],
    "Chypre": [
        "Famagouste",
        "Larnaca",
        "Limassol"
    ],
    "République Tchèque": [
        "Prague",
        "Rudna"
    ],
    "Danemark": [
        "Aahus",
        "Aalborg",
        "Aarhus",
        "Brabrand",
        "Brondby",
        "Copenhague",
        "Esbjerg",
        "Fredericia",
        "Frederiksberg",
        "Frederikshavn",
        "Grenaa",
        "Grindsted",
        "Havdrup",
        "Kastrup",
        "Kobenhavn",
        "Odense",
        "Uldum",
        "Viborg",
        "Djibouti",
        "Djibouti"
    ],
    "Dominique": [
        "Portsmouth",
        "Roseau"
    ],
    "République Dominicaine": [
        "Boca Chica",
        "Caucedo",
        "Manzanillo",
        "Puerto Plata",
        "Rio Haina",
        "Santo Domingo"
    ],
    "Équateur": [
        "Esmeraldas",
        "Guayaquil",
        "Manta",
        "San Lorenzo"
    ],
    "Égypte": [
        "Ain Sukhna",
        "Alexandria",
        "Alexandria El Dekheila",
        "Damietta",
        "El Dekheila",
        "El Iskandariya (Alexandria)",
        "Port Rashid",
        "Port Said",
        "Sokhna",
        "Suez Canal"
    ],
    "Salvador": [
        "Acajutla",
        "San Salvador'"
    ],
    "Guinée équatoriale": [
        "Bata",
        "Luba",
        "Malabo"
    ],
    "Erythrée": [
        "Massawa"
    ],
    "Estonie": [
        "Paldiski-Port de Tallinn",
        "Tallinn"
    ],
    "Éthiopie": [
        "Assab"
    ],
    "Îles Féroé": [
        "Klaksvik",
        "Thorshavn"
    ],
    "Fidji (Îles Fidji)": [
        "Lautoka",
        "Suva"
    ],
    "Finlande": [
        "Bar",
        "Hamina",
        "Hanko",
        "Helsinki",
        "Kemi",
        "Kotka",
        "Kouvola",
        "Maentyluoto",
        "Mantyluoto",
        "Oulu",
        "Rauma",
        "Turku"
    ],
    "France": [
        "Bassens",
        "Bordeaux",
        "Brest",
        "Dunkerque",
        "Floroe",
        "Fos Sur Mer",
        "La Pallice",
        "La Rochelle-Pallice",
        "Le Havre",
        "Le Verdon",
        "Lyon",
        "Marseille",
        "Montoir De Bretagne",
        "Rouen",
        "Sete"
    ],
    "Guyane française": [
        "Cayenne",
        "Degrad des Cannes"
    ],
    "Polynésie Française": [
        "Papeete",
        "Pipavav"
    ],
    "Gabon": [
        "Libreville",
        "Mayumba",
        "Port Gentil"
    ],
    "Gambie": [
        "Banjul"
    ],
    "Géorgie": [
        "Poti"
    ],
    "Allemagne": [
        "Bonn",
        "Brême",
        "Bremerhaven",
        "Cologne",
        "Cuxhaven",
        "Duisburg",
        "Düsseldorf",
        "Gersheim",
        "Hambourg",
        "Kiel",
        "Koln",
        "Mainz"
    ],
    "Ghana": [
        "Accra",
        "Takoradi",
        "Tema"
    ],
    "Gibraltar": [
        "Gibraltar"
    ],
    "Grèce": [
        "Athinaï",
        "Attique",
        "Héraklion",
        "Le Pirée",
        "Rio",
        "Salonique",
        "Sokhna",
        "Thessalonique",
        "Volos"
    ],
    "Groenland": [
        "Christianshaab",
        "Daneborg",
        "Egedesminde",
        "Frederikshaab",
        "Holsteinsborg",
        "Ittoqqorttoormiit",
        "Jakobshavn",
        "Julianehaab",
        "Kangerlussuaq",
        "Nanortalik",
        "Narsaq",
        "Narssarssuaq",
        "Nuuk",
        "Savissivik",
        "Scoresbysund",
        "Siorapaluk",
        "Sukkertoppen",
        "Thule",
        "Umanak",
        "Upernivik"
    ],
    "Grenade": [
        "Bao'an",
        "St. George"
    ],
    "Guadeloupe": [
        "Basse Terre",
        "Gustavia",
        "Pointe-a-Pitre",
        "St. Barts"
    ],
    "Guam": [
        "Guam"
    ],
    "Guatemala": [
        "Puerto Barrios",
        "Puerto Quetzal",
        "Santo Tomas De Castilla",
        "Santo Tomas De Santo"
    ],
    "Guinée": [
        "Conakry"
    ],
    "Guinée-Bissau": [
        "Bissau"
    ],
    "Guyane": [
        "Georgetown"
    ],
    "Haïti": [
        "Port au Prince"
    ],
    "Honduras": [
        "Puerto Castilla",
        "Puerto Cortes",
        "San Lorenzo"
    ],
    "Hong Kong": [
        "Hong Kong",
        "Hong Kong/M",
        "Huangpu",
        "Hongrie",
        "Budapest"
    ],
    "Islande": [
        "Eskifjordur",
        "Grundartangi",
        "Helguvik",
        "Reydarfjordur",
        "Reykjavik",
        "Straumsvik",
        "Vestmann Islandvestmc"
    ],
    "Inde": [
        "Ahmedabad",
        "Albert Victor (Beherai)",
        "Bombay",
        "Calcutta",
        "Chas",
        "Chennai",
        "Cochin",
        "Faridabad",
        "Goa",
        "Haldia",
        "Jawaharlal Nehru Port",
        "Kandla",
        "Kanpur",
        "Ludhiana",
        "Madras",
        "Mahé",
        "Mangalore",
        "Marmagoa",
        "Mumbai",
        "Mumbai",
        "Mumbai Old Port",
        "Mundra",
        "New Delhl",
        "Nhava Sheva",
        "Pipavav",
        "Porbandar",
        "Tuticorin",
        "Visakhapatnam",
        "Vishakhapatnam"
    ],
    "Indonésie": [
        "Bandung",
        "Java",
        "Banjarmasin",
        "Belawan",
        "Biak",
        "Irian Jaya",
        "Bitung",
        "Buatan",
        "Jakarta",
        "Jambi",
        "Lobam",
        "Riau",
        "Macassar",
        "Merak",
        "Java",
        "Olah Jasa Andal",
        "Padang",
        "Padang",
        "Padang (Teluk Bajur)",
        "Sumatra",
        "Palembang",
        "Palembang",
        "Sumatra",
        "Panjang",
        "Pekanbaru",
        "Perawang",
        "Pontianak",
        "Kalimantan",
        "Pulau Batam",
        "Samarinda",
        "Kalimantan",
        "Semarang",
        "Java",
        "Sungai Guntung",
        "Sumatra",
        "Sungai Pakning",
        "Surabaya",
        "Tanjung Priok",
        "Tebingtinggi",
        "Sumatra",
        "Ujung Pandang",
        "Sulawesi"
    ],
    "Iran": [
        "Bandar Abbas",
        "Bandar Khomeini",
        "Khorramshahr",
        "Kish Island"
    ],
    "Irak": [
        "Umm Qasr"
    ],
    "Irlande": [
        "Baltimore",
        "Cork",
        "Drogheda",
        "Dublin",
        "Dun Laoghaire",
        "Foynes",
        "Galway",
        "Limerick",
        "Rosslare",
        "Waterford"
    ],
    "Israël": [
        "Ashdod",
        "Haïfa",
        "Tel-Aviv"
    ],
    "Italie": [
        "Ancône",
        "Augusta",
        "Bari",
        "Cagliari",
        "Catane",
        "Civitavecchia",
        "Faenza",
        "Gênes",
        "Gioia Tauro",
        "La Spezia",
        "Livourne",
        "Messine",
        "Milan",
        "Naples (Sintermar)",
        "Napoli",
        "Palerme",
        "Porto Marghera",
        "Pozzallo",
        "Ravenna",
        "Salerne",
        "Savona",
        "Taranto",
        "Trapani",
        "Trieste",
        "Vado Ligure",
        "Venise"
    ],
    "Jamaïque": [
        "Kingston",
        "Montego Bay",
        "Port Antonio"
    ],
    "Japon": [
        "Aburatsu",
        "Akita",
        "Chiba",
        "Fugusaki",
        "Fukuyama",
        "Hachinohe",
        "Hakata",
        "Hakodate",
        "Hibi",
        "Hibikinada",
        "Himeji",
        "Hirara",
        "Hiroshima",
        "Hitachinaka",
        "Hosojima",
        "Imabari",
        "Imari",
        "Ishigaki",
        "Ishikari",
        "Iwakuni",
        "Iyomishima",
        "Kanazawa",
        "Kanda",
        "Kawasaki",
        "Kitakyushu-Kokura",
        "Kobe",
        "Kochi",
        "Kumamoto",
        "Kushiro",
        "Maizuru",
        "Matsuyama",
        "Mill port",
        "Mizushima",
        "Moji",
        "Muroran",
        "Nagasaki",
        "Nagoya",
        "Naha",
        "Nakanoseki",
        "Nanko",
        "Naoetsu",
        "Niigata",
        "Niihama",
        "Oita",
        "Okinawa",
        "Omaezaki",
        "Onahama",
        "Osaka",
        "Otaru",
        "Saganoseki",
        "Sakaiminato",
        "Sakaisenboku",
        "Sakata",
        "Sanbu",
        "Satsumasendai",
        "Senboku",
        "Sendai",
        "Shibushi",
        "Shimizu",
        "Shimonoseki",
        "Takahara",
        "Takamatsu",
        "Tokushima",
        "Tokuyama",
        "Tokyo",
        "Tomakomai",
        "Tomioka",
        "Toyama",
        "Toyohashi",
        "Tsuruga",
        "Wakayama",
        "Yatsushiro",
        "Yokkaichi",
        "Yokohama",
        "Jordanie",
        "Amman",
        "Aqaba"
    ],
    "Kenya": [
        "Mombasa"
    ],
    "Kiribati": [
        "Île de Tarawa"
    ],
    "Corée (Nord)": [
        "Hungnam",
        "Séoul",
        "Wonsan"
    ],
    "Corée (Sud)": [
        "Daesan",
        "Gwangyang",
        "Hyundai",
        "Incheon",
        "Inchon",
        "Koje",
        "Kunsan",
        "Kwangyang",
        "Malmoe",
        "Masan",
        "Onsan",
        "Pohang",
        "Pusan",
        "Pyeong Taek",
        "Pyungtaek",
        "Seoul - Kimpo Apt",
        "Tonghae",
        "Ulsan",
        "Yeosu",
        "Yosu"
    ],
    "Koweït": [
        "Khor al Muffatta",
        "Koweït",
        "Shuaiba",
        "Shuaiba",
        "Shuwaikh"
    ],
    "Lettonie": [
        "Riga"
    ],
    "Liban": [
        "Beyrouth",
        "Tripoli"
    ],
    "Liberia": [
        "Monrovia"
    ],
    "Libye": [
        "Benghazi",
        "Khoms",
        "Marsa El Brega",
        "Misurata",
        "Ras Lanuf",
        "Tripoli"
    ],
    "Lituanie": [
        "Klaipeda"
    ],
    "Macao": [
        "Macao",
        "Macao",
        "Macao"
    ],
    "Madagascar": [
        "Antsiranana",
        "Majunga",
        "Nosy Be",
        "Suarez",
        "Toamasina",
        "Toleary"
    ],
    "Malaisie": [
        "Bintulu",
        "Sarawak",
        "Georgetown",
        "Kota Kinabalu",
        "Kuantan",
        "Kuantan",
        "Kuantan (Tanjong Gelang)",
        "Kuching",
        "Labuan",
        "Labuan",
        "Sabah",
        "Miri",
        "Miri",
        "Sarawak",
        "Muar",
        "Pasir Gudang",
        "Penang",
        "Port Kelang",
        "Sandakan",
        "Sabah",
        "Sibu",
        "Sarawak",
        "Sipitang",
        "Tanjung Pelepas",
        "Tawau"
    ],
    "Maldives": [
        "Homme"
    ],
    "Malte": [
        "Kemmuna",
        "Malte",
        "Marsaxlokkk",
        "La Valette"
    ],
    "Marshall (Îles)": [
        "Kwajalein",
        "Majuro"
    ],
    "Martinique": [
        "Fort De France"
    ],
    "Mauritanie": [
        "Nouadhibou",
        "Nouakchott"
    ],
    "Île Maurice": [
        "Port Louis"
    ],
    "Mexique": [
        "Acapulco",
        "Altamira",
        "Ensenada",
        "Lazaro Cardenas",
        "Manzanillo",
        "Mazatlan",
        "Mexico City",
        "Progreso",
        "Puerto Caldera",
        "Tampico",
        "Tuxpan",
        "Veracruz"
    ],
    "Micronésie (États fédérés de)": [
        "Chuup",
        "Ebeye",
        "Kosrae",
        "Pohnpei",
        "Truk"
    ],
    "Moldavie": [
        "Tiraspol"
    ],
    "Montserrat": [
        "Plymouth"
    ],
    "Maroc": [
        "Agadir",
        "Casablanca",
        "Nador",
        "Safi",
        "Tanger"
    ],
    "Mozambique": [
        "Beira",
        "Maputo",
        "Nacala",
        "Pemba",
        "Quelimane"
    ],
    "Namibie": [
        "Luderitz",
        "Walvis Bay"
    ],
    "Pays-Bas": [
        "Amsterdam",
        "Aruba",
        "Europoort",
        "Flushing",
        "Hook of Holland",
        "Moerdijk",
        "Rotterdam",
        "Tiburg",
        "Vlissingen"
    ],
    "Antilles Néerlandaises": [
        "Bonaire",
        "Kralendijk",
        "Oranjestad",
        "Philipsburg",
        "Saba",
        "Saint-Eustache",
        "Willemstad"
    ],
    "Nouvelle-Calédonie": [
        "Nouméa"
    ],
    "Nouvelle-Zélande": [
        "Auckland",
        "Bluff",
        "Christchurch",
        "Dunedin",
        "Gisborne",
        "Lyttelton",
        "Marsden Point",
        "Napier",
        "Nelson",
        "New Plymouth",
        "Port Chalmers",
        "Tauranga",
        "Timaru",
        "Wellington",
        "Westport"
    ],
    "Nicaragua": [
        "Corinto",
        "Managua",
        "Pto. Limon",
        "Puerto Limon"
    ],
    "Nigeria": [
        "Apapa",
        "Calabar",
        "Lagos",
        "Onne",
        "Port Harcourt",
        "Tincan",
        "Warri"
    ],
    "Île Norfolk": [
        "Kingston"
    ],
    "Mariannes du Nord (Îles)": [
        "Rota",
        "Saipan",
        "Tinian"
    ],
    "Norvège": [
        "Aalesund",
        "Agnefest",
        "Austevoll",
        "Bergen",
        "Bodo",
        "Brevik",
        "Egersund",
        "Floroe",
        "Fredrikstad",
        "Fusa",
        "Haavik",
        "Halden",
        "Hareid",
        "Haugesund",
        "Heroeya",
        "Heroya",
        "Husnes",
        "Kristiansand S.Chris",
        "Kristiansund N.Chris",
        "Larvik",
        "Lyngdal",
        "Maaloy",
        "Mestersvig",
        "Mosjoen",
        "Moss",
        "Orkanger",
        "Oslo",
        "Porsgrunn",
        "Sandnes",
        "Sauda",
        "Skien",
        "Stavanger",
        "Sunndalsoera",
        "Svelgen",
        "Trondheim"
    ],
    "Oman": [
        "Cincinnati",
        "Mina Qaboos",
        "Muscat",
        "Salalah",
        "Sohar"
    ],
    "Pakistan": [
        "Karachi",
        "Lahore",
        "Port Qasim"
    ],
    "Palaos": [
        "Kororor"
    ],
    "Panama": [
        "Balboa",
        "Colon",
        "Cristobal",
        "Cruce Canal",
        "Diego",
        "Manzanillo",
        "Panama"
    ],
    "Papouasie-Nouvelle-Guinée": [
        "Alotau",
        "Buji",
        "Kavieng",
        "Kimbe",
        "Lae",
        "Lihir",
        "Madang",
        "Oro Bay",
        "Port Moresby",
        "Rabaul",
        "Wewak"
    ],
    "Paraguay": [
        "Asuncion"
    ],
    "Pérou": [
        "Callao",
        "Ilo",
        "Matarani",
        "Paita",
        "Salaverry",
        "San Juan"
    ],
    "Philippines": [
        "Bacolod",
        "Batam Island",
        "Bugo",
        "Cadiz",
        "Cagayan De Oro",
        "Cebu",
        "Davao",
        "General Santos",
        "General Santos Dadia",
        "Iligan",
        "Mindanao",
        "Manila",
        "Manila",
        "Manila.N",
        "Manila North Harbour",
        "San Antonio Este (Rio Negro)",
        "Subic Bay"
    ],
    "Pologne": [
        "Gdansk",
        "Gdynia",
        "Swinoujscie",
        "Szczecin",
        "Varsovie"
    ],
    "Portugal": [
        "Canal",
        "Figueira Da Foz",
        "Funchal",
        "Madère",
        "Leixoes",
        "Lisboa",
        "Portimao",
        "Porto",
        "Setubal",
        "Sines",
        "Viana do Castelo",
        "Vila Do Conde"
    ],
    "Porto Rico": [
        "Ponce",
        "San Juan"
    ],
    "Qatar": [
        "Doha",
        "Mesaieed",
        "Messaied",
        "Umm Said"
    ],
    "Roumanie": [
        "Constanța"
    ],
    "Russie": [
        "Anadyr",
        "Arkhangelsk",
        "De Kastri",
        "Kaliningrad",
        "Kholmsk",
        "Korsakov",
        "Magadan",
        "Murmansk",
        "Nakhodka",
        "Novorossiysk",
        "Petropavlovsk-Kamchatsky",
        "Posyet",
        "Rostov-on-Don",
        "Saint Petersbourg",
        "Sochi",
        "Taganrog",
        "Uglegorsk",
        "Vanino",
        "Vladivostok",
        "Vostochny",
        "Vyborg"
    ],
    "Samoa": [
        "Apia"
    ],
    "Sao Tomé-et-Principe": [
        "Sao Tomé",
        "Sao Tomé Prn",
        "Savannah"
    ],
    "Arabie Saoudite": [
        "Dammam",
        "Jeddah",
        "Jubail"
    ],
    "Sénégal": [
        "Dakar",
        "Ziguinchor"
    ],
    "Serbie et Monténégro": [
        "Bar"
    ],
    "Seychelles (République des)": [
        "Port Victoria"
    ],
    "Sierra Leone": [
        "Freetown"
    ],
    "Singapour": [
        "Singapour"
    ],
    "Slovénie": [
        "Koper"
    ],
    "Îles Salomon": [
        "Honiara",
        "Noro"
    ],
    "République démocratique somalienne": [
        "berbère"
    ],
    "Afrique du Sud": [
        "Le Cap",
        "Durban",
        "East London",
        "Port Elizabeth",
        "Richards Bay"
    ],
    "Espagne": [
        "Algésiras",
        "Alicante",
        "Barcelone",
        "Bilbao",
        "Burgos",
        "Cadix",
        "Carboneras",
        "Carthagène",
        "Castellon De La Plana",
        "Ceuta",
        "El Ferrol",
        "Gijon",
        "Ibiza",
        "Jable",
        "Las Palmas (Dupl. Jae)",
        "Las Palmas",
        "Madrid",
        "Malaga",
        "Marin",
        "Melilla",
        "Pasajes",
        "Rades",
        "Sagunto",
        "San Antonio",
        "Saint-Sébastien",
        "Santa Cruz de Tenerife",
        "Santander",
        "Sevilla",
        "Seville",
        "Seville",
        "Tarragona",
        "Valencia",
        "Vigo"
    ],
    "Sri Lanka": [
        "Colombo"
    ],
    "Saint-Kitts-et-Nevis": [],
    "Basseterre, Charlestown": [
        "Sainte-Lucie",
        "Port Castries",
        "Vieux Fort",
        "Saint-Vincent-et-les Grenadines",
        "Canouan",
        "Georgetown",
        "Kingstown",
        "Kingstown",
        "Kingstown",
        "St Vincent"
    ],
    "Soudan": [
        "Port Soudan"
    ],
    "Suriname": [
        "Paramaribo",
        "le Svalbard",
        "Foynes",
        "Pointe Noire"
    ],
    "Suède": [
        "Ahus",
        "Bâle",
        "Brevik",
        "Gavle",
        "Gotthenburg",
        "Halmstad",
        "Helsingborg",
        "Karlshamn",
        "Karlskrona",
        "Lysekil",
        "Malmö",
        "Norrkoeping",
        "Norrkoping",
        "Pitea",
        "Skelleftehamn",
        "Sodertelje",
        "Solvesborg",
        "Stockholm",
        "Uddevalla",
        "Vaesteras",
        "Varberg",
        "Wallhamn",
        "Ystad"
    ],
    "Syrie": [
        "Latakia",
        "Tartous"
    ],
    "Taïwan": [
        "Fu-shou",
        "Hualien",
        "Jiaoxin",
        "Kaohsiung",
        "Keelung",
        "Mailiao",
        "Taichung",
        "Taipei"
    ],
    "Tanzanie": [
        "Dar Es Salaam",
        "Es Salaam",
        "Tanga",
        "Zanzibar"
    ],
    "Thaïlande": [
        "Bangkok",
        "Bangpakong",
        "Laem Chabang",
        "Lat Krabang",
        "Map Ta Phut",
        "Paknam",
        "Samut Prakan",
        "Siam Seaport",
        "Siracha",
        "Songkhla"
    ],
    "Togo": [
        "Lomé"
    ],
    "Tonga (Îles)": [
        "Nukualofa",
        "Tin Can Island",
        "Tongatapu",
        "Vavau"
    ],
    "Trinité-et-Tobago": [
        "Point Lisas",
        "Port of Spain",
        "St.Thomas"
    ],
    "Tunisie": [
        "Gabès",
        "La Goulette",
        "Radès",
        "Sfax",
        "Sousse",
        "Tunis"
    ],
    "Turquie": [
        "Ambarli",
        "Antalya",
        "Bosperus",
        "Canal du Bosphore",
        "Cesme",
        "Derince",
        "Gebze",
        "Gemlik",
        "Haydarpasa",
        "Iskenderun",
        "Istanbul",
        "Izmir",
        "Izmit (Evyap)",
        "Kumport",
        "Mardas",
        "Marport",
        "Mersin",
        "Samsun",
        "Tekirdag",
        "Trabzon"
    ],
    "Tuvalu": [
        "Funafutiti"
    ],
    "Ukraine": [
        "Dnipropetrovsk",
        "Ilyichevsk",
        "Mariupol",
        "Odessa"
    ],
    "Émirats arabes unis": [
        "Abu Dhabi",
        "Ahmed Bin Rashid Port",
        "Ajman",
        "Al Fujairah",
        "Dubaï",
        "Fujairah",
        "Jebel Ali",
        "Khor Al Fakkan",
        "Port Rashid",
        "Ras Al Khaimah",
        "Sharjah",
        "Shibushi",
        "Umm Al Quwain"
    ],
    "Royaume-Uni (Angleterre/UK)": [
        "Aberdeen",
        "Belfast",
        "Blyth",
        "Bristol",
        "Charleston",
        "Charlestown",
        "Chester",
        "Dartford",
        "Felixstowe",
        "Fishguard",
        "Fleetwood",
        "Gibraltar",
        "Glasgow Apt",
        "Goole",
        "Grangemouth",
        "Greenock",
        "Hampton",
        "Harwich",
        "Holyhead",
        "Hull",
        "Immingham",
        "Ipswich",
        "Isle Of Grain",
        "Larne",
        "Liverpool",
        "Londres",
        "Newport",
        "New York",
        "Pembroke",
        "Portbury",
        "Radlet",
        "Sheerness",
        "Southampton",
        "South Shields",
        "Stranraer",
        "Teesport",
        "Thameport",
        "Thamesport",
        "Tilbury",
        "Warrenpoint"
    ],
    "Uruguay": [
        "Montevideo"
    ],
    "ÉTATS-UNIS": [
        "Aberdeen",
        "Allegan",
        "Anchorage",
        "Aukland",
        "Ayer",
        "Balboa",
        "Baltimore",
        "Belfast",
        "Bell Bay",
        "Birmingham",
        "Blowing Point",
        "Boston",
        "Bridgetown",
        "Buffalo",
        "Camden",
        "Charleston",
        "Charlotte",
        "Chicago",
        "Cincinati",
        "Clearwater",
        "Cleveland",
        "Clevland",
        "Columbus",
        "Dallas",
        "Denver",
        "Des Moines",
        "Detroit",
        "Dillingham",
        "Dockside",
        "Dunkirk",
        "Dutch Harbor",
        "East Saint Louis",
        "Elizabeth",
        "Everett",
        "Fernandina Beach",
        "Flushing",
        "Fond Du Lac",
        "Fort Lauderdale",
        "Freeport",
        "Gênes",
        "Georgetown",
        "Green Bay",
        "Guam",
        "Gulfport",
        "Halifax",
        "Hambourg",
        "Hardwick",
        "Havana",
        "Honolulu",
        "Houlton",
        "Houston",
        "Howey In The Hills",
        "Huntsville",
        "Huron",
        "Indianapolis",
        "Jacksonville",
        "Jamestown",
        "Kahului",
        "Kane",
        "Kansas City",
        "Kawaihae",
        "Kingston",
        "Kodiak",
        "Landis",
        "Laredo",
        "Las Vegas",
        "Lisbonne",
        "Long Beach",
        "Longview",
        "Los Angeles",
        "Louisville",
        "Madill",
        "Memphis",
        "Miami",
        "Michigan Center",
        "Millersville",
        "Milwaukee",
        "Minneapolis/St Paul Apt",
        "Mobile",
        "Moselle",
        "Naples",
        "Nashville",
        "Nawiliwili",
        "Newark",
        "La Nouvelle Orléans",
        "New Philadelphia",
        "Newport News",
        "Newport News",
        "New York",
        "Norfolk",
        "Charleston Nord",
        "Nsh",
        "Oakland",
        "Odessa",
        "Ontario",
        "Orlando",
        "Oslo",
        "Panama City (Fl)",
        "Pascagoula",
        "Pennsauken",
        "Philadelphia",
        "Phillipsburg",
        "Phoenix",
        "Pittsburgh",
        "Port Elizabeth",
        "Port Everglades",
        "Port Gibson",
        "Portland",
        "Portland (Me)",
        "Portsmouth",
        "Richardton",
        "Richmond",
        "Saint Louis",
        "Salt Lake City",
        "San Antonio",
        "San Diego",
        "San Francisco",
        "Seagoville",
        "Seattle",
        "Seattle (Wa)",
        "South Kearny",
        "Stackbridge",
        "St.Croix",
        "St Louis",
        "St.Louis",
        "St.Louis",
        "St Paul",
        "St Petersburg",
        "Tacoma",
        "Tampa",
        "Texas",
        "Toledo",
        "Tulsa",
        "Valparaiso",
        "Vancouver",
        "Venise",
        "Westport",
        "Wilmington",
        "Winston Salem",
        "Îles Vierges américaines",
        "Charlotte Amalie",
        "Christiansted",
        "Sainte-Croix",
        "Vanuatu",
        "Port Vila",
        "Santo"
    ],
    "Venezuela": [
        "Curaçao",
        "El Guamache",
        "Guanta",
        "La Guaira",
        "Maracaibo",
        "Puerto Cabello",
        "Puerto Sucre",
        "San Lorenzo"
    ],
    "Vietnam": [
        "Cai Lan",
        "Cat Lai",
        "Danang",
        "Da Nang",
        "Haiphong",
        "Hanoi",
        "Ho Chi Minh Ville",
        "Nhatrang",
        "Nha Trang",
        "Phuoc Long",
        "Quinhon",
        "Quy Nhon",
        "Tan Cang",
        "Tan Thuan Dong"
    ],
    "Îles Vierges (britanniques)": [
        "Charlotte Amalie",
        "Christiansted",
        "Kingshill",
        "Sainte-Croix",
        "Saint-Jean",
        "Tortola"
    ],
    "Yemen": [
        "Aden",
        "Hodeidah",
        "Mukalla"
    ],
    "Zimbabwe": [
        "Harare"
    ]
};

// Listes plates pour compatibilité ou recherche globale si nécessaire
export const AIRPORTS = Object.values(AIRPORTS_BY_COUNTRY).flat();
export const SEAPORTS = Object.values(SEAPORTS_BY_COUNTRY).flat();
export const LOCATIONS = [...AIRPORTS, ...SEAPORTS];
