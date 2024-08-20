
import { ILoginUser, IUser } from "@/interfaces"


export const postSignUp = async (user: Omit<IUser, "id">) => {
    const response = await fetch ("http://localhost:3000/users/register", {
        method: "POST", headers: {"Content-Type": "application/json", },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
};

export const postSignIn = async (credentials: ILoginUser) => {
    try {
        const response = await fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            return null; 
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud de inicio de sesión:", error);
        return null;
    }
};


export const getUserOrders = async (token: string) => {
    const response = await fetch("http://localhost:3000/users/orders", {
        headers: {
            Authorization: `${token}`,
        },
    });
    const data = await response.json();
    return data;
}

export const getAllUsers = async (token: string): Promise<IUser[]> => {
    const response = await fetch ("http://localhost:3000/users/getAllUsers", {
        method: "GET",
        headers: {
            Authorization: `${token}`,
        },
    });
    const data = await response.json();
    return data;
}
export const getUserById = async (token: string): Promise<IUser[]> => {
    const response = await fetch ("http://localhost:3000/users/getUserById/:id", {
        method: "GET",
        headers: {
            Authorization: `${token}`,
        },
    });
    const data = await response.json();
    return data;
}