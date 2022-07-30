import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GekkyScreen } from '../components/Gekky/GekkyScreen';
import { Footer } from '../components/Design/Footer';

import { Brands } from '../components/Gekky/Brands';
import { ProfileRouter } from './ProfileRouter';
import { ProductSreen } from '../components/Gekky/ProductSreen';
import { CategoriScreen } from '../components/Gekky/CategoriScreen';
import { SearchScreen } from '../components/Gekky/SearchScreen';
import { NavbarDesign } from '../components/Gekky/NavbarDesign';
import { AdminRouter } from './AdminRouter';

export const GeekyRouter = () => {
	return (
		<div>
			<NavbarDesign />
			<Routes>
				<Route path='/*' element={<GekkyScreen />} />
				<Route path='/profile/*' element={<ProfileRouter />} />
				<Route path='/brands/:id' element={<Brands />} />
				<Route path='/categori/:id' element={<CategoriScreen />} />
				<Route path='/product/:id' element={<ProductSreen />} />
				<Route path='/products/:search' element={<SearchScreen />} />
				<Route path='/admin/*' element={<AdminRouter />} />
			</Routes>
			<Footer />
		</div>
	);
};
