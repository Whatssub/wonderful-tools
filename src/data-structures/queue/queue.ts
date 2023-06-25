/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * 기본적인 FIFO 구조를 가진 큐 클래스입니다.
 *
 * pop 연산을 O(n) 시간 내에 보장합니다.
 *
 * @class Queue
 * @author @whatisyourname0
 */
export default class Queue<T = any> {
  private _data: T[] = []; // 큐 데이터
  private _ptrIdx: number = 0; // 빠른 연산을 위한 인덱스 데이터

  /**
   * ### 생성자
   *
   * 큐 인스턴스를 생성합니다.
   *
   * @param args 큐 생성 시 들어갈 데이터
   */
  constructor(...args: T[]) {
    this._data = args;
  }

  /**
   * ### 접근자
   *
   * Queue 데이터 접근자입니다.
   *
   * 제일 앞에 있는 데이터를 첫 번째 인덱스로 하여 데이터를 배열 형태로 반환합니다.
   */
  get() {
    return this._data.slice(this._ptrIdx);
  }

  /**
   * ### push 메서드
   *
   * 큐에 데이터를 삽입합니다.
   *
   * 데이터를 삽입시 값으로 넘길 경우 하나의 데이터를 삽입합니다.
   *
   * 배열로 넘길 경우 배열 순서에 맞추어 데이터를 삽입합니다.
   *
   * 데이터 삽입 이후 실행할 콜백 함수를 인자로 넘길 수 있습니다.
   *
   * @param value 삽입할 데이터
   * @param callback 삽입 연산 이후 실행할 콜백
   */
  push(value: T | T[], callback?: () => void) {
    if (value instanceof Array) {
      this._data.concat(value);
    } else {
      this._data.push(value);
    }

    callback && callback();
    return this;
  }

  /**
   * ### enqueue 메서드
   *
   * 큐에 데이터를 삽입합니다.
   *
   * 데이터를 삽입시 값으로 넘길 경우 하나의 데이터를 삽입합니다.
   *
   * 배열로 넘길 경우 배열 순서에 맞추어 데이터를 삽입합니다.
   *
   * 데이터 삽입 이후 실행할 콜백 함수를 인자로 넘길 수 있습니다.
   *
   * @param value 삽입할 데이터
   * @param callback 삽입 연산 이후 실행할 콜백
   */
  enqueue(value: T | T[], callback?: () => void) {
    return this.push(value, callback);
  }

  /**
   * ### pop 메서드
   *
   * 큐의 가장 앞의 데이터를 휙득하고 그 값을 큐에서 삭제합니다.
   *
   * 뽑는 연산 이후 실행할 콜백 함수를 인자로 넘길 수 있습니다.
   *
   * @param callback pop 연산 이후 실행할 콜백
   */
  pop(callback?: () => void): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const front_element = this.front();
    this._ptrIdx++;

    if (this._ptrIdx * 2 < this._data.length) {
      return front_element;
    }

    this._data = this._data.slice(this._ptrIdx);
    this._ptrIdx = 0;
    callback && callback();

    return front_element;
  }

  /**
   * ### dequeue 메서드
   *
   * 큐의 가장 앞의 데이터를 휙득하고 그 값을 큐에서 삭제합니다.
   *
   * 뽑는 연산 이후 실행할 콜백 함수를 인자로 넘길 수 있습니다.
   *
   * @param callback dequeue 연산 이후 실행할 콜백
   */
  dequeue(callback?: () => void): T | null {
    return this.pop(callback);
  }

  /**
   * ### front 메서드
   *
   * 큐의 맨 앞의 데이터를 조회합니다.
   */
  front(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this._data[this._ptrIdx] as T;
  }

  /**
   * ### back 메서드
   *
   * 큐의 맨 뒤의 데이터를 조회합니다.
   */
  back(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this._data[this._data.length - 1] as T;
  }

  /**
   * ### size 메서드
   *
   * 큐의 현재 원소 개수를 반환합니다.
   */
  size(): number {
    return this._data.length - this._ptrIdx;
  }

  /**
   * ### isEmpty 메서드
   *
   * 큐가 현재 비어있는지의 여부를 반환합니다.
   *
   * 비어있을 경우 참, 아닐 경우 거짓을 반환합니다.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }

  /**
   * ### clear 메서드
   *
   * 큐의 데이터를 초기화합니다.
   */
  clear(): void {
    this._data = [];
    this._ptrIdx = 0;
  }

  /**
   * ### clone 메서드
   *
   * 해당 큐의 얕은 복사된 버전을 반환합니다.
   */
  clone() {
    return new Queue(this._data.slice(this._ptrIdx));
  }
}
