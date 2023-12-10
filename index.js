const express = require('express')

const PORT = process.env.PORT || 5015

const app = express()

app.get('/', (req, res) => {
    res.send('Started')
})

app.listen(PORT, () => console.log(`server started on port http://localhost:${PORT}/`))

