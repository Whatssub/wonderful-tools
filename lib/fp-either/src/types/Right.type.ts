import { EITHER_CONSTANT } from '@configs';

/**
 * ### Right type interface
 */
export interface Right<T> {
  /**
   * ### _type
   *
   * Type in runtime
   */
  readonly _type: typeof EITHER_CONSTANT.TYPE_RIGHT;

  /**
   * ### value
   *
   * Actual payload
   */
  readonly value: T;
}
