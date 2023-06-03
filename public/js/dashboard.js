document.querySelector('#profile')
    .addEventListener('click', async function (event) {
        event.preventDefault();

        const response = await fetch('/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' }
        });

            if (!response.ok) {
                switch (response.status) {
                    case 500:
                    default:
                        alert('You have not logged in yet. Please log in or sign up.');
                }
                return;
            }
            const data = await response.json();
            if (data) {
                window.location.redirect('/profile'); 
            }
            
});
