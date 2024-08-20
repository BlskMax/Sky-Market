'use client'
import styles from "./Navbar.module.css"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation";
import { Bebas_Neue } from "next/font/google";
import { useEffect, useState, useContext } from "react";
import { userContext } from "@/context/userContext";
import Search from "../searchbar/Searchbar";
import { CartContext } from "@/context/cartContext";



const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});



function Navbar () {
    const {isLogged, logOut} = useContext(userContext);
    const {cartItems, removeFromCart, total, proceedToCheckout} = useContext(CartContext);
    

        const router = useRouter();

        const pathname = usePathname(); 

        const handleLogOut = () => {
            logOut();
            router.push("/")
        }



    return (
        <main>

        {pathname !== '/' &&  (
        <div className="absolute top-0 border-b-2 border-orange-600 ">

            <div className="flex flex-row items-center w-[100vw] h-24
            justify-between p-2">

            
            <button type="button" onClick={() => router.push('/home')} className={styles.button}>

                <Image src="/images/skyLogo.png" alt="cosmo"
                className="cosmo 
                duration-500 hover:scale-105 cursor-pointer ml-2 mt-4"
                height={100} width={300}  />

            </button>

            <div className= "flex flex-row align-middle mr-6 space-x-12">

            {pathname === '/home' || '/' && (
            <button type="button" onClick={() => router.push('/home')}>
            <p
                className={`${bebas.variable} font-sans 
                home cursor-pointer
                text-4xl text-white outline-dashed outline-orange-600
                rounded-xl p-2 hover:text-yellow-400
                transition-all custom-transition duration-300
                `} 
                 >VOLVER</p>
            </button> 
            )}

           {/* <Search placeholder="buscar por nombre" /> */}
            


            {pathname !== '/register' && !isLogged && (
            <button type="button" onClick={() => router.push('/register')} className={styles.button}>

            <p
                className={`${bebas.variable} font-sans 
                register hover:scale-105 cursor-pointer
                text-4xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `}
                 >REGISTRARSE</p>

            </button>
            )}
        {pathname !== '/login' && !isLogged && (
        <button type="button" onClick={() => router.push('/login')} className={styles.button}>

                <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-4xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `}
                 >INICIAR SESIÓN</p>

        </button>
        )}

        {pathname !== '/' && isLogged && (        
        <button type="button" onClick={handleLogOut}  className={styles.button}>
<p
                className={`${bebas.variable} font-sans 
                home cursor-pointer
                text-4xl text-white
                rounded-xl p-2 hover:text-red-600
                transition-all custom-transition duration-300
                `} 
                 >CERRAR SESIÓN</p>
            </button> 
        
        )}

            {pathname !== '/home' && (
            <button type="button" onClick={() => router.push('/home')}>
            <p
                className={`${bebas.variable} font-sans 
                register hover:scale-105 cursor-pointer
                text-4xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `} 
                 >MARKETPLACE</p>
            </button> 
            )}

        {/* <button onClick={() => router.push('/mensajeUsuario')}>
        <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-4xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `}
                 >MENSAJE OCULTO ({cartItems.length})</p>
        </button> */}
        
        { pathname !== '/dashboard' && pathname !== '/checkout' && isLogged && (        
        <button type="button" onClick={() => router.push('/checkout')} className={styles.button}>

            {cartItems.length > 0  ? (
                <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-4xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `}
                 >CARRITO ({cartItems.length})</p>
            ) : (
                <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-4xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `}
                 >CARRITO</p>

            )}
                 

        </button>
        )}

        {pathname !== '/dashboard' && pathname !== '/userOrders' && isLogged && (        
        <button type="button" onClick={() => router.push('/userOrders')} className={styles.button}>


                <p
                className={`${bebas.variable} font-sans 
                login hover:scale-105 cursor-pointer
                text-4xl text-yellow-400 hover:text-pink-500  
                 transition-all custom-transition duration-500  `}
                 >ORDENES</p>

        </button>
        )}

        {pathname !== '/dashboard' && isLogged && (        
        <button type="button" onClick={() => router.push('/dashboard')} className={styles.button}>

                <Image src="/images/userIcon3.png" alt="cosmo"
                className="cosmo 
                duration-500 hover:scale-110 cursor-pointer ml-2 mt-4"
                height={100} width={60}  />

        </button>
        )}

        

            </div>

            </div>
        </div>
        ) }
        </main>
    )
}

export default Navbar;


