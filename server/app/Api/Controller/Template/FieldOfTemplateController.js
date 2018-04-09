const BaseController     = require(APP_ROOT_PATH + 'base/BaseController');
const FieldOfTemplateModel  =  require(API_MODEL_PATH + 'Template/FieldOfTemplateModel');
const ValueOfFieldModel  =  require(API_MODEL_PATH + 'Template/ValueOfFieldModel');


class FieldOfTemplateController extends BaseController {


    constructor() {
        super();
    }

    index(req, res, next) {

        var result = [];

        var _in = 1;

        // FieldOfTemplateModel.find((e,s)=>{
        //     if(e) return res.send(e)
        //     else {
        //
        //         return res.send(s[0].sort)
        //
        //     }
        //
        //
        // }).limit(1).sort({$natural:-1})
        //
        //
        // return false;

        FieldOfTemplateModel.getAllFields((error, payload)=> {
            if(error) {

                return res.status(500).json({message:'Something wrong'})

            }else if(payload.length == 0) {

                  return res.status(200).json([])
             }else {
                 return res.status(200).json(payload)
             }
        });

        /*

        FieldOfTemplateModel.getAllFields((error, payload)=> {

            if(error) {

                return res.status(500).json({message:'Something wrong'})

            }else if(payload.length == 0) {

                return res.status(200).json({fields:[]})
            }


            payload.map((field , index)=> {

                var fieldeObj = field;
                // fieldeObj.values = [];




                ValueOfFieldModel.find({_id: {$in:field.values} } , (error , values)=> {

                    if(error) {
                       return res.status(500).json({message:'Something wrong'})
                    }
                    var  all_data =field.toObject();
                    all_data.values = values;
                    result.push(all_data);



                    if(_in == payload.length) {

                        return res.send(result)
                    }

                    _in++;
                });

            });



        });

           */

    };

    store(req, res, next) {


        let newField = new FieldOfTemplateModel(req.body);


        FieldOfTemplateModel.insertField(newField ,(error, payload)=> {

            if(error)
                console.log(error);
            else
                return res.send(payload);

            });

    }

    update(req, res, next) {

        req.body.updated_at = Date.now();


        FieldOfTemplateModel.updateField( { _id:req.params.id } ,  {$set: req.body },{new: true} , (error, payload)=> {

            if(error)
            console.log(error);
    else
        return res.send(payload);

    });
    }


    show(req, res, next) {

        FieldOfTemplateModel.findOne( { _id:req.params.id } , (error, payload)=> {

          if(error)
            console.log(error);
          else if(!payload)
            return res.status(200).json(null);
          else return res.send(payload)


        });
    }

    stay(req, res, next) {

        var result = {};

        var _in = 1;

        FieldOfTemplateModel.getAllFields((error, payload)=> {

            if(error) {

                return res.status(500).json({message:'Something wrong'})

            }else if(payload.length == 0) {

            return res.status(200).json({fields:[]})
        }


        payload.map((field , index)=> {




            ValueOfFieldModel.find({_id: {$in:field.values} } , (error , values)=> {

            if(error) {
                return res.status(500).json({message:'Something wrong'})
            }

            // var all_data = JSON.stringify(field);
            //     all_data = JSON.parse(all_data)
            var  all_data =field.toObject();

        result[(all_data.az.label).toLowerCase()] = all_data;
        result[(all_data.az.label).toLowerCase()]['values'] = values
        // result[(all_data.az.label).toLowerCase()]['values'].push();


        if(_in == payload.length) {

            return res.send(result)
        }

        _in++;
    });

    });



    });


    };

    destroy(req, res, next) {

        FieldOfTemplateModel.deleteById( req.params.id, (error, payload)=> {

            if(error)
                 console.log(error);
            else
                return res.send(payload);
        });
    }

}

module.exports = FieldOfTemplateController;