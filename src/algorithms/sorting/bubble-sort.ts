/**
 * Atenção:  i< nums.length - 1
 * -1  porque quando estamos comparando o j+1, ele vai ser o ultimo item da array
 * caso contrario ele vai ficar fora da array - gerando erro de "index out of bound"
 *
 *
 * */
export function bubbleSort2(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      const left = nums[j];
      const right = nums[j + 1];
      if (left > right) {
        nums[j] = right;
        nums[j + 1] = left;
      }
    }
  }
  return nums;
}

/**
 *  Usando array destructuring
 * */
export function bubbleSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}
