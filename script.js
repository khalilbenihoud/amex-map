const restaurants = [
    { name: "114 Faubourg", address: "114 rue du Faubourg Saint-Honoré, 75008 Paris", lat: 48.8732, lng: 2.3134, type: "Française", stars: "1 Star" },
    { name: "19.20 by Norbert Tarayre", address: "33 avenue George V, 75008 Paris", lat: 48.86903, lng: 2.30083, type: "Française", stars: null },
    { name: "A L'Epi d'Or", address: "25 rue Jean Jacques Rousseau, 75001 Paris", lat: 48.8629252, lng: 2.3409643, type: "Française", stars: null },
    { name: "A.T", address: "4 rue du Cardinal Lemoine, 75005 Paris", lat: 48.8475, lng: 2.3516, type: "Française", stars: "1 Star" },
    { name: "Abysse Monaco", address: "1 square Beaumarchais, 98000 Monaco", lat: 43.7386418, lng: 7.4261396, type: "Japonaise", stars: "2 Stars" },
    { name: "African queen", address: "Port de Plaisance, 06310 Beaulieu-sur-Mer", lat: 43.7061, lng: 7.3341, type: "Méditerranéenne", stars: null },
    { name: "Akira Back", address: "33 avenue George V, 75008 Paris", lat: 48.8690, lng: 2.3006, type: "Japonaise", stars: null },
    { name: "Alain Ducasse Baccarat", address: "11 place des Etats-Unis, 75016 Paris", lat: 48.8672, lng: 2.2933, type: "Française", stars: null },
    { name: "Allard", address: "41 rue Saint André des Arts, 75006 Paris", lat: 48.8533, lng: 2.3411, type: "Française", stars: null },
    { name: "Alléno Paris", address: "8 avenue Dutuit, 75008 Paris", lat: 48.8661, lng: 2.3164, type: "Française", stars: "3 Stars" },
    { name: "AM par Alexandre Mazzia", address: "9 rue François Rocca, 13008 Marseille", lat: 43.2687, lng: 5.3891, type: "Française", stars: "3 Stars" },
    { name: "Andia", address: "19 chaussée de la Muette, 75016 Paris", lat: 48.8582, lng: 2.2743, type: "Latino-Américaine", stars: null },
    { name: "Anne", address: "28 place des Vosges, 75003 Paris", lat: 48.8562363, lng: 2.3660257, type: "Française", stars: "1 Star" },
    { name: "Apicius", address: "20 rue d'Artois, 75008 Paris", lat: 48.8731, lng: 2.3082, type: "Française", stars: "1 Star" },
    { name: "Astrance", address: "32 rue de Longchamp, 75016 Paris", lat: 48.8664, lng: 2.2902, type: "Française", stars: "1 Star" },
    { name: "Aux prés", address: "27 rue du Dragon, 75006 Paris", lat: 48.8527577, lng: 2.3304479, type: "Française", stars: null },
    { name: "Bagatelle Chez Stefano Forever", address: "Les Tamaris, Chemin de la Matarane, 83350 Ramatuelle", lat: 43.2185, lng: 6.6610, type: "Méditerranéenne", stars: null },
    { name: "Bagatelle Courchevel", address: "Courchevel 1850, Sommet de la Loze, 73120 Saint-Bon-Tarentaise", lat: 45.4093, lng: 6.6192, type: "Méditerranéenne", stars: null },
    { name: "Baieta", address: "5 rue de Pontoise, 75005 Paris", lat: 48.8492, lng: 2.3533, type: "Méditerranéenne", stars: "1 Star" },
    { name: "Bambini Megève", address: "Domaine de Meztiva, 1306 Route nationale, 74120 Megève", lat: 45.8650, lng: 6.6250, type: "Italienne", stars: null },
    { name: "Bambini Paris", address: "13 avenue du Président Wilson, 75016 Paris", lat: 48.8624, lng: 2.2965, type: "Italienne", stars: null },
    { name: "Bar Vendôme au Ritz Paris", address: "15 place Vendôme, 75001 Paris", lat: 48.8675, lng: 2.3294, type: "Française", stars: null },
    { name: "Baronne", address: "11 Rue Berryer, 75008 Paris", lat: 48.8756, lng: 2.3069, type: "Française", stars: null },
    { name: "Baumanière 1850", address: "Route de Bellecote, Courchevel 1850, 73120 Courchevel", lat: 45.4116, lng: 6.6347, type: "Française", stars: null },
    { name: "BeauCoco Lyon", address: "13 place Jules Ferry, 69006 Lyon", lat: 45.7660, lng: 4.8600, type: "Française", stars: null },
    { name: "BeauCoco Paris", address: "Palais Garnier - 1 place Jacques Rouché, 75009 Paris", lat: 48.8718, lng: 2.3315, type: "Française", stars: null },
    { name: "Beefbar Megève", address: "44 rue Charles Feige, 74120 Megève", lat: 45.8570, lng: 6.6177, type: "Française", stars: null },
    { name: "Beefbar Monaco", address: "42 quai Jean Charles Rey, 98000 Monaco", lat: 43.7297, lng: 7.4243, type: "Steakhouse", stars: null },
    { name: "Beefbar Paris", address: "5 rue Marbeuf, 75008 Paris", lat: 48.8675, lng: 2.3036, type: "Steakhouse", stars: null },
    { name: "Beefbar Saint-Tropez", address: "Hôtel Lou Pinet, 70 Chemin du Pinet, 83990 Saint-Tropez", lat: 43.2570, lng: 6.6430, type: "Steakhouse", stars: null },
    { name: "Bellefeuille (Le Saint James Paris)", address: "5 place du Chancelier Adenauer, 75116 Paris", lat: 48.8687, lng: 2.2778, type: "Française", stars: "1 Star" },
    { name: "Benoît", address: "20 rue Saint-Martin, 75004 Paris", lat: 48.8584, lng: 2.3481, type: "Française", stars: "1 Star" },
    { name: "Blue Bay", address: "40 Av. Princesse Grace, 98000 Monaco", lat: 43.7480, lng: 7.4387, type: "Méditerranéenne", stars: "2 Stars" },
    { name: "Bonnie", address: "10 rue Agrippa d’Aubigné, 75004 Paris", lat: 48.8492, lng: 2.3636, type: "Française", stars: null },
    { name: "Boubalé", address: "6 rue des Archives, 75004 Paris", lat: 48.8578, lng: 2.3562, type: "Méditerranéenne", stars: null },
    { name: "Brach", address: "1-7 rue Jean Richepin, 75016 Paris", lat: 48.8617, lng: 2.2725, type: "Méditerranéenne", stars: null },
    { name: "Brasserie Lipp", address: "151 boulevard Saint Germain, 75006 Paris", lat: 48.8537528, lng: 2.3324105, type: "Française", stars: null },
    { name: "Brasserie Lutetia", address: "43 boulevard Raspail, 75006 Paris", lat: 48.8511479, lng: 2.3268812, type: "Française", stars: null },
    { name: "Café Compagnon", address: "22-26 rue Léopold Bellan, 75002 Paris", lat: 48.8665, lng: 2.3456, type: "Française", stars: null },
    { name: "Café Jeanne", address: "5 rue de la Paix, Park Hyatt Paris - Vendôme, 75002 Paris", lat: 48.8687, lng: 2.3304, type: "Française", stars: null },
    { name: "Café Lapérouse", address: "2 place de la Concorde, 75008 Paris", lat: 48.8667, lng: 2.3225, type: "Française", stars: null },
    { name: "Carboni's", address: "45 rue de Poitou, 75003 Paris", lat: 48.8623, lng: 2.3634, type: "Italienne", stars: null },
    { name: "Casa Amor", address: "Stefano Forever, Chemin de Matarane, 83350 Ramatuelle", lat: 43.2185, lng: 6.6610, type: "Fusion", stars: null },
    { name: "Chantoiseau", address: "63 rue Lepic, 75018 Paris", lat: 48.8876, lng: 2.3346, type: "Française", stars: null },
    { name: "Cherry", address: "22 rue du Portalet, 83990 Saint-Tropez", lat: 43.2718, lng: 6.6402, type: "Mexicaine", stars: null },
    { name: "Cheval Blanc Courchevel", address: "Le Jardin Alpin, 73120 Courchevel", lat: 45.4116, lng: 6.6347, type: "Française", stars: "3 Stars" },
    { name: "Cheval d'Or", address: "21 rue de la Villette, 75019 Paris", lat: 48.8812, lng: 2.3921, type: "Asiatique", stars: null },
    { name: "Chiberta", address: "3 rue Harsène Houssaye, 75008 Paris", lat: 48.8735340, lng: 2.2978027, type: "Française", stars: "1 Star" },
    { name: "Chocho", address: "54 rue Paradis, 75010 Paris", lat: 48.8760, lng: 2.3524, type: "Française", stars: null },

    { name: "Clover Grill", address: "6 rue Bailleul, 75001 Paris", lat: 48.8651, lng: 2.3283, type: "Steakhouse", stars: null },
    { name: "Clown Bar", address: "114 rue Amelot, 75011 Paris", lat: 48.8637, lng: 2.3686, type: "Française", stars: null },
    { name: "Corail", address: "11 avenue du Président Wilson, 75116 Paris", lat: 48.8601, lng: 2.2987, type: "Végétarienne", stars: null },
    { name: "Coretta", address: "151 bis rue Cardinet, 75017 Paris", lat: 48.8754, lng: 2.3435, type: "Française", stars: null },
    { name: "Da Laura", address: "18 bd Georges Courteline, 06250 Mougins", lat: 43.6001, lng: 7.0091, type: "Italienne", stars: null },
    { name: "Dante", address: "14 rue de Paradis, 75010 Paris", lat: 48.8760, lng: 2.3524, type: "Européenne", stars: null },
    { name: "Dar Mima", address: "1 rue des Fossés Saint-Bernard, 75005 Paris", lat: 48.8501, lng: 2.3601, type: "Méditerranéenne", stars: null },
    { name: "Daroco Bourse", address: "6 rue Vivienne, 75002 Paris", lat: 48.8685, lng: 2.3397, type: "Italienne", stars: null },
    { name: "David Toutain", address: "29 rue Surcouf, 75007 Paris", lat: 48.8584, lng: 2.3069, type: "Française", stars: "2 Stars" },
    { name: "Dessirier", address: "9 place du Maréchal Juin, 75017 Paris", lat: 48.8824, lng: 2.2946, type: "Fruits de mer", stars: null },
    { name: "Divellec", address: "18 rue Fabert, 75007 Paris", lat: 48.8601, lng: 2.3164, type: "Seahouse", stars: "1 Star" },
    { name: "Don Juan II", address: "Port Debilly, 75016 Paris", lat: 48.8617, lng: 2.2965, type: "Française", stars: "1 Star" },
    { name: "Dragon", address: "29 rue du Dragon, 75006 Paris", lat: 48.8528, lng: 2.3304, type: "Fusion", stars: null },
    { name: "Drouant", address: "6 place Gaillon, 75002 Paris", lat: 48.8688, lng: 2.3351, type: "Française", stars: null },
    { name: "Ducasse Sur Seine", address: "19 Port Debilly, 75116 Paris", lat: 48.8612, lng: 2.2965, type: "Française", stars: null },
    { name: "Elmer", address: "30 rue Notre Dame de Nazareth, 75003 Paris", lat: 48.8655, lng: 2.3615, type: "Française", stars: null },
    { name: "Epicure", address: "112 rue du Fabourg Saint Honoré, 75008 Paris", lat: 48.8728, lng: 2.3137, type: "Française", stars: "3 Stars" },
    { name: "Espadon", address: "15 place Vendôme, 75001 Paris", lat: 48.8675, lng: 2.3294, type: "Française", stars: "1 Star" },
    { name: "Fontaine Gaillon", address: "1 Rue de la Michodière, 75002 Paris", lat: 48.8690, lng: 2.3353, type: "Française", stars: null },
    { name: "Fouquet's Paris", address: "46 avenue George V, 75008 Paris", lat: 48.8718, lng: 2.3015, type: "Française", stars: null },
    { name: "Frédéric Simonin", address: "25 rue Bayen, 75017 Paris", lat: 48.8797, lng: 2.2941, type: "Française", stars: "1 Star" },
    { name: "Frenchie", address: "5 rue du Nil, 75002 Paris", lat: 48.8676, lng: 2.3475, type: "Française", stars: "1 Star" },
    { name: "Gaya par Pierre Gagnaire", address: "6 rue Saint-Simon, 75007 Paris", lat: 48.8551, lng: 2.3268, type: "Seahouse", stars: "1 Star" },
    { name: "Gigi Paris", address: "15 avenue Montaigne, 75008 Paris", lat: 48.8657, lng: 2.3023, type: "Italienne", stars: null },
    { name: "Gigi Ramatuelle", address: "1050 chemin des Barraques, 83350 Ramatuelle", lat: 43.2185, lng: 6.6610, type: "Italienne", stars: null },
    { name: "Girafe", address: "Cité de l'Architecture, 1 place du Trocadéro et du 11 Novembre, 75116 Paris", lat: 48.8624, lng: 2.2882, type: "Seahouse", stars: null },
    { name: "Grande brasserie", address: "6 rue de la Bastille, 75004 Paris", lat: 48.8542, lng: 2.3686, type: "Française", stars: null },
    { name: "Hakuba", address: "8 quai du Louvre, 75001 Paris", lat: 48.8612, lng: 2.3401, type: "Japonaise", stars: null },
    { name: "Hanabi", address: "17 rue du Quatre-Septembre, 75002 Paris", lat: 48.8687, lng: 2.3346, type: "Fusion", stars: null },
    { name: "Hollywood savoy", address: "44 Rue Notre Dame Des Victoires, 75002 Paris", lat: 48.8687, lng: 2.3397, type: "Française", stars: null },
    { name: "Il Carpaccio", address: "37 avenue Hoche, 75008 Paris", lat: 48.8756, lng: 2.3015, type: "Italienne", stars: "1 Star" },
    { name: "Il Restaurante Niko Romito", address: "30 avenue George V, 75008 Paris", lat: 48.8690, lng: 2.3006, type: "Italienne", stars: null },
    { name: "Jardin Tropezina", address: "4 route du Pinet, 83350 Ramatuelle", lat: 43.2185, lng: 6.6610, type: "Française", stars: null },
    { name: "Jean Imbert au Plaza Athénée", address: "25 avenue Montaigne, 75008 Paris", lat: 48.8654, lng: 2.3023, type: "Française", stars: "1 Star" },
    { name: "Jòia", address: "39 rue des Jeuneurs, 75002 Paris", lat: 48.8697, lng: 2.3435, type: "Française", stars: null },
    { name: "Kaito", address: "373 chemin des Follières, 74120 Megève", lat: 45.8570, lng: 6.6177, type: "Japonaise", stars: null },
    { name: "Kalamata", address: "31 rue de la Boétie, 75008 Paris", lat: 48.8742, lng: 2.3115, type: "Méditerranéenne", stars: null },
    { name: "Koori", address: "5 rue Emile Allais, 73120 Courchevel", lat: 45.4162, lng: 6.6358, type: "Japonaise", stars: null },
    { name: "L'Abysse", address: "8 avenue Dutuit, 75008 Paris", lat: 48.8661, lng: 2.3164, type: "Japonaise", stars: "2 Stars" },
    { name: "L'Altiplano", address: "238 rue des Clarines, 73120 Saint-Bon-Tarentaise", lat: 45.4162, lng: 6.6358, type: "Péruvienne", stars: null },
    { name: "L'Altiplano 2.0", address: "143 avenue du Prariond, 73150 Val d'Isère", lat: 45.4480, lng: 6.9800, type: "Péruvienne", stars: null },
    { name: "L'Altitude", address: "356 route de l'Altiport, Courchevel", lat: 45.4162, lng: 6.6358, type: "Française", stars: null },
    { name: "L'Atelier de Joël Robuchon Etoile", address: "Publicis Drugstore, 133 avenue des Champs Elysée, 75008 Paris", lat: 48.8735, lng: 2.2941, type: "Française", stars: "1 Star" },
    { name: "L'Atelier Maître Albert", address: "1 rue Maître Albert, 75005 Paris", lat: 48.8511, lng: 2.3502, type: "Française", stars: null },
    { name: "L'Atelier Saint Germain", address: "5 rue Montalembert, 75007 Paris", lat: 48.8553, lng: 2.3243, type: "Française", stars: null },
    { name: "L'Attilio Paris", address: "184 rue Faubourg Saint-Honoré, 75008 Paris", lat: 48.8731, lng: 2.3082, type: "Française", stars: null },

    { name: "L'Avenue", address: "41 avenue Montaigne, 75008 Paris", lat: 48.8657, lng: 2.3023, type: "Française", stars: null },
    { name: "L'Ecrin", address: "10 place de la Concorde, 75008 Paris", lat: 48.8667, lng: 2.3225, type: "Française", stars: "1 Star" },
    { name: "L'Hostellerie de l'Abbaye de la Celle", address: "Place Général de Gaulle, 83170 La Celle", lat: 43.3931, lng: 6.0401, type: "Méditerranéenne", stars: "1 Star" },
    { name: "L'Oiseau Blanc", address: "19 avenue Kleber, 75116 Paris", lat: 48.8712, lng: 2.2965, type: "Française", stars: "2 Stars" },
    { name: "L'Ekrin à l'hôtel Le Kaila", address: "124 rue des Jeux Olympiques, 73550 Meribel", lat: 45.3941, lng: 6.5658, type: "Française", stars: "1 Star" },
    { name: "La Bastide de Moustiers", address: "Chemin Quinson, 04360 Moustiers Sainte Marie", lat: 43.8409, lng: 6.2180, type: "Française", stars: "1 Star" },
    { name: "La Bauhinia", address: "10 avenue d'Iéna, 75116 Paris", lat: 48.8637, lng: 2.2933, type: "Asiatique", stars: null },
    { name: "La Chambre Bleue", address: "4 Rue d'Anjou, 75008 Paris", lat: 48.8690, lng: 2.3225, type: "Méditerranéenne", stars: null },
    { name: "La Coupole", address: "102 boulevard Montparnasse, 75014 Paris", lat: 48.8423, lng: 2.3275, type: "Française", stars: null },
    { name: "La Cour Jardin", address: "25 avenue Montaigne, 75008 Paris", lat: 48.8654, lng: 2.3023, type: "Française", stars: null },
    { name: "La Cucucina La Folie Douce", address: "La Daille, 73150 Val d'Isère", lat: 45.4480, lng: 6.9800, type: "Italienne", stars: null },
    { name: "La Fruitière La Folie Douce", address: "La Daille, 73150 Val d'Isère", lat: 45.4480, lng: 6.9800, type: "Française", stars: null },
    { name: "La Grande Cascade", address: "Bois de Boulogne, allée de Longchamp, 75016 Paris", lat: 48.8601, lng: 2.2225, type: "Française", stars: "1 Star" },
    { name: "La Halle aux Grains", address: "Bourse de Commerce, 2 rue Viarmes, 75001 Paris", lat: 48.8624, lng: 2.3401, type: "Française", stars: null },
    { name: "La Maison du Caviar", address: "21 rue Quentin Bauchart, 75008 Paris", lat: 48.8675, lng: 2.3015, type: "Russe", stars: null },
    { name: "La Mercerie", address: "9 cours Saint-Louis, 13001 Marseille", lat: 43.2987, lng: 5.3787, type: "Française", stars: null },
    { name: "La Môme Plage", address: "44 boulevard de la Croisette, 06400 Cannes", lat: 43.5512, lng: 7.0197, type: "Fusion", stars: null },
    { name: "La Pagode de Cos", address: "42 avenue Gabriel, 75008 Paris", lat: 48.8690, lng: 2.3164, type: "Française", stars: null },
    { name: "La Plage Parisienne", address: "200 port Javel Haut, 75015 Paris", lat: 48.8475, lng: 2.2743, type: "Française", stars: null },
    { name: "La Poule au Pot", address: "9 rue Vauvilliers, 75001 Paris", lat: 48.8624, lng: 2.3401, type: "Française", stars: "1 Star" },
    { name: "La Sauvageonne Mègeve", address: "170 route Edmond de Rothschild, 74120 Megève", lat: 45.8570, lng: 6.6177, type: "Française", stars: null },
    { name: "La Société", address: "4 place Saint Germain des Prés, 75006 Paris", lat: 48.8533, lng: 2.3324, type: "Française", stars: null },
    { name: "La Suite Girafe", address: "1 place du Trocadéro et 11 Novembre, 75116 Paris", lat: 48.8624, lng: 2.2882, type: "Française", stars: null },
    { name: "La Table de l'Alpaga", address: "68 allée des Marmousets, 74120 Megève", lat: 45.8570, lng: 6.6177, type: "Française", stars: "1 Star" },
    { name: "La Tour d'Argent", address: "15 quai Tournelle, 75005 Paris", lat: 48.8497, lng: 2.3584, type: "Française", stars: "1 Star" },
    { name: "Langosteria", address: "8 quai du Louvre, 75001 Paris", lat: 48.8612, lng: 2.3401, type: "Italienne", stars: null },
    { name: "Lasserre", address: "17 avenue Franklin Roosevelt, 75008 Paris", lat: 48.8657, lng: 2.3115, type: "Française", stars: "1 Star" },
    { name: "Le 1947 à Cheval Blanc", address: "Le Jardin Alpin Courchevel 1850, 73120 Courchevel", lat: 45.4116, lng: 6.6347, type: "Française", stars: "3 Stars" },
    { name: "Le Bar des Près", address: "25 rue du Dragon, 75006 Paris", lat: 48.8528, lng: 2.3304, type: "Japonaise", stars: null },
    { name: "Le Bar Long", address: "37 avenue Hoche, 75008 Paris", lat: 48.8756, lng: 2.3015, type: "Française", stars: null },
    { name: "Le Beef Bar au Coucou", address: "464 route du Belvédère, Les Allues, 73550 Meribel", lat: 45.3941, lng: 6.5658, type: "Steakhouse", stars: null },


];
// Icons
const ICONS = {
    star: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>',
    map: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
    trip: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>',
    globe: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    list: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>',
    mapAlt: '<svg class="icon" viewBox="0 0 24 24"><path d="M20.5 3l-6 2.25L8.5 3 3.5 4.88v16.24l6-2.25 6 2.25 5-1.88V3zM14 19.38l-5.5-2.06v-12l5.5 2.06v12zm-5.5-12.06v12L4 21V5l4.5 2.32zm12 12l-4.5-1.69v-12l4.5 1.69v12z"/></svg>'
};

