import { Pipe } from '@angular/core';

@Pipe({
  name: 'words'
})
export class TruncateWordsPipe {
  transform(value: string, limit: number = 40, trail: String = '…') : string {
    let result = value;

    if (value) {
      let words = value.split(/\s+/);
      if (words.length > limit) {
        result = words.slice(0, limit).join(' ') + trail;
      }
    }

    return result;
  }
}
