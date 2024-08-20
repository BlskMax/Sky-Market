import ProductList from "@/components/Products/productsList/productList"
import { productsToPreLoad } from "../../../public/data"
import Carrousel from "../../components/carrousell/Carrousel"
import styles from "../../components/marketBackground/MarketBackground.module.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { IProduct } from "@/interfaces"

async function fetchProducts ():Promise<IProduct[]> {
    const response = await fetch("http://localhost:3000/products")
    const products = await response.json()
    return products
}

async function home() {
    const products = await fetchProducts()

    return (
        <div className={styles.fondo}>
            
            <Carrousel />
            <ProductList products={products} />
            
        </div>
    )
}
export default home;