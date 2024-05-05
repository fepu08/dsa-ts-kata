import compare from '../problems/compare_binary_trees';
import { tree, tree2 } from './mocks/tree_mock';

test('Compare Binary Trees', function () {
  expect(compare(tree, tree)).toEqual(true);
  expect(compare(tree, tree2)).toEqual(false);
});
