import  fetchRandomQuote  from './fetch-quotes.js';

describe('fetchRandomQuote', () => {
  it('goes to the futurama API and grabs a random name, text, and image ', async () => {
    const quote = await fetchRandomQuote();
    expect(quote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
