import { EITHER_CONSTANT } from '@configs';

/**
 * ### Both type interface
 *
 * Both usually have meaningful left and right branch value
 */
export interface Both<T, S> {
  /**
   * ### _type
   *
   * Type in runtime
   */
  readonly _type: typeof EITHER_CONSTANT.TYPE_BOTH;

  /**
   * ### left value
   *
   * Actual left payload
   */
  readonly left: T;

  /**
   * ### Right value
   *
   * Actual right payload
   */
  readonly right: S;
}
