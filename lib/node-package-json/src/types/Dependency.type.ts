/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { SemVersion } from '@wonderful-tools/util-semver';

/**
 * ### Dependency
 *
 * Dependency's version or location
 */
export type Dependency = SemVersion | string;
