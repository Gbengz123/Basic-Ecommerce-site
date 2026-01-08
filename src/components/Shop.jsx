import { useOutletContext } from 'react-router';
import spearateCategories from '../utils/separateCategories';
import ShopCategorySection from './ShopCategorySection';

function Shop() {
  const [error, loading, shopData] = useOutletContext();

  const showSkeleton = loading || error;

  const { womensClothing, mensClothing, jewelery, electronics } =
    spearateCategories(shopData);

  return (
    <div className="page-padding flex min-w-[320px] flex-col gap-8">
      <h1 className="mt-3 text-center text-xl font-bold">Shop</h1>
      <ShopCategorySection
        name={"Men's clothing"}
        products={mensClothing}
        showSkeleton={showSkeleton}
      />
      <ShopCategorySection
        name={"Women's clothing"}
        products={womensClothing}
        showSkeleton={showSkeleton}
      />
      <ShopCategorySection
        name={'Electronics'}
        products={electronics}
        showSkeleton={showSkeleton}
      />
      <ShopCategorySection
        name={'jewelery'}
        products={jewelery}
        showSkeleton={showSkeleton}
      />
    </div>
  );
}

export default Shop;
