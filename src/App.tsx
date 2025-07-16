import { useState } from 'react';
import type { CartItem } from './types/types.ts';

import { CardContainer } from './components/card-container';
import { Cart } from './components/cart';
import { CartContext } from './contexts/cart-context.ts';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  console.log('APP: ', cartItems)

  return (
    <CartContext value={{ cartItems, setCartItems }}>
      <main className='flex justify-center'>
        <section className='my-6'>
          <h1 className='text-[40px] font-bold mb-[30px]'>Desserts</h1>
          <div className='desktop:flex desktop:gap-8 desktop:items-start'>
            <CardContainer />
            <Cart />
          </div>
        </section>
      </main>
    </CartContext>
  );
}

export default App;
