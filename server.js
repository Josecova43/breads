require('dotenv').config()
const PORT = process.env.PORT

const express = requiere('express')
const app = express()

app.get('/', (req,res)=>{
    res.send('Hello World')
})

const breadsController = requiere('./controller/breads_controlller')
app.use('/breads', breadsControllers)

app.listen(PORT, ()=>{
console.log('listening on port', PORT)
})
console.log(PORT)





