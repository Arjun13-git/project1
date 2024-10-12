// Array to hold items in the cart
let cart = [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    // Create a cart item object
    const cartItem = {
        name: itemName,
        price: itemPrice,
    };
    
    // Add item to cart array
    cart.push(cartItem);
    
    // Show alert to the user
    alert(`${itemName} has been added to your cart. Total items: ${cart.length}`);
    
    // Redirect to cart page (optional)
    // window.location.href = "cart.html"; // Uncomment to redirect
}

// Function to calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Function to view cart (to be called from cart.html)
function viewCart() {
    const cartContent = cart.map(item => `${item.name}: $${item.price}`).join('\n');
    const totalPrice = calculateTotal();
    return `Cart Items:\n${cartContent}\n\nTotal: $${totalPrice}`;
}
