import { EITHER_CONSTANT } from '@configs';

import type { These } from '@types';

/**
 * ### match Function
 *
 * pattern matching function
 *
 * executes the function regarding to type of given value
 *
 * less strict than 'matchStrict' function.
 *
 * @param onLeft handler when target is 'Left' type
 * @param onRight handler when target is 'Right' type
 * @param onBoth handler when target is 'Both' type
 */
export const match =
  <L, LR, R, RR, BR>(
    onLeft: (e: L) => LR,
    onRight: (a: R) => RR,
    onBoth: (e: L, a: R) => BR
  ) =>
  (target: These<L, R>): LR | RR | BR => {
    switch (target._type) {
      case EITHER_CONSTANT.TYPE_LEFT:
        return onLeft(target.value);
      case EITHER_CONSTANT.TYPE_RIGHT:
        return onRight(target.value);
      case EITHER_CONSTANT.TYPE_BOTH:
        return onBoth(target.left, target.right);
    }
  };

/**
 * ### matchStrict Function
 *
 * executes the function regarding to type of given value
 *
 * stricter than 'match' function, as handler return types should be all equal.
 *
 * @param onLeft handler when target is 'Left' type
 * @param onRight handler when target is 'Right' type
 * @param onBoth handler when target is 'Both' type
 */
export const matchStrict: <L, R, BR>(
  onLeft: (e: L) => BR,
  onRight: (a: R) => BR,
  onBoth: (e: L, a: R) => BR
) => (target: These<L, R>) => BR = match;
