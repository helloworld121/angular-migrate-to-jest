import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanNumber'
})
export class RomanNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
