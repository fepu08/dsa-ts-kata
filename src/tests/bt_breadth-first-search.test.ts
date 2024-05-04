import { bfs } from '../algorithms/bt-breadth-first-search';
import { tree } from './mocks/tree_mock';

test('bt bfs', function () {
  expect(bfs(tree, 45)).toEqual(true);
  expect(bfs(tree, 7)).toEqual(true);
  expect(bfs(tree, 69)).toEqual(false);
});
