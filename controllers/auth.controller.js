const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {v4: uuidv4} = require('uuid')

class AuthController {
    async signup(req, res) {
        const {name, email, password} = req.body
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = await bcrypt.hashSync(password, salt)

        try {
            const isExistUser = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])

            if (!!isExistUser.rows.length) {
                return res.status(300).json({data: {message: 'User with this email already exists!'}})
            }

            const user = await pool.query(`INSERT INTO users (email, name,  password) VALUES($1, $2, $3) RETURNING *`, [email, name, hashedPassword])
            const authToken = jwt.sign({email}, 'secret', {expiresIn: '8hr'})
            res.json({ data: { name, authToken, userId: user.rows[0].id,  message: 'Регистрация прошла успешно' }})
        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
    async login(req, res) {
        const {email, password} = req.body

        try {
            const user = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])

            if (!user.rows.length) {
                console.log('err')
                return res.status(300).json({data: {message: 'User does not exist!'}})
            }

            const matchPass = await bcrypt.compare(password, users.rows[0].password)
            if (matchPass) {
                const authToken = jwt.sign({email}, 'secret', {expiresIn: '8hr'})
                res.status.json({ data: { email, authToken, userId: user.rows[0].id, message: 'Success' }})
            } else {
                res.json({ data: { message: 'Login failed!'}})
            }
        } catch (err) {
            console.error(err)
            res.status(520).json({ data: { message: '' } } )
        }
    }
}

module.exports = new AuthController()