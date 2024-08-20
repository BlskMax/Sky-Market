'use client'
import AlertSignIn from "@/components/alertSignIn/AlertSignIn";
import { userContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import styles from "@/components/marketBackground/MarketBackground.module.css"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import ButtonVolver from "@/components/buttonVolver/ButtonVolver";

const  bebas = Bebas_Neue({
    subsets:['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function UserOrders() {
    const {getOrders, orders, isLogged} = useContext(userContext);

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="">
            <main className={styles.fondo}>
                
                {!isLogged ? (
                    <AlertSignIn />
                ) : (
                    orders.length > 0 ? (
                        <>

                        <div className="flex flex-col justify-evenly flex-wrap space-y-10 mt-12 ">
                        <p className={`${bebas.variable} font-sans text-6xl ml-96`}>TIENES {orders.length} ORDENES!</p>
                            {orders.map((order) => (
                                <div key={order.id} className="flex flex-col items-center ml-8 p-8 justify-center border-4 border-orange-600 rounded-xl bg-blue-950 bg-opacity-0 backdrop-filter backdrop-blur-md backdrop-saturate-150 border-opacity-60 space-y-10 max-w-6xl">
                                    <p>{order.date}</p>
                                    <ul className="space-y-6 text-center flex flex-row items-center">
                                    {order.products.map((product, index) => (
                                        <li key={index}>
                                            <div className="flex flex-row items-center space-x-5">
                                            <section>
                                                <img src={product.image} className="w-28 rounded-lg border-4 border-orange-600 border-opacity-70" />
                                        </section>
                                            <p className="flex flex-col w-32 text-left text-yellow-400 text-2xl text-wrap">{product.name}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-green-500 bg-blue-950 bg-opacity-15 backdrop-filter backdrop-blur-md backdrop-saturate-150 text-3xl border-2 border-gray-500 rounded-xl p-3 border-opacity-70">{order.status}</p>
                                </div>
                            ))}
                        </div>
                        </>
                    ) : (
                        <section className="flex flex-row mt-40 items-center
                        justify-center ml-4 ">
                        
            
                        <Image src="/images/noPedidos.png" alt="Tu Carrito Está Vacío!"
                            className="ml-10 "
                            height={100} width={700}  />
                        <div className="flex flex-col items-center space-y-7
                        ml-20 mr-4 ">
                        <p className= {`${bebas.variable} font-sans
                        text-7xl`} >Añade algunos productos!</p>
                        <ButtonVolver />
                        </div>
            
                        </section>
                    )
                )}
            </main>
            
        </div>
    );
}

export default UserOrders;
