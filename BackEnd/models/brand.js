const { Schema, model } = require('mongoose');

const BrandSchema = Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
        required: true
    }
});

BrandSchema.method('toJSON', function(){
    const {__v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Brand', BrandSchema);