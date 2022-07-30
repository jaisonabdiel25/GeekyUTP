import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUserActions } from '../../Actions/Thunks/Auth';
import { getProvinceAction } from '../../Actions/Thunks/Province';
import { useForm } from '../../Hooks/useForm';
import './RegisterScreen.scss';

export const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [files, setFiles] = useState();

	useEffect(() => {
		dispatch(getProvinceAction());
	}, []);

	const ubication = useSelector((state) => state.province.province);

	const [formValues, handleInputChange] = useForm({
		contraseña: '',
		nombre: '',
		apellido: '',
		fechaNacimiento: '',
		correo: '',
		pais: '',
		provincia: '',
		genero: '',
		identificacion: '',
	});

	const { correo, contraseña, nombre, apellido, fechaNacimiento, pais, provincia, genero, identificacion } = formValues;

	const loadImage = (event) => {
		setFiles(event.target.files);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(registerUserActions(formValues, () => navigate('/', { replace: true }), files));
	};
	return (
		<div className='register-login content mt-5'>
			<h3 className='title'>Registrarse</h3>
			<form className='form-login' onSubmit={handleLogin}>
				<div className='d-flex justify-content-evenly w-100'>
					<div className='d-flex flex-column w-50 px-2'>
						{' '}
						<label>Nombre</label>
						<input type='text' autoComplete='off' name='nombre' className='mb-2 input' value={nombre} onChange={handleInputChange}></input>
					</div>
					<div className='d-flex flex-column w-50 px-2'>
						{' '}
						<label>Apellido</label>
						<input
							type='text'
							autoComplete='off'
							name='apellido'
							className='mb-2 input'
							value={apellido}
							onChange={handleInputChange}
						></input>
					</div>
				</div>
				<div className='d-flex justify-content-evenly w-100'>
					<div className='d-flex flex-column w-50 px-2'>
						{' '}
						<label>Identificacion</label>
						<input
							type='text'
							autoComplete='off'
							name='identificacion'
							className='mb-2 input'
							value={identificacion}
							onChange={handleInputChange}
						></input>
					</div>
					<div className='d-flex flex-column w-50 px-2'>
						{' '}
						<label>Pais</label>
						<input type='text' autoComplete='off' name='pais' className='mb-2 input' value={pais} onChange={handleInputChange}></input>
					</div>
				</div>
				<div className='d-flex justify-content-evenly w-100'>
					<div className='d-flex flex-column w-75 px-2'>
						<label>Provincia</label>
						<select className='mb-2 input' name='provincia' value={provincia} onChange={handleInputChange}>
							{ubication.map((element) => (
								<option key={element.uid} value={element.uid}>
									{element.name}
								</option>
							))}
						</select>
					</div>
					<div className='d-flex flex-column w-25 px-2'>
						<label>Genero</label>
						<select className='mb-2 input' name='genero' value={genero} onChange={handleInputChange}>
							<option>M</option>
							<option>F</option>
						</select>
					</div>
				</div>
				<label>Email</label>
				<input type='text' autoComplete='off' name='correo' className='mb-2 input px-5' value={correo} onChange={handleInputChange}></input>
				<div className='d-flex justify-content-evenly w-100'>
					<div className='d-flex flex-column w-50 px-2'>
						<label>Contraseña</label>
						<input type='password' name='contraseña' className='mb-2 input' value={contraseña} onChange={handleInputChange}></input>
					</div>
					<div className='d-flex flex-column w-50 px-2'>
						<label>Confirmar Contraseña</label>
						<input type='password' name='contraseña' className='mb-2 input' value={contraseña} onChange={handleInputChange}></input>
					</div>
				</div>

				<div className='d-flex justify-content-evenly w-100'>
					<div className='d-flex flex-column w-50 px-2'>
						<label>Fecha de Nacimiento</label>
						<input
							type='date'
							autoComplete='off'
							name='fechaNacimiento'
							className='mb-2 input'
							value={fechaNacimiento}
							onChange={handleInputChange}
						></input>
					</div>
					<div className='d-flex flex-column w-50 px-2'>
						<label>Foto de Perfil</label>
						<input type='file' multiple autoComplete='off' className='mb-2 input' onChange={loadImage}></input>
					</div>
				</div>

				<button type='submit' className='btn btn-warning btn-login'>
					Registrarse
				</button>
				<span>
					¿Ya tiene unas cuenta? <strong>Inicia Sesión</strong>
				</span>
			</form>
		</div>
	);
};
