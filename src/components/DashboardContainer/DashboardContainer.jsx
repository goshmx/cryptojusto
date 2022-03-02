import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

import CurrencyCard from '../CurrencyCard';
import Panel from '../Panel';

import requestMarkets from '../../utils/request/requestMarkets';
import { addCurrency } from '../../redux/actions/currencyActions';

function Tab (props) {
  const { type ,selected, onClick} = props;
  return (
    <React.Fragment>
      <div className={'tab ' + (selected === type ? 'selected' : '')} onClick={onClick}>
        <div className='tab-title'>
          {type}
        </div>
      </div>
    </React.Fragment>  
  )
}

function Dashboard() {
  const dispatch = useDispatch();  
  const store = useSelector(state => state);
  const [currencies] = useState(['btc','eth','xrp']);
  const [markets] = useState(['coingecko','cryptocompare','stormgain']);
  const [currentCurrency, setCurrentCurrency] = useState('btc');
  const [mxnValue, setMxnValue] = useState(0);

  const setCurrency = (currency) => {
    const now = new Date().toLocaleString();

    dispatch(addCurrency({
      btc:{coingecko: {date: now, value:currency.coingecko.btc}, cryptocompare: {date: now, value:currency.cryptocompare.btc}, stormgain: {date: now, value:currency.stormgain.btc}},
      eth:{coingecko: {date: now, value:currency.coingecko.eth}, cryptocompare: {date: now, value:currency.cryptocompare.eth}, stormgain: {date: now, value:currency.stormgain.eth}},
      xrp:{coingecko: {date: now, value:currency.coingecko.xrp}, cryptocompare: {date: now, value:currency.cryptocompare.xrp}, stormgain: {date: now, value:currency.stormgain.xrp}}
    }));
  }    

  const selectCurrency = (currency) => {
    setCurrentCurrency(currency);    
  }

  const listenMarkets = async () => {
    const values = await requestMarkets();
    setCurrency(values);
    setTimeout(listenMarkets, 15000);
  }

  const handleMXNChange = (event) => {
    const isNumeric = (num) => {
      return (num.trim() !== '') && (!isNaN(num));
    };
    return isNumeric(event.target.value)?setMxnValue(event.target.value):setMxnValue(0);    
  }

  const makeConvertion = (market) => {   
    if(store.currency[currentCurrency][market][0]){ 
    return ((mxnValue * store.mxn.value)*store.currency[currentCurrency][market][0].value).toFixed(2);
    }
    else{
      return 0;
    }
  }

  useEffect(() => {
    listenMarkets();
    // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []); 

  return (
    <React.Fragment>
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-container-header">
            <div className='tabs'>
              {currencies.map((currency, index) => {
                return (
                  <Tab key={index} type={currency} selected={currentCurrency} onClick={()=>{selectCurrency(currency)}} />
                )
              })}                       
            </div>
          </div>
          <div className="dashboard-container-body">
            <Panel className="dashboard-cards">
              <div className="cards-container">                       
                {Object.keys(store.currency[currentCurrency]).map((market, index) => {
                  return (
                    <CurrencyCard key={index} market={market} currency={store.currency[currentCurrency][market]} />
                  )
                })}
              </div>
            </Panel>             
          </div>  
          <div className="dashboard-container-footer">
            <div className='convert-panel'>
              <div className='convert convert-mxn'>
                <div className='mxn-title'>Convert MXN</div>
                <div className='mxn-input'>                  
                  <input 
                    type='text' 
                    pattern="[+-]?\d+(?:[.,]\d+)?" 
                    placeholder='MXN' 
                    disabled={!store.mxn?.value?true:false} 
                    onChange={handleMXNChange}
                    defaultValue={mxnValue}
                  />  
                </div>  
              </div>
              {markets.map((market, index) => {
                return (
                  <div key={index} className='convert convert-market'>
                    <div className='convert-title'>{market}</div>
                    <div className='convert-result'>${makeConvertion(market)}</div>
                  </div>  
                )
              })}
            </div>
          </div>  
        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard