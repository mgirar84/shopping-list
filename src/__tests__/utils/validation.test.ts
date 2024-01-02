import { isItemValid } from '../../utils';

const testCases = [
  { input: 'Valid Item', expected: true },
  { input: 'Invalid123', expected: false },
  { input: 'Invalid!@#', expected: false },
  { input: '', expected: false },
  { input: '   ', expected: true },
];

describe('isItemValid function', () => {
  testCases.forEach(({ input, expected }) => {
    it(`returns ${expected} for input: ${input}`, () => {
      expect(isItemValid(input)).toBe(expected);
    });
  });
});