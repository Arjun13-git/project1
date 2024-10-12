// Initialize cart from localStorage or as an empty array if it's not already in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart Function
function addToCart(cakeName, price) {
    let cake = cart.find(item => item.name === cakeName);

    if (cake) {
        cake.quantity++;
    } else {
        cart.push({ name: cakeName, price: price, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart(); // Update cart display if needed
}

// Update Cart Function
function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalPriceSpan = document.getElementById("total-price");
    
    if (cartItemsDiv && totalPriceSpan) {
        cartItemsDiv.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            cartItemsDiv.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} - $${item.price} x ${item.quantity}</span>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });

        totalPriceSpan.textContent = total;
    }
}

// Remove from Cart Function
function removeFromCart(index) {
    cart.splice(index, 1);

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart(); // Refresh cart display
}

// Load cart when the cart page loads
window.onload = function() {
    updateCart(); // Call updateCart on page load to display cart items
}

// Checkout Button Functionality
const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function() {
        if (cart.length > 0) {
            alert("Proceeding to Checkout. Total: $" + document.getElementById('total-price').textContent);
            // You can redirect to another page or a payment gateway
            window.location.href = "checkout.html"; // Redirect to a checkout page if needed
        } else {
            alert("Your cart is empty. Please add some cakes first.");
        }
    });
}
