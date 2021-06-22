const apiUrl = 'https://api.kanye.rest/';
let quote = '';

document
  .querySelector('.quote-button')
  .addEventListener('click', () => getQuote());

const getQuote = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();

  quote = data.quote;

  document.querySelector('.frase').innerHTML = quote;
};

getQuote();
