const fs = require('fs');
const https = require('https');

// Load parsed
const parsed = JSON.parse(fs.readFileSync('restaurants_parsed.json', 'utf-8'));

// Load existing names from script.js roughly
const scriptContent = fs.readFileSync('script.js', 'utf-8');
const existingNames = [];
const nameRegex = /name:\s*"([^"]+)"/g;
let match;
while ((match = nameRegex.exec(scriptContent)) !== null) {
    existingNames.push(match[1].toUpperCase());
}

// Filter
const toAdd = parsed.filter(p => !existingNames.some(e => e.includes(p.name.toUpperCase()) || p.name.toUpperCase().includes(e)));

console.log(`Found ${toAdd.length} new restaurants to geocode.`);

// Geocode function
function geocode(address) {
    return new Promise((resolve) => {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;
        const options = {
            headers: { 'User-Agent': 'AmexDiningMap/1.0 (Student Project)' }
        };

        https.get(url, options, (res) => {
            let data = '';
            res.on('data', c => data += c);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json && json.length > 0) {
                        resolve({ lat: json[0].lat, lon: json[0].lon });
                    } else {
                        resolve(null);
                    }
                } catch (e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

// Process sequentially with delay
async function processAll() {
    const results = [];
    for (const r of toAdd) {
        console.log(`Geocoding ${r.name}...`);
        const coords = await geocode(r.address + ", France");
        if (coords) {
            results.push({ ...r, lat: coords.lat, lng: coords.lon });
        } else {
            console.log(`Failed to geocode: ${r.name}`);
            // Keep it but with 0,0 or omit? Omit for map safety, or manual fix later.
            // We'll keep it with null to strip later.
            results.push({ ...r, lat: null, lng: null });
        }
        // 1.5s delay
        await new Promise(res => setTimeout(res, 1500));
    }

    fs.writeFileSync('restaurants_geocoded.json', JSON.stringify(results, null, 2));
    console.log('Done.');
}

processAll();
