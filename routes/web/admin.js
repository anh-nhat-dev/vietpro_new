const router = require('express').Router();

router
    .route('/')
    .get(controller.AdminController.index)
router
    .route('/account')
    .get(controller.AccountController.list)
router
    .route('/logout')
    .get(controller.AdminController.logOut)

module.exports = router;