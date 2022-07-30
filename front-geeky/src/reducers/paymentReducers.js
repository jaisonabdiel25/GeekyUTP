import { types } from "../types/types";

const initialstate = {
  url: null,
  msgError: null,
  loading: false,
};

export const paymentReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.sendPayment:
      return {
        ...state,
        loading: action.payload,
      };

    case types.sendPaymentReady:
      return {
        ...state,
        loading: false,
        url: action.payload,
      };

    case types.sendPaymentError:
      return {
        ...state,
        loading: false,
        msgError: action.payload.msg
      };

    default:
      return state;
  }
};
