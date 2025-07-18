import { ProductCard } from './product-card';
import { useCartStore } from '../store/cart.store';
import type { Product } from '../types/types';

export const CardContainer = () => {

  const {products } = useCartStore()

  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-[327px] md:w-[688px] desktop:w-[800px]'>
      {
        products.map((item: Product) =>  <ProductCard key={item.name} {...item}  /> )
      }
    </section>
  )
}
