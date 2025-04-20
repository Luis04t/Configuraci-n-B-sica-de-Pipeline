const { greet } = require('../src/app');

test('greet returns correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});