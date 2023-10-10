import { EITHER_CONSTANT } from '@configs';

import type { Either } from '@types';

/**
 * ### Right constructor
 *
 * Creates new 'Either' that has 'right' value.
 *
 * Riight value usually represents expected output or 'success' case.
 *
 * @param e value to insert
 * @returns 'Either' right object
 */
export const right = <E = never, A = never>(e: E): Either<E, A> => ({
  _type: EITHER_CONSTANT.TYPE_RIGHT,
  value: e,
});
