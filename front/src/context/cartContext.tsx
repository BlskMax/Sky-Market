'use client'
import { createContext, useState, useEffect } from "react"
import { IProduct, ICartContextType } from "@/interfaces"
import {useRouter, usePathname} from "next/navigation";

import { fetchProductById } from "@/app/detail/[id]/page"

const addItem = async ( 
    cartItems: IProduct[],
    product: number
): Promise<IProduct[]> => {
    const existingProduct = cartItems.find((item:IProduct) =>
        item.id === product);

    if (existingProduct) {
        return [...cartItems, existingProduct];
    }

    const data = await fetchProductById(product.toString());

    return [...cartItems, data];
};


const removeItem = (cartItems: IProduct[], product: number) => {
    return cartItems.filter((item) => item.id !== product);
};

export const CartContext = createContext<ICartContextType>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    total: 0,
    proceedToCheckout: () => {},
});

export const checkout = async (cartItems: IProduct[]) => {
    try {
        const products = cartItems.map((item) => item.id);
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                Authorization: `${token}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify({products}),
        });

        if (response.ok) {
            console.log("success");
        } else {
            console.log("error");
        }
    } catch (error) {
        console.log("error")
    }
};

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cartItems, setCartItems] = useState<IProduct[]>([]);
    const [total, setTotal] = useState(0);

    const addToCart = async (product: number) => {
        const updatedCart = await addItem(cartItems, product);
        setCartItems(updatedCart);
    };

    const removeFromCart = (product: number) => {
        setCartItems(removeItem(cartItems, product));
    };
    const proceedToCheckout = () => {
        checkout(cartItems);
        setCartItems([]);
        alert("Compra realizada con exito!");
        router.push("/userOrders");
    };

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotal(total);
    }, [cartItems]);

    const router = useRouter();

    return (
        <CartContext.Provider value = {{cartItems, addToCart,
            removeFromCart, total, proceedToCheckout}}>
                {children}
            </CartContext.Provider>
    );
};