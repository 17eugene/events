import refs from "./refs.js";

refs.themeToggler.addEventListener("change", setTheme);

const themes = {
  DARK: "dark",
  LIGHT: "light",
};

function setTheme() {
  const check = refs.themeToggler.checked;

  if (check) {
    refs.body.classList.add(themes.DARK);
    refs.body.classList.remove(themes.LIGHT);

    refs.header.classList.add(themes.DARK);
    refs.footer.classList.add(themes.DARK);

    localStorage.setItem("theme", themes.DARK);
  } else {
    refs.body.classList.add(themes.LIGHT);
    refs.body.classList.remove(themes.DARK);

    refs.header.classList.remove(themes.DARK);
    refs.footer.classList.remove(themes.DARK);

    localStorage.removeItem("theme");
    localStorage.setItem("theme", themes.LIGHT);
  }
}

const themeFromLocalStorage = localStorage.getItem("theme");

if (themeFromLocalStorage === themes.DARK) {
  refs.body.classList.add(themes.DARK);
  refs.header.classList.add(themes.DARK);
  refs.footer.classList.add(themes.DARK);

  refs.themeToggler.checked = true;
}
