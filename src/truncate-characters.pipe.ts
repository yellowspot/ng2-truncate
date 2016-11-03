import { Pipe } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncateCharactersPipe {
  transform(value: string, limit: number = 40, trail: String = '…', position: string = 'right'): string {
    if (position === 'left') {
      return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
    } else {
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
  }
}
