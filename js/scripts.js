// Initializing when the DOM is fully loaded:
document.addEventListener('DOMContentLoaded', function() {
    // Getting a reference to the button element with the id of 'welcomeButton':
    let button = document.getElementById('welcomeButton');
    
    // Getting a reference to the div element with id 'welcomeMessage':
    let welcomeMessageDiv = document.getElementById('welcomeMessage');
    
    // Defining a variable 'firstName' with the value of "Quan":
    let firstName = "Quan";

    // Listening for a 'click' event on the button:
    button.addEventListener('click', function() {
        // When the button is clicked, the div 'welcomeMessageDiv' text content
        // is set to "Hello, Quan", where Quan is the value of the variable 'firstName':
        welcomeMessageDiv.textContent = `Hello, ${firstName}`;
    });
});