import type { Left } from './Left.type';
import type { Right } from './Right.type';

/**
 * ### Either type interface
 */
export type Either<L, R> = Left<L> | Right<R>;
