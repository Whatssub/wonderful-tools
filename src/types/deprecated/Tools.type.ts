/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

/**
 * Generate object which exact type
 *
 * @deprecated Use Record<string, T> instead
 */
export type ObjectFactory<T> = { [key: string]: T };