// Initialize Map
const map = L.map('map', {
    zoomControl: false,
    preferCanvas: true
}).setView([46.603354, 1.888334], 6);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

L.control.zoom({
    position: 'bottomright'
}).addTo(map);

const markers = {};
const listContainer = document.getElementById('restaurant-list');
const searchInput = document.getElementById('restaurant-search');
const featureGroup = L.featureGroup();

function renderList(items) {
    listContainer.innerHTML = '';
    items.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';

        // Stars Badge HTML
        const starHtml = restaurant.stars
            ? `<div class="stars-badge">${ICONS.star} ${restaurant.stars}</div>`
            : '';

        // Dynamic links
        const searchQuery = encodeURIComponent(`${restaurant.name} restaurant ${restaurant.address}`);
        const websiteUrl = `https://www.google.com/search?q=${searchQuery}`;
        const directionsQuery = encodeURIComponent(`${restaurant.name}, ${restaurant.address}`);
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${directionsQuery}`;

        card.innerHTML = `
            <div class="card-header">
                <h3>${restaurant.name}</h3>
                ${starHtml}
            </div>
            <div class="location-row">
                ${ICONS.map}
                <span>${restaurant.address}</span>
            </div>
            <div class="card-footer">
                <span class="tag">${restaurant.type}</span>
                <div class="card-actions">
                    <a href="${directionsUrl}" target="_blank" class="action-link secondary" onclick="event.stopPropagation()" title="Itinéraire">
                        ${ICONS.trip}
                    </a>
                    <a href="${websiteUrl}" target="_blank" class="action-link primary" onclick="event.stopPropagation()" title="Voir le Restaurant">
                        ${ICONS.globe} Voir le Restaurant
                    </a>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            const marker = markers[restaurant.name];
            if (marker) {
                map.flyTo([restaurant.lat, restaurant.lng], 16, {
                    duration: 1.2
                });
                marker.openPopup();

                document.querySelectorAll('.restaurant-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });

        restaurant.element = card;
        listContainer.appendChild(card);
    });
}

