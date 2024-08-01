document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'success.html';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Basic login validation for example purposes
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'patient' && password === 'password') {
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials');
    }
});
