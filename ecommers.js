// JavaScript code for My E-commerce Website

// Sample function to add a product to the cart
function addToCart(productName, productPrice) {
    alert(`Added ${productName} to the cart for $${productPrice}.`);
    // Logic to add product details to the cart can be implemented here
}

// Attach event listeners to 'Add to Cart' buttons
window.addEventListener('DOMContentLoaded', (event) => {
    const cartButtons = document.querySelectorAll('.product-item button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').innerText;
            const productPrice = button.parentElement.querySelector('p').innerText.slice(1);
            addToCart(productName, productPrice);
        });
    });
});

// Form submission handling for contact section
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name && email && message) {
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset(); // Reset form fields after submission
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
}

// Function to simulate opening the cart (this can be expanded for real functionality)
function openCart() {
    alert('Cart functionality is not implemented yet. Stay tuned!');
}

// Add event listener to the cart link
const cartLink = document.querySelector("a[href='#cart']");
if (cartLink) {
    cartLink.addEventListener('click', (event) => {
        event.preventDefault();
        openCart();
    });
}
