import { types } from '../types/types';

const initialstate = {
	coments: [],
	msgError: null,
	loading: false,
};

export const comentsReducers = (state = initialstate, action) => {
	switch (action.type) {
		case types.getComents:
			return {
				...state,
				loading: action.payload,
			};

		case types.getComentsReady:
			return {
				...state,
				loading: false,
				coments: action.payload,
			};

		case types.getComentsError:
			return {
				...state,
				loading: false,
				msgError: action.payload.msg,
			};

		case types.newComents:
			return {
				...state,
				loading: action.payload,
			};

		case types.newComentsReady:
			state.coments.push(action.payload);
			console.log(state);
			return {
				...state,
				loading: false,
			};

		case types.newComentsError:
			return {
				...state,
				loading: false,
				msgError: action.payload.msg,
			};

		default:
			return state;
	}
};
