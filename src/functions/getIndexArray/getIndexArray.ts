/*
  Copyright 2022. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * Returns array of number which value is same with it's index number
 * @param num Length of array
 * @returns Array
 */
export function getIndexArray(num: number): number[] {
  if (num === 1) return [num - 1];
  return [...getIndexArray(num - 1), num - 1];
}
