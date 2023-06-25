/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import { Heap } from '../heap';
import type { CmpFunction } from '../types/ds.type';

/**
 * 우선순위 큐를 힙 구조를 바탕으로 구현한 클래스입니다.
 */
export default class PriorityQueue<T = any> {
  private _heap;

  /**
   * 우선순위 큐 인스턴스를 생성합니다.
   *
   * @param cmp 비교 함수
   * @param _values 초기에 들어갈 데이터
   */
  constructor(cmp: CmpFunction, _values: T[]) {
    if (typeof cmp !== 'function') {
      throw new Error('PriorityQueue 비교 연산 함수가 올바르지 않습니다. 타입이 함수인지 확인하여 주세요.');
    }

    this._heap = new Heap<T>(cmp, _values);
    if (_values) {
      this._heap.heapify();
    }
  }

  /**
   * ### get 메서드
   *
   * 우선순위 큐 속 데이터를 우선순위가 높은 순으로 반환합니다.
   */
  get() {
    return this._heap.clone().sort().reverse();
  }

  /**
   * ### front 메서드
   *
   * 가장 우선순위가 높은 데이터 하나를 반환합니다.
   */
  front() {
    return this._heap.root();
  }

  /**
   * ### back 메서드
   *
   * 가장 우선순위가 낮은 데이터 하나를 반환합니다.
   */
  back() {
    return this._heap.leaf();
  }

  /**
   * ### push 메서드
   *
   * 우선순위 큐에 데이터를 삽입합니다.
   */
  push(value: T) {
    return this._heap.insert(value);
  }

  /**
   * ### pop 메서드
   *
   * 우선순위 큐에 가장 우선순위가 높은 데이터를 반환하고, 해당 데이터를 제거합니다.
   */
  pop() {
    return this._heap.pop();
  }

  /**
   * ### size 메서드
   *
   * 우선순위 큐 내의 데이터의 수를 반환합니다.
   */
  size() {
    return this._heap.size();
  }

  /**
   * ### isEmpty 메서드
   *
   * 현재 우선순위 큐가 비어있는지 확인합니다.
   *
   * 우선순위 큐가 비어있을경우 참, 비어있지 않을 경우 거짓을 반환합니다.
   */
  isEmpty() {
    return this._heap.isEmpty();
  }

  /**
   * ### heapify 정적 메서드
   *
   * 주어진 배열 데이터를 우선순위 큐 형태로 바꿉니다.
   *
   * @param cmp 우선순위 비교 함수
   * @param values 배열 데이터
   */
  static heapify<T>(cmp: CmpFunction<T>, values: T[]) {
    return new PriorityQueue(cmp, values);
  }

  /**
   * ### clear 메서드
   *
   * 우선순위 큐 내의 데이터를 비웁니다.
   */
  clear() {
    this._heap.clear();
  }

  /**
   * 이터레이터에 대응하는 메서드입니다.
   */
  [Symbol.iterator]() {
    let size = this.size();
    return {
      next: () => {
        size--;
        return {
          value: this.pop(),
          done: size === -1,
        };
      },
    };
  }
}
