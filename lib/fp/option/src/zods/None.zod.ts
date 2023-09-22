/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import z from 'zod';

import { OPTION_CONSTANT } from '@configs';

/**
 * ### None type
 *
 * Used when there is no value.
 *
 * @zod
 *
 * @author Taeyoon Lee <taeyoon0137@gmail.com>
 */
export const ZodNone = z.object({
  /**
   * ### Type
   *
   * Type checking value to validate type in runtime.
   */
  _type: z.literal(OPTION_CONSTANT.TYPE_NONE),
});
