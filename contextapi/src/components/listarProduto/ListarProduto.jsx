import { useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"

const ListarProduto = () => {
    const {ListarProduto} = useContext(ProdutoContext)
    return(
        <h2>Lista de Produto</h2>
    )
}

export default ListarProduto