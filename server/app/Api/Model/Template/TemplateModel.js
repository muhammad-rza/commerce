const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var shortid = require('shortid');

const FieldOfTemplateModel = require(API_MODEL_PATH + 'Template/FieldOfTemplateModel');
const ValueOfFieldModel = require(API_MODEL_PATH + 'Template/ValueOfFieldModel');

const TemplateSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    name:String,
    fields:[
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
    updated_at:Date

} ,{ versionKey: false } );



// TemplateSchema.plugin(autoIncrement.plugin, {
//     model: "Template",
//     startAt: 1
// });

TemplateSchema.pre('update', function (next, done) {
    this.updated_at = Date.now();
    next();
});
TemplateSchema.pre('save', function (next, done) {
    this.updated_at = Date.now();
    next();
});

const TemplateModel = mongoose.model('Template', TemplateSchema);


module.exports = TemplateModel;

module.exports.getAllTemplates = (callback) => {

    TemplateModel.find(callback);
}
module.exports.updateOrInsert = (oldObj, newObj, callback) => {

    TemplateModel.update( oldObj, newObj , { upsert : true }, callback );

}
module.exports.insertTemplate = (TemplateModel,  callback) => {

    TemplateModel.save(callback );
}

module.exports.updateTemplate = (query, update, options, callback) => {
    TemplateModel.findOneAndUpdate(query, update, options, callback);
};

module.exports.getTemplateByQuery = (query,callback) => {

    TemplateModel.find(query ,callback );
}

module.exports.findOneTemplate = ( id ,callback) => {

    TemplateModel.findOne({_id:id} ,callback );
}

module.exports.findTemplateWidthFields = ( {req,res} ,callback) => {


    var result = {};
    var  _in=1;

    var templateObj = {};

    var lang =  res.locals.lang;

    var customSelect = {
        _id:1,
        sort:1,
        values:1
    };
    customSelect[lang]=1;



    TemplateModel.findOneTemplate( req.params.id  , (error , template) => {

        if(error)  {return callback(error,null)}
        else if(!template) {return callback(null,null)}

else  {

        result = template.toObject();
        result.fields = [];

        FieldOfTemplateModel.find( {_id: { $in:template.fields } , status:true } , customSelect , (error , fields) => {

            if(error)  {return callback(error,null)}
            else if(!fields.length > 0) {return callback(null,null)}

        result.fields = fields;

        result.fields.reduce((obj , field , fieldIndex) => {
            obj = field.toObject();
        obj['label'] = obj[lang].label;
        delete obj[lang];
        obj.values =[];
        // field =field.toObject();


        ValueOfFieldModel.find({ _id : { $in:field.values } ,  status:true } , customSelect , (error , values) => {

            if(error)  {return res.send(error)}

            obj.values=values.map((item ,valIndex)=> {
            var itemObj = {};
        itemObj._id=item._id;
        itemObj['label'] = item[lang].label;
        itemObj['placeholder'] = item[lang].placeholder;

        return itemObj

    });
        result.fields[fieldIndex]= obj;
        // field = all_data;

        if(_in == fields.length) {

            return callback(null , result);
        }

        _in++;


    })

    },{});

    });

    }

});

}



/*==========
 *  WARNING *
 * =======*/
module.exports.deleteById = (_id, callback) => {

    TemplateModel.remove({ _id } ,callback);
}

module.exports.deleteAllValue = (callback) => {

    TemplateModel.deleteMany(callback);
}