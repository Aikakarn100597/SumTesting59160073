const minus = require('./minus');

test('9 - 3 เท่ากับ 6', () => {
    expect(minus(9,3)).toBe(6);
});

test('2 - 5 เท่ากับ -3', () => {
    expect(minus(2,5)).toBe(-3);
});

test('19 - 23 เท่ากับ -4', () => {
    expect(minus(19,23)).toBe(-4);
});

test('99 - 55 เท่ากับ 44', () => {
    expect(minus(99,55)).toBe(44);
});

test('63 - 25 เท่ากับ 38', () => {
    expect(minus(63,25)).toBe(38);
});