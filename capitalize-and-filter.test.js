import capitalizeAndFilter from './capitalize-and-filter.js';

describe('capitalizeAndFilter', () => {
  it('capitalizes and array of strings and filters out everything that starts with f/F', () => {
    const stringArray = ['favorite', 'clear', 'monkey', 'Frank', false, []];
    expect(capitalizeAndFilter(stringArray)).toEqual(['CLEAR', 'MONKEY', false, []]);
  });
});
