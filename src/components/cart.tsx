import { ItemCart } from './item-cart';
import { useCartStore } from '../store/cart.store';
import { CartButton } from './cart-button';

export const Cart = () => {
  const { cart, toggleShowConfirmation, computed } = useCartStore();

  return (
    <div className='bg-Rose-50 rounded-xl p-6'>
      <h2 className='text-2xl text-Red font-bold mb-6'>
        Your Cart ({cart.length})
      </h2>

      {cart.map((item) => {
        return <ItemCart key={item.name} {...item} />;
      })}

      <div className='my-6 flex justify-between items-center'>
        <p className='text-sm'>Order Total</p>
        <p className='text-2xl font-bold'>${computed.totalCart()}</p>
      </div>
      <div className='bg-Rose-100 rounded-lg flex justify-center gap-1 p-4 mb-6'>
        <img
          src='/assets/images/icon-carbon-neutral.svg'
          alt='icon-carbon-neutral'
        />
        <p className='text-sm'>
          This is a <span className='font-bold'>carbon-neutral</span> delivery
        </p>
      </div>
        <CartButton text="Confirm Order" onClick={toggleShowConfirmation} />
    </div>
  );
};
