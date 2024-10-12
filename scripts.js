// Array to hold items in the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    // Create a cart item object
    const cartItem = {
        name: itemName,
        price: itemPrice,
    };
    
    // Add item to cart array
    cart.push(cartItem);
    
    // Store cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show alert to the user
    alert(`${itemName} has been added to your cart. Total items: ${cart.length}`);

    // Update cart count display
    updateCartCount();
}

// Function to update cart count display
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length; // Update the displayed cart count
}

// Call updateCartCount on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
