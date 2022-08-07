import { types } from '../types/types';

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

		case types.getProducts:
			return {
				...state,
				loading: action.payload,
			};

		case types.getProductsReady:
			return {
				...state,
				loading: false,
				products: action.payload,
			};

		case types.getProductsError:
			return {
				...state,
				loading: false,
				msgError: action.payload,
			};

		default:
			return state;
	}
};
