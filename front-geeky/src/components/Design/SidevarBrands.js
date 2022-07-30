import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './SidevarBrands.scss';

export const SidevarBrands = () => {
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const brands = useSelector((state) => state.brand.brands);

	const navigateBrand = (id) => {
		navigate(`/brands/${id}`);
	};

	return (
		<div className='SidevarBrands'>
			<Button variant='dark' onClick={handleShow}>
				Marcas Oficiales
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title className='title-sidevar'>
						<h2 className='mt-4 fw-bold'>Marcas Oficiales</h2>
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{brands
						? brands.map((brander, index) => (
								<div key={brander.uid} className='nav-item nav-link btn btn-brand-sidevar '>
									<button
										className='nav-item nav-link btn fs-5 fst-normal'
										to='/login'
										onClick={() => navigateBrand(brander.uid)}
										key={brander.uid}
									>
										{brander.name}
									</button>
								</div>
						  ))
						: ''}
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};
