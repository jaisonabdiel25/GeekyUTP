import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin } from '../components/Admin/Admin';
import { Sidebar } from '../components/Profile/Sidebar';
import './AdminRouter.scss';

export const AdminRouter = () => {
	return (
		<div className='d-flex justify-content-around admin-router'>
			<sidebar className='sidebar'>
				<Sidebar />
			</sidebar>

			<div className='segment mx-5'>
				<Routes>
					<Route path='/*' element={<Admin />} />
				</Routes>
			</div>
		</div>
	);
};
