import { IProductCardProps } from "@/interfaces";
import { Bebas_Neue } from "next/font/google";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function ItemCart({product, remove}: IProductCardProps) {
    return (
        <main className="ml-12 mt-6 flex flex-row items-center ">
            <div className="">
                <div className="flex flex-col w-full max-w-56
                p-6 justify-center items-center space-y-5 border-2
              border-orange-600 rounded-xl bg-blue-950 bg-opacity-15
                backdrop-filter backdrop-blur-md backdrop-saturate-150 border-opacity-60">
                <img className="rounded-xl border-4 border-orange-600 max-h-72" src={product.image} alt={product.name} />
                <h2 className={`${bebas.variable} font-sans text-3xl text-yellow-400 `}>{product.name}</h2>
                </div>
            </div>
            <div className={`${bebas.variable} font-sans text-6xl text-yellow-400 ml-24
            border-b-2 border-pink-700 text-center pb-2 `}> $ {product.price} USD </div>
            <div className={`${bebas.variable} font-sans text-6xl text-white  `}>
                <button onClick={remove} className="ml-64 hover:text-red-600 duration-300">
                    X
                </button>
            </div>
        </main>
    )
}

export default ItemCart;