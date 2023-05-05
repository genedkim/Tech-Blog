 const commentHandler = async function (event) {
	event.preventDefault();

	const postId = document.querySelector('.comment-form').getAttribute('post-id');

    // const userId

	const commentText = document.querySelector('#comment-text').value.trim();

	if (commentText) {
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
              comment_text: commentText,
              post_id: postId,
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