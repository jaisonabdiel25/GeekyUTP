import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { getProductForCategoriAction } from '../../Actions/Thunks/Product';
import { ProductCard } from './ProductCard';
import './SCSS/CategoriScreen.scss';

export const CategoriScreen = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProductForCategoriAction(id));
	}, [id]);

	const product = useSelector((state) => state.product.products);
	const getProduct = (id) => {
		navigate(`/product/${id}`);
	};
	return (
		<div className='d-flex categori'>
			{product.length ? (
				product.map((product) => (
					<Link className='product-list' to={`/`} key={product.uid} onClick={() => getProduct(product.uid)}>
						<ProductCard key={product.uid} product={product} />
					</Link>
				))
			) : (
				<div>
					<span>No existen productos para esta categoria</span>
				</div>
			)}
		</div>
	);
};
