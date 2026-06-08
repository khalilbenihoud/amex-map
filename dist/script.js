let restaurants = [];

// Load restaurant data
fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data => {
        restaurants = data.map(prepareRestaurant);
        initializeApp();
    })
    .catch(error => {
        console.error('Error loading restaurant data:', error);
        restaurants = []; // Fallback to empty array
        showLoadError();
    });

// Icons
const ICONS = {
    star: '<svg class="icon" viewBox="0 0 22.0527 22.1191"><path d="M4.16109 20.5469C4.56149 20.8594 5.0693 20.752 5.67477 20.3125L10.8408 16.5137L16.0166 20.3125C16.622 20.752 17.1201 20.8594 17.5302 20.5469C17.9306 20.2441 18.0185 19.7461 17.7744 19.0332L15.7334 12.959L20.9482 9.20898C21.5537 8.7793 21.7978 8.33008 21.6416 7.8418C21.4853 7.37305 21.0263 7.14844 20.2744 7.14844L13.8779 7.14844L11.9345 1.08398C11.7002 0.361328 11.3486 0 10.8408 0C10.3427 0 9.99117 0.361328 9.7568 1.08398L7.81344 7.14844L1.41695 7.14844C0.665001 7.14844 0.206017 7.37305 0.0497668 7.8418C-0.116249 8.33008 0.137657 8.7793 0.743126 9.20898L5.95797 12.959L3.91695 19.0332C3.67281 19.7461 3.7607 20.2441 4.16109 20.5469Z"/></svg>',
    map: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'
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
const restaurantById = {};
const listContainer = document.getElementById('restaurant-list');
const searchInput = document.getElementById('restaurant-search');
const clearButton = document.getElementById('clear-search');
const cuisineFilter = document.getElementById('cuisine-filter');
const starsFilter = document.getElementById('stars-filter');
const clearAllButton = document.getElementById('clear-all-filters');
const featureGroup = L.featureGroup();
const markerLayer = L.layerGroup().addTo(map);
const activeFilters = {
    cuisine: '',
    stars: ''
};
let visibleMarkers = [];

function isMobileLayout() {
    return window.matchMedia('(max-width: 768px)').matches;
}

function fitMapToMarkerGroup(group) {
    if (!group || !group.getLayers().length) return;

    const options = isMobileLayout()
        ? {
            paddingTopLeft: [20, 170],
            paddingBottomRight: [20, Math.round(window.innerHeight * 0.46)]
        }
        : { padding: [36, 36] };

    map.fitBounds(group.getBounds().pad(0.08), options);
}

function createRestaurantIcon(isStarred) {
    const markerClass = isStarred ? 'marker-circle starred' : 'marker-circle';
    const iconPath = isStarred
        ? 'M4.16109 20.5469C4.56149 20.8594 5.0693 20.752 5.67477 20.3125L10.8408 16.5137L16.0166 20.3125C16.622 20.752 17.1201 20.8594 17.5302 20.5469C17.9306 20.2441 18.0185 19.7461 17.7744 19.0332L15.7334 12.959L20.9482 9.20898C21.5537 8.7793 21.7978 8.33008 21.6416 7.8418C21.4853 7.37305 21.0263 7.14844 20.2744 7.14844L13.8779 7.14844L11.9345 1.08398C11.7002 0.361328 11.3486 0 10.8408 0C10.3427 0 9.99117 0.361328 9.7568 1.08398L7.81344 7.14844L1.41695 7.14844C0.665001 7.14844 0.206017 7.37305 0.0497668 7.8418C-0.116249 8.33008 0.137657 8.7793 0.743126 9.20898L5.95797 12.959L3.91695 19.0332C3.67281 19.7461 3.7607 20.2441 4.16109 20.5469Z'
        : 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z';
    const viewBox = isStarred ? '0 0 22.0527 22.1191' : '0 0 24 24';

    return L.divIcon({
        className: 'custom-marker',
        html: `<div class="${markerClass}"><svg viewBox="${viewBox}" width="16" height="16" fill="currentColor"><path d="${iconPath}"/></svg></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -22]
    });
}

function normalizeSearch(value) {
    return String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

function getStarsLabel(stars) {
    if (!stars) return 'no stars sans etoile';
    return `${stars} michelin etoile starred distinction`;
}

function formatStars(stars) {
    if (stars === '1 Star') return '1 étoile';
    if (stars === '2 Stars') return '2 étoiles';
    if (stars === '3 Stars') return '3 étoiles';
    return stars;
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function getRestaurantSearchText(restaurant) {
    return normalizeSearch([
        restaurant.name,
        restaurant.address,
        restaurant.type,
        getStarsLabel(restaurant.stars),
        restaurant.rating
    ].filter(Boolean).join(' '));
}

function prepareRestaurant(restaurant, index) {
    return {
        ...restaurant,
        id: `restaurant-${index}`,
        searchText: getRestaurantSearchText(restaurant)
    };
}

function hasActiveFilters() {
    return Boolean(searchInput.value.trim() || activeFilters.cuisine || activeFilters.stars);
}

function updateFilterMeta() {
    if (clearAllButton) {
        clearAllButton.classList.toggle('visible', hasActiveFilters());
    }
}

function updateChipState(type, value) {
    const group = type === 'cuisine' ? cuisineFilter : starsFilter;
    if (!group) return;

    group.querySelectorAll('.filter-chip').forEach(chip => {
        const isActive = chip.dataset.filterValue === value;
        chip.classList.toggle('active', isActive);
        chip.setAttribute('aria-pressed', String(isActive));
    });
}

function setFilter(type, value) {
    activeFilters[type] = value;
    updateChipState(type, value);
    filterList(searchInput.value);
}

function showLoadError() {
    listContainer.innerHTML = '<div class="empty-state">Impossible de charger les restaurants pour le moment.</div>';
    if (clearAllButton) {
        clearAllButton.classList.remove('visible');
    }
}

// Render restaurant list
function renderList(items) {
    if (!items.length) {
        listContainer.innerHTML = '<div class="empty-state">Aucun restaurant trouvé</div>';
        return;
    }

    const fragment = document.createDocumentFragment();

    items.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = restaurant.stars ? 'restaurant-card starred' : 'restaurant-card';
        card.dataset.restaurantId = restaurant.id;
        restaurantById[restaurant.id] = restaurant;

        const starHtml = restaurant.stars
            ? `<div class="stars-badge">${ICONS.star} ${escapeHtml(formatStars(restaurant.stars))}</div>`
            : '';

        const ratingHtml = restaurant.rating
            ? `<div class="rating-badge">${ICONS.star} ${escapeHtml(restaurant.rating)}</div>`
            : '<div class="rating-badge unrated">Non noté</div>';

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title-block">
                    <h3>${escapeHtml(restaurant.name)}</h3>
                    <div class="cuisine-row">${escapeHtml(restaurant.type)}</div>
                </div>
                <div class="card-badges">
                    ${ratingHtml}
                    ${starHtml}
                </div>
            </div>
            <div class="location-row">
                ${ICONS.map}
                <span>${escapeHtml(restaurant.address)}</span>
            </div>
        `;

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
    markerLayer.clearLayers();

    restaurants.forEach(restaurant => {
        if (!Number.isFinite(restaurant.lat) || !Number.isFinite(restaurant.lng)) return;

        const marker = L.marker([restaurant.lat, restaurant.lng], {
            icon: createRestaurantIcon(Boolean(restaurant.stars))
        });

        const popupContent = `
            <div class="custom-popup">
                <h3>${escapeHtml(restaurant.name)}</h3>
                <span class="popup-type">${escapeHtml(restaurant.type)}</span>
            </div>
        `;

        marker.bindPopup(popupContent, {
            closeButton: false,
            className: 'minimal-popup'
        });
        marker.addTo(markerLayer);
        marker.addTo(featureGroup);

        marker.on('click', () => {
            document.querySelectorAll('.restaurant-card').forEach(c => c.classList.remove('active'));
            if (restaurant.element) {
                restaurant.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                restaurant.element.classList.add('active');
            }
        });

        restaurant.marker = marker;
    });

    // Fit map to show all markers
    if (restaurants.length > 0) {
        fitMapToMarkerGroup(featureGroup);
    }
}

// Generate LocalBusiness structured data for top restaurants
function generateLocalBusinessSchema() {
    // Limit to 10 restaurants to avoid overwhelming the page
    const topRestaurants = restaurants.slice(0, 10);

    const graph = topRestaurants.map(restaurant => {
        const addressParts = restaurant.address.split(',');
        const schema = {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": restaurant.name,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": addressParts[0],
                "addressLocality": addressParts[addressParts.length - 1].trim(),
                "addressCountry": "FR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": restaurant.lat,
                "longitude": restaurant.lng
            },
            "servesCuisine": restaurant.type
        };

        // Add rating if available
        if (restaurant.rating) {
            schema.aggregateRating = {
                "@type": "AggregateRating",
                "ratingValue": restaurant.rating,
                "bestRating": "5"
            };
        }

        return schema;
    });

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": graph
    });
    document.head.appendChild(script);
}

