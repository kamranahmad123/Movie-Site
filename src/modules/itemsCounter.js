const itemsCounter = document.getElementById('showNumber');

export default function ItemsCount (count) {
  itemsCounter.innerHTML = `Total TV-shows(${count})`;
}
