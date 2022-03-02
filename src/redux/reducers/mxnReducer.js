const initialState = 0;

export const mxnReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MXN':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state;
  }
}

export default mxnReducer;