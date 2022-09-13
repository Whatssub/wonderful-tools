/*
  Copyright 2022. Whatssub co.,Ltd.
  All rights reserved.
*/

import { formatCamel } from '../src';

function test() {
  const start = 'destructive-secondary';
  const expect = 'destructiveSecondary';

  console.log(formatCamel(start), expect);
}

test();
