const updateButtonHandler = async (event) => {
    const name = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
            'Content-Type': 'application/json',
        },
      });
      const results = await response.json();
      console.log(results);
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };

  document
  .querySelector('.update-post')
  .addEventListener('click', updateButtonHandler);