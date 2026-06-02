import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { ProdutoContext } from "../../context/ProdutoContext"

const Produto = () => {
    const {usuario} = useContext(UsuarioContext)
    const {produto, setProduto} = useContext(ProdutoContext)
    const [novoProduto, setNovoProduto] = useState()
    return(
        <div>
            <h2>Página de produtos</h2>
            <p>Bem vindo, {usuario}</p>
            <input
                type="text" 
                placeholder="digite o novo usuario"
                onChange={(e) => {
                    setNovoProduto(e.target.value)
                }}/>
            <button
                onClick={() => {
                    setProduto(novoProduto)
                }}
            >Trocar Usuario</button>
        </div>
    )
}

export default Produto