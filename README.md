# iswitch

Yet another inline switch on npm.

Yes yes I know, you can define a variable and use a regular switch statement but we like to overengineer stuff, right?

## Usage

What you learnt on YouTube:

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

What you can do now:

```ts
const myKey = 'foo';

const result = iswitch(myKey, ['foo', () => 1], ['bar', () => 2]); // 1
```

## Install

The command you might guess:

```
npm install iswitch
```
