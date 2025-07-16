import { useContext } from 'react';
import type { CartItem } from '../types/types';
import { CartContext } from '../contexts/cart-context';

export const ItemCart = ({name, price, quantity}: CartItem) => {

  const {cartItems, setCartItems} = useContext(CartContext);

  const handleDelete = () => {
    const updatedItems = cartItems.filter(item => item.name !== name)
    setCartItems(updatedItems);
  }


  return (
    <div className='flex justify-between items-center border border-transparent border-b-Rose-300 text-sm py-4'>
      <div>
        <h3 className='text-Rose-900 font-semibold mb-2'>{name}</h3>
        <div className='flex gap-2'>
          <p className='text-Red font-semibold'>{quantity}x</p>
          <p className='text-Rose-500'>@${price}</p>
          <p className='font-semibold text-Rose-500'>${quantity * price}</p>
        </div>
      </div>
      <img
      onClick={handleDelete}
        className='border size-[18px] rounded-full p-0.5 border-Rose-400 cursor-pointer'
        src='../../public/assets/images/icon-remove-item.svg'
        alt=''
      />
    </div>
  );
};
