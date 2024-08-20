'use client'
import { IProduct, IProductProps } from "@/interfaces";
import { useRouter } from "next/navigation";
import { Bebas_Neue } from "next/font/google";
import AddToCart from "@/components/addToCart/AddToCart";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function ProductCard({product}: IProductProps) {

    const router = useRouter();

    const handleDetailsClick = () => {
        router.push(`/detail/${product.id}`);
    };

    return(
    <section className="my-12 ml-14">
        <section className="flex flex-row w-full max-w-md
          h-124 max-h-screen p-8 justify-center border-4
        border-orange-600 rounded-xl bg-blue-950 bg-opacity-15
        backdrop-filter backdrop-blur-md backdrop-saturate-150 border-opacity-60 ">

        <div className="flex flex-col items-center justify-center
          w-70 text-2xl ">
            

            <img src={product.image} alt={product.name}
            className="rounded-xl border-4 max-h-72 border-orange-600"
             height={300} />

            <div className="flex flex-col justify-center  items-center space-y-4 mt-6 mb-6" >
                <h2
                    className=" text-yellow-400 font-bold 
                    text-center pb-2 border-b-2 border-pink-700">
                    {product.name}
                </h2>

                <button className=" text-white font-normal
                hover:scale-105 hover:text-orange-600
                cursor-pointer w-40 h-10 rounded-xl
                text-2xl text-opacity-90 
                transition-all custom-transition duration-300 "
                onClick={handleDetailsClick}> Detalles
                </button>

                </div>


            <div className="flex flex-row space-x-12 mt-2  border-pink-700  items-center">
                <p className="text-3xl text-yellow-400 font-semibold "> $ {product.price} USD </p>

            <AddToCart id={product.id} />

            </div>

        </div>
        </section>
        </section>
    );
}
export default ProductCard;