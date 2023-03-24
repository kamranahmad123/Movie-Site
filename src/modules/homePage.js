import movieCount from './header.js';
import {sendData, getLikeData} from './like-section.js';
import myPopup from './Popup.js';

const series = document.querySelector('.episode-list');

const displayData = (data, count) => {
  const { name } = data;
  const description = data.summary;
  const movieId = data.id;
  const category = data.genres;
  const homePicture = data.image.medium;
  const popPicture = data.image.original;
  const movieImage = document.createElement('img');
  const movieName = document.createElement('p');
  const division = document.createElement('div');
  const movieCategory = document.createElement('p');
  const button = document.createElement('button');
  const box = document.createElement('div');
  const like = document.createElement('i');
  const picDetails = document.createElement('div');
  const likeCount = document.createElement('p');
  movieImage.src = homePicture;
  movieImage.classList.add('moviePic');
  movieName.innerHTML = name;
  movieCategory.innerHTML = category;
  const x = count - 1;
  like.addEventListener('click', () => {
    sendData(x);
  });
  button.innerHTML = 'Comment';
  like.setAttribute('class', 'fa fa-heart');
  movieName.classList.add('movieName');
  movieName.classList.add('movieName');
  division.classList.add('movieFrame');
  movieCategory.classList.add('movieCategory');
  picDetails.classList.add('picDetails');
  likeCount.classList.add('likeCount');
  button.classList = 'comment-bttn';
  button.addEventListener('click', () => {
    myPopup(button, name, description, category, popPicture, movieId);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // for a smooth scrolling animation
    });
  });
  getLikeData(x).then((x) => { likeCount.innerHTML = `Likes: ${x}`; });
  box.classList.add('box');
  box.classList.add('box');
  series.classList.add('series');
  box.appendChild(button);
  box.appendChild(like);
  division.appendChild(movieImage);
  picDetails.appendChild(movieName);
  picDetails.appendChild(movieCategory);
  picDetails.appendChild(box);
  division.appendChild(picDetails);
  division.appendChild(likeCount);
  series.appendChild(division);

  /// Like part
  like.addEventListener('click', () => like.classList.toggle('like'));
};

// Main section
const getData = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const data = await res.json();
  data.forEach((element, count) => {
    if (count < 20) {
      count += 1;
      displayData(element, count);
      movieCount(count);
    }
  });
};

getData();
