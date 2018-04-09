const BaseController = require(APP_ROOT_PATH + 'base/BaseController');
const ActionModel  =  require(API_MODEL_PATH + 'ActionModel');

class AdminController extends BaseController  {
    /*
    * Here is admin users all actions CRUD // category , template , fields and etc.
    * */
    constructor() {
        super();
    }

    index(req,res,next){

        /*
        * Get actions of logged user
        * */

        ActionModel.getAction((error, payload)=> {

            if(error)
                console.log(error)
            else
                return res.send(payload)

        });


    };
    store(req,res,next){


        var newAction = {
            name:req.body.name,
            url:req.body.url,
            parent_id:req.body.parent_id
        }
        //
        // newAction.name=req.body.name;
        // newAction.url=req.body.url;
        // newAction.parent_id=req.body.parent_id;

        ActionModel.updateOrInsert({name:req.body.name} , newAction ,(error, payload)=> {

           if(error)
               console.log(error)
            else
              return res.send(payload)
        });


    }

}

module.exports = AdminController;