const SIGNATURE = '89504e470d0a1a0a';

/** Читает ширину и высоту из заголовка PNG без внешних зависимостей. */
export function pngSize(buffer) {
  if (!Buffer.isBuffer(buffer) || buffer.length < 24) {
    throw new Error('файл короче заголовка PNG');
  }
  if (buffer.subarray(0, 8).toString('hex') !== SIGNATURE) {
    throw new Error('это не PNG');
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}
