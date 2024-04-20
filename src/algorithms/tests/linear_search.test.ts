import { linearSearch } from '../linear_search';

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
});
