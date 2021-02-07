import {RomanNumberService} from '../roman-number.service';

// COMPARE to roman-number.service.spec.ts
describe('RomanNumberService - repetitive test', () => {

  // sut = system under test (example)
  let sut: RomanNumberService;

  // each test should have a clear and new instance
  beforeEach(() => {
    sut = new RomanNumberService();
  });

  describe('transform', () => {

    test.each`
      value | expected
      ${1} | ${'I'}
      ${2} | ${'II'}
      ${3} | ${'III'}
    `('should return $expected for $value', ({value, expected}) => {
      const result = sut.transform(value);
      expect(result).toBe(expected);
    });

  });

});
