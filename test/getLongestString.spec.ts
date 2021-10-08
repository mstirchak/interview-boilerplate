import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getLongestString } from '../src/getLongestString'

describe('getLongestString', function () {
  it('should return the longest string in a sentence', function () {
    const inputString: string = 'What is the longest word in this string';
    const longestString: string = getLongestString(inputString);
    expect(longestString).to.eq('longest');
  });
});