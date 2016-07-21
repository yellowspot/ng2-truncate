# ng2-truncate

This project is a Angular 2 pipe to truncate text to a set of characters.

## Installation

To install this library, run:

```bash
$ npm install ng2-truncate --save
```

## Simple Example

By default, the pipe will truncate text after 40 characters. You could override this using the first argument:

```TypeScript
import { Component } from '@angular/core';
import { Ng2TruncatePipe } from 'ng2-truncate';

@Component({
    selector: 'my-component',
    template: '<p>{{ "123456789" | truncate : 3 }}</p>',
    pipes: [Ng2TruncatePipe]
})
export class MyComponent {

}
```

This will produce the following html

```HTML
<p>123...</p>
```

There is a second argument which allow to override the suffix used:

```TypeScript
@Component({
    ...
    template: '<p>{{ "123456789" | truncate : 3 : "xxx" }}</p>',
    ...
})
```

This will produce the following html

```HTML
<p>123xxx</p>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

To execute all test via via [Karma](https://karma-runner.github.io):

```bash
$ npm run test
```
