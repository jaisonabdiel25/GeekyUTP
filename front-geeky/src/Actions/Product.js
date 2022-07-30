import { types } from "../types/types";


//Productos
export const newProduct = () => {
  return {
    type: types.newProduct,
    payload: true,
  };
};

export const newProductReady = (data) => {
  return {
    type: types.newProductReady,
    payload: data
  };
};

export const newProductError = () => {
  return {
    type: types.newProductError,
    payload: true,
  };
};

export const getProduct = () => {
  return {
    type: types.getProduct,
    payload: true,
  };
};

export const getProductReady = (data) => {
  return {
    type: types.getProductReady,
    payload: data
  };
};

export const getProductError = () => {
  return {
    type: types.getProductError,
    payload: true,
  };
};

export const getProductForBrabds = () => {
  return {
    type: types.getProductForBrands,
    payload: true,
  };
};

export const getProductForBrandsReady = (data) => {
  return {
    type: types.getProductForBrandsReady,
    payload: data
  };
};

export const getProductForBrandsError = () => {
  return {
    type: types.getProductForBrandsError,
    payload: true,
  };
};

export const getImage = () => {
  return {
    type: types.getImage,
    payload: true,
  };
};

export const getImageReady = (data) => {
  return {
    type: types.getImageReady,
    payload: data
  };
};

export const getImageError = () => {
  return {
    type: types.getImageError,
    payload: true,
  };
};




