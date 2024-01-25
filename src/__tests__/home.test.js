const sum = require('../app/(site)/home/page');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

it('should 1+2 ',()=>{
  const r=sum(1,2);
  expect(r).toBe(3)
})