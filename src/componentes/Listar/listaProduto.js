/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProdutos(props) {
    const estilo = `collection-item active blue-grey darken-4 ${props.tema}`
    return (
        <div className="collection">
        <div className="row"><h5>Filtrar por:</h5>⠀
        <a className="waves-effect #263238 blue-grey darken-4 btn">mais consumidos</a>⠀
        <a className="waves-effect #263238 blue-grey darken-4 btn">mais consumidos em valor</a>
        </div>
        <a className="collection-item">Produto 1</a>
        <a className="collection-item">Produto 2</a>
        <a className="collection-item">Produto 3</a>
        <a className={estilo}>Produto 4</a>
    </div>
    )
}