function initMarkers() {
    featureGroup.clearLayers();
    restaurants.forEach(restaurant => {
        const marker = L.marker([restaurant.lat, restaurant.lng]);

        const searchQuery = encodeURIComponent(`${restaurant.name} restaurant ${restaurant.address}`);
        const websiteUrl = `https://www.google.com/search?q=${searchQuery}`;
        const directionsQuery = encodeURIComponent(`${restaurant.name}, ${restaurant.address}`);
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${directionsQuery}`;

        const popupContent = `
            <div class="custom-popup">
                <h3>${restaurant.name}</h3>
                <p>${ICONS.map} ${restaurant.address}</p>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; gap:10px;">
                    <div class="popup-tag">${restaurant.type}</div>
                    <div style="display:flex; gap:8px;">
                        <a href="${directionsUrl}" target="_blank" class="popup-icon-link" title="Itinéraire">
                            ${ICONS.trip}
                        </a>
                        <a href="${websiteUrl}" target="_blank" class="popup-icon-link" title="Site Web">
                            ${ICONS.globe}
                        </a>
                    </div>
                </div>
            </div>
        `;

        marker.bindPopup(popupContent);

        marker.addTo(map);
        marker.addTo(featureGroup);

        marker.on('click', () => {
            document.querySelectorAll('.restaurant-card').forEach(c => c.classList.remove('active'));
            if (restaurant.element) {
                restaurant.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                restaurant.element.classList.add('active');
            }
        });

        markers[restaurant.name] = marker;
    });

    // Fit map to show all markers
    if (restaurants.length > 0) {
        map.fitBounds(featureGroup.getBounds().pad(0.1));
    }
}

// Search Functionality
const clearButton = document.getElementById('clear-search');

function filterList(term) {
    // Clear existing markers from map (but keep them in memory)
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    const visibleRestaurants = [];

    restaurants.forEach(restaurant => {
        const visible = restaurant.name.toLowerCase().includes(term) ||
            restaurant.address.toLowerCase().includes(term);

        if (restaurant.element) {
            restaurant.element.style.display = visible ? 'block' : 'none';
        }

        if (visible) {
            markers[restaurant.name].addTo(map);
            visibleRestaurants.push(markers[restaurant.name]);
        }
    });

    // fit bounds to search results if any
    if (visibleRestaurants.length > 0) {
        const group = L.featureGroup(visibleRestaurants);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleSearch = debounce((e) => {
    const term = e.target.value.toLowerCase();

    // Toggle clear button
    clearButton.style.display = term.length > 0 ? 'block' : 'none';

    filterList(term);
}, 150); // 150ms delay

searchInput.addEventListener('input', handleSearch);

clearButton.addEventListener('click', () => {
    searchInput.value = '';
    clearButton.style.display = 'none';
    filterList(''); // Reset filter
    searchInput.focus();
});

// Mobile Toggle Logic
const toggleBtn = document.getElementById('mobile-toggle');
const container = document.querySelector('.container');
let isMapVisible = false;

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        isMapVisible = !isMapVisible;

        if (isMapVisible) {
            container.classList.add('show-map');
            toggleBtn.innerHTML = `Liste`;
            // Map needs a resize event to render correctly when revealing from hidden/zero-size
            setTimeout(() => { map.invalidateSize(); }, 300);
        } else {
            container.classList.remove('show-map');
            toggleBtn.innerHTML = `Carte`;
        }
    });
}

// Ensure map is properly sized on load
window.addEventListener('load', () => {
    map.invalidateSize();
});

// Initial Render
renderList(restaurants);
initMarkers();

// Modal Logic
const modal = document.getElementById('welcome-modal');
const closeModalBtn = document.getElementById('close-modal');
const startBtn = document.getElementById('start-btn');
const infoBtn = document.getElementById('info-btn');

function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

if (modal) {
    if (infoBtn) {
        infoBtn.addEventListener('click', openModal);
    }
    closeModalBtn.addEventListener('click', closeModal);
    startBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}
