import React from 'react'
import './style.scss';

function CurrencyCard(props) {
  const { market,currency } = props;  
  const evalCurrentPrice = () => {
    const currentPrice = currency[0]?.value?currency[0].value:0;
    const currentPriceBefore = currency[1]?.value?currency[1].value:0;
    return (currentPrice === currentPriceBefore)?'same':(currentPrice > currentPriceBefore)?'up':'down';
  }    
  return (
    <React.Fragment>
      {currency[0]?
      <div className="currency-card">
        <div className="currency-card-header">
          <div className="header-title">
            <span className={evalCurrentPrice()}>{evalCurrentPrice()!=='same'?evalCurrentPrice()==='up'?'▲':'▼':''}</span> $ {currency[0].value?Number.isInteger(currency[0].value)?currency[0].value.toFixed(2):currency[0].value:'-'}
          </div>
          <div className="market">
            {market}
          </div>
        </div>  
        <div className="currency-item-list">                
          <table className='currency-log'>
            <tbody>
              {currency.map((item,index) => {
                return (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>$ {Number.isInteger(item.value)?item.value.toFixed(2):item.value}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div> 
      :null}
    </React.Fragment>  
  )
}

export default CurrencyCard