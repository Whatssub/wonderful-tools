/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

import { formatSentence } from '~/formatSentence';
import { replaceAll } from '~/replaceAll';

/**
 * Format given text to snake_case
 * @param text text to format
 * @returns formatted text
 */
export function formatSnake(text: string) {
  const spaced = formatSentence(text);

  return replaceAll(spaced, ' ', '_');
}
