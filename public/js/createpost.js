// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#post-title').value.trim();
//     const content = document.querySelector('#post-content').value.trim();
 
//     if (name && content) {
//       const response = await fetch(`/api/post`, {
//         method: 'POST',
//         body: JSON.stringify({ name, content }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/post');
//       } else {
//         alert('Failed to create post');
//       }
//     }
//   };
  
//   document
//     .querySelector('.new-post-form')
//     .addEventListener('submit', newFormHandler);
  

  