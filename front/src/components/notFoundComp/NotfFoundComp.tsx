import { useRouter } from "next/navigation"
import Image from "next/image"

function NotFoundComp () {
    const router = useRouter()
    
    return( 
        <>
    <div className="w-full mt-14">
    <Image src="/images/rutaNoExiste.png" alt="Esta ruta no existe!"
    className="ml-8 mt-20"
    height={100} width={850}  />         
    </div>

    <div className="flex">

    <button type="button" onClick={() => router.push ('/home')} >
        <Image src="/images/volverBtn.png" alt="Volver"
        className="volver transition-transform
        transition-shadow duration-300 hover:scale-105
        cursor-pointer mb-6 ml-80 "
        height={200} width={200}  />
    </button>

    </div>
</>

)

}

export default NotFoundComp;
