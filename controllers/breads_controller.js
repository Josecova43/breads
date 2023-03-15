const express= require ('express')
const breads = require('../models/breads.js')
const breads_router = express.Router()
const Bread = require('../models/breads.js')


breads_router.get('/:arrayIndex', (req,res) => {
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
})
} else {
    res.send('404')
}
})


// index 
breads_router.get('/', (req,res)=>{
    res.render('index', {breads: Bread, title:'Index'})
    
    
    
    //res.send(Bread)
})


module.exports = breads_router