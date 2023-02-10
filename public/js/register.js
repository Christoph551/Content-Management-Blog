//@@ TODO: Form submit listener, dispatch a fetch call (register the user as a private user)
document
    .querySelector('.form-register')
    .addEventListener('submit', async function (event) {
        event.preventDefault();

    const $first = document.querySelector('#user-first');
    const $last = document.querySelector('#user-last');
    const $email = document.querySelector('#user-email'); 
    const $password = document.querySelector('#user-password');

    const response = await fetch('/guest', {
        method: 'POST',
        body: JSON.stringify({
            firstName: $first.value.trim(),
            lastName: $last.value.trim(),
            email: $email.value.trim(),
            password: $password.value.trim()
        }),
        headers: { 
            'Content-Type': 'application/json' }
    });

    if (!response.ok) {
        switch(response.status) {
            case 500:
            default:
                alert(JSON.stringify(response));
        }

        return;
    }

    const data = await response.json();
    if (data) {
        console.log(data) // remember to remove this
    alert(`Thank you, ${data.firstName}. You have successfully signed up! `); // res.json from newUser.js

    window.location.redirect('/home'); // TODO: Redirect to home page
    }
});