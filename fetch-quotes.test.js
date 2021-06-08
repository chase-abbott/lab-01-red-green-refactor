import { fetchQuotes } from './fetch-quotes.js';

describe('fetchQuotes', () => {
  it('goes to the futurama API and grabs a single name, text, and image ', async () => {
    const quote = await fetchQuotes();
    expect(quote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
