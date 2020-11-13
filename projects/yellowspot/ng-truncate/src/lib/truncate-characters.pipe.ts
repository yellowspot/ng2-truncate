import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncateCharactersPipe implements PipeTransform {
  transform(value: string, limit: number = 40, trail: string = '…', includeTrailling = false): string {
    if (!value) { value = ''; }
    if (includeTrailling) {
      limit < 0 ? limit += trail.length : limit -= trail.length;
    }

    if (limit < 0) {
      limit *= -1;
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
