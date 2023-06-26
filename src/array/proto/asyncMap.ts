/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import { asyncMap } from './../asyncMap';

declare global {
  export interface Array<T> {
    /**
     * ### asyncMap 메서드
     *
     * 배열의 map 메서드의 비동기 버전입니다.
     *
     * 각 배열의 원소에 사상 연산을 취해, 그 값을 Promise 형태로 반환합니다.
     *
     * @param _mapFunction map 연산을 적용할 함수
     * @returns map 적용 결과가 담긴 Promise
     */
    asyncMap<U>(_mapFunction: (value: T, index: number, array: T[]) => Promise<U>): Promise<U[]>;
  }
}

Array.prototype.asyncMap = async function <T, U>(
  this: T[],
  _mapFunction: (value: T, index: number, array: T[]) => Promise<U>
): Promise<U[]> {
  return await asyncMap(this, _mapFunction);
};
