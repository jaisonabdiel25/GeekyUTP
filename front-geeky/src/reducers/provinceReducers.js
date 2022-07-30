import { types } from "../types/types";

const initialstate = {
  province: [],
  msgError: null,
  loading: false,
};

export const provinceReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.getProvince:
      return {
        ...state,
        loading: action.payload,
      };

    case types.getProvinceReady:
      return {
        ...state,
        loading: false,
        province: action.payload,
      };

    case types.getProvinceError:
      return {
        ...state,
        loading: false,
        msgError: action.payload
      };

    default:
      return state;
  }
};