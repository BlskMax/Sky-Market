'use client'
import { useContext } from "react"
import { CartContext } from "@/context/cartContext"
import { Bebas_Neue } from "next/font/google";
import { userContext } from "@/context/userContext";
import { useRouter, usePathname } from "next/navigation";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function AddToCart({id}: {id: number}) {
    const {addToCart} = useContext(CartContext);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        addToCart(id);
        alert("Producto añadido al carrito!");
    }
    
    const {isLogged, user} = useContext(userContext)
    const router = useRouter();

    const pathname = usePathname(); 
    

    return (
      <>
        {!isLogged? (
          <button type="button" onClick={() => router.push("/login")}
          className= {`${bebas.variable} font-sans
        text-yellow-400 text-3xl
          hover:scale-105  hover:shadow-lg
          cursor-pointer  border-yellow-400
          border-2 w-36 h-16 rounded-xl
          transition duration-300
        hover:border-pink-500`}> AÑADIR
          </button>

        ): ( 

        <button type="button" onClick={handleClick}
        className= {`${bebas.variable} font-sans
      text-whie text-3xl
        hover:scale-105  hover:shadow-lg
        cursor-pointer  border-orange-600
        border-2 w-36 h-16 rounded-xl
        transition duration-300
      hover:text-yellow-400`}> AÑADIR
        </button>
      )}
      </>
    );
}

export default AddToCart;