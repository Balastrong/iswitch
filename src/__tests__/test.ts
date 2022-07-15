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

    expect(iswitch('b', ['a', () => 'A'], ['b', () => 'B'], ['c', () => 'C'])).toBe('B');
  });

  it('should handle cases with multiple keys', () => {
    expect(iswitch('a', ['x', () => false], [['a', 'b'], () => true])).toBe(true);
  });

  it('should return null if there are no matches', () => {
    expect(iswitch('a', ['X', () => 'A'])).toBe(undefined);
  });

  it('should handle the default there are no matches', () => {
    expect(iswitch('a', ['X', () => 'A'], [[], () => 'default'])).toBe('default');
  });

  it('should throw if there are duplicate keys', () => {
    expect(() => iswitch('a', ['X', () => 'A'], [['X'], () => 'default'])).toThrowError(/^Duplicate keys: X$/);

    expect(() => iswitch('a', [['X', 'Y'], () => 'A'], [['X'], () => 'X'], [['Y'], () => 'Y'])).toThrowError(
      /^Duplicate keys: X, Y$/,
    );
  });
});
