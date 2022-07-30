import { types } from "../types/types";

const initialstate = {
  brands: [],
  msgError: null,
  loading: false,
};

export const brandsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.getBrands:
      return {
        ...state,
        loading: action.payload,
      };

    case types.getBrandsReady:
      return {
        ...state,
        loading: false,
        brands: action.payload,
      };

    case types.getBrandsError:
      return {
        ...state,
        loading: false,
        msgError: action.payload.msg
      };

    default:
      return state;
  }
};