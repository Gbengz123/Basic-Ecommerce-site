import React from 'react';
import { Link } from 'react-router';

function Hero() {
  return (
    <section className="page-padding flex flex-col items-center py-8 sm:flex-row">
      <div className="z-20 flex flex-col gap-2">
        <h1 className="text-5xl font-bold">Quality products, delivered fast</h1>
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
      <div className="xs:grid-cols-[repeat(7,calc(180px/4))] xs:grid-rows-[190px] xs:mt-4 mt-4 grid grow grid-cols-[repeat(7,calc(140px/4))] grid-rows-[150px] justify-center sm:mt-0 sm:mr-11 md:grid-cols-[repeat(7,calc(200px/4))] md:grid-rows-[210px]">
        <div className="col-start-1 col-end-4 row-start-1 origin-bottom -rotate-10 skew-x-3 rounded-lg border bg-blue-800"></div>
        <div className="z-10 col-start-3 col-end-6 row-start-1 rounded-lg border bg-black"></div>
        <div className="left-70 col-start-5 col-end-8 row-start-1 origin-bottom rotate-10 -skew-x-3 rounded-lg border"></div>
      </div>
    </section>
  );
}

export default Hero;
