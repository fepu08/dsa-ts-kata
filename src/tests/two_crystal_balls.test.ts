import { twoCrystalBalls } from '../problems/two_crystal_balls';

describe('Crystal Balls', () => {
  test('random', () => {
    const numOfLevels = 10_000;
    const idx = Math.floor(Math.random() * numOfLevels);
    const data = new Array(numOfLevels).fill(false) as boolean[];

    for (let i = idx; i < numOfLevels; ++i) {
      data[i] = true;
    }

    expect(twoCrystalBalls(data)).toEqual(idx);
  });

  test('array only contains false', () => {
    expect(twoCrystalBalls(new Array(821).fill(false) as boolean[])).toEqual(
      -1,
    );
  });

  test('last element is the only true value', () => {
    const array = new Array(123).fill(false) as boolean[];

    array[122] = true;

    expect(twoCrystalBalls(array)).toEqual(122);
  });
});
