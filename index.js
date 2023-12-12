const express = require('express')
const cors = require('cors')
const authRouter = require('./routes/auth.route')
const todoRouter = require('./routes/todo.route')

const PORT = process.env.PORT || 5015

const app = express()
app.use(cors())

app.use(express.json({extended: true}))

app.use('/api/auth', authRouter)
app.use('/api/todos', todoRouter)

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}/`))

