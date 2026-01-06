import Hero from './Hero';
import { useOutletContext } from 'react-router';
import CategoriesSection from './CategoriesSection';
import ProductsSection from './ProductsSection';

function Home() {
  const [error, loading] = useOutletContext();

  const showSkeleton = loading || error;

  return (
    <div className="flex grow flex-col gap-8">
      <Hero showSkeleton={showSkeleton} />
      <ProductsSection showSkeleton={showSkeleton} />
      <CategoriesSection showSkeleton={showSkeleton} />
    </div>
  );
}

export default Home;
