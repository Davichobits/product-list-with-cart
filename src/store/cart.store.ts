import { create } from 'zustand';
import data from '../../data.json';

import type { Product, CartItem } from '../types/types';

interface Store {
  products: Product[];
  cart: CartItem[];
  addItemToCart: (newItem: CartItem) => void;
  updateItemInCart: (updatedItem: CartItem) => void;
  deleteItemFromCart: (itemToDelete: CartItem) => void;
}

export const useCartStore = create<Store>((set) => ({
  products: data,

  cart: [],

  addItemToCart: (newItem: CartItem) =>
    set((state) => ({ cart: [...state.cart, newItem] })),

  updateItemInCart: (updatedItem: CartItem) =>
    set((state) => ({
      cart: state.cart.map((cartItem) => {
        return cartItem.name === updatedItem.name
          ? { ...updatedItem }
          : cartItem;
      }),
    })),
  
  deleteItemFromCart: (itemToDelete) => set((state)=>({
    cart: state.cart.filter(item=> item.name !== itemToDelete.name)
  })), 
}));
