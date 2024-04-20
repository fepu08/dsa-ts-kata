import { bubbleSort } from '../algorithms/bubble_sort';

test('BubbleSort', () => {
  const arr = [9, 3, 7, 4, 69, 420, 42];

  bubbleSort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
