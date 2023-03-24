const myCommentDisplay = async (movieId, commentHolder) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RIQXlT0tOk3Ka907K1S2/comments?item_id=item${movieId}`,
  )
    .then((response) => response.json())
    .then((data) => {
      data.forEach((x) => {
        const li = document.createElement('li');
        li.innerHTML = `<li class="list-item">${x.creation_date} ${x.username}: ${x.comment}</li>`;
        commentHolder.appendChild(li);
      });
    });
};

export default myCommentDisplay;