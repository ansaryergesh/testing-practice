import ceaser from "../src/ceaser";


test('simple word', () => {
  const result = ceaser('abcd', 2);
  expect(result).toBe('cdef');
});
  
test('with uppercase letter', () => {
  const result = ceaser('AbCd', 2);
  expect(result).toBe('CdEf');
});

test('testing punctuation', () => {
  const result = ceaser(',./', 1);
  expect(result).toBe('-/0');
});