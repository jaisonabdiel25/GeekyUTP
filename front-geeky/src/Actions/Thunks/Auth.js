import clientAxios from '../../config/axios';
import { login, LoginReady, LoginError, Logout } from '../Auth';
import swal from 'sweetalert2';
import { uploadImage } from '../../firebase/config';

export const startLoginEmailPassword = (body, cb) => {
	return async (dispatch) => {
		dispatch(login());
		try {
			const { data } = await clientAxios.post('/auth/login', body);
			dispatch(LoginReady(data));
			localStorage.setItem('userStorage', JSON.stringify(data));
			if (data.ok) {
				cb();
			} else {
				throw new Error('Usuario o contraseña incorrecto!');
			}
		} catch (error) {
			dispatch(LoginError(error.response.data));
			swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Usuario o contraseña incorrecto!',
			});
		}
	};
};

export const LogoutAction = () => {
	return async (dispatch) => {
		try {
			dispatch(Logout());
			localStorage.setItem('userStorage', '[]');
		} catch (error) {
			dispatch(LoginError(error.response.data));
			swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Usuario o contraseña incorrecto!',
			});
		}
	};
};

export const registerUserActions = (body, cb, files) => {
	return async (dispatch) => {
		console.log(files);
		dispatch(login());
		try {
			const urlImageList = [];

			for (let file of files) {
				const url = await uploadImage(file);
				urlImageList.push(url);
			}
			console.log(files);
			const newBody = {
				...body,
				img: urlImageList,
			};
			const { data } = await clientAxios.post('/users', newBody);
			console.log(data);
			dispatch(LoginReady(data));
			if (data.ok) {
				cb();
			} else {
				throw new Error('Usuario o contraseña incorrecto!');
			}
		} catch (error) {
			console.log(error.response.data);
			dispatch(LoginError(error.response.data));
			swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'hubo un problema',
			});
		}
	};
};
