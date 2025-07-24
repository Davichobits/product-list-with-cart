import { CartConfirmItem } from './cart-confirm-item'
import { CartTotal } from './cart-total'
import { CartButton } from './cart-button'
import { useCartStore } from '../store/cart.store'

export const CartConfirmation = () => {


  const {cart} = useCartStore()

  const {showConfirmation, toggleShowConfirmation} = useCartStore();

   const handleDialogClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Detiene que el clic en el contenido dispare el cierre
  };

  return (
    <dialog onClick={toggleShowConfirmation} hidden={showConfirmation} className='bg-black/50 w-full fixed h-screen grid place-content-center'>
      <div onClick={handleDialogClick} className='w-[375px] md:w-[600px] py-10 px-6 bg-white rounded-xl'>
        <img src="/assets/images/icon-order-confirmed.svg" alt="icon-order-confirmed" />
        <h2 className='text-[2.5rem] font-bold' >Order Confirmed</h2>
        <p className='text-Rose-500 mb-6'>We hope you enjoy your food!</p>

        <div className='bg-Rose-50'>
          {
            cart.map((item)=><CartConfirmItem key={item.name} {...item} />)
          }
          <CartTotal />
        </div>
        <CartButton onClick={toggleShowConfirmation} text="Start New Order" />
      </div>
    </dialog>
  )
}