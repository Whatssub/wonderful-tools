/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OPTION_CONSTANT } from '@configs';

/**
 * ### None type
 *
 * Used when there is no value.
 */
export type None = {
  /**
   * ### Type
   *
   * Type checking value to validate type in runtime.
   */
  readonly _type: typeof OPTION_CONSTANT.TYPE_NONE;
};
