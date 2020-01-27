import capitalize from '../src/capitalize';

test('return string with the first letter capitalized', () => {
  expect(capitalize('check the word')).toBe('Check the word');
});