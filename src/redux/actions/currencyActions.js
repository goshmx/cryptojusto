import { ActionTypes } from "../constants/action-types";

export const addCurrency = (currency) => {
  return {
    type: ActionTypes.ADD_CURRENCY,
    payload: currency
  }
}