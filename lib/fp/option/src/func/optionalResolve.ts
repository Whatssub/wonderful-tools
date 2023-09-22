/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { some, none } from '@constants';

import type { Option } from '@types';

/**
 * Returns the given asynchronous value as an Option type. If an error occurs during the processing of the value, returns as None type.
 *
 * @param value Data to process
 * @returns Asynchronously returns the value converted to Option type
 *
 * @author Taeyoon Lee <taeyoon0137@gmail.com>
 */
export async function optionalResolve<T>(p: Promise<T>): Promise<Option<T>> {
  return p.then((v) => some(v)).catch(() => none);
}
