document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let messages = [];
        let isValid = true;

        const username = document.getElementById('username').value.trim();
        const usernameerror = document.getElementById('usernameError');

        if (username.length < 3) {
            messages.push('Username must be at least 3 characters long.');
            isValid = false;
        }
        usernameerror.textContent = messages.find(msg => msg.includes('username')) || '';

        const emailInput = document.getElementById('email').value.trim();
        const emailerror = document.getElementById('emailError');
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(pattern)) {
            messages.push('Please enter a valid email address.');
            isValid = false;
        }
        emailerror.textContent = messages.find(msg => msg.includes('email')) || '';


        const passwordInput = document.getElementById('password');
        const passworderror = document.getElementById('passwordError');
        if (passwordInput.value.length < 6) {
            messages.push('Password must be at least 6 characters long.');
            isValid = false;
        }
        passworderror.textContent = messages.find(msg => msg.includes('Password')) || '';
        feedbackDiv.style, display = 'block  ';
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            form.submit();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"


            feedbackDiv.textContent = 'Form submitted successfully!';
            form.submit();
        });
});