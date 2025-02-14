const newPostHandler = async (event) => {
    event.preventDefault()

    const username = document.querySelector('#username')?.textContent.trim();
    const post_title = document.querySelector('#post_title').value.trim();
    const post_content = document.querySelector('#post_content').value.trim();

    if (username && post_title && post_content) {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ username, post_title, post_content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create post. Please try again.')
        }
    }

};

document
    .querySelector('#newPost-form')
    .addEventListener('submit', newPostHandler);