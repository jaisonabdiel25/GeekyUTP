import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getProductsAction } from '../../Actions/Thunks/Product';
import { WithoutResults } from '../Design/WithoutResults';
import { ProductCard } from './ProductCard';
import './SCSS/SearchScreean.scss';

export const SearchScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { search } = useParams();
	const [productsSearch, setProductsSearch] = useState([]);

	useEffect(() => {
		dispatch(getProductsAction());
	}, []);

	const products = useSelector((store) => store.product.products);

	useEffect(() => {
		const filtro = products.filter((product) => {
			return (
				product.nombre.toLowerCase().includes(search.toLocaleLowerCase()) ||
				product.descripcion.toLowerCase().includes(search.toLocaleLowerCase())
			);
		});
		setProductsSearch(filtro);
	}, [search, products]);

	const getProduct = (id) => {
		navigate(`/product/${id}`);
	};

	return (
		<div className='d-flex search'>
			{productsSearch.length ? (
				productsSearch.map((product) => (
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
