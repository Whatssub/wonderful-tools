import { left, right } from '@constructors';

import type { Either } from '@types';
import type { Lazy } from '@wonderful-tools/fp-function';

/**
 * ### tryCatch function
 *
 * Creates function with 'Either' that maybe throws an error
 *
 * @param func function to apply
 * @param onError error handler when catched while executing 'func'
 * @returns Either
 */
export const tryCatch = <L, R>(
  func: Lazy<R>,
  onError: (e: unknown) => L
): Either<L, R> => {
  try {
    return right(func());
  } catch (e) {
    return left(onError(e));
  }
};
