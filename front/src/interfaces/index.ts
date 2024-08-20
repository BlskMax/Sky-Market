import React from "react";

interface IRegisterUser {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

interface ICredentials {
    password: string;
    id: number;
}

interface IRegisterUserResponse {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    role: string;
    credential: ICredentials;
}

interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    orders?: IOrderResponse;
    users: IUser[];
}

interface IUserResponse {
    login: boolean;
    user: Partial<IUser> | null;
    token:string;
    
}

interface IUserContextType {

    user: Partial<IUserResponse> | null;
    setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null >>;
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
    signIn: (credentials: ILoginUser) => Promise<{ success: boolean; message?: string }>;
    signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
    getOrders: () => void;
    orders: IOrderResponse[] | [];
    logOut: () => void;
    getUsers: () => void;
    users: IAllUsersResponse[] | [];
    // userById: (id: <IUser, "id">) => void;
}


interface ILoginUser {
    email: string;
    password: string;
}

interface ILoginUserResponse {
    login: boolean;
    user: Partial<IUser> | null;
    token: string; 
}

interface ICreateOrder {
    userId: number;
    products: number[];
  }

interface IOrderResponse {
    id: number;
    status: string;
    date: string;
    user: IUser;
    products: IProduct[]
}
interface IAllUsersResponse {
    users:IUser[];
}

  interface IOrderProps {
    order: IOrderResponse;
  }

interface IProduct {
    id: number;
    name: string;
    price: number
    description: string;
    image: string;
    categoryId: number;
    stock: number;
}

interface IProductListProps {
    products: IProduct[];
}

interface IProductProps {
    product: IProduct
}

interface IProductCardProps {
    product: IProduct,
    remove?: () => void;
}

interface IErrors {
    name?: string;
    birthdate?: string;
    nDni?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }
  
  interface ISignInProps {
    user: IUser;
    errors: IErrors;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleReset: () => void;
  }
  
  interface ICartContextType {
    cartItems: IProduct[];
    addToCart: (product: number) => void;
    removeFromCart: (product: number) => void;
    total: number;
    proceedToCheckout: () => void;

  }

export type {
    IUser,
    ICreateOrder,
    ILoginUser,
    ILoginUserResponse,
    IProduct,
    IRegisterUser,
    IRegisterUserResponse,
    IProductListProps,
    IProductProps,
    ISignInProps,
    IErrors,
    IProductCardProps,
    ICartContextType,
    IUserContextType,
    IOrderProps,
    IUserResponse,
    IOrderResponse,
    IAllUsersResponse



}
  