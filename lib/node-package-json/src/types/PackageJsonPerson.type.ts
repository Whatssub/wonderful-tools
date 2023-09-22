/**
 * Copyright 2023 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Email } from '@wonderful-tools/type-email';

/**
 * ### Person Object
 *
 * Object of Personal info which for author and contributors field.
 *
 * @reference https://docs.npmjs.com/cli/v7/configuring-npm/package-json#people-fields-author-contributors
 */
export interface PackageJsonPerson {
  /**
   * ### Name
   *
   * Persons name
   */
  name: string;

  /**
   * ### Email
   *
   * Persons email address
   */
  email?: Email;

  /**
   * ### Homepage URL
   *
   * Persons personal homepage URL address
   */
  url?: URL;
}

/**
 * ### Single Lined Person Info
 *
 * Single Line of string which for author and contributors field
 *
 * @reference https://docs.npmjs.com/cli/v7/configuring-npm/package-json#people-fields-author-contributors
 */
export type PackageJsonPersonSingleLine = `${string}${` <${Email}>` | ''}${` (${Email})` | ''}`;
