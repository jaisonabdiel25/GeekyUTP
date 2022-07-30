import { types } from "../types/types";

//Categorias
export const getProvince = () => {
    return {
      type: types.getProvince,
      payload: true,
    };
  };

  export const getProvinceReady = (data) => {
    return {
      type: types.getProvinceReady,
      payload: data,
    };
  };

  export const getProvinceError = () => {
    return {
      type: types.getProvinceError,
      payload: true,
    };
  };