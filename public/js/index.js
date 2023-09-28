console.log("JavaScript file loaded successfully!");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM is ready!");

    // Add your event listeners and JavaScript functionality here
});

// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent the default behavior of the link
        

        // Remove the 'active' class from all links
        navLinks.forEach(item => item.classList.remove('active'));

        // Add the 'active' class to the clicked link
        link.classList.add('active');
    });
});



