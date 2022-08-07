import clientAxios from '../../config/axios';
import {
	newProduct,
	newProductError,
	getProduct,
	getProductReady,
	getProductError,
	getProducts,
	getProductsReady,
	getProductsError,
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
			await clientAxios.post('/products', urlList);
			cb();
		} catch (error) {
			dispatch(newProductError(true));
		}
	};
};

export const getProductAction = (id) => {
	return async (dispatch) => {
		dispatch(getProduct());
		try {
			const { data } = await clientAxios.get(`/products/getProduct/${id}`);
			dispatch(getProductReady(data.product));
		} catch (error) {
			dispatch(getProductError(true));
		}
	};
};

export const getProductsAction = () => {
	return async (dispatch) => {
		dispatch(getProducts());
		try {
			const {
				data: { products },
			} = await clientAxios.get(`/products`);
			dispatch(getProductsReady(products));
		} catch (error) {
			dispatch(getProductsError(true));
		}
	};
};
