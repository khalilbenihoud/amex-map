let restaurants = [];

// Load restaurant data
fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data => {
        restaurants = data;
        initializeApp();
    })
    .catch(error => {
        console.error('Error loading restaurant data:', error);
        restaurants = []; // Fallback to empty array
    });

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

// Global variables
const markers = {};
const listContainer = document.getElementById('restaurant-list');
const searchInput = document.getElementById('restaurant-search');
const clearButton = document.getElementById('clear-search');
const cuisineFilter = document.getElementById('cuisine-filter');
const starsFilter = document.getElementById('stars-filter');
const featureGroup = L.featureGroup();

// Render restaurant list
function renderList(items) {
    if (!items.length) {
        listContainer.innerHTML = '<div class="empty-state">Aucun restaurant trouvé</div>';
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';

        // Badges HTML
        const starHtml = restaurant.stars
            ? `<div class="stars-badge">${ICONS.star} ${restaurant.stars}</div>`
            : '';

        const ratingHtml = restaurant.rating
            ? `<div class="rating-badge"><span class="rating-star">★</span> ${restaurant.rating}</div>`
            : '';

        // Google Maps links
        const mapsSearchQuery = encodeURIComponent(`${restaurant.name}, ${restaurant.address}`);
        const websiteUrl = `https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}`;
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsSearchQuery}`;

        card.innerHTML = `
            <div class="card-header">
                <h3>${restaurant.name}</h3>
                ${starHtml}
                ${ratingHtml}
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
                map.flyTo([restaurant.lat, restaurant.lng], 16, { duration: 1.2 });
                marker.openPopup();

                document.querySelectorAll('.restaurant-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            }
        });

        restaurant.element = card;
        fragment.appendChild(card);
    });

    listContainer.innerHTML = '';
    listContainer.appendChild(fragment);
}

// Initialize map markers
function initMarkers() {
    if (!restaurants.length) return;

    featureGroup.clearLayers();

    restaurants.forEach(restaurant => {
        const marker = L.marker([restaurant.lat, restaurant.lng]);

        const mapsSearchQuery = encodeURIComponent(`${restaurant.name}, ${restaurant.address}`);
        const websiteUrl = `https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}`;
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsSearchQuery}`;

        const popupContent = `
            <div class="custom-popup">
                <h3>${restaurant.name}</h3>
                <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                    ${restaurant.stars ? `<div class="stars-badge" style="padding: 2px 6px; font-size: 0.7rem;">${ICONS.star} ${restaurant.stars}</div>` : ''}
                    ${restaurant.rating ? `<div class="rating-badge" style="padding: 2px 6px; font-size: 0.7rem;"><span class="rating-star">★</span> ${restaurant.rating}</div>` : ''}
                </div>
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

// Generate LocalBusiness structured data for top restaurants
function generateLocalBusinessSchema() {
    // Limit to 10 restaurants to avoid overwhelming the page
    const topRestaurants = restaurants.slice(0, 10);

    topRestaurants.forEach(restaurant => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": restaurant.name,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": restaurant.address.split(',')[0],
                "addressLocality": restaurant.address.split(',').pop().trim(),
                "addressCountry": "FR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": restaurant.lat,
                "longitude": restaurant.lng
            },
            "servesCuisine": restaurant.type,
            "paymentAccepted": "American Express"
        };

        // Add rating if available
        if (restaurant.rating) {
            schema.aggregateRating = {
                "@type": "AggregateRating",
                "ratingValue": restaurant.rating,
                "bestRating": "5"
            };
        }

        // Inject into document head
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    });
}

// Initialize filters
function initializeFilters() {
    if (!restaurants.length) return;

    // Clear existing options
    cuisineFilter.innerHTML = '<option value="">Toutes</option>';

    // Extract unique cuisine types
    const cuisineTypes = [...new Set(restaurants.map(r => r.type))].sort();
    const fragment = document.createDocumentFragment();

    cuisineTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        fragment.appendChild(option);
    });

    cuisineFilter.appendChild(fragment);
}

// Get active filters
function getActiveFilters() {
    return {
        selectedCuisine: cuisineFilter.value,
        selectedStars: starsFilter.value
    };
}

// Filter functionality
function filterList(term) {
    const { selectedCuisine, selectedStars } = getActiveFilters();

    // Clear existing markers from map
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer);
        }
    });

    const visibleRestaurants = [];

    restaurants.forEach(restaurant => {
        // Text search
        const matchesSearch = !term ||
            restaurant.name.toLowerCase().includes(term) ||
            restaurant.address.toLowerCase().includes(term);

        // Cuisine filter
        const matchesCuisine = !selectedCuisine || selectedCuisine === restaurant.type;

        // Stars filter
        const matchesStars = !selectedStars ||
            selectedStars === (restaurant.stars === null ? 'null' : restaurant.stars);

        const visible = matchesSearch && matchesCuisine && matchesStars;

        if (restaurant.element) {
            restaurant.element.style.display = visible ? 'block' : 'none';
        }

        if (visible) {
            markers[restaurant.name].addTo(map);
            visibleRestaurants.push(markers[restaurant.name]);
        }
    });

    // Handle empty state message
    let emptyState = listContainer.querySelector('.empty-state');
    if (visibleRestaurants.length === 0) {
        if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.textContent = 'Aucun restaurant trouvé';
            listContainer.appendChild(emptyState);
        }
        emptyState.style.display = 'block';
    } else {
        if (emptyState) {
            emptyState.style.display = 'none';
        }
        // Fit bounds to visible results
        const group = L.featureGroup(visibleRestaurants);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Debounce function for performance
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

// Search handler
const handleSearch = debounce((e) => {
    const term = e.target.value.toLowerCase();
    clearButton.style.display = term.length > 0 ? 'block' : 'none';
    filterList(term);
}, 150);

// Event listeners
function initEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        clearButton.style.display = 'none';
        filterList('');
        searchInput.focus();
    });

    // Filter listeners
    cuisineFilter.addEventListener('change', () => {
        const term = searchInput.value.toLowerCase();
        filterList(term);
    });

    starsFilter.addEventListener('change', () => {
        const term = searchInput.value.toLowerCase();
        filterList(term);
    });

    // Mobile toggle
    const toggleBtn = document.getElementById('toggle-map-btn');
    const container = document.querySelector('.container');
    let isMapVisible = false;

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isMapVisible = !isMapVisible;

            if (isMapVisible) {
                container.classList.add('show-map');
                toggleBtn.innerHTML = `${ICONS.list} Liste`;
                setTimeout(() => { map.invalidateSize(); }, 300);
            } else {
                container.classList.remove('show-map');
                toggleBtn.innerHTML = `${ICONS.mapAlt} Carte`;
            }
        });
    }

    // Map resize on load
    window.addEventListener('load', () => {
        map.invalidateSize();
    });

    // Modal functionality
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
}

// Initialize the application
function initializeApp() {
    initializeFilters();
    renderList(restaurants);
    initMarkers();
    initEventListeners();
    generateLocalBusinessSchema();
}