import React, {useContext} from "react";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
import Image from "next/image";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function AlertSignIn () {

    const router = useRouter();

    return(
        
    <main>
        <Image src="/images/alertSignin.png" alt="alert"
        className="alert mr-auto ml-auto mt-24" 
        height={100} width={1300}/>

        <div className=" flex flex-row justify-center mt-20 w-screen space-x-36">
        <button type="button" onClick={() => router.push('/register')}
            className= {`${bebas.variable} font-sans
          text-white text-5xl
            hover:scale-105  hover:shadow-lg
            cursor-pointer  border-orange-600
            border-4 w-72 h-24 rounded-xl
            transition duration-300
          hover:text-yellow-400`}> REGISTRARSE
        </button>

        <button type="button" onClick={() => router.push('/login')}
            className= {`${bebas.variable} font-sans
          text-white text-5xl
            hover:scale-105  hover:shadow-lg
            cursor-pointer  border-orange-600
            border-4 w-72 h-24 rounded-xl
            transition duration-300
          hover:text-yellow-400`}> INICIAR SESIÓN
        </button>

        </div>
    </main>
    )
}

export default AlertSignIn;