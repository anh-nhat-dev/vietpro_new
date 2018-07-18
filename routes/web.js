const router = require('express').Router();


router
    .route('/')
    .get(controller.HomeController.index)
    .post(controller.HomeController.index)

module.exports = router;