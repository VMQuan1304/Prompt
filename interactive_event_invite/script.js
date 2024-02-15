// Obtaining reference to the form using its ID,
// this will be used to hook the submit event
const rsvpForm = document.getElementById("rsvpForm");

// Obtain reference to the HTML element that will be used to display confirmation message after form submission
const confirmationMessage = document.getElementById("confirmationMessage");

// Adding event listener to the form
// This code will execute when the form is submitted
rsvpForm.addEventListener("submit", function(event) {
        // This prevents the default form submission behavior, 
        // which is to refresh the page
        event.preventDefault();
        
        // Getting the value from the input with the ID of "attendance"
        const attendance = document.getElementById("attendance").value;

        // Checking if the submitted value is "yes"
        if (attendance === "yes") {
            // If "yes", then update the confirmation message count to show a positive response
            confirmationMessage.innerHTML = "🎉 Hooray! We can't wait to see you at the GIF Gala!";
            // Set background image if the user is attending
            document.body.style.backgroundImage = 'url("https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif")';
        } else {
            // If not "yes", clear any previous message 
            confirmationMessage.innerHTML = "😔 We will miss you at the GIF Gala!";
            // Set background image if the user is not attending
            document.body.style.backgroundImage = 'url("https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif")'
        }
        
        // Show the confirmation message element
        confirmationMessage.style.display = "block";
        
        // Reset the form for the next input
        rsvpForm.reset();
    }
);