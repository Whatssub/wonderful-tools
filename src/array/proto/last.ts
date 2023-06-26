import { last } from '../last';

declare global {
  export interface Array<T> {
    /**
     * ### last 메서드
     *
     * 배열의 첫 번쨰 원소를 반환합니다.
     *
     * 만약 배열이 비어있을 경우, null을 반환합니다.
     *
     * @param array 배열 데이터
     * @returns 첫 번쨰 원소 | null
     */
    last<T>(): T | null;
  }
}

Array.prototype.last = function <T>(this: T[]) {
  return last(this);
};
