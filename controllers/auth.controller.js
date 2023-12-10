const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {v4: uuidv4} = require('uuid')

class AuthController {
    async signup(req, res) {
        const {name, email, password} = req.body
        const id = uuidv4()
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        try {
            await pool.query(`INSERT INTO users (email, name,  password) VALUES($1, $2, $3) RETURNING *`, [email, name, hashedPassword])
            const authToken = jwt.sign({email}, 'secret', {expiresIn: '8hr'})
            res.json({ data: { email, authToken }, message: 'Регистрация прошла успешно'})
        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
}

module.exports = new AuthController()