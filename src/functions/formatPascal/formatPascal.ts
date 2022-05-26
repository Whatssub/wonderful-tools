/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

import { formatSentence } from '@function/formatSentence';

/**
 * Format given text to PascalCase
 * @param text text to format
 * @returns formatted text
 */
export function formatPascal(text: string) {
  const spaced = formatSentence(text);

  return spaced
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((char, i) => {
          if (i === 0) return char.toUpperCase();
          return char.toLowerCase();
        })
        .join('');
    })
    .join('');
}
