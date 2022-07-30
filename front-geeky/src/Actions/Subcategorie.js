import { types } from "../types/types";


//Categorias
export const getSubcategories = () => {
    return {
      type: types.getSubcategories,
      payload: true,
    };
  };

  export const getSubcategoriesReady = (data) => {
    return {
      type: types.getSubcategoriesReady,
      payload: data,
    };
  };

  export const getSubcategoriesError = () => {
    return {
      type: types.getSubcategoriesError,
      payload: true,
    };
  };