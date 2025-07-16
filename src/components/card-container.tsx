import { ProductCard } from './product-card';
import data from '../../data.json';
import type { Product } from '../types/types';


export const CardContainer = () => {
  return (
    <section className='flex flex-col gap-6 mb-8'>
      {
        data.map((item: Product) => <ProductCard key={item.name} {...item} /> )
      }
    </section>
  )
}
