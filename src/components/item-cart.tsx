import type { Product } from '../types/types';
import { useCartStore } from '../store/cart.store';

export const ItemCart = ({name, price, itemQuantity}: Product) => {

  const {products, updateProducts } = useCartStore()

  const handleDelete = () => {
    const updatedItems = products.map(item => {
      if(item.name === name){
        item.itemQuantity = 0;
      }
      return item
    })
    updateProducts(updatedItems);
  }


  return (
    <div className='flex justify-between items-center border border-transparent border-b-Rose-300 text-sm py-4'>
      <div>
        <h3 className='text-Rose-900 font-semibold mb-2'>{name}</h3>
        <div className='flex gap-2'>
          <p className='text-Red font-semibold'>{itemQuantity}x</p>
          <p className='text-Rose-500'>@${price}</p>
          <p className='font-semibold text-Rose-500'>${itemQuantity * price}</p>
        </div>
      </div>
      <img
      onClick={handleDelete}
        className='border size-[18px] rounded-full p-0.5 border-Rose-400 cursor-pointer'
        src='/assets/images/icon-remove-item.svg'
        alt=''
      />
    </div>
  );
};
