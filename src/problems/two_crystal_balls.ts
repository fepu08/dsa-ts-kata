/* 
	Given two crystal balls that will break if dropped from high enough distance, 
	determine the exact spot in which it will break in the most optimized way
*/
export function twoCrystalBalls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = 0;

  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jmpAmount;
  for (; i < i + jmpAmount && i < breaks.length; i++) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
