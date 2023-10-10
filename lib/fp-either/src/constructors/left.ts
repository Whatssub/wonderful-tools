import { EITHER_CONSTANT } from '@configs';

import type { Either } from '@types';

/**
 * ### Left constructor
 *
 * Creates new 'Either' that has 'left' value.
 *
 * Left value usually represents 'Error' or 'Failure' case.
 *
 * @param e value to insert
 * @returns 'Either' left object
 */
export const left = <L = never, R = never>(e: L): Either<L, R> => ({
  _type: EITHER_CONSTANT.TYPE_LEFT,
  value: e,
});
