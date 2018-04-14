const BaseController = require(APP_ROOT_PATH + 'base/BaseController');
const BrandModel = require(API_MODEL_PATH + 'Brand/BrandModel');

const slugify = require(MAIN_ROOT_PATH + '/lib/slugify');
const imageUpload = require(MAIN_ROOT_PATH + '/lib/imageUpload');

class BrandController extends BaseController {
    /*
    * Here is Brand users all Brands CRUD
    * */
    constructor() {
        super();
    }

    index(req, res, next) {


        BrandModel.find((error, payload) => {

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


        // var base64Data = brand.logo.replace(/^data:image\/png;base64,/, "");
        //
        // require("fs").writeFile("out.png", base64Data, 'base64', function(err) {
        //     console.log(err);
        // });


        imageUpload(body.logo , 'brands/logo'  ,(error , logo)=> {

            if(error) return res.send({error});




            const newBrand = {

                name:body.name,
                slug:(body.slug) ? slugify(body.slug) : slugify(body.name),
                // az: {
                //     keywords:body.keywords,
                //     description:body.keywords,
                // },
                // ru: {
                //     keywords:body.keywords,
                //     description:body.keywords,
                // },
                logo,
                // banner,
                status:body.status

            }





            BrandModel.insertBrand(new BrandModel(newBrand), (error, payload) => {

                if (error)
                    console.log(error);
                else
                    return res.send(payload);

            });


        });

    }

    update(req, res, next) {

        req.body.updated_at = Date.now();


        BrandModel.updateBrand({ _id: req.params.id }, { $set: req.body }, { new: true }, (error, payload) => {

            if (error)
                console.log(error);
            else
                return res.send(payload);

        });
    }

    show(req, res) {

        BrandModel.findBrandWithFields({ req,res }, (error,payload) => {


            if (error)
                console.log(error);
            else if(payload==null)
                return res.status(200).json(null);
            else(payload==null)
                return res.send(payload);

        })
    }

    destroy(req, res, next) {

        BrandModel.deleteById( req.params.id, (error, payload)=> {

            if(error)
                console.log(error);
            else
                return res.send(payload);
            });
    }

}

module.exports = BrandController;