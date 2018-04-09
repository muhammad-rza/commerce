const BaseController = require(APP_ROOT_PATH + 'base/BaseController');
const TemplateModel = require(API_MODEL_PATH + 'Template/TemplateModel');

class TemplateController extends BaseController {


    constructor() {
        super();
    }

    index(req, res, next) {

        // return res.send({lang:res.locals})

        var result = [];

        let customSelect = {
            _id: 1,
            name: 1,
            fields:1,
            status:1,
        }

        var _in = 1;

        return TemplateModel.find({}, customSelect, (error, payload) => {
            if (error) { return res.status(500).json({ message: 'Something wrong' }) }

            else if (payload.length == 0) { return res.status(200).json({ fields: [] }) }

            else {
                return res.send(payload)
            }
        })

        //emplateModel.getAllTemplates
        //FieldOfTemplateModel

        TemplateModel.getAllTemplates((error, payload) => {

            if (error) { return res.status(500).json({ message: 'Something wrong' }) }

            else if (payload.length == 0) { return res.status(200).json({ fields: [] }) }

            else {

                var lang = res.locals.lang;

                var customSelect = {
                    _id: 1,
                    sort: 1,
                    values: 1
                };
                customSelect[lang] = 1;

                payload.map((template, templateIndex) => {

                    var templateObj = {};

                    templateObj.name = template.name;
                    templateObj.fields = [];




                    FieldOfTemplateModel.find({ _id: { $in: template.fields } }, customSelect, (error, fields) => {

                        templateObj.fields = fields;

                        templateObj.fields.map((field, fieldIndex) => {

                            var all_data = field.toObject();

                            ValueOfFieldModel.find({ _id: { $in: field.values } }, customSelect, (error, values) => {


                                all_data.values = values;//.reduce((obj,curr)=> {obj._id = curr._id ; obj.label=curr._az ; return obj }, {});
                                result.push(all_data);

                                if (_in == fields.length) {
                                    return res.send(result);
                                }

                                _in++;


                            })

                        });


                    });


                });

            }




        });


    };


    store(req, res, next) {


        let newTemplate = new TemplateModel(req.body);

        //insertTemplate
        TemplateModel.insertTemplate(newTemplate, (error, payload) => {

            if (error)
                console.log(error);
            else
                return res.send(payload);

        });

    };
    update(req, res, next) {

        req.body.updated_at = Date.now();


        TemplateModel.updateTemplate({ _id: req.params.id }, { $set: req.body }, { new: true }, (error, payload) => {

            if (error)
                console.log(error);
            else
                return res.send(payload);

        });
    }
    show(req, res, next) {

        TemplateModel.findTemplateWidthFields({req,res}, (error, result) => {
            if (error) {
                res.send('error')
            }
            else if (result == null) {
                res.send('null')
            } else {
                res.send(result)
            }
        })
    };
    search(req, res, next) {

        let query = req.query;
        // if(!!query.status)
        //     query.status = Boolean(JSON.parse(query.status))

        TemplateModel.getTemplateByQuery(query, (error, template) => {

            if (error) return res.send('error')
            else {

                return res.send(template);
            }

        });

    };

    destroy(req, res, next) {

        TemplateModel.deleteById( req.params.id, (error, payload)=> {

            if(error)
                console.log(error);
            else
                return res.send(payload);
            });
         }


}

module.exports = TemplateController;