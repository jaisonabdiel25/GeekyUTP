import { types } from "../types/types";

const initialstate = {
  categorie: [],
  msgError: null,
  loading: false,
};

export const categorieReducers = (state = initialstate, action) => {
  switch (action.type) {
    case types.getCategories:
      return {
        ...state,
        loading: action.payload,
      };

    case types.getCategoriesReady:
      return {
        ...state,
        loading: false,
        categorie: action.payload,
      };

    case types.getCategoriesError:
      return {
        ...state,
        loading: false,
        msgError: action.payload
      };

    default:
      return state;
  }
};