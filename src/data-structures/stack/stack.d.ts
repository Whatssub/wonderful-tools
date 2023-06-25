/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

export class Stack<T = any> {
  constructor(...args: T[]);
  get(): T[];
  push(): Stack<T>;
  pop(): T | null;
  peek(): T | null;
  size(): number;
  isEmpty(): boolean;
  clear(): void;
  clone(): Stack<T>;
}
