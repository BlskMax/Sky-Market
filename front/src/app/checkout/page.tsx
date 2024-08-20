import styles from "../../components/marketBackground/MarketBackground.module.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Cart from "@/components/cart/Cart";



function checkout() {
    const products: any = [];
    return (
        <>
        <div className={styles.fondo} >
            <Cart />
        </div>
        </>
    );
}


export default checkout;






