document.addEventListener('DOMContentLoaded', function () {
    function validateForm() {
        var name = document.getElementById('nameInput').value;
        var email = document.getElementById('emailInput').value;
        var password = document.getElementById('passwordInput').value;
        var confirmPassword = document.getElementById('confirmPasswordInput').value;
        var gender = document.getElementById('genderDropdown').value;
        var termsChecked = document.getElementById('checkBox').checked;

        if (name.trim() === '') {
            alert('Please enter your name.');
            return false;
        }

        if (email.trim() === '' || email.indexOf('@') === -1) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!isValidPassword(password)) {
            alert(
                'Invalid Password!\n\n' +
                'Your password must meet the following criteria:\n' +
                '• At least 8 characters long\n' +
                '• Contains at least one uppercase letter\n' +
                '• Contains at least one lowercase letter\n' +
                '• Contains at least one special character\n' +
                '• Contains at least one number'
            );
            return false;
        }

        if (confirmPassword.trim() === '' || confirmPassword !== password) {
            alert('Passwords do not match.');
            return false;
        }

        if (gender === 'default') {
            alert('Please select your gender.');
            return false;
        }
        if (!termsChecked) {
            alert('Please agree to the Terms and Conditions.');
            return false;
        }

        alert('Form submitted successfully!');
        return true;
    }

    function isValidPassword(password) {
        var hasUppercase = false;
        var hasLowercase = false;
        var hasSpecialChar = false;
        var hasNumber = false;

        for (var i = 0; i < password.length; i++) {
            var char = password[i];

            if (char >= 'A' && char <= 'Z') {
                hasUppercase = true;
            } else if (char >= 'a' && char <= 'z') {
                hasLowercase = true;
            } else if ("!@#$%^&*(),.?\":{}|<>".includes(char)) {
                hasSpecialChar = true;
            } else if (char >= '0' && char <= '9') {
                hasNumber = true;
            }
        }

        return (
            hasUppercase &&
            hasLowercase &&
            hasSpecialChar &&
            hasNumber &&
            password.length >= 8
        );
    }


    var form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        validateForm();
    });
});
