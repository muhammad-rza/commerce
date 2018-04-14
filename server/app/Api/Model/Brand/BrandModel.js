const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var shortid = require('shortid');

const BrandSchema = new Schema({
    // _id: {
    //     type: String,
    //     default: shortid.generate
    // },
    name:String,
    slug:String,
    az: {
        keywords:Array,
        description:{
            type:String,
            default:null
        },
    },
    ru: {
        keywords:Array,
        description:{
            type:String,
            default:null
        },
    },
    logo:{
        type:String,
        default:null
    },
    banner:{
        type:String,
        default:null
    },
    status:{
        type:Boolean,
        default:true,
    },
    created_at:{
        type:Date,
        default: Date.now()
    },
    updated_at:{
        type:Date,
        default: Date.now()
    },

} ,{ versionKey: false } );




const BrandModel = mongoose.model('Brand', BrandSchema);


module.exports = BrandModel;

module.exports.getAllBrands = (callback) => {

    BrandModel.find(callback);
}
module.exports.updateOrInsert = (oldObj, newObj, callback) => {

    BrandModel.update( oldObj, newObj , { upsert : true }, callback );

}
module.exports.insertBrand = (BrandModel,  callback) => {

    BrandModel.save(callback );
}

module.exports.updateBrand = (query, update, options, callback) => {
    BrandModel.findOneAndUpdate(query, update, options, callback);
};

module.exports.getBrandByQuery = (query,callback) => {

    BrandModel.find(query ,callback );
}

module.exports.findOneBrand = ( id ,callback) => {

    BrandModel.findOne({_id:id} ,callback );
}




/*==========
 *  WARNING *
 * =======*/

module.exports.deleteById = (_id, callback) => {

    BrandModel.remove({ _id } ,callback);
}

// module.exports.deleteAll = (callback) => {
//
//     BrandModel.deleteMany(callback);
// }