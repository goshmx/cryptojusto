const initialState = {
  btc:{
    cryptocompare: [],
    coingecko: [],
    stormgain: []
  },
  eth:{
    cryptocompare: [],
    coingecko: [],
    stormgain: []
  },
  xrp:{
    cryptocompare: [],
    coingecko: [],
    stormgain: []
  }
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CURRENCY':            
      return {
        ...state,
        btc: {
          coingecko: [action.payload.btc.coingecko, ...state.btc.coingecko.slice(0,5)],
          cryptocompare: [action.payload.btc.cryptocompare, ...state.btc.cryptocompare.slice(0,5)],
          stormgain: [action.payload.btc.stormgain, ...state.btc.stormgain.slice(0,5)]
        },
        eth: {
          coingecko: [action.payload.eth.coingecko, ...state.eth.coingecko.slice(0,5)],
          cryptocompare: [action.payload.eth.cryptocompare, ...state.eth.cryptocompare.slice(0,5)],
          stormgain: [action.payload.eth.stormgain, ...state.eth.stormgain.slice(0,5)]
        },
        xrp: {
          coingecko: [action.payload.xrp.coingecko, ...state.xrp.coingecko.slice(0,5)],
          cryptocompare: [action.payload.xrp.cryptocompare, ...state.xrp.cryptocompare.slice(0,5)],
          stormgain: [action.payload.xrp.stormgain, ...state.xrp.stormgain.slice(0,5)]
        }
      }        
    default:
      return state
  }
}