import { useCartStore } from '../store/cart.store';

export const CartTotal = () => {

  const {computed} = useCartStore()

  return (
    <div className='flex justify-between items-center my-6 p-4'>
      <p className='text-sm'>Order Total</p>
      <p className='text-2xl font-bold'>${computed.totalCart().toFixed(2)}</p>
    </div>
  );
};