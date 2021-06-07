import copyAndPush from './copy-and-push.js';

describe('copyAndPush', () => {
  it('copies the array and pushes in a new value at the end', () => {
    const numbers = [1, 2, 3];
    
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });
});
