# Quicksort

Quicksort in deno. This implementation is faster than standard sort for numbers

This is the result of `deno bench run.ts`
```
$ deno bench run.ts 
Check file: QuickSort/run.ts
    CPU | Intel(R) Core(TM) i9-9900K CPU @ 3.60GHz
Runtime | Deno 2.0.4 (x86_64-pc-windows-msvc)

file: QuickSort/run.ts

benchmark     time/iter (avg)        iter/s      (min … max)           p75      p99     p995
------------- ----------------------------- --------------------- --------------------------
builtIn               25.1 ms          39.9 ( 23.9 ms …  42.5 ms)  24.9 ms  42.5 ms  42.5 ms
myQuicksort           13.4 ms          74.5 ( 11.6 ms …  33.1 ms)  13.0 ms  33.1 ms  33.1 ms
```
