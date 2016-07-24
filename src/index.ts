import { TruncateCharactersPipe } from './truncate-characters.pipe'
import { TruncateWordsPipe } from './truncate-words.pipe'
import { NgTruncateComponent } from './components/truncate-characters.component'

export const TRUNCATE_PIPES = [TruncateCharactersPipe, TruncateWordsPipe]
export const TRUNCATE_DIRECTIVES = [NgTruncateComponent]

export default {
  pipes: TRUNCATE_PIPES,
  directives: TRUNCATE_DIRECTIVES
}
