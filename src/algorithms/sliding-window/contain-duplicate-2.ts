export function slidingWindow(nums: number[], k: number) {
  const set = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (set.has(num)) {
      console.log(`✓ Encontrado duplicado: ${num} nos índices próximos`);
      return true;
    }

    set.add(num); // adiciona o número atual ao set

    if (set.size > k) {
      // Remove o mais antigo (que saiu da janela k)
      const toRemove = nums[i - k];
      set.delete(toRemove);
    }

    // log para acompanhar o estado
    console.log(`i=${i}, num=${num}, janela = ${[...set]}`);
  }

  return false;
}
