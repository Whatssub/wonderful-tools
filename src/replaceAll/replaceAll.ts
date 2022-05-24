/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

export function replaceAll(text: string, replace: string | RegExp, to: string) {
  return text.split(replace).join(to);
}
