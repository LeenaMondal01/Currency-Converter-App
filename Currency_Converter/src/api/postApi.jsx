import axios from 'axios';


//https://v6.exchangerate-api.com/v6/a34a89621349236903df2b38/latest/USD


const api = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/a34a89621349236903df2b38"
});

export const currencyConverter = (fromCurrency,toCurrency,amount) => {
  return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`)
}