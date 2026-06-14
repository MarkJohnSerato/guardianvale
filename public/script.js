// Fetch and display testimonials
async function loadTestimonials() {
    try {
        const response = await fetch('/api/feedback');
        const feedbacks = await response.json();
        
        const container = document.getElementById('testimonials-container');
        if (feedbacks.length === 0) {
            container.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No testimonials yet. Be the first to share!</p>';
            return;
        }

        container.innerHTML = feedbacks.map(feedback => `
            <div class="testimonial-card">
                <div class="stars">${'⭐'.repeat(feedback.rating)}</div>
                <p>"${feedback.message}"</p>
                <div class="author">- ${feedback.name}</div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading testimonials:', error);
        document.getElementById('testimonials-container').innerHTML = 
            '<p style="text-align: center; grid-column: 1/-1;">Unable to load testimonials</p>';
    }
}
// Parallax effect for hero background carousel
  window.addEventListener('scroll', function() {
    const heroBg = document.getElementById('heroBg');
    let scrollPosition = window.pageYOffset;
    
    /* 0.4 controls the upward velocity speed. 
       Adjust up or down to make it move faster or slower */
    heroBg.style.transform = 'translateY(' + (scrollPosition * -0.4) + 'px)';
  });

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (response.ok) {
            alert(result.message);
            document.getElementById('contactForm').reset();
            document.getElementById('contact-modal').style.display = 'none';
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Error submitting contact form:', error);
        alert('An error occurred. Please try again.');
    }
});

// Handle feedback form submission
document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('feedbackName').value,
        email: document.getElementById('feedbackEmail').value,
        rating: parseInt(document.getElementById('feedbackRating').value),
        message: document.getElementById('feedbackMessage').value,
        feedbackType: document.getElementById('feedbackType').value
    };

    try {
        const response = await fetch('/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (response.ok) {
            alert(result.message);
            document.getElementById('feedbackForm').reset();
            loadTestimonials(); // Reload testimonials
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('An error occurred. Please try again.');
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contact-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Load testimonials on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTestimonials();
});

// Interactive cards: Navigate directly to the folder link
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Get the target URL from the href attribute
            const targetUrl = card.getAttribute('href');
            
            // If the card has a valid destination link, let it navigate there
            if (targetUrl && targetUrl !== '#' && targetUrl !== 'javascript:void(0)') {
                // Allow the browser to proceed to the target folder page
                window.location.href = targetUrl;
            } else {
                // Fallback: If it's just a placeholder hash, run your older grid logic
                e.preventDefault();
                const serviceId = card.dataset.service || ('card' + card.dataset.card);
                location.hash = 'service=' + serviceId;
                const servicesSection = document.getElementById('services');
                if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', '#service=' + serviceId);
            }
        });
    });

    // If arriving with a service hash, create corresponding service card
    const hash = location.hash;
    if (hash && hash.startsWith('#service=')) {
        const serviceId = hash.replace('#service=','');
        createServiceCard(serviceId);
    }
});

function createServiceCard(serviceId) {
    const servicesGrid = document.querySelector('.offers-grid') || document.getElementById('services-grid');
    if (!servicesGrid) return;

    // Create a new card element tailored to the serviceId
    const el = document.createElement('div');
    el.className = 'offer-card created';
    el.innerHTML = `
        <div class="offer-icon">📌</div>
        <h3>Details for ${serviceId}</h3>
        <p>This is a generated service card for <strong>${serviceId}</strong>. Replace with real content as needed.</p>
    `;
    // Append to the services grid
    servicesGrid.appendChild(el);
    // Optionally highlight
    setTimeout(() => el.scrollIntoView({behavior:'smooth', block:'center'}), 300);
}

//Multifamily
const modal = document.getElementById('imageModal');
const popupImg = document.getElementById('popupImg');
const popupCaption = document.getElementById('popupCaption');
const popupDescription = document.getElementById('popupDescription');

function openModal(cardElement) {
    const imgUrl = cardElement.querySelector('img').src;
    const titleText = cardElement.querySelector('.card-title').textContent;

    popupImg.src = imgUrl;
    popupCaption.textContent = titleText;

    // Inject description dynamically based on the clicked card title
    if (titleText.trim() === "Multifamily") {
        popupDescription.innerHTML = `
            <h4>Comprehensive Security for Residential Complexes</h4>
            <p>Guardian Vale provides tailored security solutions for apartment buildings, ensuring the safety of residents, visitors, and property. Our services include access control, CCTV monitoring, and emergency response planning. We work closely with building management to create a secure and comfortable living environment, giving residents peace of mind every day.</p>
        `;
    } else if (titleText.trim() === "Commercial") {
        popupDescription.innerHTML = `
            <h4>Reliable Corporate & Commercial Protection</h4>
            <p>Tailored monitoring and access control strategies designed to guard facilities, protect high-value assets, and maintain operations across office spaces and government structures securely.</p>
        `;
    } else if (titleText.trim() === "Car Dealerships") {
        popupDescription.innerHTML = `
            <h4>24/7 Asset and Perimeter Monitoring</h4>
            <p>Proactive physical surveillance systems optimized to secure extensive outdoor spaces, prevent inventory theft, and guard vehicle showrooms effectively against intrusion.</p>
        `;
    } else {
        popupDescription.innerHTML = "";
    }

    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        popupImg.src = '';
        popupDescription.innerHTML = ""; 
    }, 300);
}

// Global keyboard capture hook for the Escape key close action
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});