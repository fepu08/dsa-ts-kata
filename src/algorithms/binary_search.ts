export function binarySearch(array: number[], item: number): boolean {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] === item) {
      return true;
    } else if (array[mid] < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

export function binarySearch1(array: number[], item: number): boolean {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    if (array[mid] === item) {
      return true;
    } else if (array[mid] < item) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return false;
}
