/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { some, none } from '@constants';

import type { Option } from '@types';

/**
 * Returns the given value as an Option type. If an error occurs during the processing of the value, returns as None type.
 *
 * @param value Data to process
 * @returns Value converted to Option type
 */
export function optionalCheck<T>(value: T): Option<T> {
  try {
    return some(value);
  } catch (err) {
    return none;
  }
}
