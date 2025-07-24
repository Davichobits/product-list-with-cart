import type { Product } from '../types/types';
import { useCartStore } from '../store/cart.store';
// import { useState } from 'react';

export const ProductCard = ({ image, category, name, price}: Product) => {

  const { addItemToCart, updateItemInCart, deleteItemFromCart, cart } = useCartStore()

  let productQuantity: number = 0;

  const currentCart = cart.filter(cartItem => cartItem.name === name);

  if(currentCart.length > 0){
    productQuantity = currentCart[0].quantity;
  }

  // const [productQuantity, setProductQuantity] = useState(0)


  const addProduct = () =>{

    const newQuantity = productQuantity + 1

    // setProductQuantity(productQuantity + 1);
    addItemToCart({
      image, name, price, quantity: newQuantity
    })
  }
  
  const addOneItem = () => {
    const newQuantity = productQuantity + 1
    // setProductQuantity(newQuantity);
    updateItemInCart({
      image, name, price, quantity: newQuantity
    })
  };

  const subtractOneItem = () => {
    const newQuantity = productQuantity - 1
    // setProductQuantity(newQuantity);

    if(newQuantity > 0) {
      updateItemInCart({
        image, name, price, quantity: newQuantity
      })
    } else {
      deleteItemFromCart(name)
    }

  };

  return (
    <div className='relative'>
      <picture>
        <source media='(min-width: 1440px)' srcSet={image.desktop} />
        <source media='(min-width: 768px)' srcSet={image.tablet} />
        <img
          className={`rounded-lg mb-[38px] border-2 ${productQuantity === 0 ? 'border-transparent': ' border-Red' } transition-colors`}
          src={image.mobile}
          alt={name}
        />
      </picture>

      {productQuantity === 0 ? (
        <button
          onClick={addProduct}
          className='border border-Red w-40 rounded-full bg-Rose-50 p-3 flex justify-center gap-2 absolute inset-x-0 top-[190px] desktop:top-[210px] mx-auto cursor-pointer'
        >
          <img src='/assets/images/icon-add-to-cart.svg' alt='' />
          <span className='text-sm'>Add to Cart</span>
        </button>
      ) : (
        <div className='bg-Red text-Rose-50 flex justify-between items-center w-40 rounded-full p-3 absolute inset-x-0 top-[190px] desktop:top-[210px] mx-auto'>
          <img
            onClick={subtractOneItem}
            className='cursor-pointer border border-Rose-50 size-[18px] rounded-full p-1'
            src='/assets/images/icon-decrement-quantity.svg'
            alt='icon-decrement-quantity'
          />
          <p className='font-semibold text-sm'>{productQuantity}</p>
          <img
            onClick={addOneItem}
            className='cursor-pointer border border-Rose-50 size-[18px] rounded-full p-1'
            src='/assets/images/icon-increment-quantity.svg'
            alt='icon-decrement-quantity'
          />
        </div>
      )}
      <p className='text-Rose-500 text-sm'>{category}</p>
      <h2 className='font-semibold'>{name}</h2>
      <p className='text-Red font-semibold'>${price.toFixed(2)}</p>
    </div>
  );
};
