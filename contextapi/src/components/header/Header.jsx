import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"

const Header = () => {
    //Você já tem o acesso desse cara
    const {usuario} = useContext(UsuarioContext)
    return(
        <header>
            <nav>
                <Link to={"/"}>Home</Link> {" "}
                <Link to={"/perfil"}>Perfil</Link> {" "}
                <Link to={"/produto"}>Produto</Link>
                <Link to={"/cadastrarProduto"}>Cadastrar Produto</Link>
                <Link to={"/listarProduto"}>Listar Produto</Link>
            </nav>
            {/* Ele acaba pegando o valor de usuario la do UsuarioProvider */}
            <h2>Bem vindo, {usuario}</h2>
        </header>
        
    )
}

export default Header