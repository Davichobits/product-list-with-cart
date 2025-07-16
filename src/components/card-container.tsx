import { ProductCard } from './product-card';
import data from '../../data.json';
import type { Product } from '../types/types';


export const CardContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-[327px] md:w-[688px] desktop:w-[800px]'>
      {
        data.map((item: Product) => <ProductCard key={item.name} {...item} /> )
      }
    </section>
  )
}
