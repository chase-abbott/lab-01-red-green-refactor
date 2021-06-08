import request from 'superagent';

const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

const randomNumberGenerator = (n) => {
  const randomNumber = Math.floor((Math.random() * n));
  return randomNumber;
};

export default async () => {
  const res = await request
    .get(URL);

  const randomQuote = res.body[randomNumberGenerator(20)];

  const { character: name, quote: text, image } = randomQuote;
  
  const formattedQuote = { name, text, image };

  return formattedQuote;
};
