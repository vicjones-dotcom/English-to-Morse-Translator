import { expect } from "@jest/globals";
import { translateEnglishToMorse } from "./translator.js";
it("Should translate a to .-", () => {
  const result = translateEnglishToMorse("a");
  expect(result).toBe(".-");
});
it("Should translate b to -...", () => {
  const result = translateEnglishToMorse("b");
  expect(result).toBe("-...");
});
it("Should translate c to -.-.", () => {
  const result = translateEnglishToMorse("c");
  expect(result).toBe("-.-.");
});
it("Should translate d to -..", () => {
  const result = translateEnglishToMorse("d");
  expect(result).toBe("-..");
});
it("Should translate e to .", () => {
  const result = translateEnglishToMorse("e");
  expect(result).toBe(".");
});
it("Should translate f to -..", () => {
  const result = translateEnglishToMorse("f");
  expect(result).toBe("..-.");
});
it("Should translate g to --.", () => {
  const result = translateEnglishToMorse("g");
  expect(result).toBe("--.");
});
it("Should translate h to ....", () => {
  const result = translateEnglishToMorse("h");
  expect(result).toBe("....");
});
it("Should translate i to ..", () => {
  const result = translateEnglishToMorse("i");
  expect(result).toBe("..");
});
it("Should translate j to .---", () => {
  const result = translateEnglishToMorse("j");
  expect(result).toBe(".---");
});
it("Should translate k to -.-", () => {
  const result = translateEnglishToMorse("k");
  expect(result).toBe("-.-");
});
it("Should translate l to .-..", () => {
  const result = translateEnglishToMorse("l");
  expect(result).toBe(".-..");
});
it("Should translate m to --", () => {
  const result = translateEnglishToMorse("m");
  expect(result).toBe("--");
});
it("Should translate n to -.", () => {
  const result = translateEnglishToMorse("n");
  expect(result).toBe("-.");
});
it("Should translate o to ---", () => {
  const result = translateEnglishToMorse("o");
  expect(result).toBe("---");
});
it("Should translate p to .--.", () => {
  const result = translateEnglishToMorse("p");
  expect(result).toBe(".--.");
});
it("Should translate q to -..", () => {
  const result = translateEnglishToMorse("q");
  expect(result).toBe("--.-");
});
it("Should translate r to .-.", () => {
  const result = translateEnglishToMorse("r");
  expect(result).toBe(".-.");
});
it("Should translate s to ...", () => {
  const result = translateEnglishToMorse("s");
  expect(result).toBe("...");
});
it("Should translate t to -", () => {
  const result = translateEnglishToMorse("t");
  expect(result).toBe("-");
});
it("Should translate u to ..-", () => {
  const result = translateEnglishToMorse("u");
  expect(result).toBe("..-");
});
it("Should translate v to ...-", () => {
  const result = translateEnglishToMorse("v");
  expect(result).toBe("...-");
});
it("Should translate w to .--", () => {
  const result = translateEnglishToMorse("w");
  expect(result).toBe(".--");
});
it("Should translate x to -..-", () => {
  const result = translateEnglishToMorse("x");
  expect(result).toBe("-..-");
});
it("Should translate y to -.--", () => {
  const result = translateEnglishToMorse("y");
  expect(result).toBe("-.--");
});
it("Should translate z to --..", () => {
  const result = translateEnglishToMorse("z");
  expect(result).toBe("--..");
});

it("Should translate undefined to unavailable", () => {
  const result = translateEnglishToMorse("undefined");
  expect(result).toBe("unavailable");
});
