import type { CmpFunction } from './../types/ds.type';

export class PriorityQueue<T = any> {
  constructor(cmp: CmpFunction, values?: T[]);
  get(): T[];
  front(): T | null;
  back(): T | null;
  push(value: T): PriorityQueue<T>;
  pop(): T | null;
  size(): number;
  isEmpty(): boolean;
  clear(): void;
  [Symbol.iterator](): Iterator<T, any, undefined>;
}
