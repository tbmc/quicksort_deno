import { array } from "./data/array.ts";
import { quicksortIterative } from "./lib/quicksort.ts";

Deno.bench(function builtIn() {
  const data = [...array];
  data.sort((a, b) => a - b);
});

Deno.bench(function customQuicksortIterative() {
  // const data = [...array];
  quicksortIterative(array);
});
