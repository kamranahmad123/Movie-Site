const myMovieCount = document.getElementById('showNumber');

export default function movieCount(count) {
  myMovieCount.innerHTML = `Total TV-shows(${count})`;
}
