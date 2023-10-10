import { EITHER_CONSTANT } from '@configs';

/**
 * ### Left type interface
 */
export interface Left<T> {
  /**
   * ### _type
   *
   * Type in runtime
   */
  readonly _type: typeof EITHER_CONSTANT.TYPE_LEFT;

  /**
   * ### value
   *
   * Actual payload
   */
  readonly value: T;
}
