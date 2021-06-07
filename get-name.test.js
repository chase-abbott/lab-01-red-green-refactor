import getName from './get-name.js';

describe('getName', () => {
  it('gets the name from spot', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toBe('spot');
  });

  it('gets the name from Aang', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name = getName(character);
    expect(name).toBe('Aang');
  });
});
