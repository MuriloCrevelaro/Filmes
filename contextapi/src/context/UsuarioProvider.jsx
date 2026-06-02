import { useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

// Disponibiliza o state do usuário de forma global para todos os seu componentes filhos(children)
export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState("Murilo")
    return(
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}