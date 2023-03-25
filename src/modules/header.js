const myMovieCount = document.getElementById('showNumber');

const movieCount = (count) => {
  myMovieCount.innerHTML = `Total TV-shows(${count})`;
};

module.exports = movieCount;