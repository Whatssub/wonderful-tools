/*
  Copyright 2022. Whatssub co.,Ltd.

  This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
*/

import * as functions from '@function';
import * as ds from "./data-structures";
import * as array from "./array";

export * from './functions';
export * from './types';

export * as ds from "./data-structures";
export * as array from "./array";
export * as functions from "./functions";

export default { ...functions, ...ds, ...array };
