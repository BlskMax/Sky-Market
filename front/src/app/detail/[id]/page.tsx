import styles from "@/components/altBackground/AltBackground.module.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import { IProduct } from "@/interfaces"
import ProductCard from "@/components/Products/productsCard/productsCard"
import AddToCart from "@/components/addToCart/AddToCart"

export async function fetchProductById(id: string): Promise<IProduct> {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const product = await response.json();
    return product;
}

async function Detail({params}: {params: {id: string}}) {
    const product = await fetchProductById(params.id)


    return (
        <div className={styles.fondo}>
            
            <main className="flex flex-row justify-evenly mt-24">

            <section className="">
                <div className="max-w-3xl text-center p-12">
                    <h1 className="text-7xl font-semibold mb-16 
                    text-yellow-400">
                        {product?.name}
                    </h1>
                <p className="text-xl font-light text-left leading-9 ml-12 mb-8" >
                    {product?.description}</p>
                </div>
                <section className="flex flex-row justify-between ">
                <p className="text-5xl ml-28 text-yellow-400
                pb-2 border-b-2 border-pink-700">
                $ {product?.price} USD
                </p>

                <form className="mr-28">
                <AddToCart id={product?.id} />
            </form>
            </section>
            </section>


            <section className="">
                <div className="ml-24">
                    <div className="flex flex-row justify-center w-full max-w-lg
                    h-124 max-h-screen p-8 bg-blue-950 bg-opacity-15
                    backdrop-filter backdrop-blur-md backdrop-saturate-150 border-opacity-60
                    border-4 border-orange-600 rounded-xl ">
                        <img src={product?.image} alt={product?.name}
                        className="w-rounded-xl border-8 border-white max-h-96 rounded-xl" />
                    </div>
                </div>
            </section>


            </main>


        </div>
    )
}


export default Detail;