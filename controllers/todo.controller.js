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
        const {email, password} = req.body

        try {

        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
}

module.exports = new AuthController()