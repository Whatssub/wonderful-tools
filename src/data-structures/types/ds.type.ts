/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * 공통 타입 정의를 위한 파일입니다.
 */

/**
 * 우선순위 비교 함수 인터페이스
 */
export interface CmpFunction<T = any> {
  (a: T, b: T): -1 | 0 | 1;
}

/**
 * 우선순위 비교 함수 팩토리 함수 인터페이스
 */
export interface Comparator<T> {
  (value: T): number | string;
}
