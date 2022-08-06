import refs from "./refs.js";

refs.inner.addEventListener("click", onInnerClick);
refs.stopBtn.addEventListener("click", onBtnClick);

function onInnerClick(e) {
  if (e.target.className === "inner" || e.target.className.includes("paused")) {
    refs.inner.classList.remove("paused");
    refs.inner.classList.add("active");
  } 
}

function onBtnClick() {
  refs.inner.classList.add("paused");
}
