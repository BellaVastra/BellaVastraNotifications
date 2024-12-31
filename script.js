document.addEventListener('DOMContentLoaded', function() {
    // Simulate receiving real-time data from a webhook
    fetch('/webhook') // Assuming this is your server's endpoint for webhooks
        .then(response => response.json())
        .then(data => {
            const message = `New purchase from customer: ${data.customerName}. Order #${data.orderId}`;
            showNotification(message);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });

    function showNotification(message) {
        const notification = document.querySelector('.notification');
        const messageElement = document.getElementById('message');
        messageElement.textContent = message;
        notification.style.visibility = 'visible';

        // Hide the notification after 5 seconds
        setTimeout(function() {
            notification.style.visibility = 'hidden';
        }, 5000);
    }
});
