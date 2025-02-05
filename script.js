document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show success message
            document.getElementById('contact-form').reset(); // Clear the form
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error submitting form');
        });
});