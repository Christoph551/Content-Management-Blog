const logout = async () => {
    const response = await fetch ('/api/user/logout', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Log out unsuccessful. Please, try again.')
    }
};

const logoutBtn = document.querySelector('#logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}