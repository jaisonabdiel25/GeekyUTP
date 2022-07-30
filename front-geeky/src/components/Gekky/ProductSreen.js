import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Swal from 'sweetalert2';
import { getComentsAction, newComentsAction } from '../../Actions/Thunks/Coments';
import { PaymentActions, sendPaymentActions } from '../../Actions/Thunks/Payment';
import { getProductAction, getProductForBrandsAction } from '../../Actions/Thunks/Product';
import { Images } from './Images';
import { ProductCard } from './ProductCard';
import './SCSS/ProductScreen.scss';
import { Coments } from './Coments';

export const ProductSreen = () => {
	const [coment, setComent] = useState();
	const [comentReview, setComentReview] = useState([]);
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let timerInterval;
	const { userDB, productCount } = JSON.parse(localStorage.getItem('userStorage'));
	console.log(productCount, ' productos vendidos');

	const {
		uid,
		nombre,
		categoria,
		brand,
		estado,
		inventario,
		metodoentrega,
		subcategoria,
		ubicacion,
		tipoVenta,
		precio,
		modelo,
		descripcion,
		img,
		usuario,
		product,
	} = useSelector((store) => store.product.product);

	useEffect(() => {
		if (id) dispatch(getProductAction(id));
		const idBrand = localStorage.getItem('idBrand');
		dispatch(getProductForBrandsAction(idBrand));
	}, [id]);

	useEffect(() => {
		if (usuario) dispatch(getComentsAction(usuario));
	}, [usuario]);

	const urlPayment = useSelector((store) => store.payment);
	const randomProducts = useSelector((store) => store.product.products);
	const coments = useSelector((store) => store.coments.coments);

	useEffect(() => {
		setComentReview(coments);
	}, [coments]);

	const handleInputChangeComent = (e) => {
		setComent(e.target.value);
	};

	const sendComent = () => {
		const body = {
			coment: coment,
			user: usuario._id,
			userComent: userDB.uid,
			date: new Date(),
		};
		setComentReview({ ...comentReview, body });
		dispatch(newComentsAction(body));
		if (usuario) dispatch(getComentsAction(usuario));
	};

	const pagoYappy = () => {
		dispatch(sendPaymentActions({ precio: precio }));
	};

	const sendPayment = () => {
		dispatch(PaymentActions());
		window.open(urlPayment.url, '_blank')?.focus();
	};

	const getProduct = (id) => {
		navigate(`/product/${id}`);
		window.location.reload();
	};

	const sweetAlert = () => {
		Swal.fire({
			html: 'Cargando..',
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			if (result.dismiss === Swal.DismissReason.timer) {
			}
		});
	};

	return (
		<div className='productScreen'>
			<div className='product-detail mx-5'>
				<div className='product-images'>
					<Images key={uid} image={img} />
				</div>
				<div className='detail'>
					{usuario ? (
						<div className='d-flex'>
							<img className='img-profile me-3' src={usuario.img} alt='' width='40' height='40' />
							<h4 className='mt-2 text-secondary'>{usuario.nombre}</h4>
						</div>
					) : (
						''
					)}

					<h2 className='mt-3'>{nombre}</h2>
					<h5 className='mt-3 font-weight-bolder text-secondary'>{estado}</h5>
					<h2 className='mt-3'>${precio}</h2>
					{inventario == 1 ? (
						<h5 className='mt-3 text-danger'>Última pieza en inventario</h5>
					) : (
						<h5 className='mt-3'>{inventario} en inventario</h5>
					)}
					{userDB ? (
						urlPayment.url ? (
							<>
								<button onClick={sendPayment} className='btn btn-info w-75 center mt-3'>
									Enviar pago
								</button>
							</>
						) : (
							<>
								{urlPayment.loading ? sweetAlert() : ''}
								<button onClick={pagoYappy} className='btn btn-warning w-75 mt-3'>
									comprar ya
								</button>
							</>
						)
					) : (
						<div className='mt-5 disable-item'>
							<span>
								Para poder comprar el producto debes{' '}
								<Link className='text-dark' to='/auth'>
									Iniciar Sesión
								</Link>{' '}
							</span>
						</div>
					)}
				</div>
				<br />
			</div>
			<div className='poduct-info mt-5'>
				<div className='product-randoms'>
					<h4 className='text-uppercase'>Tambien te pordria gustar lo siguiente</h4>
					<div className='d-flex product'>
						{randomProducts
							? randomProducts.map((product, index) => (
									<>
										{index < 5 ? (
											<Link
												className='product-list'
												to={`/product/${product.uid}`}
												key={product.uid}
												onClick={() => getProduct(product.uid)}
											>
												<ProductCard product={product} />
											</Link>
										) : (
											''
										)}
									</>
							  ))
							: ''}
					</div>
				</div>
				<div className='d-flex mt-3'>
					<div className='product-detail w-50'>
						<h4 className='text-uppercase'>Detalles del producto</h4>
						<div className='d-flex'>
							<h5 className='strong'>Estado&nbsp;&nbsp;&nbsp;</h5>
							<h5>{estado}</h5>
						</div>
						<div className='d-flex'>
							<h5 className='strong'>Marca&nbsp;&nbsp;&nbsp;</h5>
							{brand ? <h5>{brand.name}</h5> : <h4>el producto no tiene marca</h4>}
						</div>
						<div className='mt-5'>
							<h5 className='strong'>Descripción</h5>
							<h5 className='text-justify text-capitalize'>{descripcion}</h5>
						</div>

						<div className='notes w-100'>
							{userDB ? (
								<>
									<h4 className='text-uppercase'>Preguntale al dueño del drop</h4>
									<textarea
										type='text'
										autoComplete='off'
										name='coment'
										className='mb-2  input'
										value={coment}
										onChange={handleInputChangeComent}
										placeholder='Escribe aqui...'
									/>
									<button onClick={sendComent} type='button' class='btn btn-warning'>
										Enviar
									</button>
								</>
							) : (
								<>
									<h4 className='text-uppercase'>
										Para agregar comentarios débes{' '}
										<Link className='text-dark font-italic' to='/auth'>
											Iniciar Sesión
										</Link>{' '}
									</h4>
									<textarea
										type='text'
										autoComplete='off'
										name='coment'
										className='mb-2  input'
										value={coment}
										onChange={handleInputChangeComent}
										placeholder='Escribe aqui...'
										disabled
									/>
								</>
							)}
						</div>

						<div className='review w-75'>
							<h4 className='text-uppercase'>Review del vendedor</h4>
							{coments.length > 0 ? (
								coments.map((coment) => <Coments key={coment.uid} coment={coment} />)
							) : (
								<div>
									{' '}
									<h5 className='mt-5 text-secondary'>Aún no hay reviews</h5>
								</div>
							)}
						</div>
					</div>
					<div className='some-info w-50 px-5'>
						<Accordion>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>¿Cómo Funciona el pago?</Accordion.Header>
								<Accordion.Body>
									En GeekyUTP aceptamos Mastercard y Visa. El vendedor recibe su pago una vez que hayas confirmado que recibiste tu
									producto.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='1' className='border mt-4'>
								<Accordion.Header>¿Cómo funciona el delivery?</Accordion.Header>
								<Accordion.Body>
									Después de hacer la compra te enviaremos un correo con el contacto del vendedor para coordinar la entrega. En caso de
									estar en otra provincia el vendedor te enviará el producto por flete y tú debes pagar el envío a través del medio que
									acuerden. Recuerda darle el código de entrega una vez que haya llegado tu producto.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey='3' className='border mt-4'>
								<Accordion.Header>¿Cómo hago si el producto no funciona?</Accordion.Header>
								<Accordion.Body>
									Cuando recibas el producto comprueba su estado y funcionamiento. Tienes 48 horas para informarle al vendedor y al equipo
									de geeky de cualquier fallo. Mándanos un correo a soporte@geekydrop.com y ayudaremos a resolver la disputa.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
};
