window.addEventListener('scroll', function () {
    var menuIcon = document.getElementById('menu-icon');
    var headerHeight = document.querySelector('.header').offsetHeight;
    if (window.scrollY >= headerHeight) {
        menuIcon.style.top = '10%';
    } else {
        menuIcon.style.top = (headerHeight - window.scrollY);
    }
});

function openNav() {
    var navbar = document.getElementById("navbar");
    var menuIcon = document.getElementById("menu-icon");

    if (navbar.style.width === "100%") {
        navbar.style.width = "0";
        navbar.classList.remove('open');
        menuIcon.innerHTML = "&#9776;";
        menuIcon.style.transition = "transform 0.3s ease";
        menuIcon.style.transform = "rotate(0deg)";
    } else {
        navbar.style.width = "100%";
        navbar.classList.add('open');
        menuIcon.innerHTML = "&times;";
        menuIcon.style.transition = "transform 0.3s ease";
        menuIcon.style.transform = "rotate(90deg)";
    }
}

function closeNav() {
    var navbar = document.getElementById("navbar");
    var menuIcon = document.getElementById("menu-icon");
    navbar.style.width = "0";
    navbar.classList.remove('open');
    menuIcon.innerHTML = "&#9776;";
    menuIcon.style.transition = "transform 0.3s ease";
    menuIcon.style.transform = "rotate(0deg)";
}

document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;

    var navbarLinks = document.querySelectorAll(".overlay-content a");
    navbarLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });

    var footerLinks = document.querySelectorAll(".footerNav ul li a");
    footerLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});

function validateForm() {
    // Add your validation logic here
    return true; // Return false if validation fails
}

// Function to preview the feedback
function previewFeedback() {
    // Populate preview content based on form inputs
    document.getElementById("preview-section").style.display = "block";
}

// Function to edit the feedback
function editFeedback() {
    document.getElementById("preview-section").style.display = "none";
}

function submitFeedback() {

    // Prevent the default form submission behavior
    event.preventDefault();

    // Validate the form
    var isFormValid = validateForm();

    if (isFormValid) {
        // Display success message
        document.getElementById("success-message").innerHTML = "Feedback submitted successfully!";
        document.getElementById("success-message").style.display = "block";
        // Hide error message if it's displayed
        document.getElementById("error-message").style.display = "none";
        // Hide preview section if it's displayed
        document.getElementById("preview-section").style.display = "none";

        // Create "Home" button
        var goToHomeButton = document.createElement("button");
        goToHomeButton.textContent = "Go to Home";
        goToHomeButton.addEventListener("click", function() {
            // Navigate to the home page
            window.location.href = "Home.html";
        });


    } else {
        // Display error message
        document.getElementById("error-message").innerHTML = "Please fill out all required fields.";
        document.getElementById("error-message").style.display = "block";
        // Hide success message if it's displayed
        document.getElementById("success-message").style.display = "none";
    }
}



function previewFeedback() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var firstTime = document.querySelector('input[name="firstTime"]:checked').value;
    var easy = document.querySelector('input[name="easy"]:checked').value;
    var rating = document.getElementById("rating").value;
    var update = document.getElementById("update").value;
    var futureSugest = document.getElementById("futureSugest").value;

    // Populate preview content based on form inputs
    var previewContent = "<strong>Full Name:</strong> " + fullName + "<br>";
    previewContent += "<strong>Email:</strong> " + email + "<br>";
    previewContent += "<strong>First Time Visiting:</strong> " + firstTime + "<br>";
    previewContent += "<strong>Easy to Navigate:</strong> " + easy + "<br>";
    previewContent += "<strong>Rating:</strong> " + rating + "<br>";
    previewContent += "<strong>Receive Updates:</strong> " + update + "<br>";
    previewContent += "<strong>Suggestions:</strong> " + futureSugest + "<br>";

    // Generate buttons
    var buttons = "<input type='button' value='Edit' onclick='editFeedback()'>";
    buttons += "<input type='submit' value='Submit' onclick='submitFeedback(event)'>";

    // Display preview content
    document.getElementById("preview-section").innerHTML = previewContent + buttons;
    document.getElementById("preview-section").style.display = "block";
}

function editFeedback() {
    document.getElementById("preview-section").style.display = "none";
}

function submitFeedback(event) {
    event.preventDefault(); // Prevent default form submission

    // Your code to handle form submission (e.g., sending data to server)

    // Reset the form after successful submission
    document.getElementById("feedback-form").reset();

    // Display success message
    document.getElementById("success-message").style.display = "block";

    // Hide error message if it's displayed
    document.getElementById("error-message").style.display = "none";
}

