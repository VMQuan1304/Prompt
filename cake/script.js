// Get references to HTML elements
const entryForm = document.getElementById('entry-form');
const participantsList = document.querySelector('#participants-list ul');
const winnerDisplay = document.getElementById('winner');
const drawBtn = document.getElementById('draw-btn');
const resetBtn = document.getElementById('reset-btn');

// Initialize array to store participants
let participants = [];

// Function to handle form submission
entryForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const participantInput = document.getElementById('participant');
    const participantName = participantInput.value.trim(); // Get participant's name

    if (participantName !== '') {
        participants.push(participantName); // Add participant to array
        displayParticipants(); // Update participants list
        participantInput.value = ''; // Clear input field
    }
});

// Function to display participants list
function displayParticipants() {
    participantsList.innerHTML = ''; // Clear previous list
    participants.forEach(function(participant) {
        const li = document.createElement('li');
        li.textContent = participant;
        participantsList.appendChild(li);
    });
}

// Function to handle drawing of winner
drawBtn.addEventListener('click', function() {
    if (participants.length > 0) {
        const winnerIndex = Math.floor(Math.random() * participants.length); // Generate random index
        const winner = participants[winnerIndex]; // Get winner
        winnerDisplay.textContent = winner; // Display winner
        winnerDisplay.innerHTML += ' 🎂🎉'; // Add cake and party emojis
    } else {
        winnerDisplay.textContent = 'No participants entered yet!';
    }
});

resetBtn.addEventListener('click', function() {
    winnerDisplay.textContent = '';
    participantsList.textContent = '';
    participants.length = 0;
});
