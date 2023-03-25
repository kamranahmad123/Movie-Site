const myCommentDisplay = async (movieId, commentHolder) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uRUkwf3OzzvRwdQqwctM/comments?item_id=item${movieId}`,
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((x) => {
        const li = document.createElement('li');
        li.classList = 'list-item';
        li.innerHTML = `${x.creation_date} ${x.username}: ${x.comment}`;
        commentHolder.appendChild(li);
      });
    });
};

export default myCommentDisplay;