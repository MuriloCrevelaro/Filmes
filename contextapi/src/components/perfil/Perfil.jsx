import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext) //state global
    const [novoUsuario, setNovoUsuario] = useState()//state local

    //ciclo de vida

    //jsx
    return(
        <div>
            <h2>Página de Perfil ({usuario})</h2>
            <input
                type="text" 
                placeholder="digite o novo usuario"
                onChange={(e) => {
                    setNovoUsuario(e.target.value)
                }}/>
            <button
                onClick={() => {
                    setUsuario(novoUsuario)
                }}
            >Trocar Usuario</button>
            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil