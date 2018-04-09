const router = require('express').Router();

const resource = require(MAIN_ROOT_PATH + '/core/resource')(router);

const initAdminController = require(API_CONTROLLER_PATH + '/AdminController');

const AdminController = new initAdminController();


resource.makeRoute('/actions' ,AdminController);

// router.get('/actions')




module.exports = router;
