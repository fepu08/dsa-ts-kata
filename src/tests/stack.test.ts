import Stack from '../data_structures/stack';

test('Stack', () => {
  const stack = new Stack<number>();

  expect(stack.peek()).toBe(undefined);
  expect(stack.length).toBe(0);

  stack.push(1);
  stack.push(2);
  stack.push(3);

  expect(stack.peek()).toBe(3);
  expect(stack.length).toBe(3);

  expect(stack.pop()).toBe(3);
  expect(stack.peek()).toBe(2);
  expect(stack.length).toBe(2);
});
