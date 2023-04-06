var expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
var email = document.getElementById('email');
if (expression.test('email') === true) {
    email.style.backgroundColor = 'green';
}
else {
    email.style.backgroundColor === 'red';
}
var password = document.getElementById('psw');
var repeatPassword = document.getElementById('psw-repeat');
function validatePassword(password) {
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}
if (validatePassword(password)) {
    password.style.backgroundColor = 'green';
}
else {
    password.style.backgroundColor = 'red';
}
if (repeatPassword === password) {
    repeatPassword.style.backgroundColor = 'green';
}
else {
    repeatPassword.style.backgroundColor = 'red';
}
