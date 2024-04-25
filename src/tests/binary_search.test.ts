import { binarySearch } from '../algorithms/binary_search';

describe('BinarySearch', () => {
  test('Empty list', () => {
    const item = 42;
    const list: number[] = [];

    expect(binarySearch(list, item)).toBeFalsy();
  });

  test('No desired item in list', () => {
    const list: number[] = [1, 2, 3, 4];

    expect(binarySearch(list, 0)).toBeFalsy();
    expect(binarySearch(list, 5)).toBeFalsy();
  });

  test('Item is the first element of the list', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBeTruthy();
    expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).toBeTruthy();
  });

  test('Item is the last element of the list', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBeTruthy();
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toBeTruthy();
  });

  test('Item is in the list', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBeTruthy();
    expect(binarySearch([1, 2, 3, 4, 5, 6], 3)).toBeTruthy();
  });

  test('List with a single element', () => {
    expect(binarySearch([1], 1)).toBeTruthy();
    expect(binarySearch([1], 0)).toBeFalsy();
  });

  test('List with two elements', () => {
    expect(binarySearch([1, 2], 1)).toBeTruthy();
    expect(binarySearch([1, 2], 2)).toBeTruthy();
    expect(binarySearch([1, 2], 0)).toBeFalsy();
  });
});
