/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import type { Comparator } from '../types/ds.type';
import Heap from './heap';

export class MinHeap<T = any> implements Iterable<T> {
  constructor(getCmpValue: Comparator<T>, _heap?: Heap<T>);
  get(): T[];
  root(): T | null;
  leaf(): T | null;
  top(): T | null;
  size(): number;
  isEmpty(): boolean;
  insert(value: T): MinHeap<T>;
  push(value: T): MinHeap<T>;
  pop(): T | null;
  heapSort(): T[];
  sort(): T[];
  fix(): MinHeap<T>;
  heapify(): MinHeap<T>;
  isHeap(): boolean;
  clear(): void;
  clone(): MinHeap<T>;
  static heapify<T>(cmp: Comparator<T>, values: T[]): MinHeap<T>;
  static isHeap<T>(cmp: Comparator<T>, values: T[]): boolean;
  [Symbol.iterator](): Iterator<T, any, undefined>;
}
