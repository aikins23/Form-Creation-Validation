document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let messages = [];
        let isValid = true;

        // USERNAME
        const username = document.getElementById('username').value.trim();
        const usernameerror = document.getElementById('usernameError');

        if (username.length < 3) {
            messages.push('Username must be at least 3 characters long.');
            isValid = false;
            usernameerror.textContent = 'Username must be at least 3 characters long.';
        } else {
            usernameerror.textContent = '';
        }

        // EMAIL
        const email = document.getElementById('email').value.trim();
        const emailerror = document.getElementById('emailError');
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(pattern)) {
            messages.push('Please enter a valid email address.');
            isValid = false;
            emailerror.textContent = 'Please enter a valid email.';
        } else {
            emailerror.textContent = '';
        }

        // PASSWORD
        const password = document.getElementById('password').value;
        const passworderror = document.getElementById('passwordError');

        if (password.length < 6) {
            messages.push('Password must be at least 6 characters long.');
            isValid = false;
            passworderror.textContent = 'Password must be at least 6 characters long.';
        } else {
            passworderror.textContent = '';
        }

        // FIX — You wrote this incorrectly:
        // feedbackDiv.style, display = 'block';
        feedbackDiv.style.display = 'block';

        // FEEDBACK OUTPUT
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            form.submit(); // submit only if valid
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
