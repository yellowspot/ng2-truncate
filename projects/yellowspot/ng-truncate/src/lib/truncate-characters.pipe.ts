import { Pipe, PipeTransform } from '@angular/core';

const defaultTrailing = '…';
const defaultLength = 40;

@Pipe({
  name: 'truncate'
})
export class TruncateCharactersPipe implements PipeTransform {
  transform(value: string, ...options: any): string {
    let limit = options[0] || defaultLength, trailingString = '', countTrailing = false;

    if (!value) { value = ''; }
    if (options && options[1] && typeof(options[1]) === 'object') {
      trailingString = options[1].trailingString || defaultTrailing;
      countTrailing = options[1].countTrailing || false;
    } else {
      trailingString = options[1] || defaultTrailing;
      countTrailing = options[2] || false;
    }

    let stringLength = this.getStringLength(limit, trailingString, countTrailing);

    if (stringLength < 0) {
      stringLength *= -1;
      return value.length > stringLength ? trailingString + value.substring(value.length - stringLength, value.length) : value;
    } else {
      return value.length > stringLength ? value.substring(0, stringLength) + trailingString : value;
    }
  }

  private getStringLength(limit: number, trail: string, countTrailing = false) {
    if (countTrailing) {
      if (limit < 0) {
        return limit + trail.length;
      } else {
        return limit - trail.length;
      }
    }

    return limit;
  }
}
