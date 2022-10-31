/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

/**
 * Get the union type of Interface or Object Type's Elements
 */
export type ObjectElements<T extends Record<string, any>> = T[keyof T];

/**
 * Generate recursive object
 */
export type RecursiveObject<T> =
  | {
      [key: string]: RecursiveObject<T>;
    }
  | T;

/**
 * Extract type of element of the array.
 *
 * returns via union type.
 */
export type ArrayElements<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;
