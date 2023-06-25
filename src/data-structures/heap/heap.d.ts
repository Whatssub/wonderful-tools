/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import type { CmpFunction } from '../types/ds.type';

export class Heap<T = any> implements Iterable<T> {
  constructor(cmp: CmpFunction<T>, data?: T[], leaf?: T[]);
  get(): T[];
  root(): T | null;
  leaf(): T | null;
  top(): T | null;
  size(): number;
  isEmpty(): boolean;
  insert(value: T): Heap<T>;
  push(value: T): Heap<T>;
  pop(): T | null;
  heapSort(): T[];
  sort(): T[];
  fix(): Heap<T>;
  heapify(): Heap<T>;
  isHeap(): boolean;
  clear(): void;
  clone(): Heap<T>;
  static heapify<U>(cmp: CmpFunction<U>, values: U[]): Heap<U>;
  static isHeap<U>(cmp: CmpFunction<U>, values: U[]): boolean;
  [Symbol.iterator](): Iterator<T, any, undefined>;
}
