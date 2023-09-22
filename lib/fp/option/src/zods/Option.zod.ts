/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import z from 'zod';

import { ZodNone } from './None.zod';
import { ZodSome } from './Some.zod';

import type { ZodType } from 'zod';

/**
 * ### Option type
 *
 * Used when a value may or may not be present.
 *
 * @zod
 *
 * @author Taeyoon Lee <taeyoon0137@gmail.com>
 */
export const ZodOption = <T>(zodType: ZodType<T>) => z.union([ZodSome(zodType), ZodNone]);
