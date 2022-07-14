export const iswitch = <T, R>(key: T, testCase: TestCase<T, R>, ...testCases: TestCase<T, R>[]): R | undefined => {
  const handler = [testCase, ...testCases].find((tc) => tc[0] === key || (tc[0] as T[]).includes(key));

  return handler?.[1](key);
};

export type TestCase<T, R> = [T, TestFunction<T, R>] | [T[], TestFunction<T, R>];
export type TestFunction<T, R> = (test: T) => R;
