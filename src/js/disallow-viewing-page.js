import refs from "./refs.js";

refs.body.addEventListener("contextmenu", disableRightButtonClick);
refs.body.addEventListener("keydown", disableKeyboardKeys);

function disableRightButtonClick(e) {
  e.preventDefault();
  return false;
}

function disableKeyboardKeys(e) {
  if (e.ctrlKey || (e.keyCode >= 112 && e.keyCode <= 123)) {
    e.stopPropagation();
    e.preventDefault();
  }
}
