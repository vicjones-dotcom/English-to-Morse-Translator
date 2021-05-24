import { translateEnglishToMorse } from "./translator.js";
const button = document
  .querySelector("button")
  .addEventListener("click", () => {
    let word = document.querySelector("#english-input").value;
    const result = translateEnglishToMorse(word);
    document.querySelector("#morse-word").textContent = result;
  });
