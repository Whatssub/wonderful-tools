/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

import { replaceAll } from '@function/replaceAll';

/**
 * Format given camel cased text to spaced sentence
 * @param text text to format
 * @returns formatted text
 */
export function formatSentence(text: string) {
  // Format camelCase and PascalCase
  const camelCaseAndPascalCase = text.replace(/([A-Z])/g, ' $1').toLowerCase();

  // Format snake_case
  const snakeCase = replaceAll(camelCaseAndPascalCase, '_', ' ');

  // Format kebab-case
  const kebabCase = replaceAll(snakeCase, '-', ' ');

  // Remove spaces and return
  return kebabCase
    .split('')
    .reduce((prev, char, i) => {
      if ((i === 0 || prev[prev.length - 1] === undefined) && char === ' ') return prev;
      return [...prev, char];
    }, [] as string[])
    .reverse()
    .reduce((prev, char, i) => {
      if ((i === 0 || prev[prev.length - 1] === undefined) && char === ' ') return prev;
      return [...prev, char];
    }, [] as string[])
    .reverse()
    .join('');
}
