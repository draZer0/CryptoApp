window.onload = () => {
//inner

  const button = document.getElementById('js--button');
  const span = document.getElementById('js--btc');


  button.onclick = (event) => {
    getBtc();
  }

  const getBtc = () => {
    const BASE_URL = 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json';

    fetch(BASE_URL)
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      span.innerHTML = response.bpi.EUR.rate;
    })
  }

//onload
};
