function bookAppointment(doctorName) {
    if (!isLoggedIn()) {
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        // Redirect to appointment booking page with the selected doctor
        window.location.href = `appointments.html?doctor=${encodeURIComponent(doctorName)}`;
    }
}

function isLoggedIn() {
    // Implement your logic to check if the user is logged in
    // This is just a placeholder
    return false;
}

function handleLogin(event) {
    event.preventDefault();
    // Implement your login logic here
    alert('Login successful');
    window.location.href = 'index.html';
}
