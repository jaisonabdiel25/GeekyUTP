import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { LogoutAction } from '../../Actions/Thunks/Auth';

export const SidevarAccount = () => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const { userDB } = JSON.parse(localStorage.getItem('userStorage'));

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const logout = () => {
		dispatch(LogoutAction());
	};
	const user = useSelector((state) => state.auth);

	return (
		<div className='SidevarProfile'>
			{userDB ? (
				<img className='img-profile' src={userDB.img[0]} alt='' width='40' height='40' onClick={handleShow} />
			) : (
				<Button className='btn w-100 py-2 fw-bold' variant='light' onClick={handleShow}>
					Perfil
				</Button>
			)}
			{userDB ? (
				<>
					<Offcanvas show={show} onHide={handleClose} placement='end' scroll={true} backdrop={true} autoFocus={true}>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title className='title-sidevar'>
								<div className='d-flex justify-content-between px-4 mt-3 align-items-center'>
									<div className='mt-3'>
										<h5 className='text-secondary'>Que xopa</h5>
										<h5 className=' fw-bold'>{userDB.nombre}</h5>
									</div>
									<img className='img-profile rounded-circle' src={userDB.img[0]} alt='' width='65' height='65' onClick={handleShow} />
								</div>
								<NavLink to='/profile/sell' className='d-flex justify-content-center w-100 mt-4 text-decoration-none'>
									<button className='btn btn-warning w-75' type='submit'>
										Vender
									</button>
								</NavLink>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<div className='sidebar'>
								<ul className='navbar-nav justify-content-center w-100'>
									<li className='d-flex nav-item ms-5 fw-bold fs-5'>
										<NavLink className='nav-link text-dark' to='/profile/account'>
											Mi perfil
										</NavLink>
									</li>
									<li className='d-flex nav-item ms-5 fw-bold fs-5'>
										<NavLink className='nav-link text-dark' to='/profile/sell'>
											Mis Drops
										</NavLink>
									</li>
									<li className='d-flex nav-item ms-5 fw-bold fs-5'>
										<NavLink className='nav-link text-dark' to='/task/newTask'>
											Mis direcciones
										</NavLink>
									</li>
									<li className='d-flex nav-item ms-5 fw-bold fs-5'>
										<NavLink className='nav-link text-dark' to='/profile'>
											Favoritos
										</NavLink>
									</li>
									<li className='d-flex nav-item ms-5 fw-bold fs-5'>
										<NavLink className='nav-link text-dark' to='/profile'>
											Historial de compras
										</NavLink>
									</li>
									<li className='d-flex nav-item ms-5 fw-bold fs-5'>
										<NavLink className='nav-link text-dark' to='/profile'>
											Historial de Pagos
										</NavLink>
									</li>
									<li className='d-flex nav-item ms-5 fw-bold fs-5'>
										<NavLink className='nav-link text-dark' to='/profile'>
											Ayuda
										</NavLink>
									</li>
									{userDB.role === 'ADMIN_ROLE' ? (
										<li>
											<NavLink to='/admin' className='w-100'>
												<button className='btn btn-outline-secondary w-100 py-2' type='submit'>
													Administrar
												</button>
											</NavLink>
										</li>
									) : (
										''
									)}
									<li>
										<NavLink to='/auth' className='w-100'>
											<button className='btn btn-warning w-100 py-2' type='submit' onClick={logout}>
												Cerrar Sesion
											</button>
										</NavLink>
									</li>
								</ul>
							</div>
						</Offcanvas.Body>
					</Offcanvas>
				</>
			) : (
				<Offcanvas show={show} onHide={handleClose} placement='end' scroll={true} backdrop={true} autoFocus={true}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title className='title-sidevar'>
							<div className='d-flex mt-3 w-100 mb-4'>
								<div className=' d-flex flex-column mt-3 w-100 px-3	'>
									<h5 className='d-flex justify-content-center mt-3'>
										<strong>Bienvenido a GeekyUTP</strong>{' '}
									</h5>
									<NavLink to='/auth/register' className='w-100 mt-2'>
										<button className='btn btn-warning w-100 py-2' type='submit' onClick={logout}>
											Crear una cuenta
										</button>
									</NavLink>
									<h6 className='text-center mt-4 text-secondary'>
										Tienes una cuenta? <Link to='/auth'>Inicia Sesión </Link>
									</h6>
								</div>
							</div>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<div className='sidebar'>
							<ul className='navbar-nav justify-content-center'>
								<li className='nav-item fw-bold'>
									<NavLink className='nav-link text-dark' to='/auth'>
										Vender en Geeky
									</NavLink>
								</li>
								<li className='nav-item fw-bold'>
									<NavLink className='nav-link text-dark' to='/auth'>
										Ayuda
									</NavLink>
								</li>
							</ul>
						</div>
					</Offcanvas.Body>
				</Offcanvas>
			)}
		</div>
	);
};
