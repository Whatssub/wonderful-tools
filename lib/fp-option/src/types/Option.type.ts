/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { None } from './None.type';
import type { Some } from './Some.type';

/**
 * ### Option type
 *
 * Used when a value may or may not be present.
 */
export type Option<T> = Some<T> | None;
