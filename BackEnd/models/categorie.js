const { Schema, model } = require('mongoose');

const CategorieSchema = Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
    },
});

CategorieSchema.method('toJSON', function(){
    const {__v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Categorie', CategorieSchema);