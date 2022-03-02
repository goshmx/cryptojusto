import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import { userReducer } from "./userReducer";
import { mxnReducer } from "./mxnReducer";

const reducers = combineReducers({
  currency: currencyReducer,
  session: userReducer,
  mxn: mxnReducer
});

export default reducers;