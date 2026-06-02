import { useContext, useState } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"

const CadastrarProduto = () => {
    //global
    const {listaProduto, setListaProduto} = useContext(ProdutoContext)
    //local
    const [novoProduto, setNovoProduto] = useState()
    return(
        <div>
            <h2>Cadastro de produtos</h2>
            <input type="text"
                onClick={(e) => {
                    setNovoProduto(e.target.value)
                }}
            />
            <button 
                onClick={() => {
                    setListaProduto([...listaProduto, novoProduto]);
                    setNovoProduto("")
                    alert("Cadastrado com sucesso")
                }}>Cadastrar</button>
            <p>Produto que será cadastrado: {novoProduto}</p>
        </div>
    )
}

export default CadastrarProduto