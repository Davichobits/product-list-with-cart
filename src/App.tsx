import { CardContainer } from './components/card-container';
import { Cart } from './components/cart';

function App() {

  return (
    <main className='flex justify-center'>
      <section className='w-[327px] my-6 md:w-[688px] 2xl:w-[800px]'>
        <h1 className='text-[40px] font-bold mb-[30px]'>Desserts</h1>
        <CardContainer />
        <Cart />
      </section>
    </main>
  )
}

export default App
