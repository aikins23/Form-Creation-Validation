const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById('form-feedback');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userNameInput = document.getElementById('username');
    const usernameerror = document.getElementById('usernameError');

    if (userNameInput.value.length < 3) {
        usernameerror.textContent = 'Username must be at least 3 characters long.';
        return;
    } else {
        usernameerror.textContent = '';
    }

    const emailInput = document.getElementById('email');
    const emailerror = document.getElementById('emailError');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(pattern)) {
        emailerror.textContent = 'Please enter a valid email address.';
        return;
    } else {
        emailerror.textContent = '';
    }

    const passwordInput = document.getElementById('password');
    const passworderror = document.getElementById('passwordError');
    if (passwordInput.value.length < 6) {
        passworderror.textContent = 'Password must be at least 6 characters long.';
        return;
    } else {
        passworderror.textContent = '';
    }
    feedbackDiv.textContent = 'Form submitted successfully!';
    form.submit();
});