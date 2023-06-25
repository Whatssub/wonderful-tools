/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

export class Queue<T = any> {
  constructor(...args: T[]);
  get(): T[];
  push(): Queue<T>;
  enqueue(): Queue<T>;
  pop(): T | null;
  dequeue(): T | null;
  front(): T | null;
  back(): T | null;
  size(): number;
  isEmpty(): boolean;
  clear(): void;
  clone(): Queue<T>;
}
