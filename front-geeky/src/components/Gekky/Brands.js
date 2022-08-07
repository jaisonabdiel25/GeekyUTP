import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductsAction } from '../../Actions/Thunks/Product';
import { WithoutResults } from '../Design/WithoutResults';
import { ProductCard } from './ProductCard';
import './SCSS/Brands.scss';

export const Brands = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [productsRender, setProductsRender] = useState([]);

	const products = useSelector((state) => state.product.products);

	useEffect(() => {
		dispatch(getProductsAction());
		const filtro = products.filter((product) => {
			return product.brand._id.includes(id);
		});
		setProductsRender(filtro);
	}, [id]);

	const getProduct = (id) => {
		navigate(`/product/${id}`);
	};

	return (
		<div className='d-flex brands'>
			{productsRender.length ? (
				productsRender.map((product) => (
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
