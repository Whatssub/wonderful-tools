/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

import type { CmpFunction } from '../types/ds.type';

/**
 * 힙 구조를 배열로 구현한 클래스입니다.
 *
 * Max Heap, Min Heap의 기본이 되는 클래스입니다.
 *
 * @class Heap
 * @author @whatisyourname0
 */
export class Heap<T = any> {
  private _nodes;
  private _leaf;
  private _cmp;

  /**
   * ### Heap 생성자
   *
   * Heap 인스턴스를 생성합니다.
   *
   * @param cmp 노드 간 위계 비교 함수. -1 혹은 0 혹은 1을 반환해야 합니다.
   * @param data 데이터 전체. Array 형태가 넘겨지지 않을 경우 빈 데이터로 처리됩니다.
   * @param leaf 마지막 노드에 들어갈 데이터. Falsey한 값을 넣을 경우 Null로 삽입됩니다.
   */
  constructor(cmp: CmpFunction<T>, data?: T[], leaf?: T | null) {
    if (typeof cmp !== 'function') {
      throw new Error('Heap 비교 연산 함수가 올바르지 않습니다. 타입이 함수인지 확인하여 주세요.');
    }

    this._cmp = cmp;
    this._nodes = Array.isArray(data) ? data : [];
    this._leaf = (leaf || null) as T | null;
  }

  /**
   * ### get 메서드
   *
   * 힙 데이터를 배열 데이터로 반환합니다.
   */
  get() {
    return Array.from(this._nodes);
  }

  /**
   * ### root 메서드
   *
   * 힙의 루트 노드를 반환합니다.
   *
   * @returns 힙의 루트 노드
   */
  root() {
    if (this.isEmpty()) {
      return null;
    }

    return this._nodes[0];
  }

  /**
   * ### leaf 메서드
   *
   * 힙의 leaf 노드를 반환합니다.
   *
   * @returns 힙의 leaf 노드
   */
  leaf() {
    return this._leaf;
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
    return this._nodes.length;
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
    this._nodes.push(value);
    this._heapifyUp(this.size() - 1);
    if (this._leaf === null || this._cmp(value, this._leaf) > 0) {
      this._leaf = value;
    }

    return this;
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
    if (this.isEmpty()) {
      return null;
    }

    this._nodes[0] = this._nodes[this.size() - 1];
    this._nodes.pop();
    this._heapifyDown(0);

    const root = this.root();

    // 원소가 1개일 경우
    if (root === this._leaf) {
      this._leaf = this.root();
    }

    return root;
  }

  /**
   * ### heapSort 메서드
   *
   * 현재 데이터를 heap sort 방법으로 정렬합니다.
   *
   * @returns 힙 내 데이터
   */
  heapSort() {
    for (let i = this.size() - 1; i !== 0; i -= 1) {
      this._swapNode(0, i);
      this._heapifyDownUntilIdx(i);
    }

    return this._nodes;
  }

  /**
   * ### sort 메서드
   *
   * 현재 데이터를 heap sort 방법으로 정렬합니다.
   *
   * @returns 힙 내 데이터
   */
  sort() {
    return this.heapSort();
  }

  /**
   * ### fix 메서드
   *
   * 배열 데이터를 힙 구조로 재배열합니다.
   *
   * @returns 힙 인스턴스
   */
  fix() {
    for (let i = Math.floor(this.size() / 2) - 1; i !== -1; i -= 1) {
      this._heapifyDown(i);
    }

    for (let i = Math.floor(this.size() / 2); i < this.size(); i += 1) {
      const value = this._nodes[i];
      if (this._leaf === null || this._cmp(value, this._leaf) > 0) {
        this._leaf = value;
      }
    }

    return this;
  }

  /**
   * ### heapify 메서드
   *
   * 배열 데이터를 힙 구조로 재배열합니다.
   *
   * @returns 힙 인스턴스
   */
  heapify() {
    return this.fix();
  }

  /**
   * ### isHeap 메서드
   *
   * 해당 데이터가 올바른 힙 구조인지 검사합니다.
   *
   * 올바른 힙 구조일 경우 참, 아닐 경우 거짓을 반환합니다.
   */
  isHeap() {
    const _isValidHeap = (parentIdx: number): boolean => {
      let isValidLeftChild = true;
      let isValidRightChild = true;

      if (this._hasLeftChildNode(parentIdx)) {
        const leftChildIdx = this._getLeftChildIdx(parentIdx);
        if (this._compare(parentIdx, leftChildIdx) > 0) {
          return false;
        }

        isValidLeftChild = _isValidHeap(leftChildIdx);
      }

      if (this._hasRightChildNode(parentIdx)) {
        const rightChildIdx = this._getRightChildIdx(parentIdx);
        if (this._compare(parentIdx, rightChildIdx) > 0) {
          return false;
        }

        isValidRightChild = _isValidHeap(rightChildIdx);
      }

      return isValidLeftChild && isValidRightChild;
    };

    return _isValidHeap(0);
  }

