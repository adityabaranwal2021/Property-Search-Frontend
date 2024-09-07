// Property data
const properties = [
  { name: 'Sky Dandelions', type: 'Apartment', price: 22000, rating: 4.9, location: 'Sector 28, Gurgaon' },
  { name: 'Wings Tower', type: 'Apartment', price: 17000, rating: 4.9, location: 'Sector 27, Gurgaon' },
  { name: 'Wayside Modern', type: 'House', price: 18000, rating: 4.4, location: 'MG Road, Gurgaon' },
  { name: 'Sunset Vista', type: 'Villa', price: 25000, rating: 4.7, location: 'Palm Avenue, Goa' },
  { name: 'Green Heights', type: 'Apartment', price: 30000, rating: 4.8, location: 'Churchgate, Mumbai' },
  { name: 'Horizon Villas', type: 'Villa', price: 35000, rating: 4.6, location: 'Whitefield, Bangalore' },
];
  
  // Display properties on page load
  function displayProperties(propertyList) {
    const propertyContainer = document.getElementById('property-list');
    propertyContainer.innerHTML = '';  // Clear existing content
    propertyList.forEach((property, index) => {
      const card = document.createElement('div');
      card.classList.add('property-card');
      card.innerHTML = `
        <h2>${property.name}</h2>
        <p>${property.type}</p>
        <p class="property-price">₹${property.price}/month</p>
        <p class="property-rating">Rating: ${property.rating} ★</p>
        <p>${property.location}</p>
        <button onclick="viewDetails(${index})">View Details</button>
      `;
      propertyContainer.appendChild(card);
    });
  }
  
  // Initial display
  displayProperties(properties);
  
  // Open the Property Details modal
  function viewDetails(index) {
    const property = properties[index];
    document.getElementById('modalTitle').textContent = property.name;
    document.getElementById('modalType').textContent = property.type;
    document.getElementById('modalPrice').textContent = `₹${property.price}/month`;
    document.getElementById('modalRating').textContent = `Rating: ${property.rating} ★`;
    document.getElementById('modalLocation').textContent = property.location;
    document.getElementById('propertyModal').classList.remove('hidden');
    document.getElementById('propertyModal').style.display = 'block';
  }
  
  // Close Property Details modal
  function closeModal() {
    document.getElementById('propertyModal').classList.add('hidden');
    setTimeout(() => {
      document.getElementById('propertyModal').style.display = 'none';
    }, 300);
  }
  
  // Open Rent Offer modal
  function openRentOfferModal() {
    document.getElementById('propertyModal').classList.add('hidden');
    setTimeout(() => {
      document.getElementById('propertyModal').style.display = 'none';
      document.getElementById('rentOfferModal').classList.remove('hidden');
      document.getElementById('rentOfferModal').style.display = 'block';
    }, 300);
  }
  
  // Close Rent Offer modal
  function closeRentOfferModal() {
    document.getElementById('rentOfferModal').classList.add('hidden');
    setTimeout(() => {
      document.getElementById('rentOfferModal').style.display = 'none';
    }, 300);
  }
  
  // Confirm Rent Offer
  function confirmRentOffer() {
    alert('Rent Offer Confirmed!');
    closeRentOfferModal();
  }
  
  // Filter properties by location
  function filterProperties() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredProperties = properties.filter(property => property.location.toLowerCase().includes(query));
    displayProperties(filteredProperties);
  }
  
  // Sort properties
  function sortProperties() {
    const sortBy = document.getElementById('sortOptions').value;
    const sortedProperties = [...properties];  // Create a copy to avoid mutating the original array
  
    if (sortBy === 'price') {
      sortedProperties.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'rating') {
      sortedProperties.sort((a, b) => b.rating - a.rating);
    }
  
    displayProperties(sortedProperties);
  }
  
  function confirmOffer() {
    document.getElementById('confirmation-modal').classList.remove('hidden');
  }
  
  function completeTransaction() {
    alert('Transaction Completed!');
    // Redirect or update page as needed
  }
  
  function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => step.classList.add('hidden'));
    document.getElementById('step-' + stepNumber).classList.remove('hidden');
  }
  
  function completeOnboarding() {
    alert('Onboarding Complete!');
    // Redirect or process further
  }
  