const apiUrl = 'https://api.kanye.rest/';

document
  .querySelector('.quote-button')
  .addEventListener('click', () => getQuote());

const getQuote = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  document.querySelector('.frase').innerHTML = data.quote;
};

getQuote();
