document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("back-btn");
    const nextButton = document.getElementById("next-btn");
    const avatarSection = document.querySelector(".avatar-section");
    const locationSection = document.querySelector(".location-section");
    locationSection.style.display = "none";

    nextButton.addEventListener("click", function() {
        if (avatarSection.style.display !== "none") {
            avatarSection.style.display = "none";
            locationSection.style.display = "block";
            backButton.disabled = false;
        } else {
            console.log("Profile creation complete!"); 
        }
    });

    backButton.addEventListener("click", function() {
        if (locationSection.style.display !== "none") {
            locationSection.style.display = "none";
            avatarSection.style.display = "block";
            backButton.disabled = true;
        }
    });
});