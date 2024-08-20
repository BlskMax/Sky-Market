import styles from "../../components/altBackground/AltBackground.module.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import FormSignin from "@/components/forms/formSignIn/FormSignIn"

function login () {
    return(
        <main className={styles.fondo}>

        <FormSignin />

        </main>
    )
}

export default login;