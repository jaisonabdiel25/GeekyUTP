import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/geeky.png';

export const Header = () => {
	const navigate = useNavigate();
	let [toggleButton, setToggleButton] = useState(false);

	const activeToggleButton = () => {
		toggleButton = !toggleButton;
		setToggleButton(toggleButton);
	};

	const handleLogout = () => {
		navigate('/auth', {
			replace: true,
		});
	};

	const handleRegister = () => {
		navigate('/auth/register', {
			replace: true,
		});
	};
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom'>
			<div className='container-fluid between'>
				<Link className='navbar-brand' to='/'>
					<img className='px-2' src={logo} width='195' height='50' />
				</Link>
				<button
					className={`navbar-toggler ${toggleButton && 'collapsed'}`}
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded={`${toggleButton && 'true'}`}
					aria-label='Toggle navigation'
					onClick={activeToggleButton}
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className={`collapse navbar-collapse ${toggleButton && 'show'}`} id='navbarNavAltMarkup'>
					<div className='navbar-nav d-flex align-items-center  w-50'></div>
					<div className='navbar-collapse collapse w-50 order-3 dual-collapse2 d-flex justify-content-end'>
						<ul className='navbar-nav ml-auto'>
							<button className='nav-item nav-link btn' to='/auth/register' onClick={handleRegister}>
								¿No tienes una cuenta?
							</button>
							<button className='nav-item nav-link btn' to='/login' onClick={handleLogout}>
								Inicia Sesión
							</button>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
