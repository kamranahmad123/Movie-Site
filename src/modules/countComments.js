const myCommentCount = async (movieId, commentCount) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uRUkwf3OzzvRwdQqwctM/comments?item_id=item${movieId}`,
  )
    .then((response) => response.json())
    .then((data) => {
      commentCount.innerText = `Comments(${data.length})`;
    });
};

module.exports = myCommentCount;
