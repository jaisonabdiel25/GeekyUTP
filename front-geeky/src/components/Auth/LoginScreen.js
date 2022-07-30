import React from 'react';
import { useForm } from '../../Hooks/useForm';
import './LoginScreen.scss';
import { useDispatch } from 'react-redux';
import { startLoginEmailPassword } from '../../Actions/Thunks/Auth';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		correo: '',
		contraseña: '',
	});

	const { correo, contraseña } = formValues;

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(startLoginEmailPassword(formValues, () => navigate('/', { replace: true })));
	};

	return (
		<div className='content-login content mt-5'>
			<h3 className='title'>Iniciar Sesión</h3>
			<form className='form-login' onSubmit={handleLogin}>
				<label>Email</label>
				<input type='text' name='correo' className='mb-2 input' value={correo} onChange={handleInputChange}></input>
				<label>Contraseña</label>
				<input type='password' name='contraseña' className='mb-2 input' value={contraseña} onChange={handleInputChange}></input>
				<span className='span-password'>Olvide mi contraseña</span>
				<button type='submit' className='btn btn-warning btn-login'>
					Iniciar Sesión
				</button>
				<span>
					¿Eres nuevo en Geekydrop? <strong>Crear cuenta</strong>
				</span>
			</form>
		</div>
	);
};
