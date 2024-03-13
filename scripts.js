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
   

// Function to remove an item from the selected items array
function removeItemFromCheckout(index) {
    selectedItems.splice(index, 1);
    alert('Item removed from the cart.');
}
// Your existing JavaScript content here

// Initialize an empty cart array
var cart = [];

// Function to handle adding items to the cart
function addToCart(name, type, price) {
    var item = {
        name: name,
        type: type,
        price: price
    };

    // Add the item to the cart
    cart.push(item);

    // Update the cart display
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    // Display selected purchases and total amount
    var selectedPurchases = document.getElementById('selectedPurchases');
    var totalPriceElement = document.getElementById('totalPrice');

    // Calculate total price
    var totalPrice = calculateTotalPrice();

    // Display selected purchases and total amount
    selectedPurchases.innerHTML = `
        <h2>Selected Purchases</h2>
        ${cart.map(item => `<p>${item.name} - Quantity: ${item.type} - Price: $${item.price.toFixed(2)}</p>`).join('')}
    `;

    totalPriceElement.innerHTML = `<h3>Total Price: $${totalPrice.toFixed(2)}</h3>`;
}

// Function to calculate the total price
function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Event listener for clicking on the "Add to Cart" button
document.addEventListener('click', function (event) {
    // Check if the clicked element has the 'add-to-cart' class
    if (event.target.classList.contains('add-to-cart')) {
        // Retrieve item details from data attributes
        var name = event.target.getAttribute('data-name');
        var type = event.target.getAttribute('data-type');
        var price = parseFloat(event.target.getAttribute('data-price'));

        // Add the item to the cart
        addToCart(name, type, price);
    }
});
