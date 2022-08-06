import refs from "./refs/refs.js";

refs.navigation.addEventListener("click", onNavLink);

function onNavLink(e) {
  if (e.target.innerText === "FORM") {
    refs.form.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  if (e.target.innerText === "CARDS") {
    refs.cardsSection.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  if (e.target.innerText === "ADDITIONAL") {
    refs.additionalSection.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
}
