const myCommentCount = async (movieId, commentCount) => {
  await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RIQXlT0tOk3Ka907K1S2/comments?item_id=item${movieId}`,
  )
    .then((response) => response.json())
    .then((data) => {
      commentCount.innerText = `Comments(${data.length})`;
    });
};

export default myCommentCount;
