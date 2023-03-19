const express= require ('express')
// const breads = require('../models/breads.js')
const breads_router = express.Router()
const Bread = require('../models/breads.js')

// UPDATE
breads_router.put('/:arrayIndex', (req, res) => {
    if(req.body.hasGluten === 'on'){
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
  })
  

//new
breads_router.get ('/new', (req, res) => {
    res.render('new')
} )

// show route
breads_router.get('/:arrayIndex', (req,res) => {
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
})
} else {
    res.send('this index does not exits ----> 404')
}
})

// EDIT
breads_router.get('/:indexArray/edit', (req, res) => {
    res.render('edit', {
      bread: Bread[req.params.indexArray],
      index: req.params.indexArray
    })
})


// DELETE
breads_router.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
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