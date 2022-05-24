<h1>wonderful-tools</h1>

 ...And they'll do wonderful things

<!-- spell-checker: enableCompoundWords -->
<!-- spell-checker: ignore roundto -->
- [Functions](#functions)
  - [`formatCamel()`](#formatcamel)
  - [`formatKebab()`](#formatkebab)
  - [`formatPascal()`](#formatpascal)
  - [`formatSentence()`](#formatsentence)
  - [`formatSnake()`](#formatsnake)
  - [`replaceAll()`](#replaceall)
  - [`roundTo()`](#roundto)
## Functions

### `formatCamel()`

```ts
import { formatCamel } from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

formatCamel(iconName); // 'icArrowAngleLeft'
```

### `formatKebab()`

```ts
import { formatKebab } from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

formatKebab(iconName); // 'ic-arrow-angle-left'
```

### `formatPascal()`

```ts
import { formatPascal } from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

formatPascal(iconName); // 'IcArrowAngleLeft'
```

### `formatSentence()`

```ts
import { formatSentence } from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

formatSentence(iconName); // 'ic arrow angle left'
```

### `formatSnake()`

```ts
import { formatSnake } from 'wonderful-tools';

const iconName = 'icArrowAngleLeft';

formatSnake(iconName); // 'ic_arrow_angle_left'
```

### `replaceAll()`

```ts
import { replaceAll } from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

replaceAll(iconName, '_', '-'); // 'ic-arrow-angle-left'
```

### `roundTo()`

```ts
import { roundTo } from 'wonderful-tools';

const count = 1000.2383;

roundTo(count, 2); // 1000.24
```