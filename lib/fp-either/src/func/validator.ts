import { EITHER_CONSTANT } from '@configs';

import type { Left, Right, Both, These } from '../types';

/**
 * ### isLeft type checker
 *
 * Checks whether the target is subset of 'Left'
 *
 * @param target target value to check
 * @returns target is 'Left'
 */
export const isLeft = <T>(target: These<T, unknown>): target is Left<T> => {
  return target._type === EITHER_CONSTANT.TYPE_LEFT;
};

/**
 * ### isRight type checker
 *
 * Checks whether the target is subset of 'Right'
 *
 * @param target target value to check
 * @returns target is 'Right'
 */
export const isRight = <T>(target: These<unknown, T>): target is Right<T> => {
  return target._type === EITHER_CONSTANT.TYPE_RIGHT;
};

/**
 * ### isRight type checker
 *
 * Checks whether the target is subset of 'Both'
 *
 * @param target target value to check
 * @returns target is 'Both'
 */
export const isBoth = <T, S>(target: These<T, S>): target is Both<T, S> => {
  return target._type === EITHER_CONSTANT.TYPE_BOTH;
};
