export function binarySearch(array: number[], item: number): boolean {
  let low = 0;
  let high = array.length;
  let mid = Math.floor(high / 2);

  while (low < high) {
    if (array[mid] === item) {
      return true;
    } else if (item > array[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
    mid = Math.floor(low + (high - low) / 2);
  }

  return false;
}
