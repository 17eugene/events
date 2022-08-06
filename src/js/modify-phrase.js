import refs from "./refs.js";

refs.phraseInput.addEventListener("change", phrase);
refs.submitPhrase.addEventListener("submit", generateListFromPhrase);

function phrase(e) {
  let splittedPhrase = e.target.value.trim().split(" ");
  if (splittedPhrase.length < 3) {
    alert("Фраза должна состоять хотя бы из 3-ех слов!");
    return;
  }

  generateListFromPhrase(splittedPhrase);

  let firstWord = refs.phraseList.firstChild;
  let lastWord = refs.phraseList.lastChild;
  let sibling = lastWord.previousSibling;
  firstWord.className = "uppercase";
  lastWord.className = "lowercase";
  sibling.className = "lowercase"

  countA(e.target.value.trim().toLowerCase());
  // e.target.value = "";
}

function generateListFromPhrase(phrase) {
  for (let i = 0; i < phrase.length; i++) {
    let listItem = document.createElement("li");
    listItem.classList.add("phrase-item");
    listItem.textContent = phrase[i];
    refs.phraseList.append(listItem);
  }
}

function countA(phrase) {
    let result = {};
    for(let i = 0; i <= phrase.length; i++) {
        if(phrase[i] === "a") {
            if(!result[phrase[i]]) {
                result[phrase[i]] = 1
            } else {
                result[phrase[i]]++
            }
        }
    }

    refs.quantity.textContent = Object.values(result)
}

