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
it("Should translate hello to .... . .-.. .-.. ---", () => {
  const result = translateEnglishToMorse("hello");
  expect(result).toBe(".... . .-.. .-.. ---");
});
it("Should translate undefined to unavailable", () => {
  const result = translateEnglishToMorse("undefined");
  expect(result).toBe("unavailable");
});
