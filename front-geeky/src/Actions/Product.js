import { types } from '../types/types';

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
		payload: data,
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
		payload: data,
	};
};

export const getProductError = () => {
	return {
		type: types.getProductError,
		payload: true,
	};
};

export const getProducts = () => {
	return {
		type: types.getProducts,
		payload: true,
	};
};

export const getProductsReady = (data) => {
	return {
		type: types.getProductsReady,
		payload: data,
	};
};

export const getProductsError = () => {
	return {
		type: types.getProductsError,
		payload: true,
	};
};
