// script.js

// Function to navigate between pages
function navigate(page) {
    window.location.href = page;
}

// Add event listeners to navigation buttons if they exist
window.onload = function() {
    const homeBtn = document.getElementById('homeBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');

    if (homeBtn) homeBtn.addEventListener('click', () => navigate('index.html'));
    if (aboutBtn) aboutBtn.addEventListener('click', () => navigate('about.html'));
    if (contactBtn) contactBtn.addEventListener('click', () => navigate('contact.html'));

    // Add form submission event listener on Contact Us page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            alert('Thank you for contacting us! We will get back to you at ' + email);
            contactForm.reset();
        });
    }

    // Show recommendations if home page
    if (document.getElementById('recommendations')) {
        displayRecommendations();
    }
};

// Function to display travel recommendations
function displayRecommendations() {
    const recommendationsDiv = document.getElementById('recommendations');

    // Beach recommendations
    const beachSection = document.createElement('div');
    beachSection.innerHTML = `
        <h2>Beach Recommendations</h2>
        <img src="https://via.placeholder.com/300x200?text=Beach+1" alt="Beach 1">
        <img src="https://via.placeholder.com/300x200?text=Beach+2" alt="Beach 2">
    `;

    // Temple recommendations
    const templeSection = document.createElement('div');
    templeSection.innerHTML = `
        <h2>Temple Recommendations</h2>
        <img src="https://via.placeholder.com/300x200?text=Temple+1" alt="Temple 1">
        <img src="https://via.placeholder.com/300x200?text=Temple+2" alt="Temple 2">
    `;

    // Country-based recommendations
    const countrySection = document.createElement('div');
    countrySection.innerHTML = `
        <h2>Country Recommendations</h2>
        <img src="https://via.placeholder.com/300x200?text=Japan" alt="Japan">
        <img src="https://via.placeholder.com/300x200?text=Italy" alt="Italy">
    `;

    // Append all sections to the recommendations div
    recommendationsDiv.appendChild(beachSection);
    recommendationsDiv.appendChild(templeSection);
    recommendationsDiv.appendChild(countrySection);
}
