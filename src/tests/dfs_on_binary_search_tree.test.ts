import dfs from '../algorithms/dfs_on_binary_search_tree';
import { tree } from './mocks/tree_mock';

test('DFS on BST', function () {
  expect(dfs(tree, 45)).toEqual(true);
  expect(dfs(tree, 7)).toEqual(true);
  expect(dfs(tree, 69)).toEqual(false);
});
