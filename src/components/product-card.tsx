import type { Product } from '../types/types';

export const ProductCard = ({image, category, name, price}: Product) => {
  return (
    <div className='relative'>

      <picture>
        <source media="(min-width: 1024px)" srcSet={image.desktop} />
        <source media="(min-width: 768px)" srcSet={image.tablet} />
        <img className='rounded-lg mb-[38px] border-2 border-Red' src={image.mobile} alt={name} />
      </picture>

      {/* <button className='border border-Red w-40 rounded-full bg-Rose-50 p-3 flex justify-center gap-2 absolute inset-x-0 top-[190px] mx-auto cursor-pointer'>
        <img src='/assets/images/icon-add-to-cart.svg' alt='' />
        <span className='text-sm'>Add to Cart</span>
      </button> */}
      <div className='bg-Red text-Rose-50 flex justify-between items-center w-40 rounded-full p-3 absolute inset-x-0 top-[190px] mx-auto'>
        <img className='cursor-pointer border border-Rose-50 size-[18px] rounded-full p-1' src="../../public/assets/images/icon-decrement-quantity.svg" alt="icon-decrement-quantity" />
        <p className='font-semibold text-sm'>4</p>
        <img className='cursor-pointer border border-Rose-50 size-[18px] rounded-full p-1' src="../../public/assets/images/icon-increment-quantity.svg" alt="icon-decrement-quantity" />
      </div>
      <p className='text-Rose-500 text-sm'>{category}</p>
      <h2 className='font-semibold'>{name}</h2>
      <p className='text-Red font-semibold'>${price}</p>
    </div>
  );
};
