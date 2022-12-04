export default function FormularioCadastroCliente(props){
    const estiloBotao = `btn waves-effect #263238 blue-grey darken-4 ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
            <div className="row">
                    <div className="input-field col s6">
                        <input id="nome" name="nome" type="text" className="validate" placeholder="Nome" />
                    </div>
                    <div className="input-field col s6">
                        <input id="nomeSocial" name='nomesocial' type="text" className="validate" placeholder="Nome Social"/>
                    </div>

                    <div className="input-field col s6">
                        <input id="cpf" name='cpf' type="text" className="validate" placeholder="CPF"/>
                    </div>

                    <div className="input-field col s6">
                        <input id="rgs" name='rgs' type="text" className="validate" placeholder="rgs" />
                    </div>
                </div>
                <div className="row">

                <div className="input-field col s6">
                        <input id="dataCadastro" name='datacadastro' type="text" className="validate" placeholder="Data Cadastro"/>
                    </div>
                    

                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao}  type="submit" name="action">Cadastrar
                            <i className="material-icons right">send</i>

                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}