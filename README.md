# ng2-truncate

This project is a Angular 2 pipe to truncate text to a set of characters or words.

## CI Status
![CI Status](https://circleci.com/gh/yellowspot/ng2-truncate/tree/master.svg?style=shield)

## Installation

To install this library, run:

```bash
$ npm install ng2-truncate --save
```

### Angular-cli Integration

Add the following line to your ```angular-cli-build.js``` file

```javascript
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ...
      'ng2-truncate/dist/**/*.+(js|js.map)',
      ...
    ]
  });
};
```

Click [here](https://github.com/yellowspot/ng2-truncate-demo/blob/master/angular-cli-build.js#L19) to see an example.

Then you should update your system-config.ts to map ng2-truncate

```javascript
const map: any = {
  'ng2-truncate': 'vendor/ng2-truncate/dist'
};

/** User packages configuration. */
const packages: any = {
  'ng2-truncate': {
    main: 'index'
  }
};
```

### SystemJS

If you are using SystemJS by your own, you should update your config files like in [this example](https://embed.plnkr.co/d3JiQCw756OEjS0HkVuY).

## Simple Example

By default, the pipe will truncate text after 40 characters. You could override this using the first argument:

```TypeScript
import { Component } from '@angular/core';
import { TRUNCATE_PIPES } from 'ng2-truncate';

@Component({
    selector: 'my-component',
    template: '<p>{{ "123456789" | truncate : 3 }}</p>',
    pipes: [TRUNCATE_PIPES]
})
export class MyComponent {

}
```

This will produce the following html

```HTML
<p>123…</p>
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

You can also truncate left side by using negative limit

```TypeScript
@Component({
    ...
    template: '<p>{{ "123456789" | truncate : -4 : "…" }}</p>',
    ...
})
```

This will produce the following html

```HTML
<p>…6789</p>
```

## Truncate by words

Using TRUNCATE_PIPES also enable truncating by words

```TypeScript
import { Component } from '@angular/core';
import { TRUNCATE_PIPES } from 'ng2-truncate';

@Component({
    selector: 'my-component',
    template: '<p>{{ "1234 567 89" | words : 2 }}</p>',
    pipes: [TRUNCATE_PIPES]
})
export class MyComponent {

}
```

This will produce the following html

```HTML
<p>1234 567…</p>
```

This pipe has also a second parameter to override the suffix used

## Demo

Check out the [Live demo](https://yellowspot.github.io/ng2-truncate-demo)

...Or modify on Plunker [here](https://embed.plnkr.co/d3JiQCw756OEjS0HkVuY)

...Or clone the demo app built using [angular-cli](https://cli.angular.io): https://github.com/yellowspot/ng2-truncate-demo

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
