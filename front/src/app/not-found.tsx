'use client'
import Image from "next/image"
import styles from "../components/errorBackground/ErrorBackground.module.css"
import NotFoundComp from "@/components/notFoundComp/NotfFoundComp"

const NotFound: React.FC= () => {

    return(
        
        <div className={styles.fondo}>
            
        
        <NotFoundComp/>


        </div>
    )
}

export default NotFound;