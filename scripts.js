function trackOrder() {
    var trackingNumber = document.querySelector('input[placeholder="Tracking Number"]').value;

    if (trackingNumber.trim() !== "") {
        try {
            window.open("https://tools.usps.com/go/TrackConfirmAction?tLabels=" + trackingNumber, "_blank");
        } catch (error) {
            console.error("Error opening tracking website:", error);
            alert("An error occurred while opening the tracking website. Please try again.");
        }
    } else {
        alert("Please enter a valid tracking number.");
    }
}

function completePurchase() {
    window.location.href = 'index.html';
}

let cartItems = [];

// Function to display the shopping cart
function displayCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            ${item.name} - ${item.description} - $${item.price.toFixed(2)}
            <span class="badge bg-danger rounded-pill" onclick="removeFromCart(${item.id})">x</span>
        `;
        cartList.appendChild(listItem);
    });

    updateTotalPrice();
}

// Function to remove an item from the shopping cart
function removeFromCart(itemId) {
    const index = cartItems.findIndex(item => item.id === itemId);

    if (index !== -1) {
        cartItems.splice(index, 1);
        displayCart(); // Update the cart display after removing an item
    }
}

// Function to update the total price of the shopping cart
function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Function to update cart items (called from orderpage.html)
function updateCartItems(newCartItems) {
    cartItems = newCartItems;
    displayCart(); // Update the cart display when items are updated
}

// Event listener for clicking on the "Add to Cart" button
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('add-to-cart')) {
        // Retrieve item details from data attributes
        var name = event.target.getAttribute('data-name');
        var type = event.target.getAttribute('data-type');
        var price = parseFloat(event.target.getAttribute('data-price'));

        // Add the item to the cart
        addToCart(name, type, price);
    }
});
// Function to add an item to the shopping cart
function addToCart(name, type, price) {
    const newItem = {
        id: cartItems.length + 1,
        name: name,
        description: type,
        price: price
    };

    cartItems.push(newItem);
    displayCart(); // Update the cart display after adding an item
}