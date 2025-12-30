import Hero from './Hero';
import ProductsCarousel from './ProductsCourasel';

function Home() {
  return (
    <div className="flex grow flex-col">
      <Hero />
      <section className="page-padding flex flex-col gap-2 py-8 sm:py-4">
        <h2 className="text-xl font-bold">Popular products</h2>
        <ProductsCarousel />
      </section>
      <section className="page-padding flex grow flex-col gap-2 py-8">
        <h2 className="text-xl font-bold">Categories</h2>
        <div className="grid grow grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-2.5 md:grid-cols-[minmax(240px,1fr)_minmax(200px,0.8fr)_minmax(220px,0.9fr)] md:grid-rows-[repeat(2,minmax(180px,1fr))]">
          <div className="h-70 bg-amber-600 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 md:h-auto"></div>
          <div className="h-70 bg-red-800 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:h-auto"></div>
          <div className="h-70 bg-blue-800 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:h-auto"></div>
          <div className="h-70 bg-green-900 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 md:h-auto"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
