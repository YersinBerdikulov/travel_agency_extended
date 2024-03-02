function validateRegistration() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // You can add more client-side validation here if needed

    if (!username.trim() || !password.trim()) {
        alert('Please enter both username and password.');
        return false;
    }

    return true;
}