import { Pipe } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class Ng2TruncatePipe {
  transform(value: string, limit: number = 40, trail: String = '...') : string {
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
