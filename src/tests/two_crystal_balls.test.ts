import { twoCrystalBalls } from '../problems/two_crystal_balls';

test('Crystal Balls', () => {
  const numOfLevels = 10_000;
  const idx = Math.floor(Math.random() * numOfLevels);
  const data = new Array(numOfLevels).fill(false) as boolean[];

  for (let i = idx; i < numOfLevels; ++i) {
    data[i] = true;
  }

  expect(twoCrystalBalls(data)).toEqual(idx);
  expect(twoCrystalBalls(new Array(821).fill(false) as boolean[])).toEqual(-1);
});
