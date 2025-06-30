document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(this);

            fetch('php/send_email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json()) // Expecting JSON response from PHP
            .then(data => {
                if (data.success) {
                    formMessage.style.color = 'green';
                    formMessage.textContent = 'Message sent successfully!';
                    contactForm.reset(); // Clear the form
                } else {
                    formMessage.style.color = 'red';
                    formMessage.textContent = 'Error: ' + data.message;
                }
            })
            .catch(error => {
                formMessage.style.color = 'red';
                formMessage.textContent = 'An error occurred. Please try again later.';
                console.error('Fetch error:', error);
            });
        });
    }
});
