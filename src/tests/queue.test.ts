import Queue from '../data_structures/queue';

test('Queue', () => {
  const queue = new Queue<number>();

  expect(queue.peek()).toBe(undefined);
  expect(queue.length).toBe(0);

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.peek()).toBe(1);
  expect(queue.length).toBe(3);

  expect(queue.dequeue()).toBe(1);
  expect(queue.peek()).toBe(2);
  expect(queue.length).toBe(2);
});
