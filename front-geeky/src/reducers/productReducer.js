import { types } from "../types/types";

const initialstate = {
  product: [],
  products: [],
  msgError: null,
  loading: false,
  img: [],
};

export const productReducer = (state = initialstate, action) => {
  switch (action.type) {
    case types.newProduct:
      return {
        ...state,
        loading: action.payload,
      };

    case types.newProductReady:
      return {
        ...state,
        loading: false,
        product: action.payload,
        msgError: false,
      };

    case types.newProductError:
      return {
        ...state,
        loading: false,
        msgError: action.payload,
      };

    case types.getProduct:
      return {
        ...state,
        loading: action.payload,
      };

    case types.getProductReady:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };

    case types.getProductError:
      return {
        ...state,
        loading: false,
        msgError: action.payload,
      };

    case types.getProductForBrands:
      return {
        ...state,
        loading: action.payload,
      };

    case types.getProductForBrandsReady:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case types.getProductForBrandsError:
      return {
        ...state,
        loading: false,
        msgError: action.payload,
      };

    case types.getImage:
      return {
        ...state,
        loading: action.payload,
      };

    case types.getImageReady:
      return {
        ...state,
        loading: false,
        img: action.payload,
      };

    case types.getImageError:
      return {
        ...state,
        loading: false,
        msgError: action.payload,
      };

    default:
      return state;
  }
};
