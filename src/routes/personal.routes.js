const express = require('express')
const router = express.Router()
const controller = require('../controller/personal')
router.get('/', controller.home)
router.post('/', controller.create)
router.delete('/:id', controller.delete)
module.exports = router