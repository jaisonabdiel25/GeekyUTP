import clientAxios from '../../config/axios';
import { newEvent, newEventError, newEventReady } from '../EventAdmin';

export const newCategorieAction = (body, cb) => {
	return async (dispatch) => {
		dispatch(newEvent);
		try {
			await clientAxios.post(`/categorie`, body);
			dispatch(newEventReady());
			cb();
		} catch (error) {
			console.log(error);
			dispatch(newEventError());
		}
	};
};

export const newSubcategorieAction = (body, cb) => {
	return async (dispatch) => {
		dispatch(newEvent);
		try {
			await clientAxios.post(`/subcategorie/newCategorie`, body);
			dispatch(newEventReady());
			cb();
		} catch (error) {
			console.log(error);
			dispatch(newEventError());
		}
	};
};

export const newBrandAction = (body, cb) => {
	return async (dispatch) => {
		dispatch(newEvent);
		try {
			await clientAxios.post(`/brands`, body);
			dispatch(newEventReady());
			cb();
		} catch (error) {
			console.log(error);
			dispatch(newEventError());
		}
	};
};
