import { createContext } from 'react';
import type { Product } from '../types/types';

interface CartContext {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const CartContext = createContext<CartContext>({
  cartItems: [],
  setCartItems: ()=>{}
});
