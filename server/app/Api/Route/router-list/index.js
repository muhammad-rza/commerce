const router = require('express').Router();


var routeList = [
    'example',
    'admin',
    'template',
    'brands',
    'categories'
]



routeList.map((route , index)=>  router.use('/', require(__dirname + `/${route}.route`))   )



// router.use('/', require(__dirname + '/example.route'));
// router.use('/', require(__dirname + '/admin.route'));



module.exports = router;