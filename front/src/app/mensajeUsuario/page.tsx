'use clientcu'

import { userContext } from "@/context/userContext"
import { useContext } from "react"


async function Mensaje() {

    const {isLogged} = useContext(userContext)

    return(
        <div>
            {!isLogged ? (

                <h1>HOLA! Necesitas estar loggeado para acceder al mensaje oculto ;D</h1>
            ): (
                
                <h1>Este es el mensaje oculto, felicitaciones!</h1>
            )}

        </div>
    )
}

export default Mensaje;