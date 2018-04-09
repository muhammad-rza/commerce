const BaseController     = require(APP_ROOT_PATH + 'base/BaseController');
const ValueOfFieldModel  =  require(API_MODEL_PATH + 'Template/ValueOfFieldModel');

class ValueOfFieldController extends BaseController {


    constructor() {
        super();
    }

    index(req, res, next) {

        ValueOfFieldModel.find({}, (error, payload)=> {

            if(error)
                console.log(error)
            else
                return res.send(payload)

            }).sort({created_at:'desc'});
              // .skip(5)
              // .limit(5);


    };

    show(req, res, next) {

        ValueOfFieldModel.findOne( { _id:req.params.id } , (error, payload)=> {

            if(error)
                 console.log(error);
            else
                return res.send(payload);

            })
    }



    store(req, res, next) {

        ValueOfFieldModel.insertValue( new ValueOfFieldModel(req.body)  ,(error, payload)=> {

            if(error)
                console.log(error);
            else
                return res.send(payload);

            });

    }

    update(req, res, next) {

        req.body.updated_at = Date.now();


        ValueOfFieldModel.updateValue( { _id:req.params.id } ,  {$set: req.body },{new: true} , (error, payload)=> {

            if(error)
                 console.log(error);
             else
                return res.send(payload);

        });
    }

    destroy(req, res, next) {

        ValueOfFieldModel.deleteById( req.params.id, (error, payload)=> {

            if(error)
            console.log(error);
            else
                return res.send(payload);
            });
    }

}

module.exports = ValueOfFieldController;