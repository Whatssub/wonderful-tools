/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { unwrap } from './unwrap';

import type { Option } from '@types';

/**
 * Extracts the original data from the given Option type data. If extraction is not possible, it returns the fallback.
 *
 * @param opt The Option value to extract the real value from
 * @param fallback The fallback value to return if opt is 'none'
 * @returns The data extracted from the given option or the fallback value
 */
export function unwrapOr<T>(opt: Option<T>, fallback: T): T {
  try {
    return unwrap(opt);
  } catch (err) {
    return fallback;
  }
}
