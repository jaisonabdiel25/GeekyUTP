const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
	nombre: {
		type: String,
		required: true,
	},
	apellido: {
		type: String,
		required: true,
	},
	fechaNacimiento: {
		type: String,
		required: true,
	},
	correo: {
		type: String,
		required: true,
		unique: true,
	},
	identificacion: {
		type: String,
		required: true,
		unique: true,
	},
	pais: {
		type: String,
		required: true,
	},
	provincia: {
		type: Schema.Types.ObjectId,
		ref: 'Province',
	},
	contraseña: {
		type: String,
		required: true,
	},
	genero: {
		type: String,
		required: true,
	},
	img: {
		type: [],
	},
	role: {
		type: String,
		required: true,
		default: 'USER_ROLE',
	},
	google: {
		type: Boolean,
		default: false,
	},
});

UsuarioSchema.method('toJSON', function () {
	const { __v, _id, contraseña, ...object } = this.toObject();
	object.uid = _id;
	return object;
});

module.exports = model('User', UsuarioSchema);
