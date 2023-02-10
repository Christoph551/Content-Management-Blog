//@@ TODO: Form submit listener, dispatch a fetch call (register the user as a private user)

const registerHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#user-first').value.trim();
    const lastName = document.querySelector('#user-last').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (firstName && lastName && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up.');
        }
    }
};

document.querySelector('.form-register').addEventListener('submit', registerHandler);

// document
//     .querySelector('.form-register')
//     .addEventListener('submit', async function (event) {
//         event.preventDefault();

//     const $first = document.querySelector('#user-first');
//     const $last = document.querySelector('#user-last');
//     const $email = document.querySelector('#user-email'); 
//     const $password = document.querySelector('#user-password');

//     const response = await fetch('/user', {
//         method: 'POST',
//         body: JSON.stringify({
//             firstName: $first.value.trim(),
//             lastName: $last.value.trim(),
//             email: $email.value.trim(),
//             password: $password.value.trim()
//         }),
//         headers: { 
//             'Content-Type': 'application/json' }
//     });

//     if (!response.ok) {
//         switch(response.status) {
//             case 500:
//             default:
//                 alert(`Please try again. Error: ${response.status}`);
//         }

//         return;
//     }

//     const data = await response.json();
//     if (data) {
//         console.log(data) // remember to remove this
//     alert(`Thank you, ${data.firstName}. You have successfully signed up! `); // res.json from newUser.js

//     window.location.redirect('/'); // TODO: Redirect to home page
//     }
// });