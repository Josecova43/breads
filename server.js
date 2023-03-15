require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()





// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  


// MIDDLEWARE
app.use(express.static('public'))



app.get('/', (req,res)=>{
    res.send('Hello World')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT,()=>{
console.log('listening on port', PORT)
})
console.log(PORT)





