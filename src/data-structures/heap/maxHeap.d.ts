/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import type { Comparator } from '../types/ds.type';
import Heap from './heap';

export class MaxHeap<T = any> implements Iterable<T> {
  constructor(getCmpValue: Comparator<T>, _heap?: Heap<T>);
  get(): T[];
  root(): T | null;
  leaf(): T | null;
  top(): T | null;
  size(): number;
  isEmpty(): boolean;
  insert(value: T): MaxHeap<T>;
  push(value: T): MaxHeap<T>;
  pop(): T | null;
  heapSort(): T[];
  sort(): T[];
  fix(): MaxHeap<T>;
  heapify(): MaxHeap<T>;
  isHeap(): boolean;
  clear(): void;
  clone(): MaxHeap<T>;
  static heapify<T>(cmp: Comparator<T>, values: T[]): MaxHeap<T>;
  static isHeap<T>(cmp: Comparator<T>, values: T[]): boolean;
  [Symbol.iterator](): Iterator<T, any, undefined>;
}
