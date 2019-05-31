const maxChar = require("./index")

test('maxChar function exists', () => {
    expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
    expect(maxChar('a')).toEqual('a');
    expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
    expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
    expect(maxChar('12lk3n1222l3kn1l23k12l312312l23222')).toEqual('2');
});