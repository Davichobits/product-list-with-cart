import { create } from 'zustand';
import data from '../../data.json'

import type { Product } from '../types/types';

interface Store {
  products: Product[];
  updateProducts: (newProducts: Product[]) => void;
}

const dataWithQuantity: Product[] = data.map(item=> ({
  ...item,
  itemQuantity: 0
}));

export const useCartStore = create<Store>((set)=>({
  products: dataWithQuantity,
  updateProducts: (newProducts: Product[]) => set(()=>({products:newProducts}))
}))