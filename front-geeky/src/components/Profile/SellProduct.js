import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategoriesAction } from '../../Actions/Thunks/Categories';
import { newProductAction } from '../../Actions/Thunks/Product';
import { getProvinceAction } from '../../Actions/Thunks/Province';
import { getSubcategoriesAction } from '../../Actions/Thunks/Subcategorie';
import { useForm } from '../../Hooks/useForm';
import Swal from 'sweetalert2';

import './SCSS/SellProduct.scss';

export const SellProduct = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [files, setFiles] = useState();
	const { userDB } = JSON.parse(localStorage.getItem('userStorage'));
	let timerInterval;

	const [formValues, handleInputChange] = useForm({
		nombre: '',
		categoria: '',
		subcategoria: '',
		modelo: '',
		brand: '',
		ubicacion: '',
		estado: '',
		descripcion: '',
		tipoVenta: '',
		precio: '',
		inventario: '',
		metodoEntrega: '',
		img: [],
	});

	const { nombre, categoria, subcategoria, modelo, brand, ubicacion, estado, descripcion, tipoVenta, precio, inventario, metodoEntrega } =
		formValues;

	useEffect(() => {
		dispatch(getCategoriesAction());
	}, []);

	useEffect(() => {
		dispatch(getSubcategoriesAction(categoria));
	}, [categoria]);

	useEffect(() => {
		dispatch(getProvinceAction());
	}, []);

	const categorie = useSelector((state) => state.categorie.categorie);
	const user = useSelector((state) => state.auth);
	const subcategorie = useSelector((state) => state.subcategorie.subcategorie);
	const ubication = useSelector((state) => state.province.province);
	const brands = useSelector((state) => state.brand.brands);

	const loadImage = (event) => {
		setFiles(event.target.files);
	};

	const newProduct = (e) => {
		e.preventDefault();
		const body = {
			...formValues,
			usuario: userDB.uid,
		};
		dispatch(
			newProductAction(
				body,
				() => navigate('/profile', { replace: true }),
				files,
				() => {
					Swal.fire({
						icon: 'success',
						title: 'Producto puesto a la venta con satisfaccion.',
						showConfirmButton: false,
						timer: 2000,
					});
				}
			)
		);

		const sweetAlert = () => {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Producto puesto a la venta con satisfaccion.',
				showConfirmButton: false,
				timer: 1500,
			});
		};
	};
	return (
		<div className='new-product content'>
			<h3 className='title px-3'>Nuevo drop</h3>
			<form className='form' onSubmit={newProduct}>
				<div className='d-flex flex-column px-3'>
					<label>¿Qué estás vendiendo?</label>
					<input type='text' autoComplete='off' name='nombre' className='mb-2 input' value={nombre} onChange={handleInputChange}></input>
				</div>

				<div className='d-flex justify-content-around '>
					<div className='d-flex flex-column w-50 px-3'>
						<label>Categoría</label>
						<select id='categorie' className='mb-2 input' name='categoria' value={categoria} onChange={handleInputChange}>
							{categorie.map((categorie) => (
								<option key={categorie.uid} value={categorie.uid}>
									{categorie.name}
								</option>
							))}
						</select>
					</div>

					<div className='d-flex flex-column w-50 px-3'>
						<label>Subcategoria</label>
						<select id='subcategorie' className='mb-2 input' name='subcategoria' value={subcategoria} onChange={handleInputChange}>
							{subcategorie.map((subcategorie) => (
								<option key={subcategorie.uid} value={subcategorie.uid}>
									{subcategorie.name}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className='d-flex justify-content-around '>
					<div className='d-flex flex-column w-50 px-3'>
						<label>Marca</label>
						<select id='brand' className='mb-2 input' name='brand' value={brand} onChange={handleInputChange}>
							{brands.map((brands) => (
								<option key={brands.uid} value={brands.uid}>
									{brands.name}
								</option>
							))}
						</select>
					</div>

					<div className='d-flex flex-column w-50 px-3'>
						<label>Modelo</label>
						<input type='text' name='modelo' className='mb-2 input' value={modelo} onChange={handleInputChange}></input>
					</div>
				</div>
				<h4 className='mt-5 px-3'>Agregar Fotos</h4>
				<div className='d-flex flex-column px-3'>
					<input type='file' multiple autoComplete='off' className='mb-2 input' onChange={loadImage}></input>
					<label>Aumenta la posibilidad de vender tu producto al agregar más y mejores fotos</label>
				</div>

				<h4 className='mt-5 px-3'>Detalles del producto</h4>
				<div className='d-flex w-100'>
					<div className='d-flex flex-column w-50 px-3'>
						<label>Ubicación del producto</label>
						<select id='ubicacion' className='mb-2 input' name='ubicacion' value={ubicacion} onChange={handleInputChange}>
							{ubication.map((element) => (
								<option key={element.uid} value={element.uid}>
									{element.name}
								</option>
							))}
						</select>
					</div>

					<div className='d-flex flex-column px-5'>
						<label>¿Cual es el estado del producto?</label>
						<div className='d-flex align-items-center justify-content-evenly'>
							<input type='radio' name='estado' value='Nuevo' onChange={handleInputChange}></input>
							<label>Nuevo</label>
							<input type='radio' name='estado' value='Usado' onChange={handleInputChange}></input>
							<label>Usado</label>
						</div>
					</div>
				</div>

				<div className='d-flex flex-column px-3'>
					<label>Descripción</label>
					<textarea
						type='text'
						autoComplete='off'
						name='descripcion'
						className='mb-2 input'
						value={descripcion}
						onChange={handleInputChange}
						placeholder='Aqui debes detallar más tu producto y sus caracteristicas'
					></textarea>
				</div>

				<div className='d-flex '>
					<div className='d-flex flex-column w-25 px-3'>
						<label>Tipo de Drop</label>
						<input type='text' name='tipoVenta' className='mb-2 input' value={tipoVenta} onChange={handleInputChange}></input>
					</div>

					<div className='d-flex flex-column w-25 px-3'>
						<label>Precio Venta</label>
						<input type='text' name='precio' className='mb-2 input' value={precio} onChange={handleInputChange}></input>
					</div>

					<div className='d-flex flex-column w-25 px-3'>
						<label>Inventario</label>
						<input type='number' name='inventario' className='mb-2 input' value={inventario} onChange={handleInputChange}></input>
					</div>
				</div>

				<div className='d-flex flex-column px-3'>
					<label>Método de entrega</label>
					<input
						type='text'
						autoComplete='off'
						name='metodoEntrega'
						className='mb-2 input'
						value={metodoEntrega}
						onChange={handleInputChange}
					></input>
				</div>

				<div className='d-flex justify-content-center'>
					<button type='submit' className='btn btn-white border text-dark btn-login w-25 mx-3'>
						Guardar
					</button>
					<button type='submit' className='btn btn-warning btn-login w-25 mx-3'>
						Publicar
					</button>
				</div>
			</form>
		</div>
	);
};
