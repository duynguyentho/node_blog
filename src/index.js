const express = require('express')
const morgan = require('morgan')
const handle = require('express-handlebars')
const path = require('path')
const { dirname } = require('path')
const app = express()
const port = 3000
const router = require('./routes/app')
const db = require('./config/db')
app.use(morgan('combined')) 

//Connect db
db.connect();


// Template engine
app.engine('handlebars', handle({
  extname: '.handlebars'
}));


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'))

router(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})