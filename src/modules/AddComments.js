/* import myCommentCount from './countComments.js';
 */
const myCommentAdd = (movieId, commentHolder, commentCount) => {
  const userName = document.getElementById('name');
  const userComment = document.getElementById('comment');
  const postBttn = document.getElementById('post');

  postBttn.addEventListener('click', () => {
    if (userName.value === '' || userComment.value === '') {
      return;
    }
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

      commentCount.innerText = `Comments(${data.length})`;
      const keys = Object.keys(data);
      const secondToLastKey = keys[keys.length - 1];
      const secondToLastValue = data[secondToLastKey];

      const li = document.createElement('li');
      li.classList = 'list-item';
      li.innerHTML = `${secondToLastValue.creation_date} ${secondToLastValue.username} : ${secondToLastValue.comment}`;
      commentHolder.appendChild(li);

      const myFirstItem = commentHolder.querySelectorAll('li')[data.length];
      commentHolder.removeChild(myFirstItem);
    };
    getData();
    setTimeout(() => {
      getData();
    }, 1000);

    userName.value = '';
    userComment.value = '';
  });
};

export default myCommentAdd;