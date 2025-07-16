import { createContext } from 'react';
import type { CartItem } from '../types/types';

interface CartContext {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export const CartContext = createContext<CartContext>({
  cartItems: [],
  setCartItems: ()=>{}
});
