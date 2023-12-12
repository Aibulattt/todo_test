const {Router} = require('express')
const router = new Router()
const todoController = require('../controllers/todo.controller')

router.get('/get-list', todoController.getList)
router.post('/add', todoController.add)
router.put('/update', todoController.update)
router.delete('/delete', todoController.delete)

module.exports = router
