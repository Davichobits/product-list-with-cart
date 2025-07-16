import { ItemCart } from './item-cart'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart-context'
import type { CartItem } from '../types/types'

export const Cart = () => {

  const {cartItems} = useContext(CartContext);

  const total = cartItems.reduce((sum:number, item: CartItem) => sum + (item.price * item.quantity), 0 )

  return (
    <div className='bg-Rose-50 rounded-xl p-6'>
      <h2 className='text-2xl text-Red font-bold mb-6'>Your Cart ({cartItems.length})</h2>

        {
          cartItems.map(item => <ItemCart key={item.name} {...item} />)
        }

      <div className='my-6 flex justify-between items-center'>
        <p className='text-sm'>Order Total</p>
        <p className='text-2xl font-bold'>${total}</p>
      </div>
      <div className='bg-Rose-100 rounded-lg flex justify-center gap-1 p-4 mb-6'>
        <img src="/assets/images/icon-carbon-neutral.svg" alt="icon-carbon-neutral" />
        <p className='text-sm'>This is a <span className='font-bold'>carbon-neutral</span> delivery</p>
      </div>
      <button className='bg-Red text-Rose-50 p-4 rounded-full w-full'>
        Confirm Order
      </button>
    </div>
  )
}
