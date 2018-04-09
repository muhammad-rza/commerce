const router = require('express').Router();

const resource = require(MAIN_ROOT_PATH + '/core/resource')(router);

const initValueOfFieldController = require(API_CONTROLLER_PATH + 'Template/ValueOfFieldController');
const ValueOfFieldController = new initValueOfFieldController();

const initFieldOfTemplateController = require(API_CONTROLLER_PATH + 'Template/FieldOfTemplateController');
const FieldOfTemplateController = new initFieldOfTemplateController();

const initTemplateController = require(API_CONTROLLER_PATH + 'Template/TemplateController');
const TemplateController = new initTemplateController();



resource.makeRoute('/template-values' ,ValueOfFieldController);
resource.makeRoute('/template-fields' ,FieldOfTemplateController);
resource.makeRoute('/template' ,TemplateController);

// router.get('/actions')




module.exports = router;
