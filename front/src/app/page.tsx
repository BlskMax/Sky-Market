import Image from "next/image";
import HomeLogo from "../../src/components/homeLogo/HomeLogo.jsx";
import HomeButtons from "../../src/components/homeButtons/HomeButtons";
import styles from "../components/homeBackground/HomeBackground.module.css"
import Footer from "../components/footer/Footer";

export default function LandingPage() {
    return(
        <main className={styles.fondo}>
            <HomeLogo />
            <HomeButtons />
        </main>
    );
}



