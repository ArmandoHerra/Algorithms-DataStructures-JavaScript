const reverseString = require('./index');

test('Reverse function exists', () => {
    expect(reverseString).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverseString('abcde')).toEqual('edcba');
});

test('Reverse reverses a string', () => {
    expect(reverseString('  abcde')).toEqual('edcba  ');
});