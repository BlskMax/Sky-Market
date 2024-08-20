import styles from "../../components/altBackground/AltBackground.module.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import FormSignup from "@/components/forms/formSignUp/FormSignup"

function login () {
    return(
        <main className={styles.fondo}>

        <FormSignup />

        </main>
    )
}

export default login;