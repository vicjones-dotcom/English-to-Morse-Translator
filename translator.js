export const translateEnglishToMorse = (character) => {
  const message = "Hello World";
  const characters = {
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  // if (character === "a") {
  //   return ".-";
  // } else if (character === "b") {
  //   return "-...";
  // } else if (character === "c") {
  //   return "-.-.";
  // } else if (character === "d") {
  //   return "-..";
  // } else if (character === "e") {
  //   return ".";
  // } else if (character === "f") {
  //   return "..-.";
  // } else if (character === "g") {
  //   return "--.";
  // } else if (character === "h") {
  //   return "....";
  // } else if (character === "i") {
  //   return "..";
  // } else if (character === "j") {
  //   return ".---";
  // } else if (character === "k") {
  //   return "-.-";
  // } else if (character === "l") {
  //   return ".-..";
  // } else if (character === "m") {
  //   return "--";
  // } else if (character === "n") {
  //   return "-.";
  // } else if (character === "o") {
  //   return "---";
  // } else if (character === "p") {
  //   return ".--.";
  // } else if (character === "q") {
  //   return "--.-";
  // } else if (character === "r") {
  //   return ".-.";
  // } else if (character === "s") {
  //   return "...";
  // } else if (character === "t") {
  //   return "-";
  // } else if (character === "u") {
  //   return "..-";
  // } else if (character === "v") {
  //   return "...-";
  // } else if (character === "w") {
  //   return ".--";
  // } else if (character === "x") {
  //   return "-..-";
  // } else if (character === "y") {
  //   return "-.--";
  // } else if (character === "z") {
  //   return "--..";
  // } else if (character === " ") {
  //   return "/";
  // } else {
  //   return "unavailable";
  // }

  return character
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((letter) => characters[letter])
        .join("")
    )
    .join(" ");
};
