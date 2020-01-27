import reverseString from '../src/reverseString';

test('return string with reversed order',() => {
  expect(reverseString('qwerty')).toBe('ytrewq');
});