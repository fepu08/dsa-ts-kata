import { linearSearch } from '../algorithms/linear_search';

describe('LinearSearch', () => {
  test('Empty list', () => {
    const item = 42;
    const list: number[] = [];

    expect(linearSearch(list, item)).toBeFalsy();
  });

  test('No desired item in list', () => {
    const item = 42;
    const list: number[] = [1, 2, 3, 4];

    expect(linearSearch(list, item)).toBeFalsy();
  });

  test('Item is the first element of the list', () => {
    const item = 42;
    const list: number[] = [item, 2, 3, 4];

    expect(linearSearch(list, 42)).toBeTruthy();
  });

  test('Item is the last element of the list', () => {
    const item = 42;
    const list: number[] = [1, 2, 3, item];

    expect(linearSearch(list, 42)).toBeTruthy();
  });

  test('Item is in the list', () => {
    const item = 42;
    const list: number[] = [1, 2, item, 4];

    expect(linearSearch(list, 42)).toBeTruthy();
  });

  test('List with a single element', () => {
    expect(linearSearch([1], 1)).toBeTruthy();
    expect(linearSearch([1], 0)).toBeFalsy();
  });

  test('List with two elements', () => {
    expect(linearSearch([1, 2], 1)).toBeTruthy();
    expect(linearSearch([1, 2], 2)).toBeTruthy();
    expect(linearSearch([1, 2], 0)).toBeFalsy();
  });
});
