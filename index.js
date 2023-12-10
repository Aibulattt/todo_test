const express = require('express')
const authRouter = require('./routes/auth.route')

const PORT = process.env.PORT || 5015

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', authRouter)

app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}/`))

