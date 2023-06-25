/*
  Copyright 2023. Whatssub co.,Ltd.
  All rights reserved.
*/
/**
 * 기본적인 LIFO 구조를 가진 스택 클래스입니다.
 *
 * @class Stack
 * @author @whatisyourname0
 */
export default class Stack<T = any> {
  private _data: T[] = [];

  /**
   * ### 생성자
   *
   * 스택 인스턴스를 생성합니다.
   *
   * @param args 스택 생성 시 들어갈 데이터
   */
  constructor(...args: T[]) {
    this._data = args;
  }

  /**
   * ### 접근자
   *
   * Stack 데이터 접근자입니다.
   *
   * 제일 위에 있는 데이터를 첫 번째 인덱스로 하여 데이터를 배열 형태로 반환합니다.
   */
  get() {
    return [...this._data].reverse();
  }

  /**
   * ### push 메서드
   *
   * 스택에 데이터를 삽입합니다.
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
   * ### pop 메서드
   *
   * 스택의 맨 위에 데이터를 휙득하고 그 값을 스택에서 삭제합니다.
   *
   * 뽑는 연산 이후 실행할 콜백 함수를 인자로 넘길 수 있습니다.
   *
   * @param callback pop 연산 이후 실행할 콜백
   */
  pop(callback?: () => void): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const popped_data = this._data.pop() as T;
    callback && callback();

    return popped_data;
  }

  /**
   * ### peek 메서드
   *
   * 스택의 맨 위의 데이터를 조회합니다.
   */
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this._data[this.size() - 1] as T;
  }

  /**
   * ### size 메서드
   *
   * 스택의 현재 원소 개수를 반환합니다.
   */
  size(): number {
    return this._data.length;
  }

  /**
   * ### isEmpty 메서드
   *
   * 스택이 현재 비어있는지 검사합니다.
   *
   * 비어있을 경우 참, 아닐 경우 거짓을 반환합니다.
   */
  isEmpty(): boolean {
    return this._data.length === 0;
  }

  /**
   * ### clear 메서드
   *
   * 스택의 데이터를 초기화합니다.
   */
  clear(): void {
    this._data = [];
  }

  /**
   * ### clone 메서드
   *
   * 해당 스택의 얕은 복사된 버전을 반환합니다.
   */
  clone() {
    return new Stack([...this._data]);
  }
}
