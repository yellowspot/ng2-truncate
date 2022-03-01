import { Pipe, PipeTransform } from '@angular/core';

const defaultTrailing = '…';
const defaultLength = 40;

@Pipe({
  name: 'truncate'
})
export class TruncateCharactersPipe implements PipeTransform {
  transform(value: string, ...options: any): string {
    const limit = options[0] || defaultLength;
    let trailingString = '';
    let countTrailing = false;
    const safeValue = value || '';

    if (options && options[1] && typeof (options[1]) === 'object') {
      trailingString = options[1].trailingString || defaultTrailing;
      countTrailing = options[1].countTrailing || false;
    } else {
      trailingString = options[1] || defaultTrailing;
      countTrailing = options[2] || false;
    }

    let stringLength = this.getStringLength(limit, trailingString, countTrailing);

    if (stringLength < 0) {
      stringLength *= -1;
      return safeValue.length > stringLength
        ? trailingString + safeValue.substring(safeValue.length - stringLength, safeValue.length)
        : safeValue;
    }

    return safeValue.length > stringLength
      ? safeValue.substring(0, stringLength) + trailingString
      : safeValue;
  }

  private getStringLength(limit: number, trail: string, countTrailing = false) {
    if (countTrailing) {
      if (limit < 0) {
        return limit + trail.length;
      }

      return limit - trail.length;
    }

    return limit;
  }
}
