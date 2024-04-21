export function linearSearch(array: number[], item: number): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
  return false;
}
