/*
  Copyright 2022. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * Returns array of number which ascends to given number
 * @param num Length of array
 * @returns Array
 */
export function getCountedArray(num: number): number[] {
  if (num === 1) return [num];
  return [...getCountedArray(num - 1), num];
}
