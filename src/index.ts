export type TestCase<T, R> = [T, TestFunction<T, R>] | [T[], TestFunction<T, R>];
export type TestFunction<T, R> = (test: T) => R;

const validate = <T>(keys: T[]) => {
  const duplicates = keys.filter((key, index) => keys.indexOf(key) !== index);
  if (duplicates.length > 0) {
    throw new Error(`Duplicate keys: ${duplicates.join(', ')}`);
  }
};

export const iswitch = <T, R>(key: T, testCase: TestCase<T, R>, ...testCases: TestCase<T, R>[]): R | undefined => {
  const allTestCases = [testCase, ...testCases];
  validate(allTestCases.flatMap((tc) => tc[0]));

  const handler = allTestCases.find(
    (tc) => (Array.isArray(tc[0]) && (tc[0].length === 0 || tc[0].includes(key))) || tc[0] === key,
  );

  return handler?.[1](key);
};
