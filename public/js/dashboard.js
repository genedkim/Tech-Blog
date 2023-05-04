const createPostHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#post-name').value.trim()
    const description = document.querySelector('#post-description').value.trim()

    if (name && description) {
        const response  = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post')
        }
    }
}

const deletePostHandler = async (event) => {
	if (event.target.hasAttribute('post-id')) {
		const id = event.target.getAttribute('post-id');

		const response = await fetch(`/api/blogs/${id}`, {
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
    .querySelector('.new-post-form')
    .addEventListener('submit', createPostHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', deletePostHandler);