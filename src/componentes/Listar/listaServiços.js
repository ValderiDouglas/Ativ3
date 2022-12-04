/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServico(props) {
    const estilo = `collection-item active blue-grey darken-4 ${props.tema}`
    return (
        <div className="collection">
        <div className="row"><h5>Filtrar por:</h5>⠀
        <a className="waves-effect #263238 blue-grey darken-4 btn">mais consumidos</a>⠀
        <a className="waves-effect #263238 blue-grey darken-4 btn">mais consumidos por Gênero</a>
        </div>
        <a className={estilo} >serviço 1</a>
        <a className="collection-item">serviço 2</a>
        <a className="collection-item">serviço 3</a>
        <a className="collection-item">serviço 4</a>
        </div>
    )
}
