'use client'
import styles from "../../components/altBackground/AltBackground.module.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { useContext } from "react"
import { userContext } from "@/context/userContext"
import AlertSignIn from "@/components/alertSignIn/AlertSignIn"
import Image from "next/image"
import { Bebas_Neue } from "next/font/google"
import { useRouter, usePathname } from "next/navigation"
import { CartContext } from "@/context/cartContext"
import UserOrders from "../userOrders/page"

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function dashboard() {
    const {isLogged, user, orders} = useContext(userContext);
    const {cartItems,} = useContext(CartContext)
    const router = useRouter();

    const pathname = usePathname(); 

    return (
        <div className={styles.fondo}>
            
            {!isLogged? (
                <AlertSignIn />
            ) : (
                <main className="flex flex-row-reverse max-w-screen-xl justify-between items-center mt-24">

                <section className="flex flex-col max-w-screen-xl text-center">
                <h1 className={`${bebas.variable} font-sans 
                text-9xl text-yellow-400`}>Bienvenid@</h1>
                <h2 className={`${bebas.variable} font-sans 
                text-9xl text-orange-600 mb-6  
                `}>
                    {user?.user?.name}
                </h2>

                <p className="text-4xl text-yellow-400">CONSULTA TUS PRODUCTOS!</p>
                
                
                <div className=" flex- flex-row space-x-12 mt-12">
                {cartItems.length > 0  ? (
                <button type="button" onClick={() => router.push('/checkout')} className={styles.button}>
                <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-6xl text-white hover:text-orange-600 
                transition-all custom-transition duration-500  `}
                >CARRITO ({cartItems.length})
                </p>
                </button> 

                ) : (

                <button>
                <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-6xl text-white hover:text-orange-600 
                 transition-all custom-transition duration-500  `}
                 >CARRITO</p>
                 </button>
                )}
            
                {orders.length > 0 ? (
                <button type="button" onClick={() => router.push('/userOrders')} className={styles.button}>
                <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-6xl text-white hover:text-orange-600  
                transition-all custom-transition duration-500  `}
                >ORDENES ({orders.length})
                </p>
                </button>
                ) : (
                    <button type="button" onClick={() => router.push('/userOrders')} className={styles.button}>
                    <p
                    className={`${bebas.variable} font-sans 
                    login hover:scale-105 cursor-pointer
                    text-6xl text-white hover:text-orange-600  
                    transition-all custom-transition duration-500  `}
                    >ORDENES
                    </p>
                    </button>
                )}
                </div>
                {/* <button type="button" onClick={() => router.push('/adminView')} className={styles.button}>
                    <p
                    className={`${bebas.variable} font-sans 
                    login hover:scale-105 cursor-pointer
                    text-6xl text-pink-500 hover:text-yellow-500  
                    transition-all custom-transition duration-500 mt-4  `}
                    >ADMIN. DASHBOARD
                    </p>
                    </button> */}

                </section>

                <section>
                <Image src="/images/userIcon3.png" alt="cosmo"
                className=" ml-16"
                height={100} width={450} />
                </section>
                </main>
            ) }
        </div>
    )
}
export default dashboard;