import calculator from '../src/calculator';

test ('adding two numbers', () => {
  const res = calculator.add(3, 2); 
  expect(res).toBe(5);
});

test ('substracting two numbers', () => {
  const res = calculator.subtract(3, 2); 
  expect(res).toBe(1);
});

test ('dividing two numbers', () => {
  let res = calculator.divide(12, 2); 
  expect(res).toBe(6);
});


test ('multiplying two numbers',() =>{
  const res = calculator.multiply(3, 2); 
  expect(res).toBe(6);
});

