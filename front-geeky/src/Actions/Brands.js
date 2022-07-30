import { types } from "../types/types";

export const getBrands = () => {
  return {
    type: types.getBrands,
    payload: true,
  };
};

export const getBrandsReady = (data) => {
  return {
    type: types.getBrandsReady,
    payload: data
  };
};

export const getBrandsError = () => {
  return {
    type: types.getBrandsError,
    payload: true,
  };
};