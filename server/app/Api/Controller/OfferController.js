const BaseController = require(APP_ROOT_PATH + 'base/BaseController');


class OfferController extends BaseController  {

    constructor() {
        super();
    }

    index(req,res,next){

        return res.send('OfferController')

    };
    store(req,res,next){

        return res.send('OfferController')

    }

}

module.exports = OfferController;