/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { SPDXLicense } from './SPDXLicense.type';

/**
 * ### SPDX License Expression String 2.0
 *
 * SPDX License Expression to use one or more SPDX License
 *
 * @reference https://spdx.dev/use/specifications/
 */
export type SPDXLicenseExpression = SPDXLicense | `(${string} OR ${string})`;
