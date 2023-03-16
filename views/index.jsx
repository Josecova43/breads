const React =  require('react')
// const breads_router = require('../controllers/breads_controller')
const Default = require('./layouts/Default')

function Index({breads=title}) {
    return (
        <Default>
            <h2>Index Page</h2>
            {/* <p> My favorite bread {breads_router[0].name}</p> */}

            <ul>
                {
                    breads.map((bread, index) => {
                        return (
                        <li key={index}>
                            <a href={'/breads/${index}'}>{bread.name}</a>
                            </li>)

                    })
                }
            </ul>
            <div className='newButton'>
                <a href='/breads/new'><button>New Bread</button></a>
            </div>
        </Default>
    )
}

module.exports = Index