/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

/**
 * Replace all texts from original text
 * @param text original text
 * @param replace text or regExp to replace
 * @param to replace text to
 * @returns replaced text
 */
export function replaceAll(text: string, replace: string | RegExp, to: string): string {
  return text.split(replace).join(to);
}
