<!-- spell-checker: enableCompoundWords -->
<!-- spell-checker: ignore roundto -->

<h1 align="center">wonderful-tools</h1>
<p align="center" style="opacity: 0.56">
 ...And they'll do wonderful things
</p>

<p align="center">
  <a href="https://yarnpkg.com/getting-started/migration">
    <img src="https://img.shields.io/badge/yarn-%232C8EBB?&logo=yarn&logoColor=%23FFFFFF" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-%233178C6?&logo=typescript&logoColor=%23FFFFFF" />
  </a>
  <a href="https://code.visualstudio.com/">
    <img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC?&logo=visual%20studio%20code&logoColor=%23FFFFFF" />
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/eslint-%234B32C3?&logo=eslint&logoColor=%23FFFFFF" />
  </a>
  <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/prettier-%23F7B93E?&logo=prettier&logoColor=%23343A3F" />
  </a>
  <a href="https://figma.com/">
    <img src="https://img.shields.io/badge/figma-%23222222?&logo=figma&logoColor=%23FFFFFF" />
  </a>
</p>

- [Usage](#usage)
  - [`formatCamel()`](#formatcamel)
  - [`formatKebab()`](#formatkebab)
  - [`formatPascal()`](#formatpascal)
  - [`formatSentence()`](#formatsentence)
  - [`formatSnake()`](#formatsnake)
  - [`replaceAll()`](#replaceall)
  - [`roundTo()`](#roundto)

## Usage

### `formatCamel()`

```ts
import tools from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

tools.formatCamel(iconName); // 'icArrowAngleLeft'
```

### `formatKebab()`

```ts
import tools from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

tools.formatKebab(iconName); // 'ic-arrow-angle-left'
```

### `formatPascal()`

```ts
import tools from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

tools.formatPascal(iconName); // 'IcArrowAngleLeft'
```

### `formatSentence()`

```ts
import tools from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

tools.formatSentence(iconName); // 'ic arrow angle left'
```

### `formatSnake()`

```ts
import tools from 'wonderful-tools';

const iconName = 'icArrowAngleLeft';

tools.formatSnake(iconName); // 'ic_arrow_angle_left'
```

### `replaceAll()`

```ts
import tools from 'wonderful-tools';

const iconName = 'ic_arrow_angle_left';

tools.replaceAll(iconName, '_', '-'); // 'ic-arrow-angle-left'
```

### `roundTo()`

```ts
import tools from 'wonderful-tools';

const count = 1000.2383;

tools.roundTo(count, 2); // 1000.24
```