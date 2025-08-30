   // Mobile menu toggle
    document.getElementById('mobile-menu').addEventListener('click', function() {
      document.getElementById('nav-menu').classList.toggle('show');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          document.getElementById('nav-menu').classList.remove('show');
        }
      });
    });

    // Scroll to section function
    function scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Initialize map
    const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India

    // Add base layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample data for resources (in a real app, this would come from a database)
    const hospitals = [
      {name: "City General Hospital", lat: 19.0760, lng: 72.8777, type: "hospital"},
      {name: "Central Medical Center", lat: 28.6139, lng: 77.2090, type: "hospital"},
      {name: "Emergency Care Unit", lat: 13.0827, lng: 80.2707, type: "hospital"}
    ];

    const shelters = [
      {name: "Community Shelter North", lat: 19.0760, lng: 72.8777, type: "shelter"},
      {name: "Red Cross Emergency Shelter", lat: 28.6139, lng: 77.2090, type: "shelter"},
      {name: "City Evacuation Center", lat: 13.0827, lng: 80.2707, type: "shelter"}
    ];

    let resourceMarkers = [];

    // Function to show hospitals on map
    function showHospitals() {
      clearMap();
      hospitals.forEach(hospital => {
        const marker = L.marker([hospital.lat, hospital.lng])
          .addTo(map)
          .bindPopup(`<b>${hospital.name}</b><br>Hospital<br><button class="btn" onclick="alert('Directions would be shown here in a real application')">Get Directions</button>`);
        resourceMarkers.push(marker);
      });
    }

    // Function to show shelters on map
    function showShelters() {
      clearMap();
      shelters.forEach(shelter => {
        const marker = L.marker([shelter.lat, shelter.lng])
          .addTo(map)
          .bindPopup(`<b>${shelter.name}</b><br>Emergency Shelter<br><button class="btn" onclick="alert('Directions would be shown here in a real application')">Get Directions</button>`);
        resourceMarkers.push(marker);
      });
    }

    // Function to show all resources
    function showAll() {
      clearMap();
      showHospitals();
      showShelters();
    }

    // Function to clear all markers from map
    function clearMap() {
      resourceMarkers.forEach(marker => {
        map.removeLayer(marker);
      });
      resourceMarkers = [];
    }

    // Form submission handling
    document.getElementById('damage-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reporting the damage. Emergency services have been notified.');
      this.reset();
    });

    document.getElementById('assistance-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Your assistance request has been received. Help will be dispatched soon.');
      this.reset();
    });

    // Try to get user's location (with fallback)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          map.setView([position.coords.latitude, position.coords.longitude], 13);
          L.marker([position.coords.latitude, position.coords.longitude])
            .addTo(map)
            .bindPopup('Your location')
            .openPopup();
        },
        function(error) {
          console.log('Geolocation error:', error);
          // Use default view (already set)
        }
      );
    }