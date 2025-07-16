import { useState } from 'react';
import type { CartItem } from './types/types.ts';

import { CardContainer } from './components/card-container';
import { Cart } from './components/cart';
import { CartContext } from './contexts/cart-context.ts'

function App() {

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return (
    <CartContext value={{cartItems, setCartItems}}>
      <main className='flex justify-center'>
        <section className='w-[327px] my-6 md:w-[688px] 2xl:w-[800px]'>
          <h1 className='text-[40px] font-bold mb-[30px]'>Desserts</h1>
          <CardContainer />
          <Cart />
        </section>
      </main>
    </CartContext>
  )
}

export default App
