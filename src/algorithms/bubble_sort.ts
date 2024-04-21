import { swap } from '../utils';

export function bubbleSort(array: number[]): number[] {
  let swapped = false;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      console.log(JSON.stringify(array));

      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (swapped == false) break;
  }

  return array;
}
