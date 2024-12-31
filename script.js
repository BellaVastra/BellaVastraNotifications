document.addEventListener('DOMContentLoaded', function() {
    // Simulate receiving a new notification after 2 seconds (this is where you might handle actual data)
    setTimeout(function() {
        showNotification('New purchase from customer: John Doe. Order #12345');
    }, 2000); // Simulated delay before notification shows

    // Function to display the notification
    function showNotification(message) {
        const notification = document.querySelector('.notification');
        const messageElement = document.getElementById('message');
        messageElement.textContent = message; // Update message dynamically
        notification.style.visibility = 'visible';

        // Hide the notification after 5 seconds
        setTimeout(function() {
            notification.style.visibility = 'hidden';
        }, 5000);
    }
});
