import request from 'superagent';

const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

const randomNumberGenerator = (n) => {
  const randomNumber = Math.floor((Math.random() * n));
  return randomNumber;
};

export async function fetchRandomQuote() {
  const res = await request
    .get(URL);

  const randomQuote = res.body[randomNumberGenerator(20)];
  
  const formattedQuote = {
    name: randomQuote.character,
    text: randomQuote.quote,
    image: randomQuote.image
  };

  return formattedQuote;
}
