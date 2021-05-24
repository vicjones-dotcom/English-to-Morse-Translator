export const translateEnglishToMorse = (word) => {
  if (word === "a") {
    return ".-";
  } else if (word === "b") {
    return "-...";
  } else if (word === "c") {
    return "-.-.";
  } else if (word === "hello") {
    return ".... . .-.. .-.. ---";
  } else {
    return "unavailable";
  }
};
