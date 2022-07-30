import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductForBrandsAction } from '../../Actions/Thunks/Product';
import { WithoutResults } from '../Design/WithoutResults';
import { ProductCard } from './ProductCard';
import './SCSS/Brands.scss';

export const Brands = () => {
	const { id } = useParams();
	localStorage.setItem('idBrand', id);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProductForBrandsAction(id));
	}, [id]);

	const product = useSelector((state) => state.product.products);

	const getProduct = (id) => {
		navigate(`/product/${id}`);
	};

	return (
		<div className='d-flex brands'>
			{product.length ? (
				product.map((product) => (
					<Link className='product-list' to={`/`} key={product.uid} onClick={() => getProduct(product.uid)}>
						<ProductCard product={product} />
					</Link>
				))
			) : (
				<div className='mt-5'>
					<WithoutResults />
				</div>
			)}
		</div>
	);
};
