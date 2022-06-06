const express = require('express')
const authRouter = require('./server/routes/auth')
const usersRouter = require('./server/routes/users')
const { logger } = require('./server/middleware/middleware')
// need dotenv.config()

const app = express();
app.use(express.json())
const port = 3001;

app.get('/', logger, (req, res) => {
    res.send('Welcome')
})

app.use('/auth', logger, authRouter)

app.use('/users', logger, usersRouter)

app.listen(port, () => {
    console.log(`Listening on port:${port}`)
})