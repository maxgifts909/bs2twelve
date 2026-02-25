// Burger menu toggle
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!e.target.closest('.nav')) {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Modal functions
function openRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) modal.style.display = 'block';
}

function closeRegisterModal() {
    const modal = document.getElementById('registerModal');
    if (modal) modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('registerModal');
    if (event.target == modal) {
        closeRegisterModal();
    }
}

// Review form submission
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('reviewName').value;
        const rating = document.getElementById('reviewRating').value;
        const text = document.getElementById('reviewText').value;
        
        if (name && rating && text) {
            // Show notification
            showNotification('Спасибо за ваш отзыв! Мы ценим ваше мнение.');
            
            // Reset form
            reviewForm.reset();
        }
    });
}

// Notification function
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (notification) {
        const textElement = notification.querySelector('.notification-text');
        if (textElement) {
            textElement.textContent = message;
        }
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3500);
    }
}

// Product buy button click handler
const buyButtons = document.querySelectorAll('.btn-buy');
buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        showNotification(`"${productName}" добавлен в корзину!`);
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    burger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        }
    });
});
