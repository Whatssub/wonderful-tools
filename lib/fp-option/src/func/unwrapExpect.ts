/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { unwrap } from './unwrap';

import type { Option } from '@types';

/**
 * Extracts the original data from the given Option type data. If extraction is not possible, it displays a pre-set error message.
 *
 * @param opt The Option value to extract the real value from
 * @param msg The error message to display if extraction is not possible
 * @returns The data extracted from the given option
 */
export function unwrapExpect<T>(opt: Option<T>, msg: string): T {
  try {
    return unwrap(opt);
  } catch (err) {
    throw new Error(msg);
  }
}
