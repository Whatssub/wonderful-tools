/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * ### Lazy type
 *
 * Type of value that is evaluated in lazy manner
 */
export interface Lazy<T> {
  (): T;
}
