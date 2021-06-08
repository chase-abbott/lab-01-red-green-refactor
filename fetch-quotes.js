import request from 'superagent';

const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

// have math.random to generate random index to grab
export async function fetchQuotes() {
  const res = await request
    .get(URL);

  const randomQuote = res.body[Math.floor((Math.random() * 20))];
  
  const formattedQuote = {
    name: randomQuote.character,
    text: randomQuote.quote,
    image: randomQuote.image
  };

  return formattedQuote;
}
