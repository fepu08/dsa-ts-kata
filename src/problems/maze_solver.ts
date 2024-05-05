import { Point } from '../global';

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point,
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false) as boolean[]);
  }

  walk(maze, wall, start, end, seen, path);
  return path;
}

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[],
): boolean {
  // 1. base case
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }
  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }
  // seen
  if (seen[curr.y][curr.x]) {
    return false;
  }
  // reached end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // pre-recurse
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        } as Point,
        end,
        seen,
        path,
      )
    ) {
      return true;
    }
  }

  // post-recurse
  path.pop();

  return false;
}
