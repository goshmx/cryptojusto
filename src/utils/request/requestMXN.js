import axios from 'axios';
import {urls} from '../../utils/config/market-urls';

const requestMXN = async () => {  
  const response = await axios.get(urls.freecurrencyapi);  
  return response.data.data.MXN;
}

export default requestMXN;