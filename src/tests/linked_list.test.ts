import { LinkedList } from '../data_structures/linked_list';

describe('Linked Lists', () => {
  test('Singly linked lists', () => {
    const list: LinkedList<number> = new LinkedList<number>();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(new LinkedList<number>().length).toBe(0);
    expect(list.length).toBe(3);
    expect(list.get(-1)).toBe(undefined);
    expect(new LinkedList<number>().get(0)).toBe(undefined);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
    expect(list.get(3)).toBe(undefined);

    list.prepend(420);
    expect(list.get(0)).toBe(420);
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe(2);
  });
});
