const playPauseButton = document.querySelector('.control-btn:nth-child(2)');

playPauseButton.addEventListener('click', function() {
    if (playPauseButton.textContent === "⏯️") {
        playPauseButton.textContent = "⏸️"; // Change to pause icon when playing
        // Logic to play the music (this is just a placeholder)
        console.log("Playing music...");
    } else {
        playPauseButton.textContent = "⏯️"; // Change to play icon when paused
        // Logic to pause the music (this is just a placeholder)
        console.log("Pausing music...");
    }
});
