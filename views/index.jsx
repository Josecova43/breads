const React =  requiere('react')
const Default = requiere('./layouts/Default')

function Index(breads) {
    return (
        <Default>
            <h2>Index Page</h2>
            <p> My favorite bread {breads[0].name}</p>
        </Default>
    )
}

module.exports = Index