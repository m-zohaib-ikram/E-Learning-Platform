// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select the enroll button on the detail page
    const enrollBtn = document.getElementById('enrollBtn');

    // If the button exists on the current page, add a click event
    if (enrollBtn) {
        enrollBtn.addEventListener('click', () => {
            // In a real app, this would add the course to a cart or database
            alert('Successfully enrolled in the course! Redirecting to your dashboard...');
            enrollBtn.textContent = 'Enrolled ✓';
            enrollBtn.style.backgroundColor = '#27ae60';
        });
    }
});