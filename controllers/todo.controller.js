const pool = require('../db')
const {v4: uuidv4} = require('uuid')

class AuthController {
    async getList(req, res) {
        const {userId} = req.query
        try {
            const todos = await pool.query(`SELECT * FROM todos WHERE user_id = $1`, [userId])
            res.json({ data: {list: todos.rows }})
        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
    async add(req, res) {
        const {title, user_id, is_done, created} = req.body

        try {
            const newTodo = await pool.query(`INSERT INTO todos(title, created, user_id, is_done) VALUES($1, $2, $3, $4) RETURNING *`,
              [title, created, user_id, is_done])
            res.status(201).json({data: { todo: newTodo.rows[0], message: 'Задача успешно создана' }})
        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
    async update(req, res) {
        const {title, user_id, is_done, created, id} = req.body

        try {
            const editTodo = await pool.query(`UPDATE todos SET title = $1, is_done = $2, user_id = $4, created = $5 WHERE id = $3 RETURNING *;`,
              [title, is_done, id, user_id, created])
            res.json({data: { todo: editTodo.rows[0], message: 'Задача успешно обновлена' }})
        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
    async delete(req, res) {
        const {id} = req.body

        try {
            await pool.query(`DELETE FROM todos WHERE id = $1;`, [id])
            res.json({data: { message: 'Задача удалена' }})
        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
}

module.exports = new AuthController()
