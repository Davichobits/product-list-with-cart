import { ProductCard } from './product-card';
import data from '../../data.json';
import type { Product } from '../types/types';
import { CartContext } from '../contexts/cart-context';
import { useContext, useEffect } from 'react';

const dataWithQuantity: Product[] = data.map(item=> ({
  ...item,
  itemQuantity: 0
}));


export const CardContainer = () => {

  const {cartItems, setCartItems} = useContext(CartContext);

  useEffect(()=>{
    setCartItems(dataWithQuantity)
  })

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-[327px] md:w-[688px] desktop:w-[800px]'>
      {
        cartItems.map((item: Product) =>  <ProductCard key={item.name} {...item}  /> )
      }
    </section>
  )
}
