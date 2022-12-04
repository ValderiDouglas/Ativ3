export default function FormularioCadastroProduto(props){
    const estiloBotao = `btn waves-effect #263238 blue-grey darken-4 ${props.tema}`
    return (
        <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Pnome" type="text" className="validate" />
                            <label htmlFor="Pnome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Pgenero" type="text" className="validate" />
                            <label htmlFor="Pgenero">Gênero</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="Pdescricao" type="text" className="validate" />
                            <label htmlFor="Pdescricao">Descrição</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="Ppreço" type="text" className="validate" />
                            <label htmlFor="Ppreço">Preço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>

                    </div>
            </form>
        </div>
    )
}