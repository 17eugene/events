const refs = {
  //progress-bar
  progressBar: document.querySelector(".progress"),

  //form
  form: document.querySelector(".form"),
  formSubmitBtn: document.querySelector("form__btn"),
  username: document.querySelector("[name='username']"),
  email: document.querySelector("[name='email']"),
  password: document.querySelector("[name='password']"),

  //theme-toggle
  body: document.body,
  themeToggler: document.querySelector("#theme-toggler__input"),
  header: document.querySelector(".header"),
  footer: document.querySelector(".footer"),

  //activity
  overlay: document.querySelector(".overlay"),
  timeToClose: document.querySelector(".timeout"),

  //smooth scroll
  navigation: document.querySelector(".navigation__list"),
  cardsSection: document.querySelector(".cards-title"),
  additionalSection: document.querySelector(".additional-title"),

  //move by click
  inner: document.querySelector(".inner"),
  stopBtn: document.querySelector(".stop"),

  //hidden while loading
  container: document.querySelector(".main"),
  outerBlock: document.querySelector(".outer"),
  toggleLink: document.querySelector(".toggle-link"),

  //day number
  dateInput: document.querySelector("[type='date']"),
  day: document.querySelector(".day-number"),

  //modify phrase
  phraseInput: document.querySelector(".phrase"),
  submitPhrase: document.querySelector(".phrase-submit"),
  phraseList: document.querySelector(".phrase-list"),
  quantity: document.querySelector(".quantity"),
  clearBtn: document.querySelector(".clear-list"),
};

export default refs;
