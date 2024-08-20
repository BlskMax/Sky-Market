'use client'
import { Bebas_Neue } from "next/font/google"
import { useRouter } from "next/navigation";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function ButtonVolver() {

    const router = useRouter();

     return(
        <div>
        <button type="button" onClick={() => router.push('/home')}
        className= {`${bebas.variable} font-sans
          text-yellow-400 text-6xl
            hover:scale-105  hover:shadow-lg
            cursor-pointer  border-yellow-400
            border-2 w-64 h-28 rounded-xl
            transition duration-300
            hover:border-pink-500`}> TIENDA
            </button>
       </div>

    )
}

export default ButtonVolver;
