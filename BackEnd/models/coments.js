const { Schema, model } = require('mongoose');

const ComentsSchema = Schema({
	coment: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	userComent: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

ComentsSchema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	object.uid = _id;
	return object;
});

module.exports = model('Coment', ComentsSchema);
