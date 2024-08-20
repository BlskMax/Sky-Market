'use client'
import { createContext, useEffect, useState } from "react";
import {IAllUsersResponse, ILoginUser, IOrderResponse, IUser, IUserContextType, IUserResponse, } from "@/interfaces"
import { postSignIn, postSignUp, getUserOrders, getAllUsers } from "@/lib/server/fecthUsers";


export const userContext = createContext<IUserContextType>({
    user: null,
    setUser: () => {},
    isLogged: false,
    setIsLogged: () => {},
    signIn: async () => ({ success: false }),
    signUp: async () => false,
    getOrders: async () => {},
    orders: [],
    logOut: () => {},
    getUsers: async () => {},
    users: [],

});

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<Partial<IUserResponse> | null>(null);
    const [isLogged, setIsLogged] = useState(false);
    const [orders, setOrders] = useState<IOrderResponse[]>([]);
    const [users, setUsers ] = useState<IUser[]>([]); 

    
    const signUp = async (user: Omit<IUser, "id">) => {
        try {
            const data = await postSignUp(user);

            if(data.id) {
                signIn({email: user.email, password: user.password});
                return true;
            }
        return false;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const getOrders =  async () => {
        try {
            const token: string = localStorage.getItem("token") || "";
            const data = await getUserOrders(token);
            setOrders(data);
        }   catch (error) {
            console.error("error")
            return [];
        }
    };
    
    const fetchAllUsers =  async () => {
        try {
            const token: string = localStorage.getItem("token") || "";
            const data = await getAllUsers(token);
            setUsers(data || [] );
        }   catch (error) {
            console.error("error")
            return [];
        }
    };

    const fetchUserById =  async () => {
        try {
            const token: string = localStorage.getItem("token") || "";
            const data = await getAllUsers(token);
            setUsers(data || [] );
        }   catch (error) {
            console.error("error")
            return [];
        }
    };

    const signIn = async (credentials: ILoginUser) => {
        try {
            const data = await postSignIn(credentials);
    
            if (data && data.token) {
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
                localStorage.setItem("token", data.token);
                return { success: true };
            } else {
                return { success: false, message: "Credenciales inválidas" };
            }
        } catch (error) {
            console.error(error);
            return { success: false, message: "Error de servidor" };
        }
    };
    

    

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setIsLogged(false);
    };

    const removeToken = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setIsLogged(false);
    }



    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) {
            // axios.defaults.headers.common["Authorization"] = `${token}`;
            setIsLogged(true);
        }
    }, [user]);

    useEffect(() => {
        const user = localStorage.getItem("user");
        if(user) {
            setUser(JSON.parse(user));
            return;
        }
        setUser(null);
    }, []);



    return (
        <userContext.Provider
            value = {{
                user, setUser, isLogged, setIsLogged,
                signIn, signUp, logOut, orders, getOrders,
                getUsers: fetchAllUsers, users, 
            }}
        >
            {children}
        </userContext.Provider>
    )
};

