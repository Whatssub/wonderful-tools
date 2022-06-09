/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

/**
 * Remove first and last space from given text
 * @param text Text to trim first and last space
 * @param options Set options for trim function
 * @returns
 */
export function trim(text: string, options?: { removeLineBreak?: boolean }): string {
  let __text = text.split('  ').join('');

  if (options?.removeLineBreak) {
    __text = __text.split('\n').join(' ');
  }

  return __text;
}
