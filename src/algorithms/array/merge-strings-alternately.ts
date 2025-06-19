export function mergeAlternately(word1: string, word2: string) {
  const output: string[] = [];
  for (let i = 0; i < word1.length; i++) {
    const letter1 = word1[i];
    output.push(letter1);

    if (i < word2.length) {
      const letter2 = word2[i];
      output.push(letter2);
    }
  }

  if (word2.length > word1.length) {
    output.push(...word2.slice(word1.length));
  }

  return output.join("");
}

/*
 * cuidado com += em strings
 * */
export function mergeAlternately2(word1: string, word2: string): string {
  let result = "";
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result += word1[i];
    if (i < word2.length) result += word2[i];
  }

  return result;
}

/**
 * Sem usar concat em strings
 */
export function mergeAlternately3(word1: string, word2: string): string {
  const result: string[] = [];
  const maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) result.push(word1[i]);
    if (i < word2.length) result.push(word2[i]);
  }

  return result.join(""); // O(n + m)
}
