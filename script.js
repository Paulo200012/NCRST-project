// Get references to the loading modal and button
const loadingModal = document.getElementById("loadingModal");
const showLoadingButton = document.getElementById("showLoadingButton");

// Function to show the loading modal
function showLoading() {
    loadingModal.style.display = "block";
}

// Function to hide the loading modal
function hideLoading() {
    loadingModal.style.display = "none";
}

// Add an event listener to show the loading modal when the button is clicked
showLoadingButton.addEventListener("click", showLoading);

// You can call hideLoading() when your loading process is complete to hide the modal.
// For example: hideLoading() when an AJAX request is finished.
