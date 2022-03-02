import axios from 'axios';
import {urls} from '../../utils/config/market-urls';

const  requestCryptoCompare = async () => {  
  const response = await axios.get(urls.cryptocompare);  
  return {btc: response.data.BTC.USD, eth: response.data.ETH.USD, xrp: response.data.XRP.USD};
}

const  requestCoinGecko = async () => {  
  const response = await axios.get(urls.coingecko);  
  return {btc: response.data[0].current_price, eth: response.data[1].current_price, xrp: response.data[2].current_price};
}

const requestStormgain = async () => {
  const response = await axios.get(urls.stormgain);
  return {btc: parseFloat(response.data.BTC_USDT.last_price), eth: parseFloat(response.data.ETH_USDT.last_price), xrp: parseFloat(response.data.XRP_USDT.last_price)};
}

const requestMarkets = async () => {
  const cryptocompare = await requestCryptoCompare();
  const coingecko = await requestCoinGecko();
  const stormgain = await requestStormgain();
  return {
    cryptocompare: cryptocompare,
    coingecko: coingecko,
    stormgain: stormgain
  }
}

export default requestMarkets;