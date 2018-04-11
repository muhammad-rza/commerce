const router = require('express').Router();

const resource = require(MAIN_ROOT_PATH + '/core/resource')(router);

const initBrandController = require(API_CONTROLLER_PATH + '/Brand/BrandController');

const BrandController = new initBrandController();


// router.get('/Brands',   function() {
//     console.log('ok')
// } );

resource.makeRoute('/brands' ,BrandController);





module.exports = router;
