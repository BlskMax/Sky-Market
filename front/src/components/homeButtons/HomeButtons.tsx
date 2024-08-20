'use client'
import styles from  "./HomeButtons.module.css"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Bebas_Neue } from "next/font/google"

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


const HomeButtons: React.FC = () => {

    const router = useRouter()

    return (
        <main
            className={styles.main}>

            <div className="flex flex-row-reverse items-center justify-evenly mt-4 mb-24">


            <button type="button" onClick={() => router.push('/register')}>
            <p
                className={`${bebas.variable} font-sans 
                register hover:scale-105 cursor-pointer
                text-6xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `} >REGISTRARSE</p>
            </button>


            <button type="button" onClick={() => router.push('/login')}>
            <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-6xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `}  >INICIAR SESIÓN</p>

            </button>


            <button type="button" onClick={() => router.push('/home')}>
            <p
                className={`${bebas.variable} font-sans 
                market hover:scale-105 cursor-pointer
                text-6xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `} >MARKETPLACE</p>
            </button> 

            </div>
        </main>
    )
}

export default HomeButtons