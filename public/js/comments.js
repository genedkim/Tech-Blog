 const commentHandler = async function (event) {
	event.preventDefault();

	// const postId

    // const userId

	const commentText = document.querySelector('#comment-text').value.trim();

	if (commentText) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
                commentText,
				postId,
                userId,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		document.location.reload();
	}
};

document
	.querySelector('.comment-form')
	.addEventListener('submit', commentHandler);