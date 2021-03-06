import { translateEnglishToMorse } from "./translator.js";
const button = document
  .querySelector("button")
  .addEventListener("click", () => {
    let letter = document.querySelector("#english-input").value.toLowerCase();
    const result = translateEnglishToMorse(letter);
    document.querySelector("#morse-word").textContent = result;
  });
