var myHeaders = new Headers();
myHeaders.append("apikey", "gG9TdpubzLOu5gP0TQeTSZ1120y6X9S9");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


const currencyEl_one = document.getElementById('currencyOne');
const currencyEl_two = document.getElementById('currencyTwo');
const amountEl_one = document.getElementById('amountOne');
const amountEl_two = document.getElementById('amountTwo');
const rateFrom = document.getElementById('rateFrom');
const rateto = document.getElementById('rateTo');

  //selected의 값을 가져온다
  // function fromCurrency(){
  //   const currencyEl_one = document.getElementById("currencyOne");
  //   const fromCurrency = currencyEl_one.value;
  //   // const fromCurrencyText = fromCurrency.options[fromCurrency.selectedIndex].text;
  // }
  
  // function toCurrency(){
  //   const currencyEl_two = document.getElementById("currencyTwo");
  //   const toCurrency = currencyEl_two.value;
  // }


// Fetch exchange rates and update the dome
function calculate() {
  const amount = amountEl_one.value;
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currency_two}&from=${currency_one}&amount=${amount}`, requestOptions)
  .then(response => response.json())
  .then(result => {
      console.log(result);
      const rate = result.info.rate;

      amountEl_two.value = (amount* rate).toFixed(2);
      rateFrom.innerText =`${amount} ${currency_one}`;
      rateto.innerText=`${rate} ${currency_two}`;

    }
  )
  .catch(error => console.log('error', error));
}


//   fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${currency_one}`)
//     .then((res) => res.json())
//     .then((data) => {
//       //   console.log(data);
//       const rate = data.conversion_rates[currency_two];
//       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
//       amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//     });
// }


// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();



  


