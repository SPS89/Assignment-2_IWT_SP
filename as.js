document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to My Portfolio!!"; // Text to be displayed
    const typedText = document.getElementById("typed-welcome");
    typedText.textContent = text; // Set the text content directly without typing animation

    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        // Validate form fields here
        alert("Form submitted successfully!"); // Replace this with your form submission logic
        this.reset(); // Reset the form after submission
    });

    const profileContainer = document.getElementById('profile-container');
    const swipeContents = document.querySelectorAll('.swipe-content');

    // Click event for profile container to toggle oval shape and sections
    profileContainer.addEventListener('click', function () {
        profileContainer.classList.toggle('oval');
        swipeContents.forEach(content => {
            content.classList.toggle('swiped');

            const profileImage = document.querySelector(".profile-image");
            profileImage.addEventListener("mouseenter", function () {
                this.style.transform = "scale(1.2)"; // Increase size on hover
            });
            profileImage.addEventListener("mouseleave", function () {
                this.style.transform = "scale(1)"; // Restore original size on mouse leave
            });
        });
    });

    // Click event for navigating through sections
    const squareBoxes = document.querySelectorAll(".square-box");

    squareBoxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            // Remove active class from all square boxes
            squareBoxes.forEach(b => {
                b.classList.remove("active");
            });

            // Add active class to the hovered box
            box.classList.add("active");
        });
    }); 
});

