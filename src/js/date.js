import refs from "./refs.js";

refs.dateInput.addEventListener("change", getDate);

function getDate(e) {
  let selectedDate = e.target.value;
  let date = new Date(selectedDate).getDay();
  if (date === 0) {
    date = 7;
  }
  refs.day.innerText = date;
}
