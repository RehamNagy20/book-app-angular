import { ShortenPipe } from './shorten.pipe';
describe('ShortenPipe', () => {
    let pipe: ShortenPipe;

    beforeEach(() => {

        pipe = new ShortenPipe();

    });

    it('should create an instance', () => {

        expect(pipe).toBeTruthy();

    });

    it('should shorten the string correctly', () => {

        const longString = 'This is a very long string that needs to be shortened.';

        const result = pipe.transform(longString, 20);

        expect(result).toBe('This is a very long...');

    });

    it('should return the original string if it is shorter than the limit', () => {

        const shortString = 'Short string';

        const result = pipe.transform(shortString, 20);

        expect(result).toBe(shortString);

    });
});
