const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const autoIncrement = require("mongoose-auto-increment");

const FieldOfTemplateSchema = new Schema({

    az:{
        label:String,
    },
    ru:{
        label:String,
    },
    // values:Array,
    required: {
        type:Boolean,
        default:true,
    },
    type:String,
    key:String,
    values: [
        { type: ObjectId }
    ],

    status:{
        type:Boolean,
        default:true,
    },
    created_at:{
        type:Date,
        default: Date.now()
    },
    sort:{
        type:Number,
        default:0
    },
    updated_at:Date

},
    { versionKey: false }
);

// FieldOfTemplateSchema.virtual('ValueOfField', {
//     ref: 'ValueOfField',
//     localField: '_id',
//     foreignField: 'values'
// })

//
// FieldOfTemplateSchema.plugin(autoIncrement.plugin, {
//     model: "FieldOfTemplate",
//     startAt: 1
// });

FieldOfTemplateSchema.pre('update', function (next, done) {
    this.updated_at = Date.now();
    next();
});
FieldOfTemplateSchema.pre('save', function (next, done) {


    // this.sort = Date.now();
    this.updated_at = Date.now();
    next();
});

const FieldOfTemplateModel = mongoose.model('FieldOfTemplate', FieldOfTemplateSchema);


module.exports = FieldOfTemplateModel;

module.exports.getAllFields = (callback) => {

    FieldOfTemplateModel.find(callback);
}

module.exports.updateOrInsert = (oldObj , newObj,  callback) => {

    FieldOfTemplateModel.update( oldObj, newObj , { upsert : true }, callback );
}

module.exports.insertField = (FieldOfTemplateModel,  callback) => {

    FieldOfTemplateModel.save( callback );
}


module.exports.updateField = (query, update, options, callback) => {
    FieldOfTemplateModel.findOneAndUpdate(query, update, options, callback);
};



/*==========
 *  WARNING *
 * =======*/

module.exports.deleteById = (_id, callback) => {

    FieldOfTemplateModel.remove({ _id } ,callback);
}

module.exports.deleteAllField = (callback) => {

    FieldOfTemplateModel.deleteMany(callback);
}