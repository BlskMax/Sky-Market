'use client'
import AlertSignIn from "@/components/alertSignIn/AlertSignIn";
import { userContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import styles from "@/components/marketBackground/MarketBackground.module.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import ButtonVolver from "@/components/buttonVolver/ButtonVolver";

const bebas = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-bebas',
});

function AllUsers() {
    const { isLogged, getUsers, users, } = useContext(userContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className=" ">
            <main className={styles.fondo}>
                {!isLogged ? (
                    <AlertSignIn />
                ) : (
                    <>
                    <h1 className={`${bebas.variable} font-sans text-9xl text-yellow-400 text-left ml-12 border-b-4 border-pink-600 w-96`}>Usuarios:</h1>
                    <div className="flex flex-row justify-evenly flex-wrap space-y-24 mt-24" >
                        {users.length > 0 ? (
                            users.map((user) => (
                                <div key={user.id} className="flex flex-col items-center ml-8 p-8 justify-center border-4 border-orange-600 rounded-xl bg-blue-950 bg-opacity-0 backdrop-filter backdrop-blur-md backdrop-saturate-150 border-opacity-60 space-y-10 max-w-xl">
                                    <p className={`${bebas.variable} font-sans text-7xl text-yellow-400 text-wrap border-b-4 border-pink-700`}>{user.name}</p>
                                    <p className="text-xl text-orange-500 text-wrap">Email: {user.email}</p>
                                    <p className="text-lg text-gray-300 text-wrap">Dirección: {user.address}</p>
                                    <p className="text-lg text-gray-300 text-wrap">Teléfono: {user.phone}</p>
                                    {user.id !== 1 ? (
                                    <button className="w-48 h-14 text-red-500 border-red-700 border-2 rounded-lg bg-transparent
                                     hover:bg-red-700 hover:text-white hover:border-white transition-all duration-500 
                                    ">ELIMINAR USUARIO</button>
                                ) : (
                                    <p className={`${bebas.variable} font-sans text-4xl text-pink-600`}>(ADMIN.)</p>
                                )}
                                </div>
                            ))
                        ) : (
                            <h2 className="text-2xl text-red-500">No hay usuarios disponibles</h2>
                        )}
                    </div>
                    </>
                )}
            </main>
        </div>
    );
}

export default AllUsers;
