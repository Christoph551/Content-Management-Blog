//@@ TODO: Form submit listener, dispatch a fetch call (register the user as a private user)
document
    .querySelector('.form-register')
    .addEventListener('submit', async function (event) {
        event.preventDefault();

    const $first = document.querySelector('#user-first').value.trim(); 
    const $last = document.querySelector('#user-last').value.trim(); 
    const $email = document.querySelector('#user-email').value.trim(); 
    const $password = document.querySelector('#user-password').value.trim(); 

    const response = await fetch('/api/signUp', {
        method: 'POST',
        body: JSON.stringify({
            first: $first,
            last: $last,
            email: $email,
            password: $password
        }),
        headers: { 
            'Content-Type': 'application/json' }
    });
    const data = await response.json();
    if (data) {
    alert(`Thank you, ${$first}. You have successfully signed up! `); // res.json from newUser.js
    }

    // $first.value = '';
    // $last.value = '';
    // $email.value = '';
    // $password.value = '';

});