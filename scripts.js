function trackOrder() {
    // Get the tracking number from the input field
    var trackingNumber = document.querySelector('input[placeholder="Tracking Number"]').value;

    // Check if a tracking number is provided
    if (trackingNumber.trim() !== "") {
        // Open the USPS tracking website in a new tab
        window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + trackingNumber, "_blank");
    } else {
        // Display an alert if no tracking number is provided
        alert("Please enter a valid tracking number.");
    }
}
function completePurchase() {
        // Redirect to the main page after completing the checkout
        window.location.href = 'index.html';
    }
   
// script.js

// Initialize an array to store selected purchases
var selectedItems = [];

// Function to handle the checkout and display selected purchases
function completeCheckout() {
    // Calculate total price
    var totalPrice = calculateTotalPrice();

    // Display selected purchases and total amount
    var selectedPurchases = document.getElementById('selectedPurchases');
    selectedPurchases.innerHTML = `
        <h2>Selected Purchases</h2>
        ${selectedItems.map(item => `<p>${item.name} - Quantity: ${item.quantity} - Price: $${item.price.toFixed(2)}</p>`).join('')}
        <h3>Total Price: $${totalPrice.toFixed(2)}</h3>
    `;
}

// Function to calculate the total price based on selected items
function calculateTotalPrice() {
    var totalPrice = 0;
    selectedItems.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    return totalPrice;
}

// Function to handle continuing shopping
function continueShopping() {
    // Redirect to the order page (replace with the actual URL)
    window.location.href = 'index.html';
}

// Function to add an item to the selected items array
function addToCart(id, name, price) {
    // Prompt the user to enter the quantity
    const quantity = prompt(`Enter the quantity for ${name}:`, '1');
    
    // Check if the input is a valid quantity
    if (quantity !== null && !isNaN(quantity) && quantity > 0) {
        // Convert quantity to a number
        const quantityValue = parseInt(quantity, 10);

        // Check if the item is already in the cart
        const existingItemIndex = selectedItems.findIndex(item => item.id === id);

        if (existingItemIndex !== -1) {
            // Update quantity if the item is already in the cart
            selectedItems[existingItemIndex].quantity += quantityValue;
        } else {
            // Add the item to the cart
            selectedItems.push({ id, name, price, quantity: quantityValue });
        }

        // Update the cart display
        updateCartDisplay();
    } else {
        alert('Invalid quantity. Please enter a valid number.');
    }
}
    


// Function to remove an item from the selected items array
function removeItemFromCheckout(index) {
    selectedItems.splice(index, 1);
    alert('Item removed from the cart.');
}
