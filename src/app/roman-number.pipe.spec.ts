import { RomanNumberPipe } from './roman-number.pipe';

describe('RomanNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new RomanNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
