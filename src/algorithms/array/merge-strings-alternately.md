# 1768. Merge Strings Alternately

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

### Example 1:

```bash
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:
```

```bash
Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1: a b
word2: p q r s
merged: a p b q r s
Example 3:
```

```bash
Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1: a b c d
word2: p q
merged: a p b q c d
```

### Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

--

Sim! Sua estratégia é de fato **O(n)**, e vou explicar o porquê com clareza.

---

### ✅ Notação Big O – Seu caso:

Você percorre os caracteres de `word1` com:

```ts
for (let i = 0; i < word1.length; i++) {
  ...
}
```

- Esse laço roda `word1.length` vezes.
- Em cada iteração, você também pode acessar `word2[i]` **uma vez no máximo**.
- No final, você também pode fazer um `.slice()` de `word2`, que no pior caso adiciona até `word2.length - word1.length` caracteres.

➡️ Portanto, o **tempo total** depende de:

- `word1.length` (chamemos de `n`)
- e, **no máximo**, `word2.length` (chamemos de `m`)

---

### 🎯 Complexidade final:

Sua função tem tempo **O(n + m)**, onde:

- `n` = comprimento de `word1`
- `m` = comprimento de `word2`

Como a notação Big O ignora constantes e foca no crescimento com base no input, podemos considerar a complexidade como:

> 🔹 **O(max(n, m))**

---

### 🚀 Resumo:

- ✅ Sim, sua estratégia percorre os dois arrays uma vez no total.
- ✅ Ela é linear, **O(n + m)** ou, de forma simplificada, **O(max(n, m))**.
- ❌ Não é apenas **O(n)**, pois `word2` também pode ser maior.

Se você tivesse percorrido ambos os arrays **duas vezes** ou usado `.split().join()` com muita manipulação intermediária, aí talvez virasse mais custoso. Mas sua solução está eficiente!
