export const translateEnglishToMorse = (letter) => {
  const letters = {
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
  if (letter === "a") {
    return ".-";
  } else if (letter === "b") {
    return "-...";
  } else if (letter === "c") {
    return "-.-.";
  } else if (letter === "d") {
    return "-..";
  } else if (letter === "e") {
    return ".";
  } else if (letter === "f") {
    return "..-.";
  } else if (letter === "g") {
    return "--.";
  } else if (letter === "h") {
    return "....";
  } else if (letter === "i") {
    return "..";
  } else if (letter === "j") {
    return ".---";
  } else if (letter === "k") {
    return "-.-";
  } else if (letter === "l") {
    return ".-..";
  } else if (letter === "m") {
    return "--";
  } else if (letter === "n") {
    return "-.";
  } else if (letter === "o") {
    return "---";
  } else if (letter === "p") {
    return ".--.";
  } else if (letter === "q") {
    return "--.-";
  } else if (letter === "r") {
    return ".-.";
  } else if (letter === "s") {
    return "...";
  } else if (letter === "t") {
    return "-";
  } else if (letter === "u") {
    return "..-";
  } else if (letter === "v") {
    return "...-";
  } else if (letter === "w") {
    return ".--";
  } else if (letter === "x") {
    return "-..-";
  } else if (letter === "y") {
    return "-.--";
  } else if (letter === "z") {
    return "--..";
  } else {
    return "unavailable";
  }
};
