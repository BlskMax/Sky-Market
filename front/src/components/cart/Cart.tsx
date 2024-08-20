'use client'
import { useContext } from "react";
import { CartContext, CartProvider } from "@/context/cartContext";
import ItemCart from "../itemCart/ItemCart";
import { IProduct } from "@/interfaces";
import { userContext } from "@/context/userContext";
import Image from "next/image";
import ButtonVolver from "../buttonVolver/ButtonVolver";
import { Antonio, Bebas_Neue } from "next/font/google";
import AlertSignIn from "../alertSignIn/AlertSignIn";

const  antonio = Antonio({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-antonio',
});

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function Cart() {
    const {cartItems, removeFromCart, total, proceedToCheckout} = useContext(CartContext);
    
    const {isLogged} = useContext(userContext);

    
    

    return (
    <main className="">

    {isLogged ? (
        <>

<main className="mt-24">
<div className="flex flex-row">
<section className="flex flex-row  max-w-screen-xl">
    <div className=" w-80 text-center
    border-r-4 border-yellow-400 border-opacity-30 ">
        <h1 className={`${antonio.variable} font-mono
         text-pink-700 text-5xl
        `}>PRODUCTO</h1>
    </div>
    <div className=" w-80 text-center
    border-r-4 border-yellow-400 border-opacity-30">
        <h1 className={`${antonio.variable} font-mono
         text-pink-700 text-5xl
        `}>PRECIO</h1>
    </div>
    <div className="  w-80 text-center">
        <h1 className={`${antonio.variable} font-mono
         text-pink-700 text-5xl
        `}>QUITAR</h1>
    </div>
    
</section>

<section>
    <p className={`${bebas.variable} font-sans text-5xl`}> Tienes {cartItems.length} objeto(s) en el carrito</p>
</section>
</div>







    </main>

    <section className="flex flex-col "> 
        {cartItems.length > 0 ? (
            
            cartItems.map((item:IProduct) => (
                <div key= {item.id}>
                    <ItemCart product={item} remove={() => removeFromCart(item.id) }/>
                </div>
            )) 
        ) : 
        

            (
            <section className="flex flex-row mt-40 items-center
            justify-center ml-4 ">
            

            <Image src="/images/emptyCart.png" alt="Tu Carrito Está Vacío!"
                className="ml-10 "
                height={100} width={700}  />
            <div className="flex flex-col items-center space-y-7
            ml-20 mr-4 ">
            <p className= {`${bebas.variable} font-sans
            text-7xl`} >Añade algunos productos!</p>
            <ButtonVolver />
            </div>

            </section>
        )}


        {total > 0 && (
            <section className=" self-end mr-32 space-y-10 text-center">
             <div className=" flex flex-col space-y-5">

             <span className="text-yellow-400 text-4xl font-bold">
             TOTAL:
            </span>
             <span className="text-yellow-400 text-4xl font-bold">
             $ {total} USD
            </span>
                </div>   

            <button type="button" onClick={proceedToCheckout}
            className= {`${bebas.variable} font-sans
          text-white text-7xl
            hover:scale-105  hover:shadow-lg
            cursor-pointer  border-orange-600
            border-4 w-72 h-32 rounded-xl
            transition duration-300
          hover:text-yellow-400`}> COMPRAR
        </button>
            </section>
        )}

     </section>
     </>
        ) : (
            <AlertSignIn />
        )}
     </main>
    )
}

export default Cart;