import type { Both } from './Both.type';
import type { Either } from './Either.type';

/**
 * ### These type
 *
 * Union of 'Either' or 'Both' type
 */
export type These<L, R> = Either<L, R> | Both<L, R>;
