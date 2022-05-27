/*
  Copyright 2022. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * Type safe version of Object.keys function
 * @param obj object to extract keys from
 * @returns key of given object
 */
export function getObjectKeys<T extends object>(obj: T): Exclude<keyof T, number>[] {
  return Object.keys(obj) as Exclude<keyof T, number>[];
}
