/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { OPTION_CONSTANT } from '@configs';

import type { Some } from '@types';

/**
 * ### Some function.
 *
 * Used for converting a value to the Some type.
 *
 * @param value Value to treat as Some
 * @returns Some
 *
 * @author Taeyoon Lee <taeyoon0137@gmail.com>
 */
export const some = <T>(value: T): Some<T> => ({ _type: OPTION_CONSTANT.TYPE_SOME, value });
