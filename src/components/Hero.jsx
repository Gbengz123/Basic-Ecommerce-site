import React from 'react';
import { Link } from 'react-router';
import jacket from '../assets/images/jacket.jpg';
import bracelet from '../assets/images/bracelet.jpg';
import womenJacket from '../assets/images/womenJacket.jpg';
import { Skeleton } from './ui/skeleton';

function Hero({ showSkeleton }) {
  const cardStyle =
    'bg-cover bg-center shadow-2xl hover:-translate-y-[10px] transition-transform ease-in duration-200 hover:cursor-pointer';
  return (
    <>
      {!showSkeleton ? (
        <section className="page-padding flex flex-col items-center gap-4 py-8 sm:flex-row sm:gap-0">
          <div className="z-20 flex flex-col items-center gap-4 sm:items-start sm:gap-2">
            <h1 className="w-[80%] text-center text-5xl font-bold sm:w-full sm:text-left">
              Quality products, delivered fast
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need, in one place.
            </p>
            <Link
              to={'/shop'}
              className="d-btn bg-neutral text-neutral-content w-32 rounded-lg"
            >
              Shop now
            </Link>
          </div>
          <div
            data-testid="card display"
            className="xs:grid-cols-[repeat(7,calc(180px/4))] xs:grid-rows-[190px] xs:mt-4 mt-4 grid grow grid-cols-[repeat(7,calc(140px/4))] grid-rows-[150px] justify-center sm:mt-0 sm:mr-11 md:grid-cols-[repeat(7,calc(200px/4))] md:grid-rows-[210px]"
          >
            <div
              style={{
                backgroundImage: `url(${womenJacket})`,
              }}
              className={`col-start-1 col-end-4 row-start-1 origin-bottom -rotate-10 skew-x-3 rounded-lg ${cardStyle}`}
            ></div>
            <div
              style={{
                backgroundImage: `url(${bracelet})`,
              }}
              className={`z-10 col-start-3 col-end-6 row-start-1 rounded-lg ${cardStyle}`}
            ></div>
            <div
              style={{
                backgroundImage: `url(${jacket})`,
              }}
              className={`col-start-5 col-end-8 row-start-1 origin-bottom rotate-10 -skew-x-3 rounded-lg border ${cardStyle}`}
            ></div>
          </div>
        </section>
      ) : (
        <div className="page-padding h-80 w-full">
          <Skeleton className="page-padding mt-4 h-full w-full" />
        </div>
      )}
    </>
  );
}

export default Hero;
