import React from 'react';
import { NavLink } from 'react-router-dom';
import './SCSS/Account.scss';

export const Account = () => {
	const { userDB } = JSON.parse(localStorage.getItem('userStorage'));

	return (
		<div className='profile-account'>
			{userDB ? (
				<div className='d-flex flex-column'>
					<div className='d-flex flex-column justify-content-between align-items-center'>
						<div className='d-flex justify-content-center align-items-center w-50 mb-4'>
							<img className='img-profile' src={userDB.img[0]} alt='' width='200' height='200' />
						</div>
						<NavLink to='/profile/sell' className='w-50 d-flex justify-content-center text-decoration-none'>
							<button className='btn btn-warning w-75' type='submit'>
								Editar Perfil
							</button>
						</NavLink>
					</div>
					<div className='d-flex justify-content-center'>
						<div className='d-flex justify-content-center w-100 mt-4 ps-5'>
							<div className='d-flex flex-column justify-content-around w-100'>
								<h4 className='text-center fw-bold'>
									{userDB.nombre} {userDB.apellido}
								</h4>
								<h5 className='text-center fw-normal'>{userDB.provincia.name}</h5>
								<h5 className='text-center fw-normal'>Diciembre</h5>
							</div>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};
