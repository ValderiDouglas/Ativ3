import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./Cadastro/formularioCadastroCliente";
import FormularioCadastroProduto from "./Cadastro/formularioCadastroProduto";
import FormularioCadastroServico from "./Cadastro/formularioCadastroServiço";
import ListaClientes from "./Listar/listaClientes";
import ListaProdutos from "./Listar/listaProduto";
import ListaServico from "./Listar/listaServiços";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produtos','Serviços','Cadastrar Cliente','Cadastrar Produto','Cadastrar Serviço']} />
                    <ListaClientes tema="purple lighten-4" />
                </>
            )
        
        } 
        if (tela === 'Cadastrar Cliente') {
            return (
                <>
                     <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produtos','Serviços','Cadastrar Cliente','Cadastrar Produto','Cadastrar Serviço']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        }
        if (tela === 'Cadastrar Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produtos','Serviços','Cadastrar Cliente','Cadastrar Produto','Cadastrar Serviço']} />
                    <FormularioCadastroProduto tema="purple lighten-4" />
                </>
            )
        }

        if (tela === 'Cadastrar Serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produtos','Serviços','Cadastrar Cliente','Cadastrar Produto','Cadastrar Serviço']} />
                    <FormularioCadastroServico Clienteervico tema="purple lighten-4" />
                </>
            )
        }

        if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produtos','Serviços','Cadastrar Cliente','Cadastrar Produto','Cadastrar Serviço']} />
                    <ListaServico tema="purple lighten-4" />
                </>
            )
        }

        if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produtos','Serviços','Cadastrar Cliente','Cadastrar Produto','Cadastrar Serviço']} />
                    <ListaProdutos tema="purple lighten-4" />
                </>
            )
        }
        else {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Cadastrar Cliente','Cadastrar Produto']} />
                    <ListaProdutos tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}