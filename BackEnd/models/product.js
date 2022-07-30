const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    nombre:{
        type: String,
        required: true
    },
    categoria:{
        type: Schema.Types.ObjectId,
        ref: "Categorie"
    },
    subcategoria:{
        type: Schema.Types.ObjectId,
        ref: "Subcategorie"
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref: "Brand"
    },
    modelo:{
        type: String,
        required: true,
    },
    img: [],
    ubicacion:{
        type: Schema.Types.ObjectId,
        ref: "Province"
    },
    estado:{
        type: String,
        required: true
    },
    tipoVenta:{
        type: String,
        required: true
    },
    precio:{
        type: Number
    },
    inventario:{
        type: Number,
        Default: 1
    },
    regateable:{
        type: Boolean,
        default: false
    },
    metodoEntrega:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

ProductSchema.method('toJSON', function(){
    const {__v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Product', ProductSchema);