  /**
   * ### clear 메서드
   *
   * 힙 데이터를 비웁니다.
   */
  clear() {
    this._nodes = [];
    this._leaf = null;
  }

  /**
   * ### clone 메서드
   *
   * 해당 힙의 얕은 복사된, 새로운 힙 인스턴스를 반환합니다.
   */
  clone() {
    return new Heap<T>(this._cmp, [...this._nodes], this._leaf);
  }

  /**
   * ### heapify 정적 메서드
   *
   * 주어진 배열로 힙 구조를 생성합니다.
   */
  public static heapify<T = any>(cmp: CmpFunction<T>, values: T[]): Heap<T> {
    if (typeof cmp !== 'function') {
      throw new Error('Heap 비교 연산 함수가 올바르지 않습니다. 타입이 함수인지 확인하여 주세요.');
    }

    if (!Array.isArray(values)) {
      throw new Error('Heap의 초기 구성 데이터는 배열로 주어져야 합니다.');
    }

    return new Heap<T>(cmp, values).heapify();
  }

  public static isHeap<T = any>(cmp: CmpFunction<T>, values: T[]): boolean {
    return new Heap<T>(cmp, values).isHeap();
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

  /**
   * ### _hasLeftChildNode 메서드
   *
   * 죄측 child 노드가 있는지 인덱스를 기준으로 검사합니다.
   *
   * @param parentIdx 부모 노드 인덱스
   */
  protected _hasLeftChildNode(parentIdx: number): boolean {
    return this._getLeftChildIdx(parentIdx) < this.size();
  }

  /**
   * ### _hasRightChildNode 메서드
   *
   * 우측 child 노드가 있는지 인덱스를 기준으로 검사합니다.
   *
   * @param parentIdx 부모 노드 인덱스
   */
  protected _hasRightChildNode(parentIdx: number): boolean {
    return this._getRightChildIdx(parentIdx) < this.size();
  }

  /**
   * ### _getParentIdx 메서드
   *
   * 노드의 인덱스를 통해 부모 인덱스를 구합니다.
   *
   * @param idx 노드 인덱스
   * @returns 부모 노드의 인덱스
   */
  protected _getParentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  /**
   * ### _getLeftChildIdx 메서드
   *
   * 부모의 노드 인덱스로부터 왼쪽 자식의 인덱스를 구합니다.
   *
   * @param parentIdx 부모 노드의 인덱스
   * @returns 왼쪽 자식 노드의 인덱스
   */
  protected _getLeftChildIdx(parentIdx: number): number {
    return parentIdx * 2 + 1;
  }

  /**
   * ### _getRightChildIdx 메서드
   *
   * 부모의 노드 인덱스로부터 오은쪽 자식의 인덱스를 구합니다.
   *
   * @param parentIdx 부모 노드의 인덱스
   * @returns 오른쪽 자식 노드의 인덱스
   */
  protected _getRightChildIdx(parentIdx: number): number {
    return parentIdx * 2 + 2;
  }

  /**
   * ### _swapNode 메서드
   *
   * 두 개의 노드의 위치를 바꿉니다.
   *
   * @param i 바꿀 첫 번째 노드의 인덱스
   * @param j 바꿀 두 번쨰 노드의 인덱스
   */
  protected _swapNode(i: number, j: number): void {
    [this._nodes[i], this._nodes[j]] = [this._nodes[j], this._nodes[i]];
  }

  /**
   * ### _compareNode 메서드
   *
   * 두 개의 노드를 인자로 주어진 비교 함수를 기준으로 비교합니다.
   *
   * @param i 비교할 첫 번째 노드의 인덱스
   * @param j 비교할 두 번째 노드의 인덱스
   * @returns 비교 결과
   */
  protected _compare(i: number, j: number): -1 | 0 | 1 {
    return this._cmp(this._nodes[i], this._nodes[j]);
  }

  /**
   * # _shouldSwap 메서드
   *
   * 부모 노드와 자식 노드의 데이터를 바꾸어야 하는 지 확인합니다.
   *
   * @param parentIdx 부모 노드의 인덱스
   * @param childIdx 자식 노드의 인덱스
   * @returns 바꾸어야 하는 지 여부
   */
  protected _shouldSwap(parentIdx: number, childIdx: number) {
    if (parentIdx < 0 || childIdx < 0 || parentIdx >= this.size() || childIdx >= this.size()) {
      return false;
    }

    return this._compare(parentIdx, childIdx) > 0;
  }

  /**
   * ### _compareChildren 메서드
   *
   * 부모 노드의 인덱스를 입력받아, 자식 노드의 값을 비교합니다.
   *
   * 자식 노드가 모두 비어있을 경우, -1을 반환합니다.
   *
   * 왼쪽 노드 혹은 오른쪽 노드가 비어있을 경우, 비어있지 않은 자식 노드의 인덱스를 반환합니다.
   *
   * 자식 노드가 모두 존재할 경우, 비교 함수를 호출하여 더 큰 층위의 자식 노드의 인덱스를 반환합니다.
   *
   * @param parentIdx 부모 노드의 인덱스
   * @returns 더 큰 노드의 인덱스
   */
  protected _compareChildren(parentIdx: number) {
    if (!this._hasLeftChildNode(parentIdx) || this._hasRightChildNode(parentIdx)) {
      return -1;
    }

    const leftChildIdx = this._getLeftChildIdx(parentIdx);
    const rightChildIdx = this._getRightChildIdx(parentIdx);

    if (!this._hasRightChildNode(parentIdx)) {
      return leftChildIdx;
    }

    if (!this._hasLeftChildNode(parentIdx)) {
      return rightChildIdx;
    }

    return this._compare(leftChildIdx, rightChildIdx) > 0 ? rightChildIdx : leftChildIdx;
  }

  /**
   * ### _compareChildrenBefore 메서드
   *
   * 자식 노드를 배치하기 전 어느 위치에 배치하야 할 지 결정합니다.
   *
   * 해당하는 자식 노드의 인덱스를 반환합니다.
   *
   * @param idx 해당 노드의 인덱스
   * @param leftChildIdx 왼쪽 자식 노드의 인덱스
   * @param rightChildIdx 오른쪽 자식 노드의 인덱스
   * @returns 배치될 자식 노드의 인덱스
   */
  protected _compareChildrenBefore(idx: number, leftChildIdx: number, rightChildIdx: number) {
    if (this._compare(rightChildIdx, leftChildIdx) <= 0 && rightChildIdx < idx) {
      return rightChildIdx;
    } else {
      return leftChildIdx;
    }
  }

  /**
   * ### _heapifyUp 메서드
   *
   * 위쪽 방향으로 노드의 위치를 힙 구조로 재배열합니다.
   *
   * @param startIdx 노드의 인덱스
   */
  protected _heapifyUp(startIdx: number) {
    let childIdx = startIdx;
    let parentIdx = this._getParentIdx(childIdx);

    while (this._shouldSwap(parentIdx, childIdx)) {
      this._swapNode(parentIdx, childIdx);
      [childIdx, parentIdx] = [parentIdx, this._getParentIdx(childIdx)];
    }
  }

  /**
   * ### _heapifyDown 메서드
   *
   * 아래쪽 방향으로 노드의 위치를 힙 구조로 재배열합니다.
   *
   * @param startIdx 노드의 인덱스
   */
  protected _heapifyDown(startIdx: number) {
    let parentIdx = startIdx;
    let childIdx = this._compareChildren(parentIdx);

    while (this._shouldSwap(parentIdx, childIdx)) {
      this._swapNode(parentIdx, childIdx);
      [parentIdx, childIdx] = [childIdx, this._compareChildren(parentIdx)];
    }
  }

  /**
   * ### _heapifyDownUntilIdx 메서드
   *
   * 주어진 인덱스보다 작은 값까지 노드를 힙 구조로 재배열합니다.
   * @param idx 노드의 인덱스
   */
  protected _heapifyDownUntilIdx(idx: number) {
    let [parentIdx, leftChildIdx, rightChildIdx] = [0, 1, 2];
    let childIdx;

    while (leftChildIdx < idx) {
      childIdx = this._compareChildrenBefore(idx, leftChildIdx, rightChildIdx);

      if (this._shouldSwap(parentIdx, childIdx)) {
        this._swapNode(parentIdx, childIdx);
      }

      [parentIdx, leftChildIdx, rightChildIdx] = [
        childIdx,
        this._getLeftChildIdx(parentIdx),
        this._getRightChildIdx(parentIdx),
      ];
    }
  }
}
