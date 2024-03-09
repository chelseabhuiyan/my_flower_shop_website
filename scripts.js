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