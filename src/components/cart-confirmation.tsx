import { CartConfirmItem } from './cart-confirm-item'
import { CartTotal } from './cart-total'
import { CartButton } from './cart-button'
import { useCartStore } from '../store/cart.store'

export const CartConfirmation = () => {

  const {showConfirmation} = useCartStore();

  return (
    <dialog hidden={!showConfirmation} className='bg-black/50 w-full fixed h-screen grid place-content-center'>
      <div className='w-[375px] md:w-[600px] py-10 px-6 bg-white rounded-xl'>
        <img src="/assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" />
        <h2 className='text-[2.5rem] font-bold' >Order Confirmed</h2>
        <p className='text-Rose-500 mb-6'>We hope you enjoy your food!</p>

        <div className='bg-Rose-50'>
          <CartConfirmItem />
          <CartConfirmItem />
          <CartConfirmItem />
          <CartTotal />
        </div>
        <CartButton text="Start New Order" />
      </div>
    </dialog>
  )
}