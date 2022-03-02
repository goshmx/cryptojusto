import { ActionTypes } from "../constants/action-types";

export const setMXN = (mxn) => {
  return {
    type: ActionTypes.SET_MXN,
    payload: mxn
  }
}