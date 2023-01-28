import { Utils } from '../app/Utils';

describe('Utils test suite', () => {
  beforeEach(() => {
    console.log('before each');
  });

  test('first test', () => {
    const result = Utils.toUpperCase('abc');

    expect(result).toBe('ABC');
  });

  test('parse simple URL', () => {
    const parsedUrl = Utils.parseUrl('http://localhost:8080/login');
    expect(parsedUrl.href).toBe('http://localhost:8080/login');
    expect(parsedUrl.port).toBe('8080');
    expect(parsedUrl.protocol).toBe('http:');
    expect(parsedUrl.query).toEqual({});
  });

  test('parse url with query', () => {
    const parsedUrl = Utils.parseUrl(
      'http://localhost:8080/login?user=user&password=password'
    );
    expect(parsedUrl.query).toEqual({ user: 'user', password: 'password' });
  });

  test('test invalid url', () => {
    function expectError() {
      Utils.parseUrl('');
    }

    expect(expectError).toThrowError('Empty Url!');
  });

  test('test invalid url with arrow function', () => {
    expect(() => {
      Utils.parseUrl('');
    }).toThrowError('Empty Url!');
  });

  test('test invalid url with try catch', () => {
    try {
      Utils.parseUrl('');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Empty Url!');
    }
  });
});
