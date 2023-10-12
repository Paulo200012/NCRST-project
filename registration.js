<script>
    function handleSubmit(event) {
        event.preventDefault();

        // Get the selected user type
        const userType = document.querySelector('input[name="user-type"]:checked').value;

        // Create a user data object
        const userData = {
            userType,
        };

        // Add the user's first name, last name, email, and contact details, depending on the selected user type
        if (userType === "participant") {
            userData.firstName = document.getElementById("first-name").value;
            userData.lastName = document.getElementById("last-name").value;
            userData.email = document.getElementById("email-participant").value;
            userData.contactDetails = document.getElementById("contact-participant").value;
        } else if (userType === "event-creator") {
            userData.name = document.getElementById("name-creator").value;
            userData.contactDetails = document.getElementById("contact-creator").value;
            userData.email = document.getElementById("email-creator").value;
        }

        // Create a Blob containing the JSON data
        const jsonData = JSON.stringify(userData, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });

        // Create a link to download the JSON file
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "user_data.json";

        // Trigger a click event on the link to initiate the download
        downloadLink.click();
    }

    document.addEventListener("DOMContentLoaded", function () {
        // Get references to the user type radio buttons and the form
        const participantRadio = document.getElementById("participant");
        const eventCreatorRadio = document.getElementById("event-creator");
        const registrationForm = document.getElementById("registrationForm");

        // Add event listeners to show/hide fields based on user type selection
        participantRadio.addEventListener("change", () => {
            document.querySelector(".participant-fields").style.display = participantRadio.checked ? "block" : "none";
            document.querySelector(".event-creator-fields").style.display = !participantRadio.checked ? "block" : "none";
        });

        eventCreatorRadio.addEventListener("change", () => {
            document.querySelector(".participant-fields").style.display = !eventCreatorRadio.checked ? "block" : "none";
            document.querySelector(".event-creator-fields").style.display = eventCreatorRadio.checked ? "block" : "none";
        });

        // Add form submit event listener to handle form submission
        registrationForm.addEventListener("submit", handleSubmit);
    });
</script>