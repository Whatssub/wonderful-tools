/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

/**
 * Round given number to given digit
 * @param number number to round
 * @param digit digit number to round
 * @returns rounded number
 */
export function roundTo(number: number, digit: number) {
  const targetPos = 10 ** digit;
  return Math.round(number * targetPos) / targetPos;
}
