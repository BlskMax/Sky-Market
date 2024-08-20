'use client';
import { useState, useContext } from "react";
import { validateSignin } from "@/helpers/validations";
import { useRouter } from "next/navigation";
import { userContext } from "@/context/userContext";

function FormSignin() {
    const [errors, setErrors] = useState({} as { [key: string]: string });
    const [signinValues, setSigninValues] = useState({
        email: "",
        password: "",
    });
    const [submitError, setSubmitError] = useState<string | null>(null);

    const { signIn } = useContext(userContext);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSigninValues({ ...signinValues, [name]: value });
        setErrors(validateSignin({ ...signinValues, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitError(null);

        const result = await signIn(signinValues);

        if (result.success) {
            alert("Sesión iniciada con éxito!");
            router.push("/home");
        } else {
            setSubmitError(result.message || "El usuario no existe o la contraseña es incorrecta.");
        }
    };

    return (
        <main className="w-full max-w-xl h-124 max-h-screen flex flex-col justify-center ml-auto mr-auto border-orange-500 border-2 rounded-xl bg-gray-900 bg-opacity-60 border-opacity-40 p-32 pl-8 pt-0 pr-8 mt-12 mb-12">
            <form className=" " onSubmit={handleSubmit}>
                <div className="flex flex-col items-start mb-10">
                    <h1 className="text-5xl text-yellow-400 mb-2 mt-20">Iniciar Sesión</h1>
                    <p className="text-2xl font-thin">Empieza a comprar!</p>
                </div>

                <section className="w-full max-w-7xl h-40 flex flex-col ">
                    <label className="text-orange-500 text-3xl font-semibold mb-4">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-950 w-full max-w-7xl h-16 border-pink-700 border-2 border-opacity-70 rounded-xl p-8 placeholder-yellow-400 placeholder-opacity-50 focus:placeholder-opacity-0 transition-opacity duration-300"
                        placeholder="TuCorreo@mail.com"
                        onChange={handleChange}
                        required
                    />
                    {errors.email && (
                        <span className="text-red-500 text-s italic">{errors.email}</span>
                    )}
                </section>

                <section className="w-full max-w-7xl h-40 flex flex-col">
                    <label className="text-orange-500 text-3xl font-semibold mb-4">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="bg-gray-950 w-full max-w-7xl h-16 border-pink-700 border-2 border-opacity-70 rounded-xl p-8 placeholder-yellow-400 placeholder-opacity-50 focus:placeholder-opacity-0 transition-opacity duration-300"
                        placeholder="Contraseña123"
                        onChange={handleChange}
                        required
                    />
                    {errors.password && (
                        <span className="text-red-700 text-s italic">{errors.password}</span>
                    )}
                </section>

                {submitError && (
                    <div className="text-red-700 text-s italic mb-4">
                        {submitError}
                    </div>
                )}

                <section className="flex flex-row-reverse items-end justify-between">
                    <button
                        type="submit"
                        disabled={Object.keys(errors).length > 0}
                        className="h-14 w-56 bg-black bg-opacity-10 rounded-2xl text-3xl border-orange-500 border-2 border-opacity-60 text-yellow-400"
                    >
                        LOGIN
                    </button>

                    <div className="flex flex-col items-start">
                        <p className="text-lg">¿No tienes una cuenta?</p>
                        <button
                            type="button"
                            className="text-blue-600 text-lg"
                            onClick={() => router.push('/register')}
                        >
                            ¡Crea una aquí!
                        </button>
                    </div>
                </section>
            </form>
        </main>
    );
}

export default FormSignin;
