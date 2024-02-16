// Selecting menu items and navigation
const bar = document.getElementById('bar'); // Menu button
const close = document.getElementById('close'); // Close menu button
const nav = document.getElementById('navbar'); // Navigation menu

// Add events to the menu
if (bar){
    bar.addEventListener('click', () => {
        // Add "active" class to menu when clicking menu button
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
        // Remove "active" class from menu when clicking close button
        nav.classList.remove('active');
    })
}

// Add image swapping functionality
// Select all elements with class "pro"
const myProducts = document.querySelectorAll('.pro');

myProducts.forEach((product) => {
    // main image element
    const image = product.querySelector('img');
    // Image element on hover
    const hoverImage = product.querySelector('.hover-img');

    // Add event on product hover
    product.addEventListener('mouseover', () => {
        if (image && hoverImage) {
            image.style.display = 'none'; //Hide the main image
            hoverImage.style.display = 'block'; // Show image on hover
        }
    });

    // Add event when product cursor is removed
    product.addEventListener('mouseout', () => {
        if (image && hoverImage) {
            image.style.display = 'block'; // Show the main image
            //Hide the second image when you remove the cursor
            hoverImage.style.display = 'none';
        }
    });
});

// Function to show a popup message
function showPopup(message) {
    // Create a new div element for the popup
    const popup = document.createElement('div');
    // Add 'popup' class for styling
    popup.classList.add('popup');
    // Set the text of the popup to the provided message
    popup.textContent = message;

    // Append the popup to the body of the document
    document.body.appendChild(popup);

    // Set a timeout to remove the popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the form, email input, and message display elements from the DOM
    const form = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const subscriptionMessage = document.getElementById("subscriptionMessage");

    // Add an event listener to the form for the submit event
    form.addEventListener("submit", function (e) {
        // Prevent the default form submission action
        e.preventDefault();
        // Get the value of the email input field
        const email = emailInput.value;

        // Check if the email is valid
        if (!isValidEmail(email)) {
            // If email is invalid, display an error message
            subscriptionMessage.textContent = "Invalid email. Please make sure it includes an '@' symbol.";
        } else {
            // If email is valid, show the success popup
            showPopup("Subscription Successful. Thank you for subscribing!");
        }
    });

    // Function to validate the email format
    function isValidEmail(email) {
        // Regular expression for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Test the email against the regex and return the result
        return emailRegex.test(email);
    }
});