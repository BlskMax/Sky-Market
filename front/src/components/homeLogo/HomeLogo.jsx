import styles from "./HomeLogo.module.css";
import Image from "next/image";

export default function HomeLogo() {
    return (
        <main
        className="flex justify-center items-center h-[85vh] w-screen">
            
            <Image src="/images/SMLogo2.png" alt="Home"
            className="mt-32"
            width={700} height={500} />
        </main>
    )
}