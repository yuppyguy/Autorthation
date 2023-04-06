var expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
var email = document.getElementById('email');
if (expression.test('email') === true) {
    console.log('email is correct');
}
else {
    alert('email is incorrect');
}
