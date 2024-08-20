import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../productsCard/productsCard";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});


function ProductList({products}: IProductListProps) {
    return(
        <main className="mt-64 flex flex-col mb-24">
            <p
                className={`${bebas.variable} font-sans            
                text-9xl text-yellow-400
                 place-self-end mr-8  `} 
                 >PRODUCTOS</p>

 
        <div 
        className="flex flex-row flex-wrap space-x-12 space-y-12 justify-evenly ">
            
            {products.map((product: IProduct) => (
                <ProductCard product={product} key={product.id} /> 
            ))}
        </div>

        
        </main>
    );
}
export default ProductList;