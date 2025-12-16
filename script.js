// Restaurant Data
const restaurants = [
    // --- PARIS ---
    { name: "114 Faubourg", address: "114 Rue du Faubourg Saint-Honoré, 75008 Paris", lat: 48.8732, lng: 2.3134, type: "Gastronomique", stars: "1 Star" },
    { name: "Allard", address: "41 rue Saint-André-des-Arts, 75006 Paris", lat: 48.8533, lng: 2.3411, type: "Bistrot", stars: "" },
    { name: "Apicius", address: "20 Rue d'Artois, 75008 Paris", lat: 48.8731, lng: 2.3082, type: "Gastronomique", stars: "" },
    { name: "Benoit Paris", address: "20 Rue Saint-Martin, 75004 Paris", lat: 48.8584, lng: 2.3481, type: "Bistrot", stars: "1 Star" },
    { name: "Alléno Paris", address: "Carré des Champs-Élysées, 8 Avenue Dutuit, 75008 Paris", lat: 48.8661, lng: 2.3164, type: "Gastronomique", stars: "3 Stars" },
    { name: "Brasserie Lutetia", address: "45 Boulevard Raspail, 75006 Paris", lat: 48.8511, lng: 2.3270, type: "Brasserie", stars: "" },
    { name: "L'Oiseau Blanc", address: "19 Avenue Kléber, 75116 Paris", lat: 48.8698, lng: 2.2926, type: "Gastronomique", stars: "2 Stars" },
    { name: "Septime", address: "80 Rue de Charonne, 75011 Paris", lat: 48.8539, lng: 2.3807, type: "Moderne", stars: "1 Star" },
    { name: "Frenchie", address: "5 Rue du Nil, 75002 Paris", lat: 48.8676, lng: 2.3475, type: "Moderne", stars: "1 Star" },
    { name: "Epicure", address: "112 Rue du Faubourg Saint-Honoré, 75008 Paris", lat: 48.8728, lng: 2.3137, type: "Gastronomique", stars: "3 Stars" },
    { name: "Beefbar Paris", address: "5 Rue Marbeuf, 75008 Paris", lat: 48.8675, lng: 2.3036, type: "Viandes", stars: "" },
    { name: "Chocho", address: "54 Rue de Paradis, 75010 Paris", lat: 48.8760, lng: 2.3524, type: "Moderne", stars: "" },
    { name: "Clown Bar", address: "114 Rue Amelot, 75011 Paris", lat: 48.8637, lng: 2.3686, type: "Bistrot", stars: "" },
    { name: "Coya Paris", address: "83-85 Rue du Bac, 75007 Paris", lat: 48.8542, lng: 2.3241, type: "Péruvien", stars: "" },
    { name: "Daroco Bourse", address: "6 Rue Vivienne, 75002 Paris", lat: 48.8685, lng: 2.3397, type: "Italien", stars: "" },
    { name: "19.20 by Norbert Tarayre", address: "33 Avenue George V, 75008 Paris", lat: 48.8690, lng: 2.3006, type: "Bistrot", stars: "" },
    { name: "Alain Ducasse Baccarat", address: "11 Place des États-Unis, 75116 Paris", lat: 48.8672, lng: 2.2933, type: "Gastronomique", stars: "" },

    // --- RIVIERA (Antibes, Cannes, Monaco, St-Tropez, etc.) ---
    { name: "MAMO MICHELANGELO", address: "4 Rue des Cordiers, 06600 Antibes", lat: 43.5806, lng: 7.1246, type: "Italien", stars: "" },
    { name: "Les Pêcheurs", address: "10 Bd Maréchal Juin, 06160 Antibes", lat: 43.5574, lng: 7.1264, type: "Gastronomique", stars: "1 Star" },
    { name: "La Môme Plage", address: "44 boulevard de la Croisette, 06400 Cannes", lat: 43.5487, lng: 7.0270, type: "Plage", stars: "" },
    { name: "La Palme d'Or", address: "73 boulevard de la Croisette, 06400 Cannes", lat: 43.5478, lng: 7.0245, type: "Gastronomique", stars: "2 Stars" },
    { name: "La Guérite", address: "Ile Sainte-Marguerite, 06400 Cannes", lat: 43.5204, lng: 7.0423, type: "Méditerranéen", stars: "" },
    { name: "Le Louis XV - Alain Ducasse", address: "Place du Casino, 98000 Monaco", lat: 43.7386, lng: 7.4269, type: "Gastronomique", stars: "3 Stars" },
    { name: "Le Grill", address: "Place du Casino, 98000 Monaco", lat: 43.7397, lng: 7.4277, type: "Grill", stars: "1 Star" },
    { name: "Blue Bay", address: "40 Avenue Princesse Grace, 98000 Monaco", lat: 43.7480, lng: 7.4387, type: "Gastronomique", stars: "2 Stars" },
    { name: "La Vague d'Or", address: "Plage de la Bouillabaisse, 83990 Saint-Tropez", lat: 43.2687, lng: 6.6508, type: "Gastronomique", stars: "3 Stars" },
    { name: "Beefbar Saint-Tropez", address: "70 chemin du Pinet, 83990 Saint-Tropez", lat: 43.2570, lng: 6.6430, type: "Viandes", stars: "" },
    { name: "L'Amandier de Mougins", address: "48 Avenue Jean-Charles Mallet, 06250 Mougins", lat: 43.6000, lng: 7.0000, type: "Provençal", stars: "" }, // Approx
    { name: "Le Galion", address: "Nouveau Port de Menton, 06500 Menton", lat: 43.7800, lng: 7.5100, type: "Fruits de mer", stars: "" }, // Approx

    // --- ALPS (Courchevel, Megève, Val d'Isère) ---
    { name: "Le Sarkara", address: "238 Rue des Clarines, 73120 Courchevel", lat: 45.4162, lng: 6.6358, type: "Gastronomique", stars: "2 Stars" },
    { name: "Le Chabichou", address: "90 Rue Des Chenus, 73120 Courchevel 1850", lat: 45.4162, lng: 6.6302, type: "Gastronomique", stars: "2 Stars" },
    { name: "Flocons de Sel", address: "1775 Route du Leutaz, 74120 Megève", lat: 45.8365, lng: 6.6300, type: "Gastronomique", stars: "3 Stars" },
    { name: "La Dame de Pic - Le 1920", address: "447 Chemin de la Rocaille, 74120 Megève", lat: 45.8450, lng: 6.6250, type: "Gastronomique", stars: "1 Star" },
    { name: "Kaito Megève", address: "373 Chemin des Follières, 74120 Megève", lat: 45.8778, lng: 6.6346, type: "Japonais Fusion", stars: "" },
    { name: "Bambini Megève", address: "1306 Route Nationale, 74120 Megève", lat: 45.8650, lng: 6.6250, type: "Italien", stars: "" }, // Approx
    { name: "Kinugawa Megève", address: "199 rue Charles Feige, 74120 Megève", lat: 45.8570, lng: 6.6177, type: "Japonais", stars: "" }, // Approx
    { name: "La Table de l'Ours", address: "Montée de Bellevarde, 73150 Val-d'Isère", lat: 45.4480, lng: 6.9800, type: "Gastronomique", stars: "1 Star" },

    // --- MAJOR CITIES (Bordeaux, Lyon, Marseille, Versailles) ---
    { name: "Villa Oriana", address: "27 Rue Esprit des Lois, 33000 Bordeaux", lat: 44.8420, lng: -0.5700, type: "Italien", stars: "" }, // Approx
    { name: "Coco Lyon", address: "13 Place Jules Ferry, 69006 Lyon", lat: 45.7660, lng: 4.8600, type: "Brasserie", stars: "" }, // Approx
    { name: "Chez Vincent", address: "2 Bis Avenue des Chartreux, 13004 Marseille", lat: 43.3050, lng: 5.4000, type: "Traditionnel", stars: "" }, // Approx
    { name: "Le Grand Contrôle", address: "12 rue de l'Indépendance-Américaine, 78000 Versailles", lat: 48.8013, lng: 2.1200, type: "Gastronomique", stars: "1 Star" },

    // --- OTHER REGIONS ---
    { name: "Alchémille", address: "53 route de Lapoutroie, 68240 Kaysersberg", lat: 48.1396, lng: 7.2618, type: "Gastronomique", stars: "1 Star" },
    { name: "La Maison dans le Parc", address: "3 Rue Sainte-Catherine, 54000 Nancy", lat: 48.6946, lng: 6.1843, type: "Gastronomique", stars: "1 Star" },
    { name: "Le Verbois", address: "6 Hameau de la Grande Folie, 60740 Saint-Maximin", lat: 49.2222, lng: 2.4542, type: "Gastronomique", stars: "1 Star" },
    { name: "L'Odas", address: "Passage Maurice Lenfant, 76000 Rouen", lat: 49.4443, lng: 1.0924, type: "Gastronomique", stars: "1 Star" },
    { name: "Maximin Hellio", address: "64 Rue Gambetta, 14800 Deauville", lat: 49.3592, lng: 0.0751, type: "Gastronomique", stars: "1 Star" },
    { name: "L'Essentiel", address: "29 Rue Mirabeau, 14800 Deauville", lat: 49.3601, lng: 0.0794, type: "Gastronomique", stars: "1 Star" },
    { name: "L'Atre", address: "25 Cours des Fossés, 14600 Honfleur", lat: 49.4190, lng: 0.2347, type: "Gastronomique", stars: "" }
];

