const fs = require('fs');

const geocoded = JSON.parse(fs.readFileSync('restaurants_geocoded.json', 'utf-8'));

// Manual high-quality data for failed/important ones
const manualData = [
    { name: "AM par Alexandre Mazzia", address: "9 Rue François Rocca, 13008 Marseille", lat: 43.2711, lng: 5.3854, type: "Gastronomique", stars: "3 Stars" },
    { name: "Le Louis XV - Alain Ducasse", address: "Place du Casino, 98000 Monaco", lat: 43.7391, lng: 7.4273, type: "Gastronomique", stars: "3 Stars" },
    { name: "Chantoiseau", address: "63 Rue Lepic, 75018 Paris", lat: 48.8877, lng: 2.3335, type: "Bistrot", stars: "" },
    { name: "Le Refuge", address: "Hameau du Leutaz, 74120 Megève", lat: 45.835, lng: 6.635, type: "Montagne", stars: "" },
    { name: "Bagatelle St-Tropez", address: "Chemin de la Matarane, 83350 Ramatuelle", lat: 43.2212, lng: 6.6575, type: "Plage", stars: "" },
    { name: "Rivea", address: "317 Av. Eugène Donadeï, 06700 Saint-Laurent-du-Var", lat: 43.6662, lng: 7.1953, type: "Méditerranéen", stars: "" },
    { name: "Beefbar Méribel", address: "464 Route du Belvédère, 73550 Les Allues", lat: 45.4027, lng: 6.5656, type: "Viandes", stars: "" },
    { name: "Hostellerie de l'Abbaye de la Celle", address: "10 Place du Général de Gaulle, 83170 La Celle", lat: 43.3934, lng: 6.0406, type: "Gastronomique", stars: "1 Star" },
    { name: "Bastide de Moustiers", address: "Chemin de Quinson, 04360 Moustiers-Sainte-Marie", lat: 43.8409, lng: 6.2180, type: "Provençal", stars: "1 Star" }
];

// Helper to clean name and get stars
function processEntry(entry) {
    let rawName = entry.name;
    let stars = "";
    if (rawName.includes("***")) { stars = "3 Stars"; rawName = rawName.replace("***", ""); }
    else if (rawName.includes("**")) { stars = "2 Stars"; rawName = rawName.replace("**", ""); }
    else if (rawName.includes("*")) { stars = "1 Star"; rawName = rawName.replace("*", ""); }

    // Title case name roughly
    let name = rawName.trim().toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());

    // Fix type
    let type = "Partenaire";
    if (stars) type = "Gastronomique";
    if (name.includes("Bistrot") || name.includes("Cafe")) type = "Bistrot";
    if (name.includes("Beefbar")) type = "Viandes";
    if (name.includes("Plage")) type = "Plage";

    return {
        name: name,
        address: entry.address,
        lat: entry.lat,
        lng: entry.lng,
        type: type,
        stars: stars
    };
}

const finalToAdd = [];
const seenNames = new Set(manualData.map(m => m.name.toUpperCase()));

if (process.argv.includes('--debug')) console.log('Starting manual data...');

// Add manual first
manualData.forEach(m => {
    finalToAdd.push(m);
});

// Process geocoded
geocoded.forEach(g => {
    if (g.lat && g.lng) {
        let p = processEntry(g);
        // Check fuzzy duplicate
        let isDup = false;
        // Simple check
        manualData.forEach(m => {
            if (m.name.toUpperCase().includes(p.name.toUpperCase())) isDup = true;
        });

        if (!isDup) {
            finalToAdd.push(p);
        }
    }
});

// Generate JS string
console.log("// --- NEW ADDITIONS FROM AMEX PDF ---");
finalToAdd.forEach(r => {
    console.log(`    { name: "${r.name}", address: "${r.address}", lat: ${r.lat}, lng: ${r.lng}, type: "${r.type}", stars: "${r.stars}" },`);
});
