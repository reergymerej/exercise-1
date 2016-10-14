import { expect } from 'chai';
import * as app from '../src';

describe('getEvens', () => {
  describe('when given an empty array', () => {
    it('should return []', () => {
      const input = [];
      const expected = [];
      const actual = app.getEvens(input);
      expect(actual).to.eql(expected);
    });
  });

  describe('when given an array of ints', () => {
    it('should return the evens', () => {
      const input = [1,2,3,4,5,6,7];
      const expected = [2,4,6];
      const actual = app.getEvens(input);
      expect(actual).to.eql(expected);
    });
  });

  describe('when given an array of floats', () => {
    it('should return the evens', () => {
      const input = [
      1.2,
      3.5,
      14.0,
      9.999,
      -15.4,
      3.0,
      352.0,
      ];
    const expected = [
      14.0,
      352.0,
      ];
    const actual = app.getEvens(input);
    expect(actual).to.eql(expected);
    });
  });

  describe('when given garbage input', () => {
    describe('like strings', () => {
      it('should throw "invalid value"', () => {
        const input = [
        'apple',
        'banana',
        ];
      const fn = () => {
        app.getEvens(input);
      };
      expect(fn).to.throw('invalid value');
      });
    });

    describe('like null', () => {
      it('should throw "invalid value"', () => {
        const input = [
        1,
        2,
        3,
        null,
        ];

      const fn = () => {
        app.getEvens(input);
      };
      expect(fn).to.throw('invalid value');
      });
    });
  });
});