// Initialize Map
const map = L.map('map', {
    zoomControl: false,
    preferCanvas: true // Optimization: Use Canvas instead of DOM elements
}).setView([46.603354, 1.888334], 6); // Default view of France

// ... (Rest of code remains similar until search listener)

// Add Tile Layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
}).addTo(map);

// Add Zoom Control
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
            ? `<div class="stars-badge"><i class='bx bxs-star'></i> ${restaurant.stars}</div>`
            : '';

        // Dynamic links
        const searchQuery = encodeURIComponent(`${restaurant.name} restaurant ${restaurant.address}`);
        const websiteUrl = `https://www.google.com/search?q=${searchQuery}`; // "Visit Website" via search
        const directionsQuery = encodeURIComponent(`${restaurant.name}, ${restaurant.address}`);
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${directionsQuery}`;

        card.innerHTML = `
            <div class="card-header">
                <h3>${restaurant.name}</h3>
                ${starHtml}
            </div>
            <div class="location-row">
                <i class='bx bx-map'></i>
                <span>${restaurant.address}</span>
            </div>
            <div class="card-footer">
                <span class="tag">${restaurant.type}</span>
                <div class="card-actions">
                    <a href="${directionsUrl}" target="_blank" class="action-link secondary" onclick="event.stopPropagation()" title="Itinéraire">
                        <i class='bx bx-trip'></i>
                    </a>
                    <a href="${websiteUrl}" target="_blank" class="action-link primary" onclick="event.stopPropagation()" title="Site Web">
                        <i class='bx bx-globe'></i> Site
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
                <p><i class='bx bx-map' style="margin-right:4px;"></i> ${restaurant.address}</p>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:12px; gap:10px;">
                    <div class="popup-tag">${restaurant.type}</div>
                    <div style="display:flex; gap:8px;">
                        <a href="${directionsUrl}" target="_blank" class="popup-icon-link" title="Itinéraire">
                            <i class='bx bx-trip'></i>
                        </a>
                        <a href="${websiteUrl}" target="_blank" class="popup-icon-link" title="Site Web">
                            <i class='bx bx-globe'></i>
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
            toggleBtn.innerHTML = "<i class='bx bx-list-ul'></i> Liste";
            // Map needs a resize event to render correctly when revealing from hidden/zero-size
            setTimeout(() => { map.invalidateSize(); }, 300);
        } else {
            container.classList.remove('show-map');
            toggleBtn.innerHTML = "<i class='bx bx-map-alt'></i> Carte";
        }
    });
}

// Ensure map is properly sized on load mainly for desktop splits
window.addEventListener('load', () => {
    map.invalidateSize();
});

// Initial Render
renderList(restaurants);
initMarkers();
