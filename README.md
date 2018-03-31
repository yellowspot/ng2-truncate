# Deprecation warning
This package has been moved to [@yellowspot/ng-truncate](https://www.npmjs.com/package/@yellowspot/ng-truncate)

# ng2-truncate
[![GitHub issues](https://img.shields.io/github/issues/yellowspot/ng2-truncate.svg)](https://github.com/yellowspot/ng2-truncate/issues)
[![GitHub stars](https://img.shields.io/github/stars/yellowspot/ng2-truncate.svg)](https://github.com/yellowspot/ng2-truncate/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yellowspot/ng2-truncate.svg)](https://github.com/yellowspot/ng2-truncate/network)

This project is a Angular 4+ pipe to truncate text to a set of characters or words.

## CI Status
![CI Status](https://circleci.com/gh/yellowspot/ng2-truncate/tree/master.svg?style=shield)

## Installation

To install this library, run:

```bash
$ npm install ng2-truncate --save
```

## Example

By default, the pipe will truncate text after 40 characters. You could override this using the first argument:

```TypeScript
import { Component } from '@angular/core';
import { TruncateModule } from 'ng2-truncate';

@Component({
    selector: 'my-component',
    template: '<p>{{ "123456789" | truncate : 3 }}</p>'
})
export class MyComponent {

}

@NgModule({
  imports: [ TruncateModule ],
  declarations: [ MyComponent ]
})
export class MyApp { }
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

Using TruncateModule also enable truncating by words

```TypeScript
import { Component } from '@angular/core';
import { TruncateModule } from 'ng2-truncate';

@Component({
    selector: 'my-component',
    template: '<p>{{ "1234 567 89" | words : 2 }}</p>'
})
export class MyComponent {

}

@NgModule({
  imports: [ TruncateModule ],
  declarations: [ MyComponent ]
})
export class MyApp { }
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