// Initialize filters
function initializeFilters() {
    if (!restaurants.length) return;

    // Extract unique cuisine types
    const cuisineTypes = [...new Set(restaurants.map(r => r.type))].sort();
    const fragment = document.createDocumentFragment();

    cuisineTypes.forEach(type => {
        const button = document.createElement('button');
        button.className = 'filter-chip';
        button.type = 'button';
        button.dataset.filterType = 'cuisine';
        button.dataset.filterValue = type;
        button.textContent = type;
        button.setAttribute('aria-pressed', 'false');
        fragment.appendChild(button);
    });

    cuisineFilter.appendChild(fragment);
    updateChipState('cuisine', activeFilters.cuisine);
    updateChipState('stars', activeFilters.stars);
}

// Get active filters
function getActiveFilters() {
    return {
        selectedCuisine: activeFilters.cuisine,
        selectedStars: activeFilters.stars
    };
}

// Filter functionality
function filterList(term) {
    const { selectedCuisine, selectedStars } = getActiveFilters();

    markerLayer.clearLayers();
    visibleMarkers = [];
    const normalizedTerm = normalizeSearch(term);

    restaurants.forEach(restaurant => {
        // Text search
        const matchesSearch = !normalizedTerm || restaurant.searchText.includes(normalizedTerm);

        // Cuisine filter
        const matchesCuisine = !selectedCuisine || selectedCuisine === restaurant.type;

        // Stars filter
        const matchesStars = !selectedStars ||
            (selectedStars === 'starred' && Boolean(restaurant.stars)) ||
            (selectedStars === 'null' && !restaurant.stars) ||
            selectedStars === restaurant.stars;

        const visible = matchesSearch && matchesCuisine && matchesStars;

        if (restaurant.element) {
            restaurant.element.style.display = visible ? 'block' : 'none';
        }

        if (visible && restaurant.marker) {
            restaurant.marker.addTo(markerLayer);
            visibleMarkers.push(restaurant.marker);
        }
    });

    // Handle empty state message
    let emptyState = listContainer.querySelector('.empty-state');
    if (visibleMarkers.length === 0) {
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
        const group = L.featureGroup(visibleMarkers);
        fitMapToMarkerGroup(group);
    }

    updateFilterMeta();
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
    clearButton.style.display = e.target.value.trim().length > 0 ? 'flex' : 'none';
    filterList(e.target.value);
}, 150);

