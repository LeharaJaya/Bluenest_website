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

    // Highlight navbar links
    var navbarLinks = document.querySelectorAll(".overlay-content a");
    navbarLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });

    // Highlight footer links
    var footerLinks = document.querySelectorAll(".footerNav ul li a");
    footerLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var missionParagraph = document.querySelector("#mission p");
    var missionText = missionParagraph.textContent || missionParagraph.innerText;
    var missionWords = missionText.split(" ");
    var missionElement = document.createElement("span");
    missionParagraph.innerHTML = ""; // Clear the original content
    missionParagraph.appendChild(missionElement);

    // Function to add word by word animation
    function animateMission(words, index) {
        if (index < words.length) {
            missionElement.innerHTML += words[index] + " ";
            setTimeout(function() {
                animateMission(words, index + 1);
            }, 100); // Adjust animation speed here (milliseconds)
        }
    }

    // Start animation
    animateMission(missionWords, 0);
});


