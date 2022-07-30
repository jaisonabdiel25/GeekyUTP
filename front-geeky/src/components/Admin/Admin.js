import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { newBrandAction, newCategorieAction, newSubcategorieAction } from '../../Actions/Thunks/EventAdmin';
import Swal from 'sweetalert2';

export const Admin = () => {
	const dispatch = useDispatch();
	const [categoria, setCategoria] = useState();
	const [subCategoria, setSubcategoria] = useState();
	const [brand, setBrand] = useState();

	const newCategory = () => {
		console.log(categoria);
		const body = {
			name: categoria,
		};

		dispatch(
			newCategorieAction(body, () => {
				Swal.fire({
					icon: 'success',
					title: 'Nueva Categoría creada',
					showConfirmButton: false,
					timer: 1500,
				});
			})
		);
	};

	const newSubategory = () => {
		console.log(subCategoria);
		const body = {
			name: subCategoria,
		};

		dispatch(
			newSubcategorieAction(body, () => {
				Swal.fire({
					icon: 'success',
					title: 'Nueva Subcategoría creada',
					showConfirmButton: false,
					timer: 1500,
				});
			})
		);
	};

	const newBrand = () => {
		console.log(brand);
		const body = {
			name: brand,
		};

		dispatch(
			newBrandAction(body, () => {
				Swal.fire({
					icon: 'success',
					title: 'Nueva Marca creada',
					showConfirmButton: false,
					timer: 1500,
				});
			})
		);
	};

	return (
		<div className='d-flex flex-column justify-content-start'>
			<h2>Menu administrador</h2>
			<div>
				<label className='mt-5'>Crear Nueva Categoría</label>
				<InputGroup className='mb-3'>
					<Form.Control
						onChange={(e) => setCategoria(e.target.value)}
						placeholder='Crear Nueva Categoría'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
					/>
					<Button onClick={newCategory} variant='outline-secondary' id='button-addon2'>
						Crear
					</Button>
				</InputGroup>
			</div>
			<div>
				<label className='mt-5'>Crear Nueva Subcategoría</label>
				<InputGroup className='mb-3'>
					<Form.Control
						onChange={(e) => setSubcategoria(e.target.value)}
						placeholder='Crear Nueva Subcategoría'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
					/>
					<Button onClick={newSubategory} variant='outline-secondary' id='button-addon2'>
						Crear
					</Button>
				</InputGroup>
			</div>
			<div>
				<label className='mt-5'>Crear Nueva Marca Oficial</label>
				<InputGroup className='mb-3'>
					<Form.Control
						onChange={(e) => setBrand(e.target.value)}
						placeholder='Crear Nueva Marca Oficial'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
					/>
					<Button onClick={newBrand} variant='outline-secondary' id='button-addon2'>
						Crear
					</Button>
				</InputGroup>
			</div>
		</div>
	);
};
