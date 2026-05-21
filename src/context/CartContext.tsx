import { createContext } from "react";
import type { CartItem, Product } from "../types";

interface cartContextType {
    items : CartItem[];
    addToCart:(Product:Product,quantity?: number)=> void;
    removeFromCart: (ProductId: string)=> void;
    updateQuantity: (ProductId: string, quantity: number)=>void;
    clearCart:()=>void;
    cartCount: number;
    cartTotal: number;
    isCartOpen:(open:boolean)=>void;

}


const cartContext = createContext(undefined)

export function cartProvider({}){
    
}