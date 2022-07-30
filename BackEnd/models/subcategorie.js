const { Schema, model } = require('mongoose');

const SubcategorieSchema = Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
    },
    categorie: {
        type: Schema.Types.ObjectId,
        ref: "Categorie"
    }
});

SubcategorieSchema.method('toJSON', function(){
    const {__v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Subcategorie', SubcategorieSchema);