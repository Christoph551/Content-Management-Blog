document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    const loginHandler = async (event) => {
        event.preventDefault();

        const email = document.querySelector('#user-email').value.trim();
        const password = document.querySelector('#user-password').value.trim();

        if (email && password) {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to log in.');
            }
        }
    };

    loginForm.addEventListener('submit', loginHandler);
});



// const loginForm = document.querySelector('form');


// const loginHandler = async (event) => {
//     event.preventDefault();

//     const email = document.querySelector('#user-email').value.trim();
//     const password = document.querySelector('#user-password').value.trim();

//     if (email && password) {
//         const response = await fetch('/api/user/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/');
//         } else {
//             alert('Failed to log in.');
//         }
//     }
// };

// document.addEventListener('DOMContentLoaded', () => {
//     loginForm.addEventListener('submit', loginHandler);
// });
