const router = require('express').Router();
const path = require('path');

router
    .route('/')
    .get(controller.HomeController.index)
    .post(controller.HomeController.index)

router
    .route('/login')
    .get(middleware.CheckLogin,controller.LoginController.index)
    .post(controller.LoginController.login)

router.use('/admin', middleware.CheckLogout , require(path.join(__dirname, 'web', 'admin')));

module.exports = router;