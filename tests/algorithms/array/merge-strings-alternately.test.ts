import { mergeAlternately } from "@/algorithms/array/merge-strings-alternately.js";

describe("[ 1768 Merge String Alternately ]", () => {
  test("#1 - merge string alternately", () => {
    const word1 = "abc";
    const word2 = "pqr";
    const expected = "apbqcr";
    const output = mergeAlternately(word1, word2);
    expect(output).toBe(expected);
  });

  test("#2 - merge string alternately", () => {
    const word1 = "ab";
    const word2 = "pqrs";
    const expected = "apbqrs";
    const output = mergeAlternately(word1, word2);
    expect(output).toBe(expected);
  });

  test("#3 - merge string alternately", () => {
    const word1 = "abcd";
    const word2 = "pq";
    const expected = "apbqcd";
    const output = mergeAlternately(word1, word2);
    expect(output).toBe(expected);
  });

  test("#4 - merge string alternately", () => {
    const word1 = "abc";
    const word2 = "pq";
    const expected = "apbqc";
    const output = mergeAlternately(word1, word2);
    expect(output).toBe(expected);
  });
});
