const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const TemplateModel = require(API_MODEL_PATH + 'Template/TemplateModel');

var shortid = require('shortid');

const CategorySchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    az: {
        name: String,
        slug: String
    },
    ru: {
        name: String,
        slug: String
    },
    template: ObjectId,
    // url:String,

    parent_id: String,
    status: {
        type:Boolean,
        default:false,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: Date

});



const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;


module.exports.createCategory = (CategoryModel, callback) => {

    CategoryModel.save(callback);
}

module.exports.getCategory = (callback) => {

    CategoryModel.find(callback);
}
module.exports.updateOrInsert = (oldObj, newObj, callback) => {

    CategoryModel.update(oldObj, newObj, { upsert: true }, callback);
}

module.exports.insertCategory = (CategoryModel, callback) => {

    CategoryModel.save(callback);
}

module.exports.updateCategory = (query, update, options, callback) => {
    CategoryModel.findOneAndUpdate(query, update, options, callback);
};

module.exports.findOneCategory = (id, callback) => {

    CategoryModel.findOne({ _id: id }, callback);
}

module.exports.findCategoryWithFields = ({ req, res }, callback) => {

    var lang = res.locals.lang;

    var customSelect = {
        _id: 1,
        sort: 1,
        values: 1,
        template: 1,
    };
    customSelect[lang] = 1;


    CategoryModel.findOne({ _id: req.params.id }, customSelect, (error, category) => {
        let obj={};
        obj = category.toObject();
        obj['name'] = obj[lang].name;
        obj['slug'] = obj[lang].slug;
        delete obj[lang];


        if (error) { return callback(error, null) }
        else if (category==null) { return callback(null, null) }

        else {

            req.params.id = obj.template;
            obj.template =[];
            TemplateModel.findTemplateWidthFields({ req, res } , (error , template)=> {

                if (error) { return callback(error, null) }
                else if (template==null) { return callback(null, null) }

                else {

                    obj.template =template;

                    callback(null , obj);

                }

            });

        }

    })
};
/*==========
 *  WARNING *
 * =======*/

module.exports.deleteById = (_id, callback) => {

    CategoryModel.remove({ _id } ,callback);
}


module.exports.deleteAllCategory = (callback) => {

    CategoryModel.deleteMany(callback);
}