/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/css/materialize.min.css'



export default function BarraNavegacao(props) {

    const gerarListaBotoes = () => {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map(valor =>
                <li key={valor}><a onClick={(e) => props.seletorView(valor, e)}>{valor}</a></li>
            )
            return lista
        }
    }

    
    return (
        <>
            <nav className={props.tema}>
                <div className="nav-wrapper blue-grey darken-4">
                    <a className="right brand-logo #263238 blue-grey darken-4 cyan-text text-darken-2" >WB</a>
                    <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="left hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    )
}