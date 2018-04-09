const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const TemplateModel = require(API_MODEL_PATH + 'Template/TemplateModel');


const BrandSchema = new Schema({

    name:String,
    slug:String,
    logo:String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: Date

});

// { versionKey: false }

const BrandModel = mongoose.model('Brand', BrandSchema);

module.exports = BrandModel;


module.exports.createBrand = (BrandModel, callback) => {

    BrandModel.save(callback);
}

module.exports.getBrand = (callback) => {

    BrandModel.find(callback);
}
module.exports.updateOrInsert = (oldObj, newObj, callback) => {

    BrandModel.update(oldObj, newObj, { upsert: true }, callback);
}

module.exports.insertBrand = (BrandModel, callback) => {

    BrandModel.save(callback);
}

module.exports.updateBrand = (query, update, options, callback) => {
    BrandModel.findOneAndUpdate(query, update, options, callback);
};

module.exports.findOneBrand = (id, callback) => {

    BrandModel.findOne({ _id: id }, callback);
}

module.exports.findBrandWithFields = ({ req, res }, callback) => {

    var lang = res.locals.lang;

    var customSelect = {
        _id: 1,
        sort: 1,
        values: 1,
        template: 1,
    };
    customSelect[lang] = 1;


    BrandModel.findOne({ _id: req.params.id }, customSelect, (error, Brand) => {
        let obj={};
        obj = Brand.toObject();
        obj['name'] = obj[lang].name;
        obj['slug'] = obj[lang].slug;
        delete obj[lang];


        if (error) { return callback(error, null) }
        else if (Brand==null) { return callback(null, null) }

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




module.exports.deleteAllBrand = (callback) => {

    BrandModel.deleteMany(callback);
}