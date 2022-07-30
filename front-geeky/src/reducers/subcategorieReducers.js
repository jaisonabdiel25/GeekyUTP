import { types } from "../types/types";

const initialstate = {
  subcategorie: [],
  msgError: null,
  loading: false,
};

export const subcategorieReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.getSubcategories:
      return {
        ...state,
        loading: action.payload,
      };

    case types.getSubcategoriesReady:
      return {
        ...state,
        loading: false,
        subcategorie: action.payload,
      };

    case types.getSubcategoriesError:
      return {
        ...state,
        loading: false,
        msgError: action.payload
      };

    default:
      return state;
  }
};