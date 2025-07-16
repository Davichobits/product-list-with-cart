import type { CartItem } from '../types/types';

export const ItemCart = ({name, price, quantity}: CartItem) => {
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
        className='border size-[18px] rounded-full p-0.5 border-Rose-400'
        src='../../public/assets/images/icon-remove-item.svg'
        alt=''
      />
    </div>
  );
};
