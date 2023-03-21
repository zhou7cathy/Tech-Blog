const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment').value.trim();
    var url = window.location.href.split('/');

    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id: url[url.length - 1] }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/post/' + url[url.length - 1]);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  const deleteCommentHandler = async (event) =>{
    event.preventDefault();
  
    const commentId = event.target.getAttribute('data-id');
    if (comment) {
      const response = await fetch(`/api/comment/${commentId}`, {
        method: 'Delete',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete comment');
      }
    }
  }
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', newCommentHandler)

  if(document.querySelector('.delete-comment-btn')){
  
    const deleteBtn =  document.querySelectorAll('.delete-comment-btn');

    for (let i = 0; i < deleteBtn.length; i++){
      deleteBtn[i].addEventListener('click', deleteCommentHandler);
    }
  }

const updateCommentButtonHandler = async (event) => {
  const id = event.target.getAttribute('comment-id');

  document.location.replace(`/update-comment/${id}`);
};

if(document.querySelector('.update-comment-btn')){
  const updateBtn = document.querySelectorAll('.update-comment-btn');
  
  for (let i = 0; i < updateBtn.length; i++){
      updateBtn[i].addEventListener('click', updateCommentButtonHandler);
  }
}