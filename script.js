document.getElementById("loginButton").addEventListener("click", function() {
    // Show preloader
    document.getElementById("preloader").style.display = "flex";

    // Navigate to next page after a delay
    setTimeout(function() {
        window.location.href = "Page1.html"; // Replace with the URL of your next page
    }, 5000); // Adjust the delay (in milliseconds) as needed
});

// Toggle the display of "please" message based on the toggle button state
document.getElementById("toggleButton").addEventListener("change", function() {
    var toggleMessage = document.getElementById("toggleMessage");
    toggleMessage.style.display = this.checked ? "block" : "none";

    // Toggle between "On" and "Off" labels
    var onOffLabel = document.querySelector(".on-off-label");
    onOffLabel.textContent = this.checked ? "On" : "Off";
});
