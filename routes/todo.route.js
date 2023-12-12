const {Router} = require('express')
const router = new Router()
const todoController = require('../controllers/todo.controller')

router.get('/get-list', todoController.getList)
router.post('/add-todo', todoController.add)

module.exports = router