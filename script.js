// ===== Intersection Observer for Scroll Animations =====
document.addEventListener('DOMContentLoaded', function () {
    initializeScrollAnimations();
    initializeFormHandler();
    initializeNavigation();
});

/**
 * Initialize Scroll Animations using Intersection Observer API
 */
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateElement(entry.target);
            } else {
                // Reset animation when element leaves viewport
                resetAnimation(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Apply animation to element based on data attribute
 */
function animateElement(element) {
    const animationType = element.getAttribute('data-animation') || 'fade-in-up';
    const animationDelay = element.getAttribute('data-delay') || '0s';

    // Convert hyphenated animation names to camelCase for CSS keyframes
    const camelCaseAnimation = animationType.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

    // Set animation styles
    element.style.animation = `${camelCaseAnimation} 0.6s ease-out forwards`;
    element.style.animationDelay = animationDelay;
    element.style.opacity = '1';

    // Add animation class
    element.classList.add(camelCaseAnimation);
}

/**
 * Reset animation when element leaves viewport
 */
function resetAnimation(element) {
    element.style.animation = 'none';
    element.style.opacity = '0';
    element.classList.remove('fadeInUp', 'fadeInRight', 'fadeInLeft', 'slideInLeft', 'slideInRight', 'slideInUp', 'zoomIn', 'rotate');
    
    // Trigger reflow to restart animation on next trigger
    void element.offsetWidth;
}

/**
 * Handle contact form submission
 */
function initializeFormHandler() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Show success message
            showNotification('Message sent successfully! We will get back to you soon.', 'success');
            
            // Reset form
            form.reset();
        });
    }
}

/**
 * Show notification message
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Smooth scroll navigation
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== Console message for developers =====
console.log('%c✨ Web Enhanced - Scroll Animations Loaded!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cScroll the page to see animations in action!', 'color: #6b7280; font-size: 12px;');
