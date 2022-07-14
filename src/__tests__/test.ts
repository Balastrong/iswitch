import { iswitch, TestCase } from '../index';

describe('iswitch', () => {
  it('should return the first function that matches', () => {
    expect(iswitch('a', ['a', () => 'A'])).toBe('A');

    expect(
      iswitch('foo', [
        'foo',
        () => {
          return true;
        },
      ]),
    ).toBe(true);
  });

  it('should return null if there are no matches', () => {
    expect(iswitch('a', ['X', () => 'A'])).toBe(undefined);
  });
});
