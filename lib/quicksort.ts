import { Queue } from "./queue.ts";

export function quicksort(
  array: Array<number>,
  start = 0,
  end = array.length,
): void {
  if (end <= start || end - start === 1) return;

  const pivot = array[end - 1];

  let swapIndex = start - 1;
  for (let i = start; i < end; i++) {
    const value = array[i];
    if (value <= pivot) {
      swapIndex++;

      if (i > swapIndex) {
        const temp = array[i];
        array[i] = array[swapIndex];
        array[swapIndex] = temp;
      } else if (swapIndex === i) {
        // We do nothing
      } else {
        throw new Error("This should not happen");
      }
    } else {
      // We do nothing
    }
  }

  quicksort(array, start, swapIndex);
  quicksort(array, swapIndex + 1, end);
}

export function quicksortIterative(array: Array<number>) {
  const queue = new Queue<[number, number]>();
  queue.add([0, array.length]);

  while (queue.has()) {
    const boundaries = queue.pop();
    const [start, end] = boundaries!;

    if (end <= start || end - start === 1) continue;

    const pivot = array[end - 1];

    let swapIndex = start - 1;
    let alreadySorted = true;
    let previousValue = array[0];

    for (let i = start; i < end; i++) {
      const value = array[i];
      if (previousValue > value) alreadySorted = false;
      previousValue = value;

      if (value > pivot) continue;

      swapIndex++;
      if (i > swapIndex) {
        const temp = array[i];
        array[i] = array[swapIndex];
        array[swapIndex] = temp;
      } else if (swapIndex === i) {
        // We do nothing
      } else {
        throw new Error("This should not happen");
      }
    }

    if (!alreadySorted) {
      queue.add([start, swapIndex]);
      queue.add([swapIndex + 1, end]);
    }
  }
}
