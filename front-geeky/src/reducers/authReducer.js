import { types } from '../types/types';

const initialstate = {
	name: null,
	msgError: null,
	loading: false,
	token: null,
	uid: null,
	img: null,
};

export const authReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				loading: action.payload,
			};

		case types.loginReady:
			return {
				...state,
				loading: false,
				name: action.payload.name,
				token: action.payload.token,
				uid: action.payload.uid,
				img: action.payload.img,
			};

		case types.loginError:
			return {
				...state,
				loading: false,
				msgError: action.payload.msg,
			};

		case types.logout:
			return {};

		default:
			return state;
	}
};
