import { TruncateCharactersPipe } from './truncate-characters.pipe';

describe('TruncateCharactersPipe', () => {

  let pipe: TruncateCharactersPipe;

  beforeEach(() => {
    pipe = new TruncateCharactersPipe();
  });

  it('transforms "123456789" to "1234…"', () => {
    expect(pipe.transform('123456789', 4)).toEqual('1234…');
  });

  it('transforms "123456789" to "123… when including trailing character"', () => {
    expect(pipe.transform('123456789', 4, undefined, true)).toEqual('123…');
  });

  it('transforms "123456789" to "1234xxx"', () => {
    expect(pipe.transform('123456789', 4, 'xxx')).toEqual('1234xxx');
  });

  it('transforms "123456789" to "12xxx when including trailing character"', () => {
    expect(pipe.transform('123456789', 4, 'xxx', true)).toEqual('1xxx');
  });

  it('transforms "1234 5678" to "123…"', () => {
    expect(pipe.transform('1234 5678', 3)).toEqual('123…');
  });

  it('leaves "123" unchanged', () => {
    expect(pipe.transform('123', 3)).toEqual('123');
  });

  it('change "123" to "12… if including trailing char"', () => {
    expect(pipe.transform('123', 3, undefined, true)).toEqual('12…');
  });

  it('leaves "12" unchanged', () => {
    expect(pipe.transform('12', 3)).toEqual('12');
  });

  it('leaves "12" unchanged when including trailing char', () => {
    expect(pipe.transform('12', 3, undefined, true)).toEqual('12');
  });

  it('leaves empty string unchanged', () => {
    expect(pipe.transform('', 3)).toEqual('');
  });

  // Left side truncating
  it('[left] position', () => {
    expect(pipe.transform('123456789', -4, '…')).toEqual('…6789');
  });

  it('[left] position including trailing', () => {
    expect(pipe.transform('123456789', -4, '…', true)).toEqual('…789');
  });

  it('[left] leaves empty string unchanged', () => {
    expect(pipe.transform('', -3, '…')).toEqual('');
  });

  it('[left] leaves empty string unchanged when including trailing', () => {
    expect(pipe.transform('', -3, '…', true)).toEqual('');
  });

  it('do not throw if undefined provided', () => {
    expect(pipe.transform(undefined, 3)).toEqual('');
  });

  it('do not throw if undefined provided when include trailing', () => {
    expect(pipe.transform(undefined, 3, undefined, true)).toEqual('');
  });
});
