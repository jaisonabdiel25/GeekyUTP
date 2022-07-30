import clientAxios from '../../config/axios';
import {
	newProduct,
	newProductReady,
	newProductError,
	getProduct,
	getProductReady,
	getProductError,
	getProductForBrabds,
	getProductForBrandsReady,
	getProductForBrandsError,
} from '../Product';
import { uploadImage } from '../../firebase/config';

export const newProductAction = (product, cb, files, succes) => {
	return async (dispatch) => {
		dispatch(newProduct());
		try {
			const urlImageList = [];

			for (let file of files) {
				const url = await uploadImage(file);
				urlImageList.push(url);
			}
			const urlList = {
				...product,
				img: urlImageList,
			};
			succes();
			const { data } = await clientAxios.post('/products', urlList);
			console.log(data);
			cb();
		} catch (error) {
			console.log(error.response.data.msg);
			dispatch(newProductError(true));
		}
	};
};

export const getProductForBrandsAction = (id) => {
	return async (dispatch) => {
		dispatch(getProductForBrabds());
		try {
			const { data } = await clientAxios.get(`/products/${id}`);
			dispatch(getProductForBrandsReady(data.products));
		} catch (error) {
			console.log(error.response.data.msg);
			dispatch(getProductForBrandsError(true));
		}
	};
};

export const getProductForUIAction = (id) => {
	return async (dispatch) => {
		dispatch(getProductForBrabds());
		try {
			const { data } = await clientAxios.get(`/products/getProductsUI/${id}`);
			dispatch(getProductForBrandsReady(data.products));
		} catch (error) {
			console.log(error.response.data.msg);
			dispatch(getProductForBrandsError(true));
		}
	};
};

export const getProductForCategoriAction = (id) => {
	return async (dispatch) => {
		dispatch(getProductForBrabds());
		try {
			const { data } = await clientAxios.get(`/products/getProductsForCategori/${id}`);
			dispatch(getProductForBrandsReady(data.products));
		} catch (error) {
			console.log(error.response.data.msg);
			dispatch(getProductForBrandsError(true));
		}
	};
};

export const getProductAction = (id) => {
	return async (dispatch) => {
		dispatch(getProduct());
		try {
			const { data } = await clientAxios.get(`/products/getProduct/${id}`);
			console.log(data.product);
			dispatch(getProductReady(data.product));
		} catch (error) {
			console.log(error.response.data.msg);
			dispatch(getProductError(true));
		}
	};
};

export const getProductsAction = () => {
	return async (dispatch) => {
		dispatch(getProductForBrabds());
		try {
			const { data } = await clientAxios.get(`/products`);
			console.log(data);
			dispatch(getProductForBrandsReady(data.products));
		} catch (error) {
			console.log(error.response.data.msg);
			dispatch(getProductForBrandsError(true));
		}
	};
};
