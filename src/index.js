import { data } from "./data.js";

const list = document.querySelector(".list");

function createGalleryItem({ name, photo, year, fuel, engine }) {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");

  const cardPhotoWrapper = document.createElement("div");
  cardPhotoWrapper.classList.add("photo-wrapper");
  cardPhotoWrapper.style.backgroundImage = `url(${photo})`

  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;

  const cardYear = document.createElement("p");
  cardYear.classList.add("card-year");
  cardYear.innerText = year;

  const cardFuel = document.createElement("p");
  cardFuel.classList.add("card-fuel");
  cardFuel.innerText = fuel;

  const cardEngine = document.createElement("p");
  cardEngine.classList.add("card-engine");
  cardEngine.innerText = engine;

  listItem.append(cardPhotoWrapper, cardTitle, cardYear, cardFuel, cardEngine);

  return listItem;
}

const cards = data.map(createGalleryItem);

list.append(...cards);

