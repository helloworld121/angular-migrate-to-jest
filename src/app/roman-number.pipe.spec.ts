import { RomanNumberPipe } from './roman-number.pipe';
import {RomanNumberService} from './roman-number.service';
import {instance, mock, verify, when} from 'ts-mockito';


// Unit Tests
// AAA Pattern + MOCKS
// 1) Arrange Setup (Setup Mocks)
// 2) Act
// 3) Assert Verify (Verify Mocks, if they were called)

describe('RomanNumberPipe', () => {

  let sut: RomanNumberPipe;

  let romanNumberServiceMock: RomanNumberService;

  beforeEach(() => {
    romanNumberServiceMock = mock(RomanNumberService);
    sut = new RomanNumberPipe(instance(romanNumberServiceMock));
  });

  describe('transform', () => {
    test('should redirect to roman number service', () => {
      // Arrange
      const value = 3;
      const expected = 'III';

      // Setup
      when(romanNumberServiceMock.transform(value)).thenReturn(expected);

      // Act
      const result = sut.transform(value);

      // Assert
      expect(result).toBe(expected);

      // Verify
      verify(romanNumberServiceMock.transform(value)).called();
    });
  });

});
