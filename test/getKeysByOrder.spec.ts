import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getKeysByOrder } from '../src/getKeysByOrder'
import { exampleOrderedObject1 } from '../resources/example_ordered_object';

describe('getKeysByOrder', function () {
  it('should return an empty array of an empty object', function () {
    const input: object = {};
    const orderedKeys: string[] = getKeysByOrder(input);
    expect(orderedKeys).to.have.ordered.members([]);
  });
  it('should return the keys in correct order', function () {
    const input: object = exampleOrderedObject1;
    const orderedKeys: string[] = getKeysByOrder(input);
    expect(orderedKeys).to.have.ordered.members(['EE', 'ES', 'EC', 'FA']);
  });
});