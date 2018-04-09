const router = require('express').Router();

const resource = require(MAIN_ROOT_PATH + '/core/resource')(router);

const initCategoryController = require(API_CONTROLLER_PATH + '/CategoryController');

const CategoryController = new initCategoryController();


// router.get('/Categorys',   function() {
//     console.log('ok')
// } );

resource.makeRoute('/categories' ,CategoryController);





module.exports = router;
