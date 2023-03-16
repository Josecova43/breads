const React = require('react')
const Default = require('./layouts/Default')

function New () {
//confirm we are getting our bread data in the terminal
//console.log(bread.name)
    return (
      <Default>
        <h2> New  Bread Page</h2>
         <form action='/breads' method='POST'> 
            <label htmlFor='name'>Name</label>
            <input type="name" name="name" id="name" required></input>
            
            <label htmlFor='image'>Image</label>
            <input type="text" name="image" id="image"></input>
            
            <label htmlFor='hasGluten'>Has Gluten</label>
            <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked></input>
            <br />

            <input type="submit" />
         </form>
        
      </Default>
    )
}

module.exports = New
