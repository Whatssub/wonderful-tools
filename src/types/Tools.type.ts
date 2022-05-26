/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

/**
 * Get the union type of Interface or Object Type's Elements
 */
export type ObjectElements<T extends { [key: string]: any }> = T[keyof T];
