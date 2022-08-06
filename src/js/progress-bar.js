import refs from "./refs.js";

window.addEventListener("scroll", progressBarHandler);

function progressBarHandler(e) {
  let windowScroll = document.documentElement.scrollTop;
  let windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = (windowScroll / windowHeight) * 100;

  refs.progressBar.style.width = scrollValue + "%";
}
