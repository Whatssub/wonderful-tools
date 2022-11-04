/*
  Copyright 2022. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * 주어진 값을 기준으로, 비교할 값이 편차 이내에 있는지 확인하여 리턴합니다.
 *
 * @param value 기준 값
 * @param compare 비교할 값
 * @param diff 편차
 * @returns 편차 이내 여부
 */
export function isSimilar(value: number, compare: number, diff: number): boolean {
  return (value <= compare && compare <= value + diff) || (value - diff <= compare && compare <= value);
}
