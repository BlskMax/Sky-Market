import img1 from "../../assets/images/carr3.png";
import img2 from "../../assets/images/carr1.png";
import img3 from "../../assets/images/carr2.png";
import styles from "./Carrousell.module.css"

export default function Carrousell() {

    return(
        <div className={styles.bg}>
        <div className={styles.container}>
        <img src={img1} className={styles.imageC} />
        <img src={img2} className={styles.imageC} />
        <img src={img3} className={styles.imageC} />
        </div>
        </div>
)
}

