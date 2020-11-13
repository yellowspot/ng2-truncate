import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncateCharactersPipe implements PipeTransform {
  transform(value: string, limit: number = 40, trail: string = '…', includeTrailling = false): string {
    if (!value) { value = ''; }
    let stringLength = this.getStringLength(limit, trail, includeTrailling);

    if (stringLength < 0) {
      stringLength *= -1;
      return value.length > stringLength ? trail + value.substring(value.length - stringLength, value.length) : value;
    } else {
      return value.length > stringLength ? value.substring(0, stringLength) + trail : value;
    }
  }

  private getStringLength(limit, trail, includeTrailling = false) {
    if (includeTrailling) {
      if (limit < 0) {
        return limit + trail.length;
      } else {
        return limit - trail.length;
      }
    }

    return limit;
  }
}
