/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * ### asyncMap 함수
 *
 * 배열의 map 메서드의 비동기 버전입니다.
 *
 * 각 배열의 원소에 사상 연산을 취해, 그 값을 Promise 형태로 반환합니다.
 *
 * @param _array 메서드를 적용할 배열
 * @param _mapFunction map 연산을 적용할 함수
 * @returns map 적용 결과가 담긴 Promise
 */
export const asyncMap = async <T, U>(
  _array: T[],
  _mapFunction: (value: T, index: number, array: T[]) => Promise<U>
): Promise<U[]> => {
  return await Promise.all(_array.map(_mapFunction));
};
