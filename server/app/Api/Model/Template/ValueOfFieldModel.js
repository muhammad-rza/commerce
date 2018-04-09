const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const autoIncrement = require("mongoose-auto-increment");
//
// var connection = mongoose.connect("mongodb://muhammadrza:aslandanger8685212@ds052629.mlab.com:52629/xtpredfghn_1");

// autoIncrement.initialize(connection);

const ValueOfFieldSchema = new Schema({

    az:{
        label:String,
        placeholder:{
            type:String,
            default:null,
        }
    },
    ru:{
        label:String,
        placeholder:{
            type:String,
            default:null,
        }
    },
    status:{
        type:Boolean,
        default:false,
    },
    created_at:{
        type:Date,
        default: Date.now()
    },
    updated_at:Date

} ,  { versionKey: false });



// ValueOfFieldSchema.plugin(autoIncrement.plugin, {
//     model: "ValueOfField",
//     field:"_id",
//     startAt: 1
// });

ValueOfFieldSchema.pre('update', function (next, done) {
    this.updated_at = Date.now();
    next();
});
ValueOfFieldSchema.pre('save', function (next, done) {
    this.updated_at = Date.now();
    next();
});

const ValueOfFieldModel = mongoose.model('ValueOfField', ValueOfFieldSchema);


module.exports = ValueOfFieldModel;

module.exports.getAllValue = (callback) => {

    ValueOfFieldModel.find(callback);
}
module.exports.updateOrInsert = (oldObj , newObj,  callback) => {

    ValueOfFieldModel.update( oldObj, newObj , { upsert : true }, callback );
}

module.exports.insertValue = (ValueOfFieldModel,  callback) => {

    ValueOfFieldModel.save( callback );
}

module.exports.updateValue = (query, update, options, callback) => {
    ValueOfFieldModel.findOneAndUpdate(query, update, options, callback);
};

/*==========
 *  WARNING *
 * =======*/

module.exports.deleteById = (_id, callback) => {

    ValueOfFieldModel.remove({ _id } ,callback);
}

module.exports.deleteAllValue = (callback) => {

    ValueOfFieldModel.deleteMany(callback);
}