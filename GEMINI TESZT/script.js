// Simple script to add the current year to the footer

document.addEventListener('DOMContentLoaded', () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Find the span element with the id 'current-year' and update its text
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // You could add more interactive features here, like:
    // - Handling clicks on "Learn More" buttons (e.g., showing modals)
    // - Implementing image carousels
    // - Adding animations on scroll
    console.log("Apple theme page loaded successfully!");
});

