import { LinkedList } from '../data_structures/linked_list';

describe('Linked Lists', () => {
  test('Singly linked lists', () => {
    const list: LinkedList<number> = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);
    // list 1 -> 2 -> 3

    expect(new LinkedList<number>().length).toBe(0);
    expect(list.length).toBe(3);
    expect(list.get(-1)).toBe(undefined);
    expect(new LinkedList<number>().get(0)).toBe(undefined);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
    expect(list.get(3)).toBe(undefined);

    list.prepend(420);
    // list 420 -> 1 -> 2 -> 3
    expect(list.get(0)).toBe(420);
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe(2);
    expect(list.get(3)).toBe(3);

    list.insertAt(1112, 2);
    // list 420 -> 1 -> 1112 -> 2 -> 3
    expect(list.length).toBe(5);
    expect(list.get(0)).toBe(420);
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe(1112);
    expect(list.get(3)).toBe(2);
    expect(list.get(4)).toBe(3);
  });
});
