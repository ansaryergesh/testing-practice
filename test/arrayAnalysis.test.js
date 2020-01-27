import arrayAnalysis from '../src/arrayAnalyze';

test('testing arrayAnalys method', () => {
  const array = arrayAnalysis([1, 8, 3, 4, 2, 6]);
  expect(array.average).toBe(4);
  expect(array.min).toBe(1);
  expect(array.max).toBe(8);
  expect(array.length).toBe(6);
});