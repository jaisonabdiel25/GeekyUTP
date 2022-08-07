import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getProductsAction } from '../../Actions/Thunks/Product';
import { ProductCard } from './ProductCard';
import './SCSS/ProductsRamdom.scss';

export const ProductsRandom = ({ brand }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [productsRandom, setProductsRandom] = useState([]);

	const products = useSelector((store) => store.product.products);
	useEffect(() => {
		dispatch(getProductsAction());
		const filtro = products.filter((product) => {
			return product.brand._id.includes(brand._id);
		});
		setProductsRandom(filtro);
	}, [brand]);

	const getProduct = (id) => {
		navigate(`/product/${id}`);
		window.location.reload();
	};

	return (
		<div className='d-flex products-randoms'>
			{productsRandom
				? productsRandom.map((product, index) => (
						<>
							{index < 5 ? (
								<Link className='product-list' to={`/product/${product.uid}`} key={product.uid} onClick={() => getProduct(product.uid)}>
									<ProductCard product={product} />
								</Link>
							) : (
								''
							)}
						</>
				  ))
				: ''}
		</div>
	);
};
