/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

import type { License, SemVersion } from '@type/Utility.type';

/**
 * PackageJson
 *
 * This document is all you need to know about what's required in your package.json file.
 * It must be actual JSON, not just a JavaScript object literal.
 *
 * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json
 */
export interface PackageJson {
  /**
   * Package Name
   *
   * If you plan to publish your package, the most important things in your package.json
   * are the name and version fields as they will be required.
   * The name and version together form an identifier that is assumed to be completely unique.
   * Changes to the package should come along with changes to the version.
   * If you don't plan to publish your package, the name and version fields are optional.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#name
   */
  name?: string;

  /**
   * Package Version
   *
   * If you plan to publish your package, the most important things in your package.json
   * are the name and version fields as they will be required.
   * The name and version together form an identifier that is assumed to be completely unique.
   * Changes to the package should come along with changes to the version.
   * If you don't plan to publish your package, the name and version fields are optional.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#version
   */
  version?: string;

  /**
   * Package Description
   *
   * Put a description in it. It's a string.
   * This helps people discover your package, as it's listed in npm search.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#description-1
   */
  description?: string;

  /**
   * Keywords
   *
   * Put keywords in it. It's an array of strings.
   * This helps people discover your package as it's listed in npm search.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#keywords
   */
  keywords?: string[];

  /**
   * Homepage
   *
   * The url to the project homepage.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#homepage
   */
  homepage?: string;

  /**
   * Bugs
   *
   * The url to your project's issue tracker and / or the email address
   * to which issues should be reported.
   * These are helpful for people who encounter issues with your package.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#bugs
   */
  bugs?: {
    /**
     * URL to report bug of package
     */
    url?: string;

    /**
     * Email to report bug of package
     */
    email?: string;
  };

  /**
   * License
   *
   * You should specify a license for your package
   * so that people know how they are permitted to use it,
   * and any restrictions you're placing on it.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#license
   */
  license?:
    | License // Single license
    | `(${License} OR ${License})` // Multiple license
    | `SEE LICENSE IN <${string}>` // Other files
    | 'UNLICENSED' // No license
    | string; // other

  /**
   * Author
   *
   * The "author" is one person. "contributors" is an array of people.
   * A "person" is an object with a "name" field and optionally "url" and "email",
   * Or you can shorten that all into a single string, and npm will parse it for you.
   * npm also sets a top-level "maintainers" field with your npm user info.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#people-fields-author-contributors
   */
  author?: PackageJsonPerson | PackageJsonPersonSingleLine;

  /**
   * Contributors
   *
   * The "author" is one person. "contributors" is an array of people.
   * A "person" is an object with a "name" field and optionally "url" and "email",
   * Or you can shorten that all into a single string, and npm will parse it for you.
   * npm also sets a top-level "maintainers" field with your npm user info.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#people-fields-author-contributors
   */
  contributors?: (PackageJsonPerson | PackageJsonPersonSingleLine)[];

  /**
   * Funding
   *
   * You can specify an object containing an URL that provides up-to-date information
   * about ways to help fund development of your package, or a string URL, or an array of these:
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#funding
   */
  funding?: (
    | {
        /**
         * Type of funding
         */
        type: 'individual' | 'patreon' | string;

        /**
         * Detailed URL
         */
        url: URL;
      }
    | URL
  )[];

  /**
   * Files
   *
   * The optional files field is an array of file patterns
   * that describes the entries to be included when your package is installed as a dependency.
   * File patterns follow a similar syntax to .gitignore, but reversed: including a file, directory,
   * or glob pattern will make it so that file is included in the tarball when it's packed.
   * Omitting the field will make it default to ["*"], which means it will include all files.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#files
   */
  files?: string[];

  /**
   * Main
   *
   * The main field is a module ID that is the primary entry point to your program.
   * That is, if your package is named foo, and a user installs it, and then does require("foo"),
   * then your main module's exports object will be returned.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#main
   */
  main?: string;

  /**
   * Browser
   *
   * If your module is meant to be used client-side the browser field should be used instead of the main field.
   * This is helpful to hint users that it might rely on primitives that aren't available in Node.js modules. (e.g. window)
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#browser
   */
  browser?: string;

  /**
   * Repository
   *
   * Specify the place where your code lives. This is helpful for people who want to contribute.
   * If the git repo is on GitHub, then the npm docs command will be able to find you.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#repository
   */
  repository?:
    | {
        /**
         * Type of repository
         */
        type: 'git';

        /**
         * Remote Repository URL
         */
        url: URL;

        /**
         * Directory
         *
         * If the package.json for your package is not in the root directory (for example if it is part of a monorepo),
         * you can specify the directory in which it lives.
         */
        directory?: string;
      }
    | URL;

  /**
   * Scripts
   *
   * The "scripts" property is a dictionary containing script commands that are run at various times in the lifecycle of your package.
   * The key is the lifecycle event, and the value is the command to run at that point.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#scripts
   */
  scripts?: {
    [key: string]: string;
  };

  /**
   * Dependencies
   *
   * Dependencies are specified in a simple object that maps a package name to a version range.
   * The version range is a string which has one or more space-separated descriptors.
   * Dependencies can also be identified with a tarball or git URL.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#dependencies
   */
  dependencies?: {
    [key: string]: Dependency;
  };

  /**
   * Development Dependencies
   *
   * If someone is planning on downloading and using your module in their program,
   * then they probably don't want or need to download and build the external test or documentation framework that you use.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#devdependencies
   */
  devDependencies?: {
    [key: string]: Dependency;
  };

  /**
   * Peer Dependencies
   *
   * In some cases, you want to express the compatibility of your package with a host tool or library,
   * while not necessarily doing a require of this host. This is usually referred to as a plugin.
   * Notably, your module may be exposing a specific interface, expected and specified by the host documentation.
   *
   * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#peerdependencies
   */
  peerDependencies?: {
    [key: string]: Dependency;
  };

  /**
   * Types
   * !TYPESCRIPT ONLY
   *
   * If your package has a main .js file, you will need to indicate the main declaration file in your package.json file as well.
   * Set the types property to point to your bundled declaration file.
   *
   * read more: https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html
   */
  types?: string;

  /**
   * Package Manger
   * !YARN ONLY
   */
  packageManger?: string;
}

/**
 * Person Object
 *
 * Object of Personal info which for author and contributors field.
 *
 * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#people-fields-author-contributors
 */
export interface PackageJsonPerson {
  /**
   * Persons name
   */
  name: string;

  /**
   * Persons email address
   */
  email?: `${string}@${string}.${string}`;

  /**
   * Persons personal homepage URL address
   */
  url?: URL;
}

/**
 * Single Lined Person Info
 *
 * Single Line of string which for author and contributors field
 *
 * read more: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#people-fields-author-contributors
 */
export type PackageJsonPersonSingleLine = `${string}${` <${string}>` | ''}${` (${string})` | ''}`;

/**
 * Dependency
 *
 * dependency's version or location
 */
export type Dependency = SemVersion | string;
