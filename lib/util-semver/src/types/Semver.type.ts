/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * ### Semantic Version
 *
 * Given a version number MAJOR.MINOR.PATCH, increment the:
 *
 * - MAJOR version when you make incompatible API changes
 * - MINOR version when you add functionality in a backward compatible manner
 * - PATCH version when you make backward compatible bug fixes
 *
 * Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
 *
 * @reference https://semver.org/
 */
export type SemVersion = `${number}.${number}.${number}${`-${string}` | ''}`;
