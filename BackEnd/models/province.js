const { Schema, model } = require('mongoose');

const ProvinceSchema = Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: true,
    }
});

ProvinceSchema.method('toJSON', function(){
    const {__v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Province', ProvinceSchema);