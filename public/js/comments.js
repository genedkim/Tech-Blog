
 
const commentHandler = async function (event) {
	event.preventDefault();

	const postId = document.querySelector('.comment-form').post-id;

	const commentText = document.querySelector('#comment-text').value.trim();

	if (comment_description) {
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				comment_text,
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