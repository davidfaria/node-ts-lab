import { Queue } from "./queue.js";

export function hotPotato(names: string[], num: number) {
  const queue = new Queue<string>();
  const elimitatedList = [];
  for (let i = 0; i < names.length; i++) {
    queue.enqueue(names[i]);
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    elimitatedList.push(queue.dequeue()!);
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(),
  };
}
