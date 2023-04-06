const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
let email:HTMLFormElement = document.getElementById('email') as HTMLFormElement;
if (expression.test('email') === true) {
    console.log('email is correct')
}
else {
    alert('email is incorrect')
}
