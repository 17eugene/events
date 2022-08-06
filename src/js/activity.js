import refs from "./refs/refs.js";

let timeWithoutActivity = 300000;
let timeoutToClose = 30000;
let lastActiveTimestamp = 0;
let userIsActive = false;
let closeTimeoutId; 

window.addEventListener('mousemove', active);
window.addEventListener('keypress', active);
window.addEventListener('click', active);
window.addEventListener('scroll', active);

setInterval(checkUserIsActive, 1000)
active();



function checkUserIsActive() {
  if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeWithoutActivity){
    userIsActive = false;
    refs.overlay.classList.add("active")
    refs.timeToClose.textContent = timeoutToClose / 1000;
    closeTimeoutId = setTimeout(closeWindow, timeoutToClose);
  }
}

function active() {
  lastActiveTimestamp = new Date().getTime();
  if (!userIsActive) {
    userIsActive = true;
    refs.overlay.classList.remove("active");
    clearTimeout(closeTimeoutId);
  }
}

function closeWindow() {
    window.close()
}