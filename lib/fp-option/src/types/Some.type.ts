/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OPTION_CONSTANT } from '@configs';

/**
 * ### Some type
 *
 * Used when there is a value.
 *
 * @author Taeyoon Lee <taeyoon0137@gmail.com>
 */
export type Some<T> = {
  /**
   * ### Type
   *
   * Type checking value to validate type in runtime.
   */
  _type: typeof OPTION_CONSTANT.TYPE_SOME;

  /**
   * ### Value
   *
   * Actual value which data provides
   */
  value: T;
};
