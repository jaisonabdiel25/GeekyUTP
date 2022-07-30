import React, { useEffect, useState } from 'react';
import notificacion from '../assets/notificacion.png';
import logo from '../assets/geeky.png';
import cars from '../assets/carrito-de-compras.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandsActions } from '../../Actions/Thunks/Brands';
import './SCSS/NavBar.scss';
import { SidevarCategori } from '../Design/SidevarCategori';
import { SidevarBrands } from '../Design/SidevarBrands';
import { SidevarAccount } from '../Design/SidevarAccount';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarDesign = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [search, setSearch] = useState('');

	const { userDB } = JSON.parse(localStorage.getItem('userStorage'));
	console.log(userDB);

	useEffect(() => {
		dispatch(getBrandsActions());
	}, []);

	const brands = useSelector((state) => state.brand.brands);

	const navigateBrand = (id) => {
		navigate(`/brands/${id}`);
	};

	const searchDrop = () => {
		if (search.trim() === '') return;
		navigate(`/products/${search}`);
	};
	return (
		<div className='navbar-components'>
			<nav className='navbar navbar-light bg-white brands-navbar'>
				<div className='d-flex w-100 mt-3'>
					<div className='d-flex w-75 justify-content-around'>
						<NavLink to='/'>
							<img className='px-2' src={logo} width='195' height='50' />
						</NavLink>
						<InputGroup className='w-75'>
							<Form.Control placeholder='Busca un drop . . .' onChange={(e) => setSearch(e.target.value)} />
							<Button variant='outline-secondary' onClick={searchDrop}>
								Button
							</Button>
						</InputGroup>{' '}
					</div>

					<div className='d-flex w-25 justify-content-around'>
						{userDB ? (
							<>
								{' '}
								<img src={notificacion} alt='' width='23' height='28' />
								<img src={cars} alt='' width='28' height='30' />
								<SidevarAccount />
								<NavLink to='/profile/sell' className='w-50'>
									<button className='btn btn-warning w-100' type='submit'>
										Vender
									</button>
								</NavLink>
							</>
						) : (
							<>
								<div>
									<SidevarAccount />
								</div>

								<NavLink to='/auth' className='w-75 px-3'>
									<button className='btn btn-warning w-100 py-2' type='submit'>
										Iniciar Sesión
									</button>
								</NavLink>
							</>
						)}
					</div>
				</div>
			</nav>

			<nav className='navbar navbar-expand navbar-light bg-white brands-navbar'>
				<ul className='navbar-nav w-100 justify-content-around'>
					<button className='nav-item nav-link btn btn-brand'>
						<SidevarCategori />
					</button>
					<button className='nav-item nav-link btn btn-brand'>
						<SidevarBrands />
					</button>
					{brands
						? brands.map((brander, index) => (
								<>
									{index < 10 ? (
										<button
											className='nav-item nav-link btn btn-brand'
											to='/login'
											onClick={() => navigateBrand(brander.uid)}
											key={brander.uid}
										>
											{brander.name}
										</button>
									) : (
										''
									)}
								</>
						  ))
						: ''}
				</ul>
			</nav>
		</div>
	);
};
