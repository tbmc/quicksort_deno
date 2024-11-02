import { quicksort, quicksortIterative } from "./quicksort.ts";
import { expect } from "jsr:@std/expect";
import { array as smallArray } from "../data/smallArray.ts";
import { array } from "../data/array.ts";

function testFunction(name: string, fn: (array: number[]) => void) {
  Deno.test(`example for ${name}`, () => {
    const data = [3, 2, 5, 0, 1, 8, 7, 6, 9, 4];
    fn(data);
    expect(data).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  Deno.test(`simple test for ${name}`, () => {
    const data = [4, 3, 18, 16, 2, 6, 8, 9, 11, 17];
    fn(data);
    expect(data).toEqual([2, 3, 4, 6, 8, 9, 11, 16, 17, 18]);
  });

  Deno.test(`smallArray test for ${name}`, () => {
    const data = [...smallArray];
    const sorted = data.toSorted((a, b) => a - b);
    fn(data);
    expect(data).toEqual(sorted);
  });

  Deno.test(`array test for ${name}`, () => {
    const data = [...array];
    const sorted = data.toSorted((a, b) => a - b);
    fn(data);
    expect(data).toEqual(sorted);
  });

  Deno.test(`sorted example for ${name}`, () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const expected = [...data];
    fn(data);
    expect(data).toEqual(expected);
  });

  Deno.test(`sorted smallArray for ${name}`, () => {
    const data = [...smallArray].toSorted((a, b) => a - b);
    const expected = [...data];
    fn(data);
    expect(data).toEqual(expected);
  });

  Deno.test(`sorted large array for ${name}`, () => {
    const data = [...array].toSorted((a, b) => a - b);
    const expected = [...data];
    fn(data);
    expect(data).toEqual(expected);
  });
}

testFunction("recursive", quicksort);
testFunction("iterative", quicksortIterative);

// Deno.test(`sorted large array for iterative`, () => {
//   const data = [...array].toSorted((a, b) => a - b);
//   const expected = [...data];
//   quicksortIterative(data);
//   expect(data).toEqual(expected);
// });
