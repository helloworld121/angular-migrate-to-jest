import { RomanNumberService } from './roman-number.service';

describe('RomanNumberService', () => {

  // sut = system under test (example)
  let sut: RomanNumberService;

  // each test should have a clear and new instance
  beforeEach(() => {
    sut = new RomanNumberService();
  });

  describe('transform', () => {
    test('should return I for 1', () => {
      // Arrage
      const value = 1;

      // Act
      const result = sut.transform(value);

      // Assert
      expect(result).toBe('I');
    });
  });

});
