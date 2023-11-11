const express = require ('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.set('port', process.env.PORT || 3000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'news'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})
app.use('/api', routes)

app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})