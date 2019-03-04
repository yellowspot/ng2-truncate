import { NgModule, PipeTransform } from '@angular/core';

import { TruncateCharactersPipe } from './truncate-characters.pipe';
import { TruncateWordsPipe } from './truncate-words.pipe';

export const TRUNCATE_PIPES = [TruncateCharactersPipe, TruncateWordsPipe];

@NgModule({
  declarations: [TRUNCATE_PIPES],
  exports: [TRUNCATE_PIPES]
})

export class TruncateModule { }
