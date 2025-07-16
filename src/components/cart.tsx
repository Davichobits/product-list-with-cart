import { ItemCart } from './item-cart'

export const Cart = () => {
  return (
    <div className='bg-Rose-50 rounded-xl p-6'>
      <h2 className='text-2xl text-Red font-bold mb-6'>Your Cart (7)</h2>
      <ItemCart />
      <ItemCart />
      <ItemCart />
      <div className='my-6 flex justify-between items-center'>
        <p className='text-sm'>Order Total</p>
        <p className='text-2xl font-bold'>$46.50</p>
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
