import { types } from '../types/types';

export const newEvent = () => {
	return {
		type: types.newEvent,
		payload: true,
	};
};

export const newEventReady = () => {
	return {
		type: types.newEventReady,
		payload: true,
	};
};

export const newEventError = () => {
	return {
		type: types.newEventError,
		payload: true,
	};
};
