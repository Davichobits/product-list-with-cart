import { useCartStore } from '../store/cart.store';

interface Props {
  text: string;
}

export const CartButton = ({text}: Props) => {

  const {toggleShowConfirmation} = useCartStore();

  return (
    <button onClick={toggleShowConfirmation} className='bg-Red text-Rose-50 p-4 rounded-full w-full cursor-pointer hover:bg-Red/90 transition-colors'>{text}</button>
  )
}