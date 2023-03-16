const express= require ('express')
// const breads = require('../models/breads.js')
const breads_router = express.Router()
const Bread = require('../models/breads.js')


//new
breads_router.get ('/new', (req, res) => {
    res.render('new')
} )

// show route
breads_router.get('/:arrayIndex', (req,res) => {
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex]
})
} else {
    res.send('this index does mot exits ----> 404')
}
})

// index 
breads_router.get('/', (req,res)=>{
    res.render('index', {
        breads: Bread, 
        title:'Index'
    })
    
    
    
    //res.send(Bread)
})
//create page 
breads_router.post('/', (req,res) => {
    req.body.image = 'https://suebeehomemaker.com/wp-content/uploads/2021/10/sliced-french-bread.jpg'
   req.body.hasGluten = 'on'
Bread.push(req.body)
// res.send(Bread)
res.redirect('/breads')
})
module.exports = breads_router