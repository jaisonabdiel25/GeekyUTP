import clientAxios from '../../config/axios';
import { sendPayment, sendPaymentReady, sendPaymentError } from '../Payment';

export const sendPaymentActions = (body) => {
	return async (dispatch) => {
		dispatch(sendPayment());
		try {
			const { data } = await clientAxios.post('/payments', body);
			dispatch(sendPaymentReady(data.url));
		} catch (error) {
			console.log(error.response.data);
			dispatch(sendPaymentError());
		}
	};
};

export const PaymentActions = () => {
	return async (dispatch) => {
		dispatch(sendPayment());
		try {
			dispatch(sendPaymentReady(null));
		} catch (error) {
			console.log(error.response.data);
			dispatch(sendPaymentError());
		}
	};
};
