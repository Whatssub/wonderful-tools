/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import { first } from '../first';

declare global {
  export interface Array<T> {
    /**
     * ### first 메서드
     *
     * 배열의 첫 번쨰 원소를 반환합니다.
     *
     * 만약 배열이 비어있을 경우, null을 반환합니다.
     *
     * @param array 배열 데이터
     * @returns 첫 번쨰 원소 | null
     */
    first<T>(): T | null;
  }
}

Array.prototype.first = function <T>(this: T[]) {
  return first(this);
};
