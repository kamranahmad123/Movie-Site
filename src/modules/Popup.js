import myCommentDisplay from './DisplayComment.js';
/* import myCommentAdd from './AddComments.js'; */

export default function myPopup(button, name, description, category, popPicture, movieId) {
  const popContainer = document.createElement('div');
  popContainer.innerHTML = `<div class="pop-container">
  <i class="fa fa-close" id="closeX"></i>
  <center><div class="pup-holder">
  <img src="${popPicture}" class='pop-image'>
  <h1 class="pop-name">${name}</h1>
  <h2 class="pop-category">${category}</h2>
  <p class="pop-description">${description}</p>
  <ul id="comment-holder"></ul>
  <input type="text" id="name" placeholder="Your Name Here" />
  <textarea col="5" row="5" id="comment" placeholder="Your Comment Here"></textarea>
  <button id="post">Comment</button>
  </div></center>
  </div>`;
  document.body.appendChild(popContainer);

  const myRemove = document.getElementById('closeX');
  myRemove.addEventListener('click', () => {
    document.body.removeChild(popContainer);
  });
  const commentHolder = document.getElementById('comment-holder');

  myCommentDisplay(movieId, commentHolder);
  /* myCommentAdd(movieId); */
}
