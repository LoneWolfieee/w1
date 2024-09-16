// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Registration logic here
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Login logic here
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Booking request logic here
});

// Function to fetch and display available venues
function fetchVenues() {
    // Fetch venues logic here
}

// Function to fetch and display booking history
function fetchBookingHistory() {
    // Fetch booking history logic here
}

// Call functions to initialize the app
fetchVenues();
fetchBookingHistory();
