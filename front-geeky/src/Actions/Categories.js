import { types } from "../types/types";


//Categorias
export const getCategories = () => {
    return {
      type: types.getCategories,
      payload: true,
    };
  };

  export const getCategoriesReady = (data) => {
    return {
      type: types.getCategoriesReady,
      payload: data,
    };
  };

  export const getCategoriesError = () => {
    return {
      type: types.getCategoriesError,
      payload: true,
    };
  };