const updateCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#update-comment').value.trim();
    const commentId = event.target.getAttribute('comment-id');
    const postId = event.target.getAttribute('post-id');

    if (comment) {
        const response = await fetch(`/api/comment/${commentId}`, {
        method: 'PUT',
        body: JSON.stringify({comment}),
        headers: {
          'Content-Type': 'application/json',
        },
        });
    
        if (response.ok) {
        document.location.replace(`/post/${postId}`);
        } else {
        alert('Failed to update comment');
        }
    }
    };
    
  document
  .querySelector('.update-comment-form')
  .addEventListener('submit', updateCommentHandler)