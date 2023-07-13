/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import type { Comparator } from '../types/ds.type';
import { Heap } from './heap';

const createMaxCmp =
  <U>(getCmpVal: U) =>
  <T>(a: T, b: T) => {
    if (typeof getCmpVal === 'function') {
      return getCmpVal(a) < getCmpVal(b) ? -1 : 1;
    }

    return a < b ? -1 : 1;
  };

/**
 * 최대 힙 구조를 배열로 구현한 클래스입니다.
 *
 * 힙 클래스를 바탕으로 작성되었습니다.
 *
 * 따라서, 부모 노드의 값 혹은 위계가 자식 노드의 값 혹은 위계보다 큰 구조입니다.
 *
 * @class MaxHeap
 * @extends Heap
 * @author @whatisyourname0
 */
export class MaxHeap<T = any> {
  private _getCmpValue;
  private _heap;

  constructor(getCmpValue: Comparator<T>, _heap?: Heap<T>) {
    this._getCmpValue = getCmpValue;
    this._heap = _heap || new Heap<T>(createMaxCmp<Comparator<T>>(getCmpValue));
  }

  /**
   * ### get 메서드
   *
   * 힙 데이터를 배열 데이터로 반환합니다.
   */
  get() {
    return this._heap.get();
  }

  /**
   * ### root 메서드
   *
   * 힙의 루트 노드를 반환합니다.
   *
   * @returns 힙의 루트 노드
   */
  root() {
    return this._heap.root();
  }

  /**
   * ### leaf 메서드
   *
   * 힙의 leaf 노드를 반환합니다.
   *
   * @returns 힙의 leaf 노드
   */
  leaf() {
    return this._heap.leaf();
  }

  /**
   * ### top 메서드
   *
   * 힙의 루트 노드를 반환합니다.
   *
   * @returns 힙의 루트 노드
   */
  top() {
    return this.root();
  }

  /**
   * ### size 메서드
   *
   * 현재 힙 내부의 노드의 개수를 반환합니다.
   */
  size(): number {
    return this._heap.size();
  }

  /**
   * ### isEmpty 메서드
   *
   * 현재 힙이 비어있는지 확인합니다.
   *
   * 힙이 비어있을경우 참, 비어있지 않을 경우 거짓을 반환합니다.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * ### insert 메서드
   *
   * 힙에 값을 삽입합니다.
   *
   * @param value 삽입할 값
   *
   * @returns 힙 인스턴스
   */
  insert(value: T) {
    return this._heap.insert(value);
  }

  /**
   * ### push 메서드
   *
   * 힙에 값을 삽입합니다.
   *
   * @param value 삽입할 값
   *
   * @returns 힙 인스턴스
   */
  push(value: T) {
    return this.insert(value);
  }

  /**
   * ### pop 메서드
   *
   * 힙의 루트 노드를 제거하고 그 값을 반환합니다.
   *
   * @returns 루트 노드의 값
   */
  pop() {
    return this._heap.pop();
  }

  /**
   * ### heapSort 메서드
   *
   * 현재 데이터를 heap sort 방법으로 정렬합니다.
   *
   * @returns 힙 내 데이터
   */
  heapSort() {
    return this._heap.heapSort();
  }

  /**
   * ### sort 메서드
   *
   * 현재 데이터를 heap sort 방법으로 정렬합니다.
   *
   * @returns 힙 내 데이터
   */
  sort() {
    return this._heap.sort();
  }

  /**
   * ### fix 메서드
   *
   * 배열 데이터를 힙 구조로 재배열합니다.
   *
   * @returns 힙 인스턴스
   */
  fix() {
    return this._heap.fix();
  }

  /**
   * ### heapify 메서드
   *
   * 배열 데이터를 힙 구조로 재배열합니다.
   *
   * @returns 힙 인스턴스
   */
  heapify() {
    return this._heap.heapify();
  }

  /**
   * ### isHeap 메서드
   *
   * 해당 데이터가 올바른 힙 구조인지 검사합니다.
   *
   * 올바른 힙 구조일 경우 참, 아닐 경우 거짓을 반환합니다.
   */
  isHeap() {
    return this._heap.isHeap();
  }

  /**
   * ### clear 메서드
   *
   * 힙 데이터를 비웁니다.
   */
  clear() {
    return this._heap.clear();
  }

  /**
   * ### clone 메서드
   *
   * 해당 최대 힙의 얕은 복사된, 새로운 최대 힙 인스턴스를 반환합니다.
   */
  clone() {
    return new MaxHeap<T>(this._getCmpValue, this._heap);
  }

  /**
   * ### heapify 정적 메서드
   *
   * 주어진 배열로 힙 구조를 생성합니다.
   */
  public static heapify<T = any>(cmp: Comparator<T>, values: T[]) {
    if (!Array.isArray(values)) {
      throw new Error('Heap의 초기 구성 데이터는 배열로 주어져야 합니다.');
    }

    const __heap = new Heap<T>(createMaxCmp<Comparator<T>>(cmp), values);

    return new MaxHeap<T>(cmp, __heap).heapify();
  }

  public static isHeap<T = any>(cmp: Comparator<T>, values: T[]) {
    const __heap = new Heap<T>(createMaxCmp<Comparator<T>>(cmp), values);
    return new MaxHeap<T>(cmp, __heap).isHeap();
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
