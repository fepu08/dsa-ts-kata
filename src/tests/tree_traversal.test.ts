import {
  in_order_traversal,
  post_order_traversal,
  pre_order_traversal,
} from '../data_structures/tree_traversal';
import { tree } from './mocks/tree_mock';

test('In order', function () {
  expect(in_order_traversal(tree)).toEqual([
    5, 7, 10, 15, 20, 29, 30, 45, 50, 100,
  ]);
});

test('post order', function () {
  expect(post_order_traversal(tree)).toEqual([
    7, 5, 15, 10, 29, 45, 30, 100, 50, 20,
  ]);
});

test('Pre order', function () {
  expect(pre_order_traversal(tree)).toEqual([
    20, 10, 5, 7, 15, 50, 30, 29, 45, 100,
  ]);
});
