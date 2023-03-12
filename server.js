require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()





// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.get('/', (req,res)=>{
    res.send('Hello World')
})

const breadsController = require('./controllers/breads_controller')
app.use('./bread', breadsController)

app.listen(PORT, ()=>{
console.log('listening on port', PORT)
})
console.log(PORT)





