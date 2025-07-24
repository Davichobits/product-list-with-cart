import { create } from 'zustand';
import data from '../../data.json';

import type { Product, CartItem } from '../types/types';

interface Store {
  showConfirmation: boolean;
  products: Product[];
  cart: CartItem[];
  addItemToCart: (newItem: CartItem) => void;
  updateItemInCart: (updatedItem: CartItem) => void;
  deleteItemFromCart: (name: string) => void;
  toggleShowConfirmation: () => void;
}

export const useCartStore = create<Store>((set) => ({
  showConfirmation: false,
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
  
  deleteItemFromCart: (name) => set((state)=>({
    cart: state.cart.filter(item=> item.name !== name)
  })), 

  toggleShowConfirmation: () => set((state)=>({
    showConfirmation: !state.showConfirmation,
  }))
}));
