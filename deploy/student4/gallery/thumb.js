function changeColorScheme(colorScheme) {//FOR COLOR CHANGING
    document.body.className = 'color-scheme-' + colorScheme;
}

function changeFontSize(fontSize) {// FOR FONT SIZE CHANGING
    document.body.style.fontSize = fontSize + 'px';
}
function displayImage(imageUrl, description1,description2) {
    var selectedImage = document.getElementById("selectedImage");//CREATE A VARIABLE(SELECTED IMAGE) AND STORE 
    selectedImage.src = imageUrl;//REPLACE IMAGE URL
    var selectedImageDescription = document.getElementById("selectedImageDescription");
    selectedImage.alt = description1;//REPLACE IMAGE ALT
    var newDivContent = document.querySelector(".new-div-content");
    newDivContent.textContent = description2;//REPLACE IMAGE CONTANT PHARAGRAPH

    // Highlight the clicked description
    var clickedDescription = event.currentTarget.querySelector(".description");
    clickedDescription.classList.add("highlighted");

    //REMOVE HIGHLIGHT WHEN ANOTHER IMAGE CLICKED
    var allDescriptions = document.querySelectorAll(".description");
    allDescriptions.forEach(function (description) {
        description.classList.remove("highlighted");
    });

    window.addEventListener('scroll', function () {
        var menuIcon = document.getElementById('menu-icon');
        var headerHeight = document.querySelector('.header').offsetHeight;
        if (window.scrollY >= headerHeight) {
            menuIcon.style.top = '10%';
        } else {
            menuIcon.style.top = (headerHeight - window.scrollY);
        }
    });
}

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
