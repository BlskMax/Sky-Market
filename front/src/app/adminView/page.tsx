
// import styles from "@/components/marketBackground/MarketBackground.module.css"
import AllUsers from "@/components/allUsersView/AllUsersView";
import styles from "@/components/marketBackground/MarketBackground.module.css"

function adminView () {


    return (
        <main className={styles.fondo}>
            <AllUsers />
        </main>
    )
}

export default adminView;