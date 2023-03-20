const createPostButtonHandler = async (event) => {document.location.replace('/create-post');};

document
.querySelector('.create-post')
.addEventListener('click', createPostButtonHandler);

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
    
        const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
        });
    
        if (response.ok) {
        document.location.replace('/dashboard');
        } else {
        alert('Failed to delete post');
        }
    }
    };
    
    document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

const updatePostButtonHandler = async (event) => {
    const id = event.target.getAttribute('post-id');

    document.location.replace(`/update-post/${id}`);
};

if(document.querySelector('.update-post-btn')){
    const updateBtn = document.querySelectorAll('.update-post-btn');
    
    for (let i = 0; i < updateBtn.length; i++){
        updateBtn[i].addEventListener('click', updatePostButtonHandler);
    }
}