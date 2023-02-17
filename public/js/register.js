//@@ TODO: Form submit listener, dispatch a fetch call (register the user as a private user)

const registerHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#register-first');
    const lastName = document.querySelector('#register-last');
    const email = document.querySelector('#register-email');
    const password = document.querySelector('#register-password');

    if (firstName && lastName && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ 
                firstName, 
                lastName, 
                email, 
                password 
            }),
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