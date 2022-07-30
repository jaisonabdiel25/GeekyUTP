import { types } from "../types/types";

export const sendPayment = () => {
  return {
    type: types.sendPayment,
    payload: true,
  };
};

export const sendPaymentReady = (data) => {
  return {
    type: types.sendPaymentReady,
    payload: data
  };
};

export const sendPaymentError = () => {
  return {
    type: types.sendPaymentError,
    payload: true,
  };
};