// Event listeners
function initEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);

    listContainer.addEventListener('click', (event) => {
        const card = event.target.closest('.restaurant-card');
        if (!card) return;

        const restaurant = restaurantById[card.dataset.restaurantId];
        if (!restaurant || !restaurant.marker) return;

        map.flyTo([restaurant.lat, restaurant.lng], 16, { duration: 1.2 });
        restaurant.marker.openPopup();

        document.querySelectorAll('.restaurant-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        clearButton.style.display = 'none';
        filterList(searchInput.value);
        searchInput.focus();
    });

    document.querySelectorAll('.chip-row').forEach(group => {
        group.addEventListener('click', (event) => {
            const chip = event.target.closest('.filter-chip');
            if (!chip) return;

            setFilter(chip.dataset.filterType, chip.dataset.filterValue);
        });
    });

    clearAllButton.addEventListener('click', () => {
        searchInput.value = '';
        clearButton.style.display = 'none';
        activeFilters.cuisine = '';
        activeFilters.stars = '';
        updateChipState('cuisine', '');
        updateChipState('stars', '');
        filterList('');
    });

    // Map resize on load
    window.addEventListener('load', () => {
        map.invalidateSize();
    });

    window.addEventListener('resize', debounce(() => {
        map.invalidateSize();
        if (visibleMarkers.length) {
            fitMapToMarkerGroup(L.featureGroup(visibleMarkers));
        }
    }, 200));
}

// Initialize the application
function initializeApp() {
    initializeFilters();
    renderList(restaurants);
    initMarkers();
    visibleMarkers = restaurants.map(restaurant => restaurant.marker).filter(Boolean);
    initEventListeners();
    updateFilterMeta();
    generateLocalBusinessSchema();
}
