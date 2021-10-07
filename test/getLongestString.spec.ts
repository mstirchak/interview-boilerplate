import { describe, it } from 'mocha';
import {expect} from 'chai';
import { getLongestString } from '../src/getLongestString'

describe('getLongestString', function(){
  it("should return empty if input is empty", function(){
    const inputString: string = "";
    const longestString: string = getLongestString(inputString);
    expect(longestString).to.eq('');
  });
});