import React from 'react'
import ReactDOM from 'react-dom'


const App = () => {
    return (
        // container principal
        <div className="container border rounded mt-2">

            {/* linha para o título */}
            <div className="row border-bottom m-2">
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>


        </div>
    )

}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
