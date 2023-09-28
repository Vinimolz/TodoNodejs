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

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');

    taskList.addEventListener('click', (e) => {
        console.log(e.classList)
        if (e.target && e.target.classList.contains('complete-button')) {
            console.log("Within if statement")
            const taskRow = e.target.closest('tr');
            const taskNameCell = taskRow.querySelector('td:first-child');
            const completeButton = e.target;

            // Toggle the completion status
            const isCompleted = taskRow.classList.toggle('completed');

            // Update the button text based on the completion status
            completeButton.textContent = isCompleted ? 'Completed' : 'Complete';

            // Optionally, you can add more styling for completed tasks
            if (isCompleted) {
                taskNameCell.style.textDecoration = 'line-through';
            } else {
                taskNameCell.style.textDecoration = 'none';
            }
        }
    });
});





