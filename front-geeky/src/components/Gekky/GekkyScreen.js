import React, { useEffect } from 'react';
import './SCSS/GeekyScreen.scss';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getProductForUIAction } from '../../Actions/Thunks/Product';
import { Link, useNavigate } from 'react-router-dom';
import { ProductCard } from './ProductCard';

export const GekkyScreen = () => {
	const id = '62c604f08fd8a56869171bb4';

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getProductForUIAction(id));
	}, [id]);

	const product = useSelector((state) => state.product.products);

	const getProduct = (id) => {
		navigate(`/product/${id}`);
	};

	return (
		<div className='geeky-screen'>
			<Carousel>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://firebasestorage.googleapis.com/v0/b/geeky-utp.appspot.com/o/photos%2Fsamsung.webp?alt=media&token=d93691e8-42c3-4f8d-a70c-5fe1d4346d4e'
						alt='First slide'
					/>
					<Carousel.Caption>
						<h3>SAMSUNG</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://firebasestorage.googleapis.com/v0/b/geeky-utp.appspot.com/o/photos%2Fsamsung2.webp?alt=media&token=47c91ed1-d664-4ffa-8676-99b582a60c79'
						alt='Second slide'
					/>

					<Carousel.Caption>
						<h3>SAMSUNG</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src='https://firebasestorage.googleapis.com/v0/b/geeky-utp.appspot.com/o/photos%2Fsamung234.jpg?alt=media&token=02ded77d-888d-4479-b71e-a870d93e9003'
						alt='Third slide'
					/>

					<Carousel.Caption>
						<h3>SAMSUNG</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<div className='d-flex productUI'>
				{product.length ? (
					product.map((product) => (
						<Link className='product-list' to={`/`} key={product.uid} onClick={() => getProduct(product.uid)}>
							<ProductCard product={product} />
						</Link>
					))
				) : (
					<div>
						<span>No existen productos para esta categoria</span>
					</div>
				)}
			</div>
		</div>
	);
};
