import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Account } from '../components/Profile/Account';
import { SellProduct } from '../components/Profile/SellProduct';
import { Sidebar } from '../components/Profile/Sidebar';
import './ProfileRouter.scss';

export const ProfileRouter = () => {
	return (
		<div className='d-flex justify-content-around profile-router'>
			<sidebar className='sidebar'>
				<Sidebar />
			</sidebar>

			<div className='segment mx-5'>
				<Routes>
					<Route path='/*' element={<Account />} />
					<Route path='/sell' element={<SellProduct />} />
				</Routes>
			</div>
		</div>
	);
};
