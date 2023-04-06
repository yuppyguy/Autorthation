const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const email:HTMLFormElement = document.getElementById('email') as HTMLFormElement
if (expression.test('email') === true) {
    email.style.backgroundColor = 'green'
}
else {
    email.style.backgroundColor === 'red'
}

const password:HTMLFormElement = document.getElementById('psw') as HTMLFormElement
const repeatPassword:HTMLFormElement = document.getElementById('psw-repeat') as HTMLFormElement

function validatePassword(password): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

if (validatePassword(password)) {
    password.style.backgroundColor = 'green'
} else{
    password.style.backgroundColor = 'red'
}

if (repeatPassword === password) {
    repeatPassword.style.backgroundColor = 'green'
} else{
    repeatPassword.style.backgroundColor = 'red'
}
