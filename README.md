# iswitch

```ts
const myKey = 'foo';

const result = iswitch(myKey, ['foo', () => 1], ['bar', () => 2]); // 1
```

Yet another inline switch on npm.

Yes yes I know, you can define a variable and use a regular switch statement but we like to overengineer stuff, right?

This also comes in handy in React/JSX when you'd like to use a switch but you need to return something and also it's immutble if you use a const.

It features a compact inline syntax for multiple cases and also handles default.

## Install

The command you might guess:

```
npm install iswitch
```

## Usage

The definition of a regular case like this

```ts
case 'test':
  myVar = 3
  break;
```

becomes an entry with the following format

```ts
['test', () => 3];
```

### Single case

Before

```ts
const myKey = 'foo';

let result: number = undefined;
switch (myKey) {
  case 'foo':
    result = 1;
    break;
  case 'bar':
    result = 2;
    break;
}
```

After

```ts
const myKey = 'foo';

const result = iswitch(myKey, ['foo', () => 1], ['bar', () => 2]); // 1
```

### Multiple cases

Before

```ts
const myKey = 'foo';

let result: number = undefined;
switch (myKey) {
  case 'foo':
  case 'bar':
    result = 1;
    break;
}
```

After

```ts
const myKey = 'foo';

const result = iswitch(myKey, [['foo', 'bar'], () => 1]); // 1
```

### Default case

Before

```ts
const myKey = 'bar';

let result: number = undefined;
switch (myKey) {
  case 'foo':
    result = 1;
    break;
  default:
    result = 5;
}
```

After

```ts
const myKey = 'bar';

const result = iswitch(myKey, [['foo'], () => 1], [[], () => 5]); // 5
```

### Run functions in cases

Before

```ts
const myKey = 'bar';

let result: number = undefined;
switch (myKey) {
  case 'bar':
    const myNumber = 1;
    // Some complex logic here
    result = myFunction(myNumber);
    break;
}
```

After

```ts
const myKey = 'bar';

const result = iswitch(myKey, [
  'bar',
  () => {
    const myNumber = 1;
    // Some complex logic here
    return myFunction(myNumber);
  },
]);
```
