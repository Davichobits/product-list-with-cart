import type { CartItem, Product } from '../types/types';
import { useContext, useEffect, useState, useRef } from 'react';
import { CartContext } from '../contexts/cart-context';

export const ProductCard = ({ image, category, name, price }: Product) => {
  const [quantity, setQuantity] = useState(0);
  const {cartItems, setCartItems} = useContext(CartContext);
  const isFirstRender = useRef(true)

  console.log('quantity', quantity);
  
  
  const addOneItem = () => {
    setQuantity(quantity + 1);
  };

  const subtractOneItem = () => {
    setQuantity(quantity - 1);
  };
  let updatedCart: CartItem[] = [...cartItems]
  const currentItem = updatedCart.filter(item => item.name === name);
  
  useEffect(()=>{
    // Not to render the last value
    if(isFirstRender.current) {
        isFirstRender.current = false
        return
      }
  
    // Buscar si el item ya existe
    console.log('current item: ', currentItem)
    if (currentItem.length === 0){  
      console.log('agregar', name)
      updatedCart = [...updatedCart, {
        name: name,
        quantity: quantity,
        price: price
      }]
    } else{
      console.log('editar')

      if(currentItem[0].quantity === 0){
        updatedCart = updatedCart.filter(item => item.name !== name);
      }else{
        updatedCart.map(item => {
          if(item.name === name){
            item.quantity = quantity
          }
        })
      }

      updatedCart = [...updatedCart]
    }
    setCartItems(updatedCart)
  },[quantity])

  return (
    <div className='relative'>
      <picture>
        <source media='(min-width: 1440px)' srcSet={image.desktop} />
        <source media='(min-width: 768px)' srcSet={image.tablet} />
        <img
          className={`rounded-lg mb-[38px] border-2 ${quantity === 0 ? 'border-transparent': ' border-Red' } transition-colors`}
          src={image.mobile}
          alt={name}
        />
      </picture>

      {quantity === 0 ? (
        <button
          onClick={addOneItem}
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
            src='../../public/assets/images/icon-decrement-quantity.svg'
            alt='icon-decrement-quantity'
          />
          <p className='font-semibold text-sm'>{quantity}</p>
          <img
            onClick={addOneItem}
            className='cursor-pointer border border-Rose-50 size-[18px] rounded-full p-1'
            src='../../public/assets/images/icon-increment-quantity.svg'
            alt='icon-decrement-quantity'
          />
        </div>
      )}
      <p className='text-Rose-500 text-sm'>{category}</p>
      <h2 className='font-semibold'>{name}</h2>
      <p className='text-Red font-semibold'>${price}</p>
    </div>
  );
};
