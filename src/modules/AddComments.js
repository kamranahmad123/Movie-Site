/* const myCommentAdd = (movieId) => {
  const userName = document.getElementById('name');
  const userComment = document.getElementById('comment');
  const postBttn = document.getElementById('post');

  postBttn.addEventListener('click', () => {
    const sendData = async () => {
      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RIQXlT0tOk3Ka907K1S2/comments/', {
        method: 'POST',
        body: JSON.stringify({
          item_id: `item${movieId}`,
          username: userName.value,
          comment: userComment.value,
          date: new Date(),
        }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
      });
    };

    sendData();
    const getData = async () => {
      const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RIQXlT0tOk3Ka907K1S2/comments?item_id=item${movieId}`);
      const data = await res.json();
    };
    getData();
  });
};

export default myCommentAdd;
 */