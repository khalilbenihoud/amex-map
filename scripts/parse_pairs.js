const fs = require('fs');

const raw = fs.readFileSync('restaurants_raw.txt', 'utf-8');
const lines = raw.split('\n').map(l => l.trim()).filter(l => l);

// Helper to check if a line looks like an address (starts with digit)
function isAddress(line) {
    return /^\d/.test(line);
}

// We will try to find sequences of Names followed by equal length sequences of Addresses
// This is a bit fuzzy because some names might have numbers (114 Faubourg)
// But most addresses start with number. Most names start with letter (except 114, 19.20).

// Manual ranges based on file view:
const ranges = [
    // 1er
    { nameStart: 'CAFE LAPEROUSE CONCORDE', addrStart: '2 place de la concorde', count: 6 },
    // 2eme
    { nameStart: 'CAFE COMPAGNON', addrStart: '22-26 rue Léopold Bellan', count: 4 }, // Verify count
    // 3eme
    { nameStart: 'ANNE (LE PAVILLON DE LA REINE)*', addrStart: '28 place des Vosges', count: 2 },
    // 4eme
    { nameStart: 'BENOIT*', addrStart: '20 rue Saint-Martin', count: 2 },
    // 5eme
    { nameStart: 'BAIETA*', addrStart: '5 rue de Pontoise', count: 3 },
    // 6eme
    { nameStart: 'ALLARD', addrStart: '41 rue Saint André des Arts', count: 8 },
    // 7eme
    { nameStart: 'DIVELLEC*', addrStart: '18 rue Fabert', count: 3 },
    // 8eme 
    { nameStart: '114 FAUBOURG', addrStart: '114 rue du Faubourg St Honoré', count: 18 }, // Verify
    // 9eme
    { nameStart: 'LE RESTAURANT DE LA FANTAISIE', addrStart: '24 rue Cadet', count: 3 },
    // 10eme
    { nameStart: 'CHOCHO', addrStart: '54 rue de Paradis', count: 2 },
    // 11eme
    { nameStart: 'SEPTIME*', addrStart: '80 rue de Charonne', count: 1 },
    // 12eme
    { nameStart: 'PASSERINI', addrStart: '65 rue Traversière', count: 1 },
    // 13eme
    { nameStart: 'NOSSO', addrStart: '22 promenade Claude Lévi-Strauss', count: 1 },
    // 14eme
    { nameStart: 'MOSUKE*', addrStart: '11 rue Raymond Losserand', count: 1 },
    // 15eme
    { nameStart: 'LA PLAGE PARISIENNE', addrStart: '200 port Javel Haut', count: 1 },
    // 16eme
    { nameStart: 'BELLEFEUILLE', addrStart: '5 place du Chancelier Adenauer', count: 6 }, // Verify
    // 17eme
    { nameStart: 'CORETTA', addrStart: '151 bis rue Cardinet', count: 3 },
    // 18eme
    { nameStart: 'CHANTOISEAU', addrStart: '63 rue Lepic', count: 1 },
    // Regions
    { nameStart: 'LE GRAND CONTROLE*', addrStart: '12 r l’Indépendance américaine', count: 13 }
];

let allRestaurants = [];

// Function to find index of line containing text
function findIndex(text, startFrom = 0) {
    for (let i = startFrom; i < lines.length; i++) {
        if (lines[i].includes(text.split('(')[0].trim())) return i;
    }
    return -1;
}

// We iterate ranges and extract
let currentIdx = 0;
ranges.forEach(r => {
    let nIdx = findIndex(r.nameStart, currentIdx);
    if (nIdx === -1) {
        console.error('Could not find start of names:', r.nameStart);
        return;
    }

    // Names are usually separated by empty lines in raw file but we filtered them.
    // In filtered lines (non-empty), they should be contiguous?
    // Let's check the file content again.
    // The view_file output showed empty lines. "836: empty 837: empty 838: address".
    // "828: DIVELLEC 829: empty 830: LES OMBRES".
    // So in `lines` (filtered), they are contiguous.

    // Addresses start later.
    let aIdx = findIndex(r.addrStart, nIdx);
    if (aIdx === -1) {
        console.error('Could not find start of addresses:', r.addrStart);
        return;
    }

    // Extract
    for (let i = 0; i < r.count; i++) {
        let name = lines[nIdx + i];
        let addr = lines[aIdx + i];
        allRestaurants.push({ name, address: addr });
    }
    currentIdx = aIdx + r.count;
});

console.log(JSON.stringify(allRestaurants, null, 2));
