'use client';
import { useState, useContext } from "react";
import { validateSignup } from "@/helpers/validations";
import { useRouter } from "next/navigation"
import { userContext } from "@/context/userContext";

function FormSignup() {
    const {signUp} = useContext(userContext);

    const router = useRouter()

    const [errors, setErrors] = useState({} as {[key: string]: string});

    const [signupValues, setSignupValues] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        address: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setSignupValues({...signupValues, [name]: value});
        setErrors(validateSignup({...signupValues, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = {
            email: signupValues.email,
            password: signupValues.password,
            name: signupValues.name,
            phone: signupValues.phone,
            address: signupValues.address,
        };

        const success = await signUp(signupValues);

        if (success){
             alert("Usuario creado con éxito!");
            router.push("/home");
            

        }
        
        if (!success) {
            alert("Error,revisa tu información por favor");
            console.log(Error)
        }
        

    };


    return(
        <main className="w-full max-w-4xl h-auto
          flex flex-col content-between mr-auto ml-auto
         border-orange-600 border-2 rounded-xl bg-gray-900 bg-opacity-60 border-opacity-40 mt-12
        "> 

        <div className="flex flex-col items-start mb-10 ml-8">
            <h1 className="text-5xl text-yellow-400 mb-2 mt-10">Crear una cuenta</h1>
            <p className="text-2xl font-thin">Empieze a comprar!</p>
        </div>

        <form className=" flex flex-row flex-wrap " onSubmit={handleSubmit}>




            <section className="w-56 h-40 flex flex-col ml-8 mr-8  ">
                <label className="text-orange-500 text-4xl font-semibold mb-4">
                    Email
                </label>
                <input
                type="email"
                name="email"
                id="email"

                className="bg-gray-950 w-56  h-16 border-pink-700 border-2
                border-opacity-70 rounded-xl p-8 mb-1 placeholder-yellow-400 placeholder-opacity-50
                focus:placeholder-opacity-0 transition-opacity duration-300"
                placeholder="TuCorreo@mail.com" 
                onChange={handleChange}
                required
                 />
                {errors.email && (
                    <span className="text-red-500 text-s italic">{errors.email}</span>
                )}
            </section>


            <section className="w-56 h-40 flex flex-col ml-8 mr-8 ">
                <label className="text-orange-500 text-4xl font-semibold mb-4">
                    Contraseña
                </label>
                <input
                type="password"
                name="password"
                id="password"

                className="bg-gray-950 w-56 h-16 border-pink-700 border-2
                border-opacity-70 rounded-xl p-8 mb-1 placeholder-yellow-400 placeholder-opacity-50
                focus:placeholder-opacity-0 transition-opacity duration-300"
                placeholder="Contraseña123"
                onChange={handleChange}
                required
                 />
                {errors.password && (
                    <span className="text-red-500 text-s italic">{errors.password}</span>
                )}
            </section>
            

            <section className="w-56 h-40 flex flex-col ml-8 mr-8 ">
                <label className="text-orange-500 text-4xl font-semibold mb-4">
                    Nombre
                </label>
                <input
                type="text"
                name="name"
                id="name"

                className="bg-gray-950 w-56  h-16 border-pink-700 border-2
                border-opacity-70 rounded-xl p-8 mb-1 placeholder-yellow-400 placeholder-opacity-50
                focus:placeholder-opacity-0 transition-opacity duration-300"
                placeholder="Un sólo nombre" 
                onChange={handleChange}
                required
                 />
                {errors.name && (
                    <span className="text-red-500 text-s italic">{errors.name}</span>
                )}
            </section>

            

            <section className="w-56 h-40 flex flex-col ml-8 mr-8 ">
                <label className="text-orange-500 text-4xl font-semibold mb-4">
                    Teléfono
                </label>
                <input
                type="text"
                name="phone"
                id="phone"

                className="bg-gray-950 w-56  h-16 border-pink-700 border-2
                border-opacity-70 rounded-xl p-8 mb-1 placeholder-yellow-400 placeholder-opacity-50
                focus:placeholder-opacity-0 transition-opacity duration-300"
                placeholder="Número de télefono" 
                onChange={handleChange}
                required
                 />
                {errors.phone && (
                    <span className="text-red-500 text-s italic">{errors.phone}</span>
                )}
            </section>


            <section className="w-56 h-40 flex flex-col ml-8 mr-8">
                <label className="text-orange-500 text-4xl font-semibold mb-4">
                    Dirección
                </label>
                <input
                type="text"
                name="address"
                id="address"

                className="bg-gray-950 w-56 h-16 border-pink-700 border-2
                border-opacity-70 rounded-xl p-8 mb-1 placeholder-yellow-400 placeholder-opacity-50
                focus:placeholder-opacity-0 transition-opacity duration-300"
                placeholder="Tu domicilio"
                onChange={handleChange}
                required
                 />
                {errors.address && (
                    <span className="text-red-500 text-s italic">{errors.address}</span>
                )}
            </section>
            






                <section className="flex flex-row-reverse items-end content-evenly  mb-16">
                <button 
                type="submit"
                disabled={Object.keys(errors).length > 0}
                className=" h-16 w-56 bg-black bg-opacity-10 rounded-2xl
                text-3xl border-orange-500 border-2 border-opacity-60 mt-3 ml-52
                text-yellow-400"
                >
                    CREAR
                </button>

                <div className="flex flex-row ">

                <p className="ml-12 text-xl ">Ya tienes una cuenta?</p>
                <button type="button"
                className="text-blue-600 text-xl ml-4"
                onClick={() => router.push('/login')} >Inicia sesión!</button>

                </div>
        </section>

        </form>
        </main>
    )
    
}

export default FormSignup;