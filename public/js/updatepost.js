const updatePostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const contents = document.querySelector('#post-content').value.trim();
    const id = event.target.getAttribute('post-id');

    if (title && contents) {
        const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, contents }),
        headers: {
          'Content-Type': 'application/json',
        },
        });
    
        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert('Failed to update post');
        }
    }
    };
    
    document
    .querySelector('.update-post-form')
    .addEventListener('submit', updatePostHandler);