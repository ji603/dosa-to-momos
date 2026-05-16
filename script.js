// Sticky Navigation
window.addEventListener('scroll', () => {
    const header = document.querySelector('.sticky-header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-toggle') && !e.target.closest('.nav-links')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu when clicking a link
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menu Filter
const menuCategories = document.querySelectorAll('.menu-category');
const menuItems = document.querySelectorAll('.menu-item');

menuCategories.forEach(category => {
    category.addEventListener('click', () => {
        // Remove active class from all categories
        menuCategories.forEach(cat => cat.classList.remove('active'));
        // Add active class to clicked category
        category.classList.add('active');
        
        const selectedCategory = category.dataset.category;
        
        // Add animation classes for smooth transitions
        menuItems.forEach(item => {
            if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Initialize menu items with animation properties
menuItems.forEach(item => {
    item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    item.style.opacity = '1';
});

// Google Maps Integration
function initMap() {
    // Map is now loaded via iframe in the HTML
    console.log("Map is loaded via iframe");
}

// Form Submission
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically send the data to a server
    // For demo purposes, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Reset form
    e.target.reset();
});

document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get email value
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (!email) {
        alert('Please enter your email');
        return;
    }
    
    // Here you would typically send the data to a server
    // For demo purposes, we'll just show a success message
    alert(`Thank you! You've been subscribed to our newsletter.`);
    
    // Reset form
    e.target.reset();
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.style.display = 'none';
        testimonial.style.opacity = '0';
        testimonial.style.transform = 'translateX(20px)';
    });
    
    testimonials[index].style.display = 'block';
    
    // Trigger reflow
    testimonials[index].offsetWidth;
    
    testimonials[index].style.opacity = '1';
    testimonials[index].style.transform = 'translateX(0)';
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize testimonials with transition properties
testimonials.forEach(testimonial => {
    testimonial.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Change testimonial every 5 seconds
setInterval(nextTestimonial, 5000);
showTestimonial(0);


