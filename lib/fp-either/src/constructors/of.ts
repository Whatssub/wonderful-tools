import { right } from './right';

import type { Either } from '@types';

/**
 * ### Of constructor
 *
 * Creates new 'Either' that has 'right' value.
 *
 * Alias of 'Right' constructor
 */
export const of: <L = never, R = never>(v: R) => Either<L, R> = right;
