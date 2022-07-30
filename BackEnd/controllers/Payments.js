const { v4: uuidv4 } = require('uuid');
const { createClient } = require('yappy-node-back-sdk');
const { response } = require('express');

const paymentYappy = async (req, res = response) => {
	console.log(req.body);
	let yappyClient = createClient(process.env.MERCHANT_ID, process.env.SECRET_KEY);

	const payment = {
		total: null,
		subtotal: null,
		shipping: 0.0,
		discount: 0.0,
		taxes: null,
		orderId: null,
		successUrl: 'http://localhost:3000/profile',
		failUrl: 'https://www.yappy.peqa.dev',
		tel: process.env.TEL || '61584828',
		domain: process.env.DOMAIN || 'https://yappy.peqa.dev',
	};

	const { price: subtotal } = req.body;
	const uuid = uuidv4();
	const taxes = Number((subtotal * 0.07).toFixed(2));
	const total = subtotal + taxes;
	const newPayment = {
		...payment,
		subtotal: 0.01, // Para evitar tener que pagar durante la prueba
		taxes: 0.01, // Para evitar tener que pagar durante la prueba
		total: 0.02, // Para evitar tener que pagar durante la prueba
		orderId: uuid.split('-').join('').slice(0, 10),
	};
	const response = await yappyClient.getPaymentUrl(newPayment);
	// const response = await yappyClient.getPaymentUrl(newPayment,false, true); //Pago normal, en modo prueba
	res.json(response);
};

module.exports = {
	paymentYappy,
};
