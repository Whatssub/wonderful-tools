/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

import { formatSentence } from '@function/formatSentence';

/**
 * Format given text to camelCase
 *
 * @param text text to format
 * @returns formatted text
 */
export function formatCamel(text: string) {
  // Normalize via sentence case
  const normalized = formatSentence(text);

  return normalized
    .split(' ')
    .map((word, index) => {
      // Ignore First word
      if (index === 0) return word;

      // UpperCase First Letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}
