const React =  requiere('react')
const Default = requiere('./layouts/Default')

function Index(breads) {
    return (
        <Default>
            <h2>Index Page</h2>
            <p> My favorite bread {breads[0].name}</p>

            <ul>
                {
                    breads.map((bread, index) =>{
                        return (<li key={index}>
                            <a href={'/breads/${index}'}>{bread.name}</a>
                            </li>)

                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index