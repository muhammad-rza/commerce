const BaseController = require(APP_ROOT_PATH + 'base/BaseController');
const CategoryModel = require(API_MODEL_PATH + 'CategoryModel');

const slugify = require(MAIN_ROOT_PATH + '/lib/slugify');

class CategoryController extends BaseController {
    /*
    * Here is Category users all Categorys CRUD // category , template , fields and etc.
    * */
    constructor() {
        super();
    }

    index(req, res, next) {

        CategoryModel.find((error, payload) => {

            if (error) {

                return res.status(500).json({ message: 'Something wrong' })

            } else if (payload.length == 0) {
                return res.status(200).json([]);
            } else {
                return res.status(200).json(payload);
            }
        });



    };

    store(req, res, next) {


        let body = req.body;


        const newCategory = {
            az: {
                name: body.az.name,
                slug: (body.az.slug) ? slugify(body.az.slug) : slugify(body.az.name)
            },
            ru: {
                name: body.ru.name,
                slug: (body.ru.slug) ? slugify(body.ru.slug) : slugify(body.ru.name)
            },
            template: body.template,
            // url:String,

            parent_id: body.parent_id,
        }





        CategoryModel.insertCategory(new CategoryModel(newCategory), (error, payload) => {

            if (error)
            return res.send({error});
            else
                return res.send(payload);

        });

    }

    update(req, res, next) {

        req.body.updated_at = Date.now();

        let body = req.body;


        const Category = {
            az: {
                name: body.az.name,
                slug: (body.az.slug) ? slugify(body.az.slug) : slugify(body.az.name)
            },
            ru: {
                name: body.ru.name,
                slug: (body.ru.slug) ? slugify(body.ru.slug) : slugify(body.ru.name)
            },
            template: body.template,
            // url:String,
            status: body.status,
            parent_id: body.parent_id,
        }



        CategoryModel.updateCategory({ _id: req.params.id }, { $set: Category }, { new: true }, (error, payload) => {

            if (error)
                console.log(error);
            else
                return res.send(payload);

        });
    }

    show(req, res) {
        CategoryModel.findCategoryWithFields({ req,res }, (error,payload) => {


            if (error)
                console.log(error);
            else if(payload==null)
                return res.status(200).json(null);
            else(payload==null)
                return res.send(payload);

        })
    };


    destroy(req, res, next) {

        CategoryModel.deleteById( req.params.id, (error, payload)=> {

            if(error)
                console.log(error);
            else
                return res.send(payload);
            });
    }
}

module.exports = CategoryController;