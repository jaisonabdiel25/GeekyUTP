import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

export const Coments = ({ coment }) => {
	console.log(coment);
	return (
		<div className='d-flex flex-column my-3 py-3 coment-content w-100'>
			<div className='mb-2'>
				{' '}
				<img className='rounded-circle mx-2' src={coment.userComent.img} alt='' width='50' height='50' />
				<strong>{coment.userComent.nombre}</strong>
				{coment.date ? <h6 className='ms-3 mt-3 text-secondary'>Hace {formatDistanceToNow(new Date(coment.date), { locale: es })}</h6> : ''}
			</div>
			<p className='ms-3'>{coment.coment}</p>
		</div>
	);
};
