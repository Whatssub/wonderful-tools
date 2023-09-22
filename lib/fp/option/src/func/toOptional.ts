/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { some, none } from '@constants';

import type { Option } from '@types';

/**
 * Returns a test function that returns Some<T> type if the given condition is true, and None type if false.
 *
 * @param fn Conditional test callback function
 * @returns Conditional test function
 *
 * @author Taeyoon Lee <taeyoon0137@gmail.com>
 */
export function toOptional<I, O extends I>(fn: (input: I) => input is O) {
  return (arg: I): Option<O> => {
    try {
      return fn(arg) ? some(arg) : none;
    } catch (err) {
      return none;
    }
  };
}
