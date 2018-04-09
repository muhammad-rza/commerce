const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const ActionSchema = new Schema({

    name:String,
    url:String,
    parent_id:String,
    onlyAdmin:{
        type:Boolean,
        default:false,
    },
    created_at:{
        type:Date,
        default: Date.now()
    },
    status:{
        type:Boolean,
        default:true,
    },
    updated_at:Date

});



ActionSchema.pre('update', function (next, done) {
    this.updated_at = Date.now();
    next();
});
ActionSchema.pre('save', function (next, done) {
    this.updated_at = Date.now();
    next();
});

const ActionModel = mongoose.model('Action', ActionSchema);

module.exports = ActionModel;


module.exports.createAction = (ActionModel, callback) => {

    ActionModel.save(callback);
}

module.exports.getAction = (callback) => {

    ActionModel.find(callback);
}
module.exports.updateOrInsert = (oldObj , newObj,  callback) => {

    ActionModel.update( oldObj, newObj , { upsert : true }, callback );
}



module.exports.deleteAllAction = (callback) => {

    ActionModel.deleteMany(callback);
}