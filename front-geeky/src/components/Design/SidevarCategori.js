import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategoriesAction } from '../../Actions/Thunks/Categories';
import './SidevarBrands.scss';

export const SidevarCategori = () => {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategoriesAction());
	}, []);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const categorie = useSelector((state) => state.categorie.categorie);

	const navigateCategori = (id) => {
		navigate(`/categori/${id}`);
	};

	return (
		<div className='SidevarBrands'>
			<Button variant='dark' onClick={handleShow}>
				Categorías
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title className='title-sidevar'>
						<h2 className='mt-4 fw-bold'>Categorias</h2>
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{categorie
						? categorie.map((categorie, index) => (
								<div key={categorie.uid} className='nav-item nav-link btn btn-brand-sidevar'>
									<button className='nav-item nav-link btn' to='/' onClick={() => navigateCategori(categorie.uid)} key={categorie.uid}>
										{categorie.name}
									</button>
								</div>
						  ))
						: ''}
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};
