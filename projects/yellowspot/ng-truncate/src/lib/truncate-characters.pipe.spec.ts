import { TruncateCharactersPipe } from './truncate-characters.pipe';

describe('TruncateCharactersPipe', () => {

  let pipe: TruncateCharactersPipe;

  beforeEach(() => {
    pipe = new TruncateCharactersPipe();
  });

  it('transforms "123456789" to "1234…"', () => {
    expect(pipe.transform('123456789', 4)).toEqual('1234…');
  });

  it('transforms "123456789" to "1234xxx"', () => {
    expect(pipe.transform('123456789', 4, 'xxx')).toEqual('1234xxx');
  });

  it('transforms "123456789" to "1234xxx" (using hash options)', () => {
    expect(pipe.transform('123456789', 4, { trailingString: 'xxx' })).toEqual('1234xxx');
  });

  it('transforms "1234 5678" to "123…"', () => {
    expect(pipe.transform('1234 5678', 3)).toEqual('123…');
  });

  it('leaves "123" unchanged', () => {
    expect(pipe.transform('123', 3)).toEqual('123');
  });

  it('leaves "12" unchanged', () => {
    expect(pipe.transform('12', 3)).toEqual('12');
  });

  it('leaves empty string unchanged', () => {
    expect(pipe.transform('', 3)).toEqual('');
  });

  it('truncate with default length', () => {
    expect(pipe.transform(new Array(45).fill('X').join(''))).toEqual(
      new Array(40).fill('X').join('') + '…'
    );
  });

  // Left side truncating
  it('[left] position', () => {
    expect(pipe.transform('123456789', -4, '…')).toEqual('…6789');
  });

  it('[left] position (using hash options)', () => {
    expect(pipe.transform('123456789', -4, { trailingString: '…' })).toEqual('…6789');
  });

  it('[left] leaves empty string unchanged', () => {
    expect(pipe.transform('', -3, '…')).toEqual('');
  });

  it('[left] leaves empty string unchanged (using hash options)', () => {
    expect(pipe.transform('', -3, { includeTrailing: '…' })).toEqual('');
  });

  it('do not throw if undefined provided', () => {
    expect(pipe.transform(undefined, 3)).toEqual('');
  });

  describe('when including trailing char', () => {
    it('transforms "123456789" to "123…"', () => {
      expect(pipe.transform('123456789', 4, undefined, true)).toEqual('123…');
    });

    it('transforms "123456789" to "123…" (using hash options)', () => {
      expect(pipe.transform('123456789', 4, { includeTrailing: true })).toEqual('123…');
    });

    it('transforms "123456789" to "12xxx"', () => {
      expect(pipe.transform('123456789', 4, 'xxx', true)).toEqual('1xxx');
    });

    it('transforms "123456789" to "12xxx" (using hash options)', () => {
      expect(pipe.transform('123456789', 4, { trailingString: 'xxx', includeTrailing: true })).toEqual('1xxx');
    });

    it('change "123" to "12…"', () => {
      expect(pipe.transform('123', 3, undefined, true)).toEqual('12…');
    });

    it('change "123" to "12…" (using hash options)', () => {
      expect(pipe.transform('123', 3, { includeTrailing: true })).toEqual('12…');
    });

    it('leaves "12" unchanged', () => {
      expect(pipe.transform('12', 3, undefined, true)).toEqual('12');
    });

    it('leaves "12" unchanged (using hash options)', () => {
      expect(pipe.transform('12', 3, { includeTrailing: true })).toEqual('12');
    });

    it('[left] position', () => {
      expect(pipe.transform('123456789', -4, '…', true)).toEqual('…789');
    });

    it('[left] position (using hash options)', () => {
      expect(pipe.transform('123456789', -4, { trailingString: '…', includeTrailing: true })).toEqual('…789');
    });

    it('[left] leaves empty string unchanged', () => {
      expect(pipe.transform('', -3, '…', true)).toEqual('');
    });

    it('[left] leaves empty string unchanged (using hash options)', () => {
      expect(pipe.transform('', -3, '…', { includeTrailing: true })).toEqual('');
    });

    it('do not throw if undefined provided', () => {
      expect(pipe.transform(undefined, 3, undefined, true)).toEqual('');
    });

    it('do not throw if undefined provided', () => {
      expect(pipe.transform(undefined, 3, { includeTrailing: true })).toEqual('');
    });
  });
});
