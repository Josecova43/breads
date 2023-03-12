const express= require ('express')
const breads_router = express.Router()
const Bread = requiere('../models/breads.js')


breads_router.get('/:arrayIndex', (req,res) => {
    res.send(Bread[req.param.arrayIndex])
})


// index 
breads_router.get('/', (req,res)=>{
    res.send(Bread)
}
)


module.exports = breads_router