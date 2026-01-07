
// Toggle Navigation
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');
const navButtons = document.querySelector('.nav-buttons');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleBtn.querySelector('i').classList.toggle('fa-bars');
    toggleBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.querySelector('i').classList.add('fa-bars');
        toggleBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Gallery Data
const galleryItems = [
    {
        title: "AI Dashboard",
        icon: "fas fa-chart-bar",
        color: "#ff6600",
        desc: "Interactive AI-powered analytics dashboard"
    },
    {
        title: "Predictive Models",
        icon: "fas fa-brain",
        color: "#ff8c42",
        desc: "Advanced machine learning models for forecasting"
    },
    {
        title: "Data Visualization",
        icon: "fas fa-chart-pie",
        color: "#ffa726",
        desc: "Beautiful and insightful data visualizations"
    },
    {
        title: "Automation Workflow",
        icon: "fas fa-cogs",
        color: "#ffb74d",
        desc: "Streamlined automation processes"
    },
    {
        title: "Mobile Analytics",
        icon: "fas fa-mobile-alt",
        color: "#ffcc80",
        desc: "AI insights on mobile devices"
    },
    {
        title: "Security AI",
        icon: "fas fa-shield-alt",
        color: "#ffe0b2",
        desc: "AI-powered security monitoring"
    },
    {
        title: "Customer Insights",
        icon: "fas fa-users",
        color: "#fff3e0",
        desc: "Deep customer behavior analysis"
    },
    {
        title: "Real-time Analytics",
        icon: "fas fa-bolt",
        color: "#ffecb3",
        desc: "Live data processing and insights"
    }
];

// Create Gallery
const galleryGrid = document.getElementById('galleryGrid');

galleryItems.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <div style="width: 100%; height: 100%; background: ${item.color}; display: flex; align-items: center; justify-content: center; color: white;">
            <i class="${item.icon}" style="font-size: 4rem;"></i>
        </div>
        <div class="gallery-overlay">
            <h4 style="color: white; margin-bottom: 0.5rem;">${item.title}</h4>
            <p style="color: rgba(255, 255, 255, 0.9); font-size: 0.9rem; margin: 0;">${item.desc}</p>
        </div>
    `;
    
    galleryItem.addEventListener('click', () => {
        openGalleryModal(index);
    });
    
    galleryGrid.appendChild(galleryItem);
});

// Gallery Modal
const galleryModal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.getElementById('closeModal');

function openGalleryModal(index) {
    const item = galleryItems[index];
    modalImg.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="${encodeURIComponent(item.color)}"/><text x="400" y="300" font-family="Arial" font-size="40" fill="white" text-anchor="middle" dy=".3em">${encodeURIComponent(item.title)}</text></svg>`;
    galleryModal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    galleryModal.style.display = 'none';
});

galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.style.display = 'none';
    }
});

// Active Navigation
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '0.2rem 0';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = 'var(--shadow-lg)';
    }
});

// Pricing card interaction
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = card.classList.contains('featured') 
            ? 'scale(1.05) translateY(-10px)' 
            : 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = card.classList.contains('featured') 
            ? 'scale(1.05)' 
            : 'translateY(0)';
    });
});
// Add hover effects and animations for orange theme
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.gallery-card');
    
    cards.forEach(card => {
        // Add click animation
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            this.style.boxShadow = '0 4px 20px rgba(255, 123, 0, 0.4)';
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 200);
        });
        
        // Add random rotation for visual interest (slight variations)
        const randomRotation = Math.random() * 1.5 - 0.75; // -0.75 to 0.75 degrees
        card.style.transform = `rotate(${randomRotation}deg)`;
        
        // Add orange glow on hover
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(0deg)';
            this.style.boxShadow = '0 20px 40px rgba(255, 123, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = `translateY(0) rotate(${randomRotation}deg)`;
            this.style.boxShadow = '0 8px 30px rgba(255, 123, 0, 0.12)';
        });
    });
    
    // Animate cards on scroll with orange theme
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) rotate(0deg)';
                entry.target.style.borderColor = 'rgba(255, 123, 0, 0.3)';
            }
        });
    }, observerOptions);
    
    // Initially set cards for animation
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) rotate(2deg)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(card);
    });
    
    // Add orange pulsing effect to featured card
    const featuredCard = document.querySelector('.gallery-card.featured');
    if (featuredCard) {
        setInterval(() => {
            featuredCard.style.boxShadow = '0 0 20px rgba(255, 123, 0, 0.6)';
            setTimeout(() => {
                if (document.activeElement !== featuredCard) {
                    featuredCard.style.boxShadow = '0 8px 30px rgba(255, 123, 0, 0.12)';
                }
            }, 800);
        }, 4000);
    }
});