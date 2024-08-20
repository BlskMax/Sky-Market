import Image from "next/image";
import styles from "../navbar/Navbar.module.css"
import { Bebas_Neue } from "next/font/google";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function Footer () {
    return (
        <>
        
        <div className=" bg-black w-screen mt-4 flex flex-row-reverse
        justify-between align-center items-start"> 

            <section className=" flex flex-row space-x-8 pr-6">

            <a href="https://www.facebook.com/alejandromaximilianogalarza/" target="_blank" rel="noopener noreferrer">
            <button type="button" className={styles.button}>

                <Image src="/images/redes/fsky.png" alt="facebook"
                    className="cosmo transition-transform transition-shadow
                    duration-300 hover:scale-105 cursor-pointer ml-2 mt-4"
                height={100} width={60}  />

            </button>
            </a>

            <a href="https://www.instagram.com/blsk_max/" target="_blank" rel="noopener noreferrer">
            <button>
                <Image src="/images/redes/inSky.png" alt="linkedin"
                    className="cosmo transition-transform transition-shadow
                    duration-300 hover:scale-105 cursor-pointer ml-2 mt-4"
                height={100} width={60}  />

            </button>
            </a>

            <a href="https://github.com/BlskMax" target="_blank" rel="noopener noreferrer">
            <button>
                <Image src="/images/redes/gitSky.png" alt="linkedin"
                    className="cosmo transition-transform transition-shadow
                    duration-300 hover:scale-105 cursor-pointer ml-2 mt-4"
                height={100} width={60}  />

            </button>
            </a>


            {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <button>
                <Image src="/images/redes/tikSky.png" alt="tiktok"
                    className="cosmo transition-transform transition-shadow
                    duration-300 hover:scale-105 cursor-pointer ml-2 mt-4"
                height={100} width={60}  />
            </button>
            </a> */}
            
            <a href="https://www.instagram.com/blsk_max/" target="_blank" rel="noopener noreferrer">
            <button>
                <Image src="/images/redes/igSky.png" alt="tiktok"
                    className="cosmo transition-transform transition-shadow
                    duration-300 hover:scale-105 cursor-pointer ml-2 mt-4"
                height={100} width={60}  />
            </button>
            </a>
            
            
            <a href="https://x.com/Blsk_Max" target="_blank" rel="noopener noreferrer">
            <button type="button">
                <Image src="/images/redes/xSky.png" alt="tiktok"
                    className="cosmo transition-transform transition-shadow
                    duration-300 hover:scale-105 cursor-pointer ml-2 mt-4"
                height={100} width={60}  />
            </button>
            </a>
            
            

            </section>       

            <section className=" text-orange-600 p-6 flex flex-col justify-center
            items-start space-y-1">
                <h1 className= {`${bebas.variable} font-sans text-xl`} >
                    El diseño de esta página fue posible gracias a la ayuda de los assets gráficos proporcionados por:</h1>
                    <p className={`${bebas.variable} font-sans text-xl`}>-@Designer.Syndrome, PixelBuddha.net </p>
                    
            </section>     

        </div>
        </>
    )
}
export default Footer