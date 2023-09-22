/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OPTION_CONSTANT, OPTION_ERROR } from '@configs';

import type { Option } from '@types';

/**
 * Extracts the original data from the given Option type data. If it is a 'none' type, it returns an error.
 *
 * @param opt The Option value to extract the real value from
 * @returns The data extracted from the given option
 *
 * @author Taeyoon Lee <taeyoon0137@gmail.com>
 */
export function unwrap<T>(opt: Option<T>): T {
  if (opt._type === OPTION_CONSTANT.TYPE_SOME) {
    return opt.value;
  }

  throw new Error(OPTION_ERROR.FUNC_UNWRAP_FAILED);
}
