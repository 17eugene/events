import refs from "./refs/refs.js";

document.addEventListener("DOMContentLoaded", ready);
refs.toggleLink.addEventListener("click", onToggleLink);

function ready() {
  let element = document.createElement("div");
  element.classList.add("toggle-element");
  element.style.width = "100px";
  element.style.height = "100px";
  element.style.background = "red";
  element.innerText = "ELEMENT";
  element.style.color = "#fff";
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";

  return element;
}

refs.outerBlock.append(ready());

function onToggleLink(e) {
    e.preventDefault();
  if (refs.outerBlock.className.includes("hidden-element")) {
    refs.outerBlock.classList.remove("hidden-element");
    refs.toggleLink.innerText = "Click to hide";
  } else {
    refs.outerBlock.classList.add("hidden-element");
    refs.toggleLink.innerText = "Click to open";
  }
}
