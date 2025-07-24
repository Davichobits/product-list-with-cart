import { create } from 'zustand';
import data from '../../data.json';

import type { Product, CartItem } from '../types/types';

interface Store {
  showConfirmation: boolean;
  products: Product[];
  cart: CartItem[];

  clearCart: () => void;
  addItemToCart: (newItem: CartItem) => void;
  updateItemInCart: (updatedItem: CartItem) => void;
  deleteItemFromCart: (name: string) => void;
  toggleShowConfirmation: () => void;

  computed: {
    totalCart: () => number;
  };
}

const dataWithQuantity: Product[] = data.map((product) => ({
  ...product,
  quantity: 0,
}));

export const useCartStore = create<Store>((set, get) => ({
  showConfirmation: false,
  products: dataWithQuantity,

  cart: [],
  clearCart: () =>
    set(() => ({
      cart: [],
    })),

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

  deleteItemFromCart: (name) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.name !== name),
      products: state.products.map((product) =>
        product.name === name ? { ...product, quantity: 0 } : product
      ),
    })),

  toggleShowConfirmation: () =>
    set((state) => ({
      showConfirmation: !state.showConfirmation,
    })),

  computed: {
    totalCart: () =>
      get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
  },
}));
