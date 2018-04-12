const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var shortid = require('shortid');

const BrandSchema = new Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    category_id:String,
    brand_id:String,
    properties:ObjectId,
    inStock:Number,
    main_images:String,
    galleries:Array,
    price:Number,
    az: {
        keywords:Array,
        description:String,
        title:String,
    },
    ru: {
        keywords:Array,
        description:String,
        title:String,
    },

    status:{
        type:Number,
        default:1, // pending show deleted
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

