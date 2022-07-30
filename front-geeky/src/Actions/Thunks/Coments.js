import clientAxios from '../../config/axios';
import { getComents, getComentsReady, getComentsError, newComents, newComentsReady, newComentsError } from '../Coments';

export const newComentsAction = (body) => {
	return async (dispatch) => {
		dispatch(newComents());
		try {
			const { data } = await clientAxios.post('/coments', body);
			dispatch(newComentsReady(data.comentDB));
		} catch (error) {
			console.log(error.response.data);
			dispatch(newComentsError());
		}
	};
};

export const getComentsAction = ({ _id }) => {
	return async (dispatch) => {
		dispatch(getComents());
		try {
			const { data } = await clientAxios.get(`/coments/${_id}`);
			dispatch(getComentsReady(data.coments));
		} catch (error) {
			console.log(error.response.data);
			dispatch(getComentsError());
		}
	};
};
