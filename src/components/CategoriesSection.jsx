import CategoryItem from './CategoryItem';
import mensFashion from '../assets/images/mensFashion.jpg';
import womensFashion from '../assets/images/womens.jpg';
import jewelry from '../assets/images/jewelry.jpg';
import electronics from '../assets/images/electronics.jpg';

function CategoriesSection({ showSkeleton }) {
  const bgImage = (src) =>
    `linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.6) 100%), url(${src})`;
  const categoryStyle =
    'bg-center bg-cover text-xl font-bold text-base-100 group relative before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.3)_0%,transparent_40%,transparent_60%,rgba(0,0,0,0.3)_100%)] before:opacity-0 before:transition-opacity ease-in duration-100 hover:before:opacity-100 hover:cursor-pointer hover:scale-[1.01] active:scale-[1] transition-transform ease-in duration-100';

  return (
    <section className="page-padding flex grow flex-col gap-2">
      <h2 id="categories" className="text-xl font-bold">
        Categories
      </h2>

      <div className="grid grow grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-2.5 md:grid-cols-[minmax(240px,1fr)_minmax(200px,0.8fr)_minmax(220px,0.9fr)] md:grid-rows-[repeat(2,minmax(180px,1fr))]">
        <CategoryItem
          showSkeleton={showSkeleton}
          image={mensFashion}
          label="Men's Clothing"
          className="h-70 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 md:h-auto"
          categoryStyle={categoryStyle}
          bgImage={bgImage}
        />

        <CategoryItem
          showSkeleton={showSkeleton}
          image={jewelry}
          label="Jewelry"
          className="h-70 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:h-auto"
          categoryStyle={categoryStyle}
          bgImage={bgImage}
        />

        <CategoryItem
          showSkeleton={showSkeleton}
          image={electronics}
          label="Electronics"
          className="h-70 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:h-auto"
          categoryStyle={categoryStyle}
          bgImage={bgImage}
        />

        <CategoryItem
          showSkeleton={showSkeleton}
          image={womensFashion}
          label="Womens Clothing"
          className="h-70 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 md:h-auto"
          categoryStyle={categoryStyle}
          bgImage={bgImage}
        />
      </div>
    </section>
  );
}

export default CategoriesSection;
