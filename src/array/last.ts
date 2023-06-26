/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * ### last 함수
 *
 * 배열의 마지막 원소를 반환합니다.
 *
 * 만약 배열이 비어있을 경우, null을 반환합니다.
 *
 * @param array 배열 데이터
 * @returns 마지막 원소 | null
 */
export const last = <T = any>(array: T[]): T | null => {
  if (!Array.isArray(array)) {
    throw new Error('입력한 인자가 배열이 아닙니다. 인자의 타입을 확인해주세요.');
  }

  return array.length > 0 ? array[array.length - 1] : null;
};
