import { eightBalls } from '../problems/8-balls';

describe('EightBalls', () => {
  test.each([
    [[1, 2, 2, 2, 2, 2], 0],
    [[2, 2, 2, 2, 2, 1], 5],
    [[2, 2, 1, 2, 2, 2], 2],
  ])('Balls', (balls, expected) => {
    expect(eightBalls(balls)).toBe(expected);
  });
});
