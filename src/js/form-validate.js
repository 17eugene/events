import refs from "./refs.js";

refs.form.addEventListener("submit", submitFormHandler);

let userData = {};

function submitFormHandler(e) {
  e.preventDefault();

  validateForm();

  for (let key in userData) {
    if (!userData[key]) {
      return null;
    }
  }
  alert(JSON.stringify(userData));
  refs.form.reset();
}


function validateForm() {
  const usernameValue = refs.username.value.trim();
  const emailValue = refs.email.value.trim();
  const passwordValue = refs.password.value.trim();

  if (usernameValue === "") {
    setError(refs.username, "Username is required!");
  } else {
    setSuccess(refs.username);
  }

  if (emailValue === "") {
    setError(refs.email, "Email address is required!");
  } else {
    setSuccess(refs.email);
  }

  if (passwordValue === "") {
    setError(refs.password, "Password is required!");
  } else if (passwordValue.length < 4) {
    setError(refs.password, "Minimum length is 4");
  } else if (passwordValue.length > 16) {
    setError(refs.password, "Maximum length is 16");
  } else {
    setSuccess(refs.password);
  }
}

function setError(input, errorMessage) {
  const label = input.parentElement;
  const message = label.nextElementSibling;

  message.textContent = errorMessage;

  label.className = "form__label error";

  userData = { ...userData, [input.name]: null };
}

function setSuccess(input) {
  const label = input.parentElement;

  label.className = "form__label success";

  userData = { ...userData, [input.name]: input.value };
}
