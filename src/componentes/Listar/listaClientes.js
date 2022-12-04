/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    const estilo = `collection-item active blue-grey darken-4 ${props.tema}`
    return (

        <div className="collection">
                
        <div className="row"><h5>Filtrar por:</h5>⠀
        <a className="waves-effect #263238 blue-grey darken-4 btn" >Gênero</a>⠀
        <a className="waves-effect #263238 blue-grey darken-4 btn">Maior número de compras</a>⠀
        <a className="waves-effect #263238 blue-grey darken-4 btn">Maior Valor</a>
        </div>
        <a className="collection-item ">Cliente 1</a>
        <a className={estilo}>Cliente 2</a>
        <a className="collection-item">Cliente 3</a>
        <a className="collection-item">Cliente 4</a>
    </div>
    )
}