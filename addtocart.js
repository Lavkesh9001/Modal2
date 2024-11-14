// JavaScript code for My E-commerce Website

// Sample function to add a product to the cart
function addToCart(productName, productPrice) {
    // Check if the cart already exists in local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a product object
    const product = {
        name: productName,
        price: parseFloat(productPrice),
        quantity: 1
    };

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex > -1) {
        // Increment the quantity if the product exists
        cart[existingProductIndex].quantity += 1;
    } else {
        // Add the new product to the cart
        cart.push(product);
    }

    // Save the updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${productName} to the cart for $${productPrice}.`);
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
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty.');
    } else {
        let cartDetails = 'Your cart contains:\n';
        cart.forEach(item => {
            cartDetails += `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}\n`;
        });
        alert(cartDetails);
    }
}

// Add event listener to the cart link
const cartLink = document.querySelector("a[href='#cart']");
if (cartLink) {
    cartLink.addEventListener('click', (event) => {
        event.preventDefault();
        openCart();
    });
}
