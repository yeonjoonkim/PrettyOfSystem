import { CurrencyTransformPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
