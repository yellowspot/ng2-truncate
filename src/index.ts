import { TruncateCharactersPipe } from './truncate-characters.pipe'
import { TruncateWordsPipe } from './truncate-words.pipe'

export const TRUNCATE_PIPES = [TruncateCharactersPipe, TruncateWordsPipe]

export default {
  pipes: TRUNCATE_PIPES